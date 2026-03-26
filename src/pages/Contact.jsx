import React from 'react'
import { Navigation } from '../components/Navigation'

function Contact({ setCurrentPage }) {
  return (
    <>
      <Navigation currentPage="contact" setCurrentPage={setCurrentPage} />
      <div className="flex min-h-screen pt-20">
        <main className="flex-1 bg-surface min-w-0">
          <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12">
            <section className="mb-16 bg-surface-container-low rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    alt="Operator Avatar"
                    className="w-20 h-20 rounded-full object-cover grayscale brightness-75 border-2 border-primary/20"
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  />
                  <span className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-4 border-surface-container-low rounded-full"></span>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest text-outline uppercase mb-1">Current Operator Profile</div>
                  <h2 className="text-2xl font-bold text-primary">Chief Marshal Elias Thorne</h2>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs bg-surface-container-high px-3 py-1 rounded-full text-on-surface-variant font-medium">Status: ACTIVE / ON-DUTY</span>
                    <span className="text-xs bg-surface-container-high px-3 py-1 rounded-full text-on-surface-variant font-medium">Clearance: LEVEL 5</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex gap-3">
                <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm tracking-tight active:scale-95 transition-all">
                  View Full Dossier
                </button>
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-12">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">Support & Inquiries</h1>
                  <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
                    Secure communication channel for technical assistance and strategic partnership queries.
                  </p>
                </div>

                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest uppercase text-outline">Full Name</label>
                      <input
                        type="text"
                        placeholder="Elias Thorne"
                        className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-on-surface placeholder:text-outline/30 outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest uppercase text-outline">Operation ID</label>
                      <input
                        type="text"
                        placeholder="AEGIS-992-DELTA"
                        className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-on-surface placeholder:text-outline/30 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-outline">Inquiry Category</label>
                    <select className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-on-surface appearance-none outline-none">
                      <option>Technical Support</option>
                      <option>Sales Inquiries</option>
                      <option>API Access Integration</option>
                      <option>Security Audit Request</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-outline">Transmission Details</label>
                    <textarea
                      rows="4"
                      placeholder="Describe the threat or requirement in detail..."
                      className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-on-surface placeholder:text-outline/30 resize-none outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-black uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all active:scale-[0.98]"
                  >
                    Initiate Protocol
                  </button>
                </form>

                <div className="pt-12">
                  <h3 className="text-xl font-bold text-primary mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <details className="group bg-surface-container-low rounded-xl overflow-hidden" open>
                      <summary className="list-none flex justify-between items-center p-6 cursor-pointer hover:bg-surface-container transition-colors">
                        <span className="font-bold text-sm tracking-tight text-on-surface">How do I reset my hardware authentication key?</span>
                        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="p-6 pt-0 text-on-surface-variant text-sm leading-relaxed">
                        Please contact your site administrator to initiate a hardware reset. You will need to provide physical proof of identity and your unique Operator ID.
                      </div>
                    </details>
                    <details className="group bg-surface-container-low rounded-xl overflow-hidden">
                      <summary className="list-none flex justify-between items-center p-6 cursor-pointer hover:bg-surface-container transition-colors">
                        <span className="font-bold text-sm tracking-tight text-on-surface">Is data transmission end-to-end encrypted?</span>
                        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="p-6 pt-0 text-on-surface-variant text-sm leading-relaxed">
                        All telemetry and manifest data are encrypted using military-grade AES-256 protocols both at rest and in transit.
                      </div>
                    </details>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-10">
                <div className="bg-surface-container rounded-xl p-8 space-y-8">
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-outline uppercase mb-6">Direct Support</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">support_agent</span>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-primary uppercase">Dedicated Operator Helpline</div>
                          <div className="text-on-surface-variant text-lg font-medium">+1 (800) AEGIS-SEC</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">alternate_email</span>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-primary uppercase">Encrypted Email Support</div>
                          <div className="text-on-surface-variant text-lg font-medium">support@aegisscan.io</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="border-outline-variant/20" />
                  <div>
                    <h3 className="text-xs font-bold tracking-widest text-outline uppercase mb-6">HQ Operations</h3>
                    <div className="space-y-6">
                      <div className="relative w-full h-40 rounded-xl overflow-hidden bg-surface-container-highest mb-4 grayscale">
                        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
                        <img
                          className="w-full h-full object-cover opacity-40"
                          src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt="HQ Location"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary">Global Tactical Hub</div>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                          72 Maritime Towers, Level 88<br />
                          Marina Bay District, Singapore 018983
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold tracking-widest text-outline uppercase">Network Health</h3>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">Nominal</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-on-surface-variant">Cloud Processing</span>
                      <span className="text-primary font-mono">14ms Latency</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[94%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Contact
