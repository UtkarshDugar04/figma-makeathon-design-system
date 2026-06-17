import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Camera, Upload, ChevronLeft, Image as ImageIcon } from 'lucide-react';
import Button from '../../components/core/Button';

export default function ReceiptScan() {
  const navigate = useNavigate();
  const [analyzing, setAnalyzing] = useState(false);

  const handleUpload = () => {
    setAnalyzing(true);
    setTimeout(() => navigate('/pantry/review'), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-base">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 flex items-center gap-3 bg-bg-base relative z-10">
        <button onClick={() => navigate(-1)} className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center hover:bg-bg-sunken transition-colors">
          <ChevronLeft className="w-6 h-6 text-text-secondary" />
        </button>
        <h1 className="text-xl font-extrabold text-text-primary">Scan Receipt</h1>
      </div>

      <div className="flex-1 flex flex-col px-5 pb-8">
        {analyzing ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 border-4 border-brand rounded-full border-t-transparent animate-spin" />
              <FileText className="w-10 h-10 text-brand" />
            </div>
            <h2 className="text-xl font-extrabold text-text-primary mb-2">Analyzing Receipt...</h2>
            <p className="text-sm text-text-secondary max-w-[250px]">
              Extracting items, prices, and quantities using Vision AI.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 bg-bg-sunken border-2 border-dashed border-border-strong rounded-3xl flex flex-col items-center justify-center p-6 text-center mb-6">
              <div className="w-16 h-16 bg-bg-elevated rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                <Camera className="w-8 h-8 text-text-tertiary" />
              </div>
              <p className="font-bold text-text-primary mb-1">Take a clear photo</p>
              <p className="text-xs text-text-secondary mb-6 max-w-[200px]">Ensure all items and prices are visible and in focus.</p>
              
              <Button onClick={handleUpload} icon={<Camera className="w-4 h-4" />}>
                Open Camera
              </Button>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" fullWidth onClick={handleUpload} icon={<ImageIcon className="w-4 h-4" />}>
                Photo Library
              </Button>
              <Button variant="outline" fullWidth onClick={handleUpload} icon={<Upload className="w-4 h-4" />}>
                Upload PDF
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
