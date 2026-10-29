import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex flex-col items-center gap-6 px-6 text-center">
      <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
        Welcome
      </span>
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
        Hello,{' '}
        <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-sky-300">
          World!
        </span>
      </h1>
      <p className="max-w-md text-lg text-slate-600 dark:text-slate-400">
        Your brand-new app is up and running. From here, anything is possible.
      </p>
    </main>
  );
}
