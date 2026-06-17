// ============================================================
// HOUSEHOLD FOOD OS — COMPLETE MOCK DATA
// All data is hardcoded for demo/simulation purposes
// ============================================================

// ---- TYPES ----
export interface PantryItem {
  id: string;
  name: string;
  emoji: string;
  category: string;
  quantity: string;
  unit: string;
  expiryDays: number; // days until expiry (negative = already expired)
  expiryDate: string;
  confidence: 'high' | 'medium' | 'low';
  addedDate: string;
  location: 'fridge' | 'pantry' | 'freezer' | 'counter';
  nutritionPer100g?: { calories: number; protein: number; carbs: number; fat: number; fiber: number };
}

export interface Recipe {
  id: string;
  name: string;
  emoji: string;
  description: string;
  category: string;
  cookTime: number; // minutes
  prepTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  matchScore: number; // 0-100
  pantryMatch: number; // percentage of ingredients available
  wastePreventionGrams: number;
  savingsRupees: number;
  tags: string[];
  nutrition: { calories: number; protein: number; carbs: number; fat: number; fiber: number };
  ingredients: { name: string; quantity: string; available: boolean; pantryItem?: string }[];
  steps: { step: number; instruction: string; duration?: number }[];
  aiReason: string;
  bgGradient: string;
}

export interface MealPlan {
  day: string;
  date: string;
  dateNum: number;
  meals: {
    breakfast: { name: string; emoji: string; calories: number; protein: number; recipeId?: string };
    lunch: { name: string; emoji: string; calories: number; protein: number; recipeId?: string };
    dinner: { name: string; emoji: string; calories: number; protein: number; recipeId?: string };
  };
  totalCalories: number;
  totalProtein: number;
}

export interface CommunityListing {
  id: string;
  type: 'offer' | 'request';
  item: string;
  emoji: string;
  quantity: string;
  description: string;
  distanceKm: number;
  postedMinsAgo: number;
  hostName: string;
  hostInitials: string;
  hostTrustScore: number;
  hostExchanges: number;
  expiryHours?: number;
  tags: string[];
  lat: number;
  lng: number;
}

export interface Notification {
  id: string;
  type: 'expiry' | 'nutrition' | 'shopping' | 'community' | 'ai';
  title: string;
  message: string;
  time: string;
  read: boolean;
  urgent: boolean;
  actionLabel?: string;
  actionRoute?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
  cards?: {
    type: 'recipe' | 'nutrition' | 'expiry' | 'shopping';
    title: string;
    data: Record<string, unknown>;
  }[];
}

