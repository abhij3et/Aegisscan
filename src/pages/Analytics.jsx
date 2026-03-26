import React from 'react'
import { Navigation } from '../components/Navigation'

function Analytics({ setCurrentPage }) {
  return (
    <>
      <Navigation currentPage="analytics" setCurrentPage={setCurrentPage} />
      <div className="pt-20 px-8 pb-12 min-h-screen bg-surface max-w-7xl mx-auto">
        <section>
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">System Performance</h2>
              <p className="text-on-surface-variant text-sm mt-1 uppercase tracking-widest font-medium">Real-time throughput metrics</p>
            </div>
            <div className="flex bg-surface-container-low p-1 rounded-lg">
              <button className="px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest bg-primary text-on-primary rounded-md">Live</button>
              <button className="px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">24H</button>
              <button className="px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">7D</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* KPI Cards */}
            <div className="bg-surface-container p-6 rounded-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Scans Per Hour</p>
                  <h3 className="text-4xl font-black text-white mt-1">1,248</h3>
                </div>
                <span className="text-emerald-400 text-xs font-bold flex items-center">
                  <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                  +12.4%
                </span>
              </div>
              <div className="h-16 w-full flex items-end space-x-1 opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="bg-primary flex-1 h-[40%] rounded-t-sm"></div>
                <div className="bg-primary flex-1 h-[60%] rounded-t-sm"></div>
                <div className="bg-primary flex-1 h-[55%] rounded-t-sm"></div>
                <div className="bg-primary flex-1 h-[80%] rounded-t-sm"></div>
                <div className="bg-primary flex-1 h-[45%] rounded-t-sm"></div>
                <div className="bg-primary flex-1 h-[90%] rounded-t-sm"></div>
                <div className="bg-primary flex-1 h-[70%] rounded-t-sm"></div>
              </div>
            </div>

            <div className="bg-surface-container p-6 rounded-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Total Threats Found</p>
                  <h3 className="text-4xl font-black text-white mt-1">42</h3>
                </div>
                <span className="text-error text-xs font-bold flex items-center">
                  <span className="material-symbols-outlined text-sm mr-1">warning</span>
                  +2.1%
                </span>
              </div>
              <div className="h-16 w-full flex items-end space-x-1 opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="bg-error flex-1 h-[20%] rounded-t-sm"></div>
                <div className="bg-error flex-1 h-[30%] rounded-t-sm"></div>
                <div className="bg-error flex-1 h-[15%] rounded-t-sm"></div>
                <div className="bg-error flex-1 h-[60%] rounded-t-sm"></div>
                <div className="bg-error flex-1 h-[25%] rounded-t-sm"></div>
                <div className="bg-error flex-1 h-[30%] rounded-t-sm"></div>
                <div className="bg-error flex-1 h-[40%] rounded-t-sm"></div>
              </div>
            </div>

            <div className="bg-surface-container p-6 rounded-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Detection Accuracy</p>
                  <h3 className="text-4xl font-black text-white mt-1">99.98<span className="text-lg ml-0.5">%</span></h3>
                </div>
                <span className="text-emerald-400 text-xs font-bold flex items-center">
                  <span className="material-symbols-outlined text-sm mr-1">check_circle</span>
                  Stable
                </span>
              </div>
              <div className="h-16 w-full flex items-end space-x-1 opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="bg-primary-container flex-1 h-[85%] rounded-t-sm"></div>
                <div className="bg-primary-container flex-1 h-[86%] rounded-t-sm"></div>
                <div className="bg-primary-container flex-1 h-[84%] rounded-t-sm"></div>
                <div className="bg-primary-container flex-1 h-[85%] rounded-t-sm"></div>
                <div className="bg-primary-container flex-1 h-[86%] rounded-t-sm"></div>
                <div className="bg-primary-container flex-1 h-[85%] rounded-t-sm"></div>
                <div className="bg-primary-container flex-1 h-[87%] rounded-t-sm"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="bg-surface-container p-8 rounded-xl border-l border-outline-variant/10">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-lg font-bold text-white">Threat Types Over Time</h3>
                <p className="text-on-surface-variant text-[11px] uppercase tracking-widest font-semibold mt-1">Categorical distribution</p>
              </div>
              <span className="material-symbols-outlined text-outline cursor-pointer">more_vert</span>
            </div>
            <div className="h-64 flex items-end justify-between space-x-4">
              {[30, 20, 10, 40, 15, 5, 25].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group">
                  <div className="w-full h-full bg-white/20 rounded-sm group-hover:bg-white/40 transition-colors" style={{ height: `${val * 2}px` }}></div>
                  <span className="text-[9px] uppercase tracking-tighter mt-4 font-bold text-outline">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container p-8 rounded-xl">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-lg font-bold text-white">Monthly Scan Volumes</h3>
                <p className="text-on-surface-variant text-[11px] uppercase tracking-widest font-semibold mt-1">Aggregate flow efficiency</p>
              </div>
              <div className="flex items-center space-x-2 text-primary font-black text-2xl">
                48.2k
              </div>
            </div>
            <div className="relative h-48 bg-surface-container-lowest rounded-lg p-4">
              <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                <path d="M0,80 Q50,70 100,50 T200,60 T300,20 T400,30" fill="none" stroke="#ffffff" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <path d="M0,80 Q50,70 100,50 T200,60 T300,20 T400,30 V100 H0 Z" fill="url(#grad)" opacity="0.1" />
                <defs>
                  <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Analytics
