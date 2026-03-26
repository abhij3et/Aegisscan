import React, { useState, useEffect } from 'react'
import { Navigation } from '../components/Navigation'
import { supabase } from '../lib/supabase'

function Home({ setCurrentPage }) {
  const [scans, setScans] = useState([])
  const [stats, setStats] = useState({
    activeScan: 0,
    threatLevel: 'Nominal',
    accuracy: 99.8,
    health: 'Stable'
  })

  useEffect(() => {
    fetchScans()
  }, [])

  const fetchScans = async () => {
    const { data, error } = await supabase
      .from('scans')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3)

    if (!error && data) {
      setScans(data)
    }
  }

  return (
    <>
      <Navigation currentPage="home" setCurrentPage={setCurrentPage} />
      <main className="pt-24 px-8 pb-12 min-h-screen bg-surface max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] rounded-xl overflow-hidden mb-10 bg-surface-container-low group">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent z-10"></div>
          <img
            alt="Logistics Port"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-1000"
            src="https://images.pexels.com/photos/3536256/pexels-photo-3536256.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <div className="relative z-20 h-full flex flex-col justify-center px-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-label font-bold uppercase tracking-widest">Global Surveillance Live</span>
            </div>
            <h1 className="text-6xl font-headline font-black text-primary tracking-tighter leading-none mb-6">
              AUTONOMOUS <br /> THREAT DETECTION
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl mb-8 leading-relaxed">
              AegisScan leverages proprietary neural networks to scan cargo manifolds in real-time, providing 99.8% accuracy in anomaly identification.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setCurrentPage('live-feed')}
                className="bg-primary text-on-primary font-bold px-8 py-4 rounded-lg flex items-center gap-3 hover:bg-primary-container transition-all active:scale-95"
              >
                Start New Scan
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button
                onClick={() => setCurrentPage('live-feed')}
                className="border border-outline-variant text-primary font-bold px-8 py-4 rounded-lg flex items-center gap-3 hover:bg-surface-container-high transition-all active:scale-95"
              >
                View Live Feed
                <span className="material-symbols-outlined">sensors</span>
              </button>
            </div>
          </div>

          {/* Floating Status HUD */}
          <div className="absolute bottom-10 right-10 z-20 hidden xl:block">
            <div className="glass-panel p-6 rounded-xl border border-white/5 space-y-4 w-72">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-label text-on-surface-variant tracking-widest uppercase">System Stability</span>
                <span className="text-primary font-bold">99.9%</span>
              </div>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[99%]"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-label text-on-surface-variant tracking-widest uppercase">Encryption Layer</span>
                <span className="text-primary font-bold">AES-256</span>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface-container p-6 rounded-xl hover:bg-surface-container-high transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/5 rounded-lg text-primary">
                <span className="material-symbols-outlined">radar</span>
              </div>
              <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Active Now</span>
            </div>
            <div className="text-4xl font-headline font-black text-primary mb-1">{stats.activeScan}</div>
            <div className="text-sm text-on-surface-variant">Live Cargo Scans</div>
          </div>

          <div className="bg-surface-container p-6 rounded-xl hover:bg-surface-container-high transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-error-container/20 rounded-lg text-error">
                <span className="material-symbols-outlined">security</span>
              </div>
              <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Status</span>
            </div>
            <div className="text-4xl font-headline font-black text-primary mb-1 uppercase">{stats.threatLevel}</div>
            <div className="text-sm text-on-surface-variant">0 Threats Detected (24h)</div>
          </div>

          <div className="bg-surface-container p-6 rounded-xl hover:bg-surface-container-high transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/5 rounded-lg text-primary">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Confidence</span>
            </div>
            <div className="text-4xl font-headline font-black text-primary mb-1">{stats.accuracy}%</div>
            <div className="text-sm text-on-surface-variant">Average AI Accuracy</div>
          </div>

          <div className="bg-surface-container p-6 rounded-xl hover:bg-surface-container-high transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/5 rounded-lg text-primary">
                <span className="material-symbols-outlined">dns</span>
              </div>
              <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Infrastructure</span>
            </div>
            <div className="text-4xl font-headline font-black text-primary mb-1">{stats.health}</div>
            <div className="text-sm text-on-surface-variant">8 Nodes Operating</div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-headline font-bold text-primary tracking-tight">Recent Scan Analysis</h2>
                <button className="text-sm font-label text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest">
                  Export Logs
                </button>
              </div>
              <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10">
                <div className="divide-y divide-outline-variant/10">
                  {scans.length > 0 ? (
                    scans.map((scan) => (
                      <div key={scan.id} className="p-5 flex items-center justify-between hover:bg-surface-bright transition-colors group cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center text-on-surface-variant">
                            <span className="material-symbols-outlined">package_2</span>
                          </div>
                          <div>
                            <div className="font-bold text-primary">{scan.container_id || 'Container ID'}</div>
                            <div className="text-xs text-on-surface-variant font-label tracking-wide uppercase">
                              {scan.location || 'Location Unknown'}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-8">
                          <div className="text-right">
                            <div className="text-xs text-on-surface-variant font-label uppercase">Risk Score</div>
                            <div className="font-bold text-primary">{(scan.confidence_score * 100).toFixed(2)}%</div>
                          </div>
                          <div className={`px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase ${
                            scan.threat_level === 'high' ? 'bg-error-container/20 text-error' : 'bg-green-500/10 text-green-500'
                          }`}>
                            {scan.threat_level === 'high' ? 'Manual Review' : 'Clear'}
                          </div>
                          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-5 text-center text-on-surface-variant">No scans yet. Start a new scan to begin.</div>
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Quick Access */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-headline font-bold text-primary tracking-tight mb-6">Quick Access</h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setCurrentPage('analytics')}
                  className="flex flex-col items-center justify-center p-6 bg-surface-container rounded-xl hover:bg-surface-container-high transition-all active:scale-95 group"
                >
                  <span className="material-symbols-outlined text-3xl mb-3 text-outline group-hover:text-primary transition-colors">analytics</span>
                  <span className="text-[10px] font-label tracking-widest uppercase">Data Insights</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-surface-container rounded-xl hover:bg-surface-container-high transition-all active:scale-95 group">
                  <span className="material-symbols-outlined text-3xl mb-3 text-outline group-hover:text-primary transition-colors">map</span>
                  <span className="text-[10px] font-label tracking-widest uppercase">Threat Map</span>
                </button>
              </div>
            </section>

            {/* Status Panel */}
            <section className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/5">
              <h3 className="font-headline font-bold text-lg mb-6 text-primary">Regional Health</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-label uppercase tracking-widest">
                    <span className="text-on-surface-variant">North America Sector</span>
                    <span className="text-primary">Operational</span>
                  </div>
                  <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-label uppercase tracking-widest">
                    <span className="text-on-surface-variant">EMEA Central</span>
                    <span className="text-primary">Operational</span>
                  </div>
                  <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* FAB */}
      <button
        onClick={() => setCurrentPage('live-feed')}
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </>
  )
}

export default Home