// ---- PANTRY ITEMS (58 items) ----
export const pantryItems: PantryItem[] = [
  // VEGETABLES (12)
  { id: 'v1', name: 'Baby Spinach', emoji: '🥬', category: 'Vegetables', quantity: '200', unit: 'g', expiryDays: 1, expiryDate: 'Tomorrow', confidence: 'high', addedDate: '3 days ago', location: 'fridge', nutritionPer100g: { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2 } },
  { id: 'v2', name: 'Tomatoes', emoji: '🍅', category: 'Vegetables', quantity: '6', unit: 'pcs', expiryDays: 4, expiryDate: 'Jun 21', confidence: 'high', addedDate: '2 days ago', location: 'counter', nutritionPer100g: { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2 } },
  { id: 'v3', name: 'Red Onions', emoji: '🧅', category: 'Vegetables', quantity: '1', unit: 'kg', expiryDays: 20, expiryDate: 'Jul 7', confidence: 'high', addedDate: '1 week ago', location: 'pantry', nutritionPer100g: { calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1, fiber: 1.7 } },
  { id: 'v4', name: 'Garlic', emoji: '🧄', category: 'Vegetables', quantity: '2', unit: 'bulbs', expiryDays: 30, expiryDate: 'Jul 17', confidence: 'high', addedDate: '1 week ago', location: 'pantry', nutritionPer100g: { calories: 149, protein: 6.4, carbs: 33.1, fat: 0.5, fiber: 2.1 } },
  { id: 'v5', name: 'Fresh Ginger', emoji: '🫚', category: 'Vegetables', quantity: '100', unit: 'g', expiryDays: 14, expiryDate: 'Jul 1', confidence: 'medium', addedDate: '4 days ago', location: 'fridge', nutritionPer100g: { calories: 80, protein: 1.8, carbs: 17.8, fat: 0.8, fiber: 2.0 } },
  { id: 'v6', name: 'Capsicum (Green)', emoji: '🫑', category: 'Vegetables', quantity: '3', unit: 'pcs', expiryDays: 5, expiryDate: 'Jun 22', confidence: 'high', addedDate: '2 days ago', location: 'fridge', nutritionPer100g: { calories: 20, protein: 0.9, carbs: 4.6, fat: 0.2, fiber: 1.7 } },
  { id: 'v7', name: 'Cucumber', emoji: '🥒', category: 'Vegetables', quantity: '2', unit: 'pcs', expiryDays: 3, expiryDate: 'Jun 20', confidence: 'high', addedDate: '3 days ago', location: 'fridge', nutritionPer100g: { calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1, fiber: 0.5 } },
  { id: 'v8', name: 'Carrots', emoji: '🥕', category: 'Vegetables', quantity: '500', unit: 'g', expiryDays: 12, expiryDate: 'Jun 29', confidence: 'high', addedDate: '5 days ago', location: 'fridge', nutritionPer100g: { calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2, fiber: 2.8 } },
  { id: 'v9', name: 'Potatoes', emoji: '🥔', category: 'Vegetables', quantity: '1.5', unit: 'kg', expiryDays: 25, expiryDate: 'Jul 12', confidence: 'high', addedDate: '1 week ago', location: 'pantry', nutritionPer100g: { calories: 77, protein: 2.0, carbs: 17.5, fat: 0.1, fiber: 2.2 } },
  { id: 'v10', name: 'Broccoli', emoji: '🥦', category: 'Vegetables', quantity: '350', unit: 'g', expiryDays: 2, expiryDate: 'Jun 19', confidence: 'high', addedDate: '4 days ago', location: 'fridge', nutritionPer100g: { calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4, fiber: 2.6 } },
  { id: 'v11', name: 'Button Mushrooms', emoji: '🍄', category: 'Vegetables', quantity: '250', unit: 'g', expiryDays: 2, expiryDate: 'Jun 19', confidence: 'medium', addedDate: '3 days ago', location: 'fridge', nutritionPer100g: { calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, fiber: 1.0 } },
  { id: 'v12', name: 'Green Peas (Frozen)', emoji: '🫛', category: 'Vegetables', quantity: '400', unit: 'g', expiryDays: 60, expiryDate: 'Aug 17', confidence: 'high', addedDate: '2 weeks ago', location: 'freezer', nutritionPer100g: { calories: 81, protein: 5.4, carbs: 14.5, fat: 0.4, fiber: 5.1 } },
  
  // PROTEIN (8)
  { id: 'p1', name: 'Chicken Breast', emoji: '🍗', category: 'Protein', quantity: '600', unit: 'g', expiryDays: 1, expiryDate: 'Tomorrow', confidence: 'high', addedDate: 'Yesterday', location: 'fridge', nutritionPer100g: { calories: 165, protein: 31.0, carbs: 0, fat: 3.6, fiber: 0 } },
  { id: 'p2', name: 'Eggs', emoji: '🥚', category: 'Protein', quantity: '12', unit: 'pcs', expiryDays: 21, expiryDate: 'Jul 8', confidence: 'high', addedDate: '4 days ago', location: 'fridge', nutritionPer100g: { calories: 155, protein: 13.0, carbs: 1.1, fat: 11.0, fiber: 0 } },
  { id: 'p3', name: 'Paneer', emoji: '🧀', category: 'Protein', quantity: '400', unit: 'g', expiryDays: 6, expiryDate: 'Jun 23', confidence: 'high', addedDate: '2 days ago', location: 'fridge', nutritionPer100g: { calories: 265, protein: 18.3, carbs: 3.7, fat: 20.8, fiber: 0 } },
  { id: 'p4', name: 'Toor Dal', emoji: '🫘', category: 'Protein', quantity: '800', unit: 'g', expiryDays: 180, expiryDate: 'Dec 15', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 340, protein: 22.3, carbs: 59.2, fat: 1.7, fiber: 15.0 } },
  { id: 'p5', name: 'Chana Dal', emoji: '🫘', category: 'Protein', quantity: '500', unit: 'g', expiryDays: 180, expiryDate: 'Dec 15', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 364, protein: 22.5, carbs: 60.3, fat: 5.0, fiber: 12.2 } },
  { id: 'p6', name: 'Tofu (Silken)', emoji: '🍱', category: 'Protein', quantity: '300', unit: 'g', expiryDays: 10, expiryDate: 'Jun 27', confidence: 'medium', addedDate: '3 days ago', location: 'fridge', nutritionPer100g: { calories: 55, protein: 8.0, carbs: 1.9, fat: 2.7, fiber: 0.3 } },
  { id: 'p7', name: 'Salmon Fillets (Frozen)', emoji: '🐟', category: 'Protein', quantity: '400', unit: 'g', expiryDays: 45, expiryDate: 'Aug 1', confidence: 'high', addedDate: '1 week ago', location: 'freezer', nutritionPer100g: { calories: 208, protein: 20.4, carbs: 0, fat: 13.4, fiber: 0 } },
  { id: 'p8', name: 'Mixed Moong Dal', emoji: '🫘', category: 'Protein', quantity: '600', unit: 'g', expiryDays: 180, expiryDate: 'Dec 15', confidence: 'high', addedDate: '3 weeks ago', location: 'pantry', nutritionPer100g: { calories: 347, protein: 24.0, carbs: 59.1, fat: 1.2, fiber: 16.3 } },
  
  // DAIRY (6)
  { id: 'd1', name: 'Full Cream Milk', emoji: '🥛', category: 'Dairy', quantity: '1', unit: 'L', expiryDays: 3, expiryDate: 'Jun 20', confidence: 'high', addedDate: '2 days ago', location: 'fridge', nutritionPer100g: { calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3, fiber: 0 } },
  { id: 'd2', name: 'Curd / Dahi', emoji: '🍶', category: 'Dairy', quantity: '500', unit: 'g', expiryDays: 4, expiryDate: 'Jun 21', confidence: 'high', addedDate: '1 day ago', location: 'fridge', nutritionPer100g: { calories: 98, protein: 11.0, carbs: 3.4, fat: 4.3, fiber: 0 } },
  { id: 'd3', name: 'Amul Butter', emoji: '🧈', category: 'Dairy', quantity: '200', unit: 'g', expiryDays: 45, expiryDate: 'Aug 1', confidence: 'high', addedDate: '2 weeks ago', location: 'fridge', nutritionPer100g: { calories: 717, protein: 0.9, carbs: 0.1, fat: 81.1, fiber: 0 } },
  { id: 'd4', name: 'Processed Cheese', emoji: '🧀', category: 'Dairy', quantity: '200', unit: 'g', expiryDays: 30, expiryDate: 'Jul 17', confidence: 'high', addedDate: '1 week ago', location: 'fridge', nutritionPer100g: { calories: 355, protein: 24.9, carbs: 1.3, fat: 27.8, fiber: 0 } },
  { id: 'd5', name: 'Pure Desi Ghee', emoji: '🫙', category: 'Dairy', quantity: '500', unit: 'g', expiryDays: 180, expiryDate: 'Dec 15', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 900, protein: 0, carbs: 0, fat: 99.7, fiber: 0 } },
  { id: 'd6', name: 'Fresh Cream', emoji: '🫙', category: 'Dairy', quantity: '200', unit: 'ml', expiryDays: 5, expiryDate: 'Jun 22', confidence: 'medium', addedDate: '3 days ago', location: 'fridge', nutritionPer100g: { calories: 195, protein: 2.1, carbs: 3.7, fat: 19.3, fiber: 0 } },
  
  // STAPLES (14)
  { id: 's1', name: 'Basmati Rice', emoji: '🍚', category: 'Staples', quantity: '2', unit: 'kg', expiryDays: 365, expiryDate: 'Jun 2026', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 360, protein: 7.5, carbs: 78.2, fat: 0.9, fiber: 0.6 } },
  { id: 's2', name: 'Whole Wheat Atta', emoji: '🌾', category: 'Staples', quantity: '5', unit: 'kg', expiryDays: 120, expiryDate: 'Oct 15', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 340, protein: 13.2, carbs: 71.2, fat: 2.5, fiber: 10.7 } },
  { id: 's3', name: 'Maida (All Purpose Flour)', emoji: '🫙', category: 'Staples', quantity: '1', unit: 'kg', expiryDays: 90, expiryDate: 'Sep 15', confidence: 'high', addedDate: '3 weeks ago', location: 'pantry', nutritionPer100g: { calories: 364, protein: 10.3, carbs: 76.3, fat: 1.0, fiber: 2.7 } },
  { id: 's4', name: 'Suji / Semolina', emoji: '🫙', category: 'Staples', quantity: '500', unit: 'g', expiryDays: 90, expiryDate: 'Sep 15', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 360, protein: 12.7, carbs: 72.8, fat: 1.1, fiber: 3.9 } },
  { id: 's5', name: 'Poha (Flattened Rice)', emoji: '🍘', category: 'Staples', quantity: '500', unit: 'g', expiryDays: 90, expiryDate: 'Sep 15', confidence: 'high', addedDate: '3 weeks ago', location: 'pantry', nutritionPer100g: { calories: 377, protein: 6.6, carbs: 82.9, fat: 0.4, fiber: 2.3 } },
  { id: 's6', name: 'Rolled Oats', emoji: '🌾', category: 'Staples', quantity: '750', unit: 'g', expiryDays: 180, expiryDate: 'Dec 15', confidence: 'high', addedDate: '2 months ago', location: 'pantry', nutritionPer100g: { calories: 379, protein: 13.2, carbs: 67.7, fat: 6.9, fiber: 10.6 } },
  { id: 's7', name: 'Quinoa', emoji: '🌿', category: 'Staples', quantity: '500', unit: 'g', expiryDays: 365, expiryDate: 'Jun 2026', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 368, protein: 14.1, carbs: 64.2, fat: 6.1, fiber: 7.0 } },
  { id: 's8', name: 'Penne Pasta', emoji: '🍝', category: 'Staples', quantity: '500', unit: 'g', expiryDays: 180, expiryDate: 'Dec 15', confidence: 'high', addedDate: '3 weeks ago', location: 'pantry', nutritionPer100g: { calories: 371, protein: 13.0, carbs: 74.7, fat: 1.5, fiber: 3.2 } },
  { id: 's9', name: 'Brown Bread Loaf', emoji: '🍞', category: 'Staples', quantity: '1', unit: 'loaf', expiryDays: 4, expiryDate: 'Jun 21', confidence: 'high', addedDate: '3 days ago', location: 'counter', nutritionPer100g: { calories: 252, protein: 9.6, carbs: 47.6, fat: 3.4, fiber: 6.9 } },
  { id: 's10', name: 'Sugar', emoji: '🍬', category: 'Staples', quantity: '1', unit: 'kg', expiryDays: 365, expiryDate: 'Jun 2026', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 387, protein: 0, carbs: 100, fat: 0, fiber: 0 } },
  { id: 's11', name: 'Himalayan Rock Salt', emoji: '🧂', category: 'Staples', quantity: '500', unit: 'g', expiryDays: 1825, expiryDate: 'Jun 2031', confidence: 'high', addedDate: '2 months ago', location: 'pantry', nutritionPer100g: { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 } },
  { id: 's12', name: 'Sunflower Oil', emoji: '🫙', category: 'Staples', quantity: '1', unit: 'L', expiryDays: 300, expiryDate: 'Apr 2026', confidence: 'high', addedDate: '3 weeks ago', location: 'pantry', nutritionPer100g: { calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0 } },
  { id: 's13', name: 'Apple Cider Vinegar', emoji: '🫙', category: 'Staples', quantity: '500', unit: 'ml', expiryDays: 365, expiryDate: 'Jun 2026', confidence: 'high', addedDate: '2 months ago', location: 'pantry', nutritionPer100g: { calories: 22, protein: 0, carbs: 0.9, fat: 0, fiber: 0 } },
  { id: 's14', name: 'Coconut Milk (Canned)', emoji: '🥥', category: 'Staples', quantity: '2', unit: 'cans', expiryDays: 365, expiryDate: 'Jun 2026', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 230, protein: 2.3, carbs: 5.5, fat: 23.8, fiber: 2.2 } },
  
  // CONDIMENTS (8)
  { id: 'c1', name: 'Turmeric Powder', emoji: '🟡', category: 'Condiments', quantity: '100', unit: 'g', expiryDays: 365, expiryDate: 'Jun 2026', confidence: 'high', addedDate: '2 months ago', location: 'pantry', nutritionPer100g: { calories: 354, protein: 7.8, carbs: 64.9, fat: 9.9, fiber: 21.1 } },
  { id: 'c2', name: 'Cumin (Jeera)', emoji: '🟤', category: 'Condiments', quantity: '100', unit: 'g', expiryDays: 365, expiryDate: 'Jun 2026', confidence: 'high', addedDate: '2 months ago', location: 'pantry', nutritionPer100g: { calories: 375, protein: 17.8, carbs: 44.2, fat: 22.3, fiber: 10.5 } },
  { id: 'c3', name: 'Coriander Powder', emoji: '🟤', category: 'Condiments', quantity: '100', unit: 'g', expiryDays: 365, expiryDate: 'Jun 2026', confidence: 'high', addedDate: '2 months ago', location: 'pantry', nutritionPer100g: { calories: 298, protein: 12.4, carbs: 54.9, fat: 17.8, fiber: 41.9 } },
  { id: 'c4', name: 'Garam Masala', emoji: '🫙', category: 'Condiments', quantity: '50', unit: 'g', expiryDays: 180, expiryDate: 'Dec 15', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 351, protein: 12.7, carbs: 52.1, fat: 14.9, fiber: 16.2 } },
  { id: 'c5', name: 'Red Chili Powder', emoji: '🌶️', category: 'Condiments', quantity: '100', unit: 'g', expiryDays: 365, expiryDate: 'Jun 2026', confidence: 'high', addedDate: '2 months ago', location: 'pantry', nutritionPer100g: { calories: 318, protein: 12.0, carbs: 56.6, fat: 17.3, fiber: 27.2 } },
  { id: 'c6', name: 'Mustard Seeds', emoji: '⚫', category: 'Condiments', quantity: '100', unit: 'g', expiryDays: 365, expiryDate: 'Jun 2026', confidence: 'high', addedDate: '2 months ago', location: 'pantry', nutritionPer100g: { calories: 508, protein: 26.1, carbs: 28.1, fat: 36.2, fiber: 12.2 } },
  { id: 'c7', name: 'Soy Sauce', emoji: '🫙', category: 'Condiments', quantity: '200', unit: 'ml', expiryDays: 365, expiryDate: 'Jun 2026', confidence: 'high', addedDate: '3 weeks ago', location: 'pantry', nutritionPer100g: { calories: 60, protein: 10.5, carbs: 5.6, fat: 0.1, fiber: 0.8 } },
  { id: 'c8', name: 'Tomato Ketchup', emoji: '🍅', category: 'Condiments', quantity: '400', unit: 'g', expiryDays: 180, expiryDate: 'Dec 15', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 101, protein: 1.4, carbs: 25.9, fat: 0.2, fiber: 0.8 } },
  
  // BEVERAGES (4)
  { id: 'b1', name: 'Masala Chai Mix', emoji: '🍵', category: 'Beverages', quantity: '200', unit: 'g', expiryDays: 180, expiryDate: 'Dec 15', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 357, protein: 16.7, carbs: 68.8, fat: 2.3, fiber: 5.4 } },
  { id: 'b2', name: 'Filter Coffee Powder', emoji: '☕', category: 'Beverages', quantity: '250', unit: 'g', expiryDays: 90, expiryDate: 'Sep 15', confidence: 'high', addedDate: '3 weeks ago', location: 'pantry', nutritionPer100g: { calories: 218, protein: 11.2, carbs: 38.5, fat: 3.8, fiber: 33.5 } },
  { id: 'b3', name: 'Tropicana OJ', emoji: '🍊', category: 'Beverages', quantity: '1', unit: 'L', expiryDays: 7, expiryDate: 'Jun 24', confidence: 'high', addedDate: '2 days ago', location: 'fridge', nutritionPer100g: { calories: 45, protein: 0.7, carbs: 10.4, fat: 0.2, fiber: 0.2 } },
  { id: 'b4', name: 'Tender Coconut Water', emoji: '🥥', category: 'Beverages', quantity: '4', unit: 'cans', expiryDays: 180, expiryDate: 'Dec 15', confidence: 'high', addedDate: '2 weeks ago', location: 'pantry', nutritionPer100g: { calories: 19, protein: 0.7, carbs: 3.7, fat: 0.2, fiber: 1.1 } },
  
  // SNACKS (6)
  { id: 'sn1', name: 'Mixed Nuts (Roasted)', emoji: '🥜', category: 'Snacks', quantity: '300', unit: 'g', expiryDays: 90, expiryDate: 'Sep 15', confidence: 'high', addedDate: '2 weeks ago', location: 'pantry', nutritionPer100g: { calories: 607, protein: 20.0, carbs: 21.2, fat: 54.0, fiber: 7.7 } },
  { id: 'sn2', name: 'Dark Chocolate 70%', emoji: '🍫', category: 'Snacks', quantity: '200', unit: 'g', expiryDays: 180, expiryDate: 'Dec 15', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 598, protein: 7.8, carbs: 45.9, fat: 42.6, fiber: 10.9 } },
  { id: 'sn3', name: 'Digestive Biscuits', emoji: '🍪', category: 'Snacks', quantity: '400', unit: 'g', expiryDays: 60, expiryDate: 'Aug 17', confidence: 'high', addedDate: '2 weeks ago', location: 'pantry', nutritionPer100g: { calories: 485, protein: 6.7, carbs: 68.5, fat: 20.6, fiber: 3.5 } },
  { id: 'sn4', name: 'Bikaneri Namkeen', emoji: '🥐', category: 'Snacks', quantity: '250', unit: 'g', expiryDays: 45, expiryDate: 'Aug 1', confidence: 'high', addedDate: '3 weeks ago', location: 'pantry', nutritionPer100g: { calories: 540, protein: 14.2, carbs: 55.3, fat: 29.8, fiber: 4.1 } },
  { id: 'sn5', name: 'Microwave Popcorn', emoji: '🍿', category: 'Snacks', quantity: '3', unit: 'packs', expiryDays: 120, expiryDate: 'Oct 15', confidence: 'high', addedDate: '1 month ago', location: 'pantry', nutritionPer100g: { calories: 375, protein: 9.0, carbs: 74.0, fat: 6.0, fiber: 14.5 } },
  { id: 'sn6', name: 'Protein Bar (Ritebite)', emoji: '🫙', category: 'Snacks', quantity: '6', unit: 'bars', expiryDays: 90, expiryDate: 'Sep 15', confidence: 'high', addedDate: '2 weeks ago', location: 'pantry', nutritionPer100g: { calories: 373, protein: 26.5, carbs: 44.7, fat: 9.5, fiber: 8.0 } },
];

