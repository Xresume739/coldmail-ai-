import { EmailGenerator } from "@/components/EmailGenerator";
import { Zap, Target, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a]">
      {/* Navigation (Minimal) */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">ColdMail AI</span>
              <div className="w-8 h-8 rounded-lg bg-zinc-950 dark:bg-zinc-50 flex items-center justify-center">
                <Target className="w-5 h-5 text-white dark:text-zinc-950" />
              </div>
              <span className="font-semibold tracking-tight text-lg text-zinc-900 dark:text-white">
                ColdMail AI
              </span>
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1 isolate">
        {/* Background gradient effect for a slightly modern touch without clutter */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl mb-6">
              Write Cold Emails That <span className="text-zinc-500 dark:text-zinc-400">Get Replies</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-10">
              AI-powered personalized outreach in seconds. Ditch the generic templates and start building real relationships today.
            </p>
            <div className="mb-16">
              <a
                href="#generator"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 transition-all"
              >
                Start Generating <Sparkles className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Core Dashboard Feature Component */}
            <div id="generator" className="w-full scroll-mt-24">
              <EmailGenerator />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 sm:py-32 border-t border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-black/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="flex flex-col text-center items-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800">
                    <Target className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-zinc-900 dark:text-white font-sans tracking-tight">
                    Personalized Outreach
                  </h3>
                  <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400 max-w-xs mx-auto">
                    Generate unique messages tailored directly to your prospect's role and company for maximum impact.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col text-center items-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800">
                    <Zap className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-zinc-900 dark:text-white font-sans tracking-tight">
                    Lightning Fast
                  </h3>
                  <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400 max-w-xs mx-auto">
                    Stop staring at a blank screen. Get ready-to-send emails in seconds, straight from your thoughts.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col text-center items-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800">
                    <Sparkles className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-zinc-900 dark:text-white font-sans tracking-tight">
                    Simple Interface
                  </h3>
                  <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400 max-w-xs mx-auto">
                    No cluttered dashboards or complex tone settings. Just tell us who and why, and we do the rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm leading-5 text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} ColdMail AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
