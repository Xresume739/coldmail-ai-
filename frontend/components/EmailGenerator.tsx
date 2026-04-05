"use client";

import { useState } from "react";
import { Loader2, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmailGenerator() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    goal: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);
    setCopied(false);

    try {
      const res = await fetch("http://localhost:8000/generate-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(errorData || "Failed to generate email. Please try again.");
      }

      const data = await res.json();
      const emailContent = data.email || data.result || data.message || "";
      setResponse(emailContent);
    } catch (err: any) {
      if (err.message === "Failed to fetch") {
        setError("Cannot connect to the backend. Make sure the server is running on http://localhost:8000");
      } else {
        setError(err.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (response) {
      navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Target Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="e.g. Jane Doe"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Target Company</label>
              <input
                id="company"
                name="company"
                type="text"
                required
                placeholder="e.g. Acme Corp"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Target Role</label>
            <input
              id="role"
              name="role"
              type="text"
              required
              placeholder="e.g. VP of Marketing"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-sm"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="goal" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Goal / Value Proposition</label>
            <textarea
              id="goal"
              name="goal"
              required
              rows={3}
              placeholder="What do you want to achieve or offer?"
              value={formData.goal}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 py-3 px-4 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 dark:focus:ring-offset-zinc-900"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Email"
            )}
          </button>
        </form>
      </div>

      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/50 rounded-xl text-sm text-center">
          {error}
        </div>
      )}

      {response && !error && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Generated Email</h3>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 py-1.5 px-3 rounded-md"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>
          <div className="whitespace-pre-wrap text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed p-4 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-100 dark:border-zinc-800/50">
            {response}
          </div>
        </div>
      )}
    </div>
  );
}