// ---- RECIPES (15) ----
export const recipes: Recipe[] = [
  {
    id: 'r1',
    name: 'Lemon Herb Chicken',
    emoji: '🍗',
    description: 'Juicy chicken breast with fresh herbs and a zesty lemon glaze. Ready in 25 minutes.',
    category: 'Dinner',
    cookTime: 20,
    prepTime: 5,
    servings: 2,
    difficulty: 'Easy',
    matchScore: 96,
    pantryMatch: 95,
    wastePreventionGrams: 200,
    savingsRupees: 120,
    tags: ['High Protein', 'Low Carb', 'Uses Expiring', 'Quick'],
    nutrition: { calories: 340, protein: 42, carbs: 8, fat: 14, fiber: 2 },
    ingredients: [
      { name: 'Chicken Breast', quantity: '300g', available: true, pantryItem: 'p1' },
      { name: 'Baby Spinach', quantity: '100g', available: true, pantryItem: 'v1' },
      { name: 'Garlic', quantity: '3 cloves', available: true, pantryItem: 'v4' },
      { name: 'Lemon', quantity: '1 pc', available: false },
      { name: 'Olive Oil', quantity: '2 tbsp', available: false },
      { name: 'Butter', quantity: '1 tbsp', available: true, pantryItem: 'd3' },
    ],
    steps: [
      { step: 1, instruction: 'Season chicken breast with salt, pepper, and garlic.', duration: 2 },
      { step: 2, instruction: 'Heat oil in pan over medium-high heat. Sear chicken 6-7 mins each side.', duration: 14 },
      { step: 3, instruction: 'Add butter and lemon juice, baste chicken for 2 mins.', duration: 3 },
      { step: 4, instruction: 'Toss spinach in the same pan for 1 min until wilted.', duration: 1 },
      { step: 5, instruction: 'Rest chicken 5 mins, slice and serve over spinach.', duration: 5 },
    ],
    aiReason: 'Chicken expires tomorrow. Spinach expires tomorrow. This uses both and hits your 40g protein goal for dinner.',
    bgGradient: 'from-brand-zest-400 to-brand-coral-400',
  },
  {
    id: 'r2',
    name: '15-Minute Pasta Arrabbiata',
    emoji: '🍝',
    description: 'Spicy tomato pasta with garlic and capsicum. Perfect quick dinner.',
    category: 'Dinner',
    cookTime: 12,
    prepTime: 3,
    servings: 2,
    difficulty: 'Easy',
    matchScore: 88,
    pantryMatch: 100,
    wastePreventionGrams: 0,
    savingsRupees: 80,
    tags: ['Vegetarian', 'Quick', 'Budget-Friendly'],
    nutrition: { calories: 420, protein: 14, carbs: 72, fat: 10, fiber: 6 },
    ingredients: [
      { name: 'Penne Pasta', quantity: '200g', available: true, pantryItem: 's8' },
      { name: 'Tomatoes', quantity: '3 pcs', available: true, pantryItem: 'v2' },
      { name: 'Capsicum', quantity: '1 pc', available: true, pantryItem: 'v6' },
      { name: 'Garlic', quantity: '4 cloves', available: true, pantryItem: 'v4' },
      { name: 'Red Chili', quantity: '1 tsp', available: true, pantryItem: 'c5' },
      { name: 'Olive Oil', quantity: '3 tbsp', available: false },
    ],
    steps: [
      { step: 1, instruction: 'Boil pasta in salted water per package instructions.', duration: 10 },
      { step: 2, instruction: 'Sauté garlic and chili in olive oil until fragrant.', duration: 2 },
      { step: 3, instruction: 'Add chopped tomatoes and capsicum, cook 5 mins.', duration: 5 },
      { step: 4, instruction: 'Toss drained pasta in sauce. Serve hot.', duration: 3 },
    ],
    aiReason: 'All key ingredients available. Quick option when you have 15 minutes.',
    bgGradient: 'from-brand-coral-400 to-brand-zest-300',
  },
  {
    id: 'r3',
    name: 'Palak Paneer',
    emoji: '🥘',
    description: 'Classic Indian cottage cheese in creamy spinach gravy. Restaurant-style at home.',
    category: 'Dinner',
    cookTime: 25,
    prepTime: 10,
    servings: 3,
    difficulty: 'Medium',
    matchScore: 92,
    pantryMatch: 98,
    wastePreventionGrams: 200,
    savingsRupees: 150,
    tags: ['Vegetarian', 'High Protein', 'Uses Expiring', 'Classic Indian'],
    nutrition: { calories: 380, protein: 24, carbs: 18, fat: 22, fiber: 5 },
    ingredients: [
      { name: 'Baby Spinach', quantity: '200g', available: true, pantryItem: 'v1' },
      { name: 'Paneer', quantity: '250g', available: true, pantryItem: 'p3' },
      { name: 'Onions', quantity: '2 pcs', available: true, pantryItem: 'v3' },
      { name: 'Tomatoes', quantity: '2 pcs', available: true, pantryItem: 'v2' },
      { name: 'Garlic', quantity: '4 cloves', available: true, pantryItem: 'v4' },
      { name: 'Ginger', quantity: '1 inch', available: true, pantryItem: 'v5' },
      { name: 'Ghee', quantity: '2 tbsp', available: true, pantryItem: 'd5' },
      { name: 'Cream', quantity: '2 tbsp', available: true, pantryItem: 'd6' },
    ],
    steps: [
      { step: 1, instruction: 'Blanch spinach in boiling water 2 mins, blend to smooth paste.', duration: 5 },
      { step: 2, instruction: 'Sauté onion, ginger, garlic in ghee until golden.', duration: 8 },
      { step: 3, instruction: 'Add tomatoes and spices, cook until oil separates.', duration: 7 },
      { step: 4, instruction: 'Add spinach puree, simmer 5 mins. Add paneer cubes.', duration: 7 },
      { step: 5, instruction: 'Finish with cream. Serve with roti or rice.', duration: 3 },
    ],
    aiReason: 'Uses spinach (expiring tomorrow) + paneer (6 days). Covers 24g protein per serving.',
    bgGradient: 'from-brand-sage-500 to-brand-sage-300',
  },
  {
    id: 'r4',
    name: 'Broccoli Mushroom Stir-Fry',
    emoji: '🥦',
    description: 'Crunchy Asian-style stir-fry with a savory soy-ginger sauce.',
    category: 'Lunch',
    cookTime: 15,
    prepTime: 5,
    servings: 2,
    difficulty: 'Easy',
    matchScore: 89,
    pantryMatch: 95,
    wastePreventionGrams: 600,
    savingsRupees: 90,
    tags: ['Vegetarian', 'Low Calorie', 'Uses Expiring', 'Asian'],
    nutrition: { calories: 180, protein: 8, carbs: 24, fat: 6, fiber: 7 },
    ingredients: [
      { name: 'Broccoli', quantity: '350g', available: true, pantryItem: 'v10' },
      { name: 'Mushrooms', quantity: '250g', available: true, pantryItem: 'v11' },
      { name: 'Garlic', quantity: '3 cloves', available: true, pantryItem: 'v4' },
      { name: 'Ginger', quantity: '1 inch', available: true, pantryItem: 'v5' },
      { name: 'Soy Sauce', quantity: '2 tbsp', available: true, pantryItem: 'c7' },
      { name: 'Sesame Oil', quantity: '1 tbsp', available: false },
    ],
    steps: [
      { step: 1, instruction: 'Heat wok over high heat with sesame oil.', duration: 1 },
      { step: 2, instruction: 'Add garlic and ginger, stir-fry 30 seconds.', duration: 1 },
      { step: 3, instruction: 'Add broccoli and mushrooms, toss 5 mins.', duration: 5 },
      { step: 4, instruction: 'Add soy sauce, toss to coat. Serve immediately.', duration: 3 },
    ],
    aiReason: 'Broccoli expires in 2 days, mushrooms in 2 days. This uses both in one dish.',
    bgGradient: 'from-brand-sage-400 to-brand-sky-300',
  },
  {
    id: 'r5',
    name: 'Masala Omelette',
    emoji: '🍳',
    description: 'Spiced Indian-style omelette with onions, tomatoes and herbs.',
    category: 'Breakfast',
    cookTime: 8,
    prepTime: 2,
    servings: 1,
    difficulty: 'Easy',
    matchScore: 98,
    pantryMatch: 100,
    wastePreventionGrams: 0,
    savingsRupees: 40,
    tags: ['High Protein', 'Quick', 'Breakfast', 'Vegetarian'],
    nutrition: { calories: 220, protein: 18, carbs: 6, fat: 14, fiber: 2 },
    ingredients: [
      { name: 'Eggs', quantity: '3 pcs', available: true, pantryItem: 'p2' },
      { name: 'Onions', quantity: '¼ pc', available: true, pantryItem: 'v3' },
      { name: 'Tomatoes', quantity: '½ pc', available: true, pantryItem: 'v2' },
      { name: 'Green Chili', quantity: '1 pc', available: false },
      { name: 'Butter', quantity: '1 tbsp', available: true, pantryItem: 'd3' },
      { name: 'Coriander', quantity: 'handful', available: false },
    ],
    steps: [
      { step: 1, instruction: 'Beat eggs with salt, pepper and spices.', duration: 1 },
      { step: 2, instruction: 'Sauté onions and tomatoes in butter until soft.', duration: 3 },
      { step: 3, instruction: 'Pour egg mixture, cook until set, fold and serve.', duration: 4 },
    ],
    aiReason: 'Perfect breakfast to hit your 20g morning protein target. All ingredients available.',
    bgGradient: 'from-brand-zest-300 to-brand-zest-100',
  },
];

