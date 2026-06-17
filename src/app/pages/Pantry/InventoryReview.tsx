import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Edit2, Trash2, Zap, Save } from 'lucide-react';
import PageHeader from '../../components/core/PageHeader';
import Button from '../../components/core/Button';
import Card from '../../components/core/Card';

export default function InventoryReview() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: 'Amul Milk', category: 'Dairy', quantity: '2', unit: 'Liters', confidence: 'High' },
    { id: 2, name: 'Britannia Bread', category: 'Bakery', quantity: '1', unit: 'Pack', confidence: 'High' },
    { id: 3, name: 'Eggs', category: 'Dairy', quantity: '12', unit: 'Pieces', confidence: 'High' },
    { id: 4, name: 'Tomatoes', category: 'Produce', quantity: '1', unit: 'kg', confidence: 'Medium' },
    { id: 5, name: 'Unknown Green Veggie', category: 'Produce', quantity: '1', unit: 'Bunch', confidence: 'Low' },
  ]);

  const [saving, setSaving] = useState(false);

  const removeItem = (id: number) => {
    setItems(items.filter(i => i.id !== id));
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      navigate('/pantry');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-base">
      <PageHeader
        title="Review Items"
        subtitle={`${items.length} items detected`}
        backRoute=""
        rightElement={<Button variant="ghost" size="sm" onClick={() => navigate('/pantry/manual')}>Add Missing</Button>}
      />

      <div className="px-5 pb-8 flex flex-col gap-4 pt-2 flex-1">
        <div className="bg-brand-sky-50 border border-brand-sky-200 rounded-2xl p-4 flex gap-3 items-center mb-2">
          <div className="w-8 h-8 rounded-full bg-brand-sky-100 flex items-center justify-center flex-shrink-0">
            <Zap className="w-4 h-4 text-brand-sky-600" />
          </div>
          <p className="text-sm font-bold text-brand-sky-800">
            AI has automatically predicted expiry dates based on average lifespans.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {items.map(item => (
            <Card key={item.id} padding="md" className={item.confidence === 'Low' ? 'border-warning/50 bg-warning-bg/30' : ''}>
              <div className="flex gap-3 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-extrabold text-text-primary text-base">{item.name}</p>
                    {item.confidence === 'Low' && (
                      <span className="px-2 py-0.5 bg-warning-bg text-warning rounded-pill text-[10px] font-bold">Needs verification</span>
                    )}
                  </div>
                  <p className="text-xs text-text-secondary">{item.quantity} {item.unit} · {item.category}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded-full bg-bg-sunken flex items-center justify-center text-text-tertiary hover:bg-bg-elevated transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => removeItem(item.id)} className="w-8 h-8 rounded-full bg-error-bg flex items-center justify-center text-error hover:bg-error/20 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="p-5 bg-bg-base border-t border-border-subtle sticky bottom-0 z-10 pb-safe">
        <Button size="lg" fullWidth icon={<Save className="w-5 h-5" />} onClick={handleSave} disabled={saving}>
          {saving ? 'Adding to Pantry...' : `Save ${items.length} Items to Pantry`}
        </Button>
      </div>
    </div>
  );
}
