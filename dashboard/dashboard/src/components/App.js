import React from "react";

const apps = [
  {
    name: "Console",
    description: "Account insights, statements, and tax-ready reports.",
    cta: "Launch",
  },
  {
    name: "Coin",
    description: "Direct mutual funds with zero commissions.",
    cta: "Invest",
  },
  {
    name: "Varsity",
    description: "Markets and trading education in bite-sized modules.",
    cta: "Start learning",
  },
  {
    name: "Streak",
    description: "Backtest, deploy, and manage strategies in minutes.",
    cta: "Try now",
  },
];

const App = () => {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-lg font-semibold text-slate-800">Apps & tools</h1>
        <p className="mt-1 text-sm text-slate-500">
          Extend your trading stack with Zerodha-built platforms and partner tools.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {apps.map((app) => (
          <article
            key={app.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-base font-semibold text-slate-800">{app.name}</h2>
            <p className="mt-2 text-sm text-slate-500">{app.description}</p>
            <button className="mt-4 rounded-md border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50">
              {app.cta}
            </button>
          </article>
        ))}
      </section>
    </div>
  );
};

export default App;