// ---- WEEKLY MEAL PLAN ----
export const weeklyMealPlan: MealPlan[] = [
  {
    day: 'Mon', date: 'Jun 16', dateNum: 16,
    meals: {
      breakfast: { name: 'Masala Omelette + Toast', emoji: '🍳', calories: 320, protein: 22, recipeId: 'r5' },
      lunch: { name: 'Dal Rice + Curd', emoji: '🍚', calories: 480, protein: 18 },
      dinner: { name: 'Palak Paneer + Roti', emoji: '🥘', calories: 520, protein: 28, recipeId: 'r3' },
    },
    totalCalories: 1320, totalProtein: 68,
  },
  {
    day: 'Tue', date: 'Jun 17', dateNum: 17,
    meals: {
      breakfast: { name: 'Overnight Oats', emoji: '🥣', calories: 380, protein: 14 },
      lunch: { name: 'Broccoli Mushroom Stir-Fry + Rice', emoji: '🥦', calories: 420, protein: 16, recipeId: 'r4' },
      dinner: { name: 'Lemon Herb Chicken + Salad', emoji: '🍗', calories: 380, protein: 42, recipeId: 'r1' },
    },
    totalCalories: 1180, totalProtein: 72,
  },
  {
    day: 'Wed', date: 'Jun 18', dateNum: 18,
    meals: {
      breakfast: { name: 'Poha with Nuts', emoji: '🍘', calories: 340, protein: 10 },
      lunch: { name: 'Pasta Arrabbiata', emoji: '🍝', calories: 420, protein: 14, recipeId: 'r2' },
      dinner: { name: 'Paneer Bhurji + Paratha', emoji: '🫓', calories: 560, protein: 32 },
    },
    totalCalories: 1320, totalProtein: 56,
  },
  {
    day: 'Thu', date: 'Jun 19', dateNum: 19,
    meals: {
      breakfast: { name: 'Egg Bhurji + Bread', emoji: '🥚', calories: 360, protein: 20 },
      lunch: { name: 'Quinoa Salad', emoji: '🥗', calories: 380, protein: 18 },
      dinner: { name: 'Dal Tadka + Rice + Salad', emoji: '🍲', calories: 540, protein: 22 },
    },
    totalCalories: 1280, totalProtein: 60,
  },
  {
    day: 'Fri', date: 'Jun 20', dateNum: 20,
    meals: {
      breakfast: { name: 'Banana Smoothie', emoji: '🍌', calories: 280, protein: 8 },
      lunch: { name: 'Chana Masala + Rice', emoji: '🫘', calories: 480, protein: 24 },
      dinner: { name: 'Salmon Stir-Fry + Veggies', emoji: '🐟', calories: 420, protein: 35 },
    },
    totalCalories: 1180, totalProtein: 67,
  },
  {
    day: 'Sat', date: 'Jun 21', dateNum: 21,
    meals: {
      breakfast: { name: 'Masala Dosa', emoji: '🫓', calories: 380, protein: 10 },
      lunch: { name: 'Chole Bhature', emoji: '🍞', calories: 620, protein: 20 },
      dinner: { name: 'Grilled Paneer + Salad', emoji: '🧀', calories: 460, protein: 28 },
    },
    totalCalories: 1460, totalProtein: 58,
  },
  {
    day: 'Sun', date: 'Jun 22', dateNum: 22,
    meals: {
      breakfast: { name: 'Upma + Chai', emoji: '🍵', calories: 340, protein: 9 },
      lunch: { name: 'Rajma Chawal', emoji: '🫘', calories: 560, protein: 26 },
      dinner: { name: 'Stir-Fried Veggies + Roti', emoji: '🫑', calories: 380, protein: 14 },
    },
    totalCalories: 1280, totalProtein: 49,
  },
];

