import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, X, Zap, CheckCircle2 } from 'lucide-react';
import Button from '../../components/core/Button';

export default function PhotoScan() {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [itemsDetected, setItemsDetected] = useState(0);

  useEffect(() => {
    if (scanning) {
      const interval = setInterval(() => {
        setItemsDetected(prev => {
          if (prev >= 12) {
            clearInterval(interval);
            setTimeout(() => navigate('/pantry/review'), 1000);
            return prev;
          }
          return prev + 1;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [scanning, navigate]);

  return (
    <div className="flex flex-col h-screen bg-black text-white relative overflow-hidden">
      {/* Top Bar */}
      <div className="absolute top-0 inset-x-0 p-5 pt-12 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors">
          <X className="w-6 h-6" />
        </button>
        <div className="bg-brand text-white px-4 py-1.5 rounded-pill text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 fill-white" /> Live Scan
        </div>
      </div>

      {/* Camera Viewfinder UI */}
      <div className="flex-1 relative">
        {/* Fake camera feed background */}
        <div className="absolute inset-0 bg-bg-elevated opacity-20" />
        
        {/* Scanning Box */}
        <div className="absolute inset-8 border-2 border-white/30 rounded-3xl overflow-hidden">
          {scanning && (
            <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-brand/0 via-brand/40 to-brand/0 animate-scan pointer-events-none" />
          )}
          
          {/* Target Brackets */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white" />
        </div>

        {/* Live Detections */}
        {scanning && itemsDetected > 0 && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl font-extrabold">{itemsDetected}</span>
            </div>
            <p className="mt-2 text-sm font-bold bg-black/50 px-3 py-1 rounded-pill backdrop-blur-sm">Items Found</p>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="p-8 pb-12 bg-black z-20 flex flex-col items-center">
        <p className="text-center text-sm font-medium text-white/70 mb-6">
          {scanning ? 'Hold steady...' : 'Point camera at your fridge or pantry shelves'}
        </p>
        
        <button
          onClick={() => setScanning(true)}
          disabled={scanning}
          className={`w-20 h-20 rounded-full border-4 border-white flex items-center justify-center p-1 transition-all ${scanning ? 'scale-90 opacity-50' : 'hover:scale-105 active:scale-95'}`}
        >
          <div className={`w-full h-full rounded-full ${scanning ? 'bg-error' : 'bg-white'}`} />
        </button>
      </div>
    </div>
  );
}
