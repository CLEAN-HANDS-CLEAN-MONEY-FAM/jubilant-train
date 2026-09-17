import { useState } from "react"

export default function CleanHandsPrototype() {
  const [balance, setBalance] = useState(2500)
  const [loanAmount, setLoanAmount] = useState(500)
  const [message, setMessage] = useState("")

  const applyLoan = () => {
    setMessage(`Loan application submitted for $${loanAmount}. Community review pending.`)
  }

  const depositFunds = () => {
    setBalance(balance + 100)
    setMessage("$100 community deposit added successfully.")
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="border border-emerald-500/30 rounded-3xl p-8 bg-gradient-to-br from-gray-900 to-black shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bold mb-4 tracking-tight">
                Clean Hands Clean Money FAM
              </h1>
              <p className="text-xl text-emerald-300 mb-4">
                Indigenous-Led Ethical Financial Infrastructure Prototype
              </p>
              <p className="text-gray-300 max-w-3xl leading-relaxed">
                A prototype platform demonstrating ethical banking concepts,
                community-centered finance, entrepreneurship support, and Indigenous-led
                economic development systems envisioned by Morley Moses Apooch.
              </p>
            </div>

            <div className="bg-black border border-emerald-500/20 rounded-3xl p-6 w-full md:w-80">
              <p className="text-gray-400 text-sm">Community Wallet</p>
              <h2 className="text-5xl font-bold mt-2">${balance}</h2>
              <button
                onClick={depositFunds}
                className="mt-6 w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-3 rounded-2xl transition"
              >
                Deposit $100
              </button>
            </div>
          </div>
        </header>

        <section className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-900/70 rounded-2xl p-5 border border-gray-800">
            <h2 className="font-semibold text-xl mb-2">Clean Hands</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ethical leadership, transparent governance, accountability,
              and anti-corruption principles.
            </p>
          </div>

          <div className="bg-gray-900/70 rounded-2xl p-5 border border-gray-800">
            <h2 className="font-semibold text-xl mb-2">Clean Money</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Community-first investment models and responsible financial systems.
            </p>
          </div>

          <div className="bg-gray-900/70 rounded-2xl p-5 border border-gray-800">
            <h2 className="font-semibold text-xl mb-2">FAM</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building generational wealth, opportunity, and financial inclusion.
            </p>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800">
            <h2 className="text-3xl font-bold mb-6">Loan Application Prototype</h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Requested Amount</label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full mt-2 bg-black border border-gray-700 rounded-2xl p-4 text-white"
                />
              </div>

              <button
                onClick={applyLoan}
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-2xl transition"
              >
                Submit Application
              </button>

              {message && (
                <div className="bg-black border border-emerald-500/20 rounded-2xl p-4 text-emerald-300">
                  {message}
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800">
            <h2 className="text-3xl font-bold mb-6">Prototype Dashboard</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black rounded-2xl p-5 border border-emerald-500/20">
                <p className="text-gray-400 text-sm">Community Accounts</p>
                <h3 className="text-3xl font-bold mt-2">1,250</h3>
              </div>

              <div className="bg-black rounded-2xl p-5 border border-emerald-500/20">
                <p className="text-gray-400 text-sm">Small Business Loans</p>
                <h3 className="text-3xl font-bold mt-2">$2.4M</h3>
              </div>

              <div className="bg-black rounded-2xl p-5 border border-emerald-500/20">
                <p className="text-gray-400 text-sm">Communities Served</p>
                <h3 className="text-3xl font-bold mt-2">18</h3>
              </div>

              <div className="bg-black rounded-2xl p-5 border border-emerald-500/20">
                <p className="text-gray-400 text-sm">Projected Growth</p>
                <h3 className="text-3xl font-bold mt-2">+24%</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Cybersecurity & Infrastructure</h2>
            <ul className="space-y-3 text-gray-300 leading-relaxed">
              <li>• Prototype anomaly detection concepts</li>
              <li>• DDoS-resistant architecture planning</li>
              <li>• Ethical banking infrastructure model</li>
              <li>• Community-protected digital systems</li>
              <li>• Long-term Indigenous fintech development</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Founder & Protection</h2>

            <div className="space-y-3 text-gray-300">
              <p>
                Morley Moses Apooch<br />
                Founder & Originator<br />
                Yorkton, Saskatchewan, Canada
              </p>

              <div className="bg-black rounded-2xl p-5 border border-emerald-500/20 text-sm leading-relaxed text-gray-400">
                Copyright © 2026 Morley Moses Apooch. All Rights Reserved.<br /><br />

                Protected internationally under the Berne Convention for the Protection
                of Literary and Artistic Works.<br /><br />

                Digitally Signed by Morley Moses Apooch.<br /><br />

                Contact: apoochmorley@protonmail.com
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