// ---- NUTRITION GOALS & PROGRESS ----
export const nutritionGoals = {
  protein: { goal: 120, current: 87, unit: 'g', trend: '+12% vs last week' },
  calories: { goal: 2000, current: 1640, unit: 'kcal', trend: '-5% vs last week' },
  fiber: { goal: 25, current: 18, unit: 'g', trend: '+3% vs last week' },
  water: { goal: 8, current: 5, unit: 'glasses', trend: 'same as last week' },
  weeklyStats: [
    { day: 'Mon', protein: 68, calories: 1320 },
    { day: 'Tue', protein: 72, calories: 1180 },
    { day: 'Wed', protein: 56, calories: 1320 },
    { day: 'Thu', protein: 60, calories: 1280 },
    { day: 'Fri', protein: 67, calories: 1180 },
    { day: 'Sat', protein: 58, calories: 1460 },
    { day: 'Sun', protein: 49, calories: 1280 },
  ],
};

// ---- IMPACT STATS ----
export const impactStats = {
  wastePreventedKg: 12.4,
  moneySavedRupees: 2840,
  co2OffsetKg: 18.6,
  mealsCooked: 47,
  communityHelped: 8,
  monthlyTrend: [
    { month: 'Jan', saved: 1200, waste: 3.2 },
    { month: 'Feb', saved: 1680, waste: 4.1 },
    { month: 'Mar', saved: 2100, waste: 5.8 },
    { month: 'Apr', saved: 1950, waste: 4.9 },
    { month: 'May', saved: 2400, waste: 6.2 },
    { month: 'Jun', saved: 2840, waste: 12.4 },
  ],
};

