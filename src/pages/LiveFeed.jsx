import React, { useState, useRef } from 'react'
import { Navigation } from '../components/Navigation'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'

function LiveFeed({ setCurrentPage }) {
  const { user } = useAuth()
  const [selectedImage, setSelectedImage] = useState(null)
  const [detections, setDetections] = useState([])
  const [loading, setLoading] = useState(false)
  const [threatLevel, setThreatLevel] = useState('nominal')
  const fileInputRef = useRef(null)

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    setLoading(true)
    try {
      const reader = new FileReader()
      reader.onload = async (e) => {
        setSelectedImage(e.target.result)

        // Upload image to Supabase
        const fileName = `${Date.now()}-${file.name}`
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('scan-images')
          .upload(fileName, file)

        if (uploadError) throw uploadError

        // Create scan record
        const { data: scanData, error: scanError } = await supabase
          .from('scans')
          .insert([
            {
              user_id: user.id,
              image_path: uploadData.path,
              image_url: `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/scan-images/${uploadData.path}`,
              location: 'Primary Bay - Sector 04',
              container_id: `CNT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
              scan_status: 'completed',
              threat_level: 'nominal',
              confidence_score: 0.94
            }
          ])
          .select()
          .single()

        if (scanError) throw scanError

        // Simulate AI detection (in production, call actual API)
        simulateDetections(scanData.id)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Upload error:', error)
    } finally {
      setLoading(false)
    }
  }

  const simulateDetections = async (scanId) => {
    const mockDetections = [
      {
        object_type: 'High Density Metal',
        confidence: 0.94,
        position_x: 35,
        position_y: 20,
        width: 30,
        height: 40,
        risk_level: 'high'
      },
      {
        object_type: 'Thermal Anomaly',
        confidence: 0.62,
        position_x: 65,
        position_y: 65,
        width: 20,
        height: 25,
        risk_level: 'medium'
      },
      {
        object_type: 'Irregular Void',
        confidence: 0.88,
        position_x: 70,
        position_y: 30,
        width: 25,
        height: 35,
        risk_level: 'medium'
      }
    ]

    try {
      for (const detection of mockDetections) {
        await supabase.from('detections').insert([
          {
            scan_id: scanId,
            ...detection
          }
        ])
      }
      setDetections(mockDetections)
      setThreatLevel('high')
    } catch (error) {
      console.error('Detection error:', error)
    }
  }

  return (
    <>
      <Navigation currentPage="live-feed" setCurrentPage={setCurrentPage} />
      <div className="flex flex-1 overflow-hidden pt-20">
        <main className="flex-1 flex bg-surface-container-low overflow-hidden relative">
          {/* Live Feed Section */}
          <section className="flex-1 flex flex-col p-6 gap-6 min-w-0">
            <header className="flex justify-between items-end mb-2">
              <div>
                <span className="text-[10px] font-label font-bold tracking-[0.2em] text-outline uppercase block mb-1">Live Environment</span>
                <h1 className="text-3xl font-headline font-black text-primary tracking-tighter">PRIMARY BAY - SECTOR 04</h1>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-high px-4 py-2 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                <span className="text-xs font-label font-bold tracking-widest text-primary uppercase">Recording: 1080P/60FPS</span>
              </div>
            </header>

            <div className="relative flex-1 bg-black rounded-xl overflow-hidden shadow-2xl group border border-outline-variant/10">
              {selectedImage ? (
                <>
                  <img src={selectedImage} alt="Scan" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 ai-overlay-grid pointer-events-none">
                    <div className="scan-line"></div>
                    {detections.map((detection, idx) => (
                      <div
                        key={idx}
                        className="absolute border-2 border-primary/40 flex flex-col justify-start items-start p-2"
                        style={{
                          left: `${detection.position_x}%`,
                          top: `${detection.position_y}%`,
                          width: `${detection.width}%`,
                          height: `${detection.height}%`
                        }}
                      >
                        <div className="bg-primary text-on-primary text-[10px] font-bold px-2 py-0.5 mb-1 uppercase tracking-tighter">
                          {detection.object_type.substring(0, 3)}-{idx}
                        </div>
                        <div className="bg-black/80 text-primary text-[8px] font-mono p-1">
                          PROB: {(detection.confidence * 100).toFixed(0)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{
                  backgroundImage: `url('https://images.pexels.com/photos/8318103/pexels-photo-8318103.jpeg?auto=compress&cs=tinysrgb&w=1600')`
                }} />
              )}

              {/* Controls Overlay (Bottom) */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex justify-between items-center bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex gap-4">
                  <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-surface-bright transition-colors">
                    <span className="material-symbols-outlined text-sm">pause</span> Pause Feed
                  </button>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-surface-container-highest text-primary px-6 py-2 rounded-lg font-label font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-surface-bright transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">photo_camera</span> Upload Image
                  </button>
                </div>
                {threatLevel === 'high' && (
                  <button className="bg-error-container text-on-error-container px-6 py-2 rounded-lg font-label font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:brightness-125 transition-all">
                    <span className="material-symbols-outlined text-sm">warning</span> Escalate Threat
                  </button>
                )}
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </section>

          {/* Sidebar */}
          <aside className="w-[380px] bg-surface-container border-l border-outline-variant/10 p-6 flex flex-col gap-6 shrink-0 overflow-y-auto max-h-[calc(100vh-80px)]">
            <div className="space-y-4">
              <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-primary">
                <span className="text-[10px] font-label font-bold tracking-[0.2em] text-outline uppercase block mb-1">Active Scan Manifest</span>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-headline font-bold text-primary">SCN-{Math.random().toString().substring(2, 6)}</h3>
                  <span className="text-[10px] font-mono text-outline">v2.4.0</span>
                </div>
              </div>

              <div className="bg-surface-container-high p-5 rounded-xl">
                <span className="text-[10px] font-label font-bold tracking-[0.2em] text-outline uppercase block mb-3">Calculated Threat Level</span>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                    <div className={`h-full ${threatLevel === 'high' ? 'bg-error w-[75%]' : 'bg-primary w-[25%]'}`}></div>
                  </div>
                  <span className={`text-xl font-headline font-black ${threatLevel === 'high' ? 'text-error' : 'text-primary'}`}>
                    {threatLevel.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-label font-bold tracking-[0.2em] text-outline uppercase">AI Detected Entities</h4>
              <div className="space-y-3">
                {detections.length > 0 ? (
                  detections.map((detection, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl hover:bg-surface-bright transition-colors cursor-default">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">inventory_2</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-primary">{detection.object_type}</p>
                        <p className="text-[10px] text-outline uppercase tracking-wider">Object ID: #{idx + 1}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-bold ${detection.risk_level === 'high' ? 'text-error' : 'text-on-surface'}`}>
                          {(detection.confidence * 100).toFixed(0)}% CONF
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-on-surface-variant text-sm p-4">
                    Upload an image to detect objects
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <h4 className="text-[10px] font-label font-bold tracking-[0.2em] text-outline uppercase">Operator Log</h4>
              <textarea
                className="w-full h-full min-h-[150px] bg-surface-container-lowest border-b border-outline-variant/20 focus:border-primary text-on-surface text-sm p-4 rounded-xl resize-none outline-none focus:ring-0 placeholder:text-outline/40"
                placeholder="Input security observations here..."
              />
            </div>

            <button className="w-full py-4 border border-outline-variant/30 text-primary font-label font-bold text-[10px] uppercase tracking-[0.3em] rounded-xl hover:bg-surface-container-high transition-all">
              Finalize & Archive Report
            </button>
          </aside>
        </main>
      </div>
    </>
  )
}

export default LiveFeed