// ---- COMMUNITY LISTINGS (8 nearby) ----
export const communityListings: CommunityListing[] = [
  {
    id: 'cl1', type: 'offer', item: 'Fresh Sourdough Bread', emoji: '🍞',
    quantity: '2 loaves', description: 'Freshly baked sourdough from yesterday. Expiring tonight. Free to take!',
    distanceKm: 0.8, postedMinsAgo: 45, hostName: 'Priya S.', hostInitials: 'PS',
    hostTrustScore: 4.8, hostExchanges: 24, expiryHours: 8,
    tags: ['Bakery', 'Free', 'Tonight'], lat: 12.9716, lng: 77.5946,
  },
  {
    id: 'cl2', type: 'request', item: 'Apples & Oranges', emoji: '🍎',
    quantity: '2-3 kg', description: 'Community center looking for fresh fruits for children\'s program.',
    distanceKm: 1.2, postedMinsAgo: 120, hostName: 'Rahul K.', hostInitials: 'RK',
    hostTrustScore: 4.6, hostExchanges: 12,
    tags: ['Community', 'Kids', 'Fruits'], lat: 12.9756, lng: 77.5906,
  },
  {
    id: 'cl3', type: 'offer', item: 'Surplus Tomatoes', emoji: '🍅',
    quantity: '3 kg', description: 'Garden surplus. Ripe and fresh. Pick up from gate.',
    distanceKm: 0.4, postedMinsAgo: 30, hostName: 'Ananya R.', hostInitials: 'AR',
    hostTrustScore: 5.0, hostExchanges: 38, expiryHours: 48,
    tags: ['Garden Fresh', 'Free', 'Organic'], lat: 12.9686, lng: 77.5966,
  },
  {
    id: 'cl4', type: 'offer', item: 'Homemade Ghee', emoji: '🫙',
    quantity: '500g', description: 'Made in bulk this weekend. Sharing extra jar.',
    distanceKm: 1.8, postedMinsAgo: 200, hostName: 'Meera J.', hostInitials: 'MJ',
    hostTrustScore: 4.9, hostExchanges: 61,
    tags: ['Homemade', 'Premium', 'Exchange'], lat: 12.9776, lng: 77.5926,
  },
  {
    id: 'cl5', type: 'request', item: 'Rice / Atta', emoji: '🌾',
    quantity: '1-2 kg', description: 'Elderly neighbor ran short this week. Any help appreciated.',
    distanceKm: 0.6, postedMinsAgo: 15, hostName: 'Vijay N.', hostInitials: 'VN',
    hostTrustScore: 4.7, hostExchanges: 8,
    tags: ['Urgent', 'Essentials', 'Elderly'], lat: 12.9696, lng: 77.5976,
  },
  {
    id: 'cl6', type: 'offer', item: 'Ripe Bananas', emoji: '🍌',
    quantity: '1 dozen', description: 'Too ripe for us, perfect for baking. Free!',
    distanceKm: 0.3, postedMinsAgo: 60, hostName: 'Shruti D.', hostInitials: 'SD',
    hostTrustScore: 4.5, hostExchanges: 19, expiryHours: 24,
    tags: ['Free', 'Baking', 'Ripe'], lat: 12.9726, lng: 77.5936,
  },
  {
    id: 'cl7', type: 'offer', item: 'Surplus Dal (Mixed)', emoji: '🫘',
    quantity: '2 kg', description: 'Bought too much for one household. Happy to share.',
    distanceKm: 2.1, postedMinsAgo: 400, hostName: 'Kiran M.', hostInitials: 'KM',
    hostTrustScore: 4.8, hostExchanges: 33,
    tags: ['Protein', 'Long Shelf Life', 'Exchange'], lat: 12.9806, lng: 77.5886,
  },
  {
    id: 'cl8', type: 'request', item: 'Fresh Vegetables', emoji: '🥦',
    quantity: 'Any amount', description: 'Making a batch cook session. Looking for any vegetables.',
    distanceKm: 1.5, postedMinsAgo: 90, hostName: 'Aditi B.', hostInitials: 'AB',
    hostTrustScore: 4.6, hostExchanges: 15,
    tags: ['Batch Cook', 'Any Veggie', 'Community'], lat: 12.9746, lng: 77.5916,
  },
];

// ---- NOTIFICATIONS ----
export const notifications: Notification[] = [
  {
    id: 'n1', type: 'expiry', title: 'Chicken expires tomorrow! 🍗', read: false, urgent: true,
    message: 'You have 600g chicken breast expiring tomorrow. Cook Lemon Herb Chicken tonight to prevent waste.',
    time: '2h ago', actionLabel: 'See Recipe', actionRoute: '/home/recommendation',
  },
  {
    id: 'n2', type: 'expiry', title: 'Spinach needs attention 🥬', read: false, urgent: true,
    message: 'Baby spinach (200g) expires tomorrow. It\'s in tonight\'s recommendation.',
    time: '2h ago', actionLabel: 'Cook Now', actionRoute: '/home/recommendation',
  },
  {
    id: 'n3', type: 'nutrition', title: 'Protein gap detected 💪', read: false, urgent: false,
    message: 'You\'re 33g short of your 120g daily protein goal. Your evening meal can close this gap.',
    time: '4h ago', actionLabel: 'See Plan', actionRoute: '/planner',
  },
  {
    id: 'n4', type: 'shopping', title: 'Low on milk 🥛', read: false, urgent: false,
    message: 'Only 1L remaining. You typically run out in 3 days. Add to shopping list?',
    time: '6h ago', actionLabel: 'Add to List', actionRoute: '/shopping/list',
  },
  {
    id: 'n5', type: 'community', title: 'Fresh bread nearby! 🍞', read: true, urgent: false,
    message: 'Priya (0.8 km away) is offering 2 sourdough loaves expiring tonight.',
    time: '45 min ago', actionLabel: 'View Offer', actionRoute: '/community',
  },
  {
    id: 'n6', type: 'ai', title: 'Weekly insight ready 📊', read: true, urgent: false,
    message: 'Your protein intake improved 12% this week. Broccoli stir-fry was key.',
    time: '8h ago', actionLabel: 'View Insights', actionRoute: '/home/insights',
  },
  {
    id: 'n7', type: 'expiry', title: 'Broccoli expiring in 2 days 🥦', read: true, urgent: false,
    message: '350g broccoli expires Jun 19. Included in Thursday\'s lunch plan.',
    time: '1d ago', actionLabel: 'See Plan', actionRoute: '/planner',
  },
  {
    id: 'n8', type: 'shopping', title: 'Shopping list ready 🛒', read: true, urgent: false,
    message: 'AI generated your weekly shopping list. 14 items, ₹1,240 estimated.',
    time: '1d ago', actionLabel: 'View List', actionRoute: '/shopping/list',
  },
];

// ---- AI CHAT CONVERSATION ----
export const aiConversation: ChatMessage[] = [
  {
    id: 'm1', role: 'user', content: 'What can I cook tonight using what\'s expiring?', timestamp: '6:30 PM',
  },
  {
    id: 'm2', role: 'ai', timestamp: '6:30 PM',
    content: 'I found 3 ingredients expiring within 48 hours. Here\'s what I recommend:',
    cards: [
      { type: 'recipe', title: 'Best Match', data: { name: 'Lemon Herb Chicken', score: 96, time: '25 min', protein: '42g', prevents: 'Chicken + Spinach (400g waste)' } },
    ],
  },
  {
    id: 'm3', role: 'user', content: 'How much protein will I have for the day if I make that?', timestamp: '6:31 PM',
  },
  {
    id: 'm4', role: 'ai', timestamp: '6:31 PM',
    content: 'Adding Lemon Herb Chicken (42g protein) to your current intake of 45g puts you at 87g for today — still 33g short of your 120g goal.',
    cards: [
      { type: 'nutrition', title: 'Today\'s Protein', data: { current: 87, goal: 120, gap: 33, suggestion: 'Add a protein shake or paneer snack for 30g more' } },
    ],
  },
  {
    id: 'm5', role: 'user', content: 'What expires this week?', timestamp: '6:32 PM',
  },
  {
    id: 'm6', role: 'ai', timestamp: '6:32 PM',
    content: 'Here\'s your expiry timeline for the next 7 days:',
    cards: [
      { type: 'expiry', title: 'Expiry This Week', data: {
        today: ['Broccoli (350g)', 'Mushrooms (250g)'],
        tomorrow: ['Chicken (600g)', 'Spinach (200g)'],
        thisWeek: ['Milk (1L)', 'Cucumber (2 pcs)', 'Capsicum (3 pcs)', 'Curd (500g)'],
      }},
    ],
  },
];

// ---- SHOPPING LIST ITEMS ----
export const shoppingList = [
  { id: 'sl1', category: 'Produce', name: 'Lemon', emoji: '🍋', quantity: '4 pcs', urgency: 'high', estimatedPrice: 40, reason: 'Missing for Lemon Herb Chicken' },
  { id: 'sl2', category: 'Produce', name: 'Coriander (Dhania)', emoji: '🌿', quantity: '1 bunch', urgency: 'high', estimatedPrice: 20, reason: 'Runs out weekly' },
  { id: 'sl3', category: 'Dairy', name: 'Milk (Full Cream)', emoji: '🥛', quantity: '2L', urgency: 'high', estimatedPrice: 90, reason: 'Running low, 3 days left' },
  { id: 'sl4', category: 'Dairy', name: 'Curd', emoji: '🍶', quantity: '1 kg', urgency: 'medium', estimatedPrice: 60, reason: 'Expires in 4 days' },
  { id: 'sl5', category: 'Produce', name: 'Green Chili', emoji: '🌶️', quantity: '100g', urgency: 'medium', estimatedPrice: 20, reason: 'Needed for 3 planned recipes' },
  { id: 'sl6', category: 'Produce', name: 'Fresh Coriander', emoji: '🌱', quantity: '2 bunches', urgency: 'medium', estimatedPrice: 30, reason: 'Used in daily cooking' },
  { id: 'sl7', category: 'Staples', name: 'Olive Oil', emoji: '🫙', quantity: '500ml', urgency: 'medium', estimatedPrice: 320, reason: 'Low stock, needed for pasta' },
  { id: 'sl8', category: 'Produce', name: 'Banana', emoji: '🍌', quantity: '1 dozen', urgency: 'low', estimatedPrice: 50, reason: 'Breakfast protein smoothies' },
  { id: 'sl9', category: 'Protein', name: 'Greek Yogurt', emoji: '🥛', quantity: '400g', urgency: 'low', estimatedPrice: 120, reason: 'Protein boost for breakfast' },
  { id: 'sl10', category: 'Produce', name: 'Seasonal Fruits (Mixed)', emoji: '🍊', quantity: '1 kg', urgency: 'low', estimatedPrice: 80, reason: 'Snacking + fiber goals' },
  { id: 'sl11', category: 'Staples', name: 'Sesame Oil', emoji: '🫙', quantity: '200ml', urgency: 'low', estimatedPrice: 180, reason: 'For stir-fry recipes' },
  { id: 'sl12', category: 'Protein', name: 'Chicken Breast', emoji: '🍗', quantity: '1 kg', urgency: 'medium', estimatedPrice: 280, reason: 'Weekly protein staple' },
  { id: 'sl13', category: 'Dairy', name: 'Paneer', emoji: '🧀', quantity: '500g', urgency: 'low', estimatedPrice: 140, reason: 'Planned for weekend meals' },
  { id: 'sl14', category: 'Produce', name: 'Spinach (Fresh)', emoji: '🥬', quantity: '300g', urgency: 'low', estimatedPrice: 30, reason: 'After current stock depletes' },
];

// ---- USER PROFILE ----
export const userProfile = {
  name: 'The Dugar Family',
  members: [
    { name: 'Utkarsh', role: 'Admin', initials: 'UD', color: 'bg-brand-zest-400' },
    { name: 'Priya', role: 'Member', initials: 'PD', color: 'bg-brand-sage-400' },
    { name: 'Arya', role: 'Member (Child)', initials: 'AD', color: 'bg-brand-sky-400' },
  ],
  location: 'Koramangala, Bangalore',
  dietaryPreferences: ['Flexitarian', 'No Pork', 'Occasionally Vegan'],
  allergens: ['Peanuts'],
  cuisinePreferences: ['Indian', 'Mediterranean', 'Asian'],
  shoppingPreferences: {
    stores: ['BigBasket', 'Zepto', 'Blinkit'],
    budget: '₹8,000/week',
    frequency: '2x per week',
  },
};

// ---- HOUSEHOLD STATS (Home Dashboard Snapshot) ----
export const householdSnapshot = {
  healthScore: 92,
  proteinToday: 45,
  proteinGoal: 120,
  moneySavedThisMonth: 2840,
  expiringCount: 4,
  pantryItemCount: 58,
  mealsPlannedThisWeek: 7,
  inventoryConfidence: 'High',
};

// Utility function to get items by expiry urgency
export const getExpiringItems = () => pantryItems.filter(i => i.expiryDays <= 3 && i.expiryDays >= 0);
export const getCriticalItems = () => pantryItems.filter(i => i.expiryDays <= 1 && i.expiryDays >= 0);
export const getItemsByCategory = (category: string) => pantryItems.filter(i => i.category === category);
export const getCategoryCount = () => {
  const counts: Record<string, number> = {};
  pantryItems.forEach(item => {
    counts[item.category] = (counts[item.category] || 0) + 1;
  });
  return counts;
};
