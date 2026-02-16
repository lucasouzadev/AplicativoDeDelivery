// Mock Data for Y2K Delivery App

export interface Store {
  id: string;
  name: string;
  category: string;
  rating: number;
  deliveryTime: string;
  image: string;
  description: string;
}

export interface Product {
  id: string;
  storeId: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  store: string;
  total: number;
  status: 'delivered' | 'cancelled' | 'in-transit';
  items: CartItem[];
}

export const categories = [
  { id: 'burger', name: 'BURGERS', emoji: '🍔' },
  { id: 'pizza', name: 'PIZZA', emoji: '🍕' },
  { id: 'sushi', name: 'SUSHI', emoji: '🍣' },
  { id: 'dessert', name: 'DESSERT', emoji: '🍰' },
];

export const stores: Store[] = [
  {
    id: '1',
    name: 'RETRO BURGER',
    category: 'burger',
    rating: 4.8,
    deliveryTime: '25-35 min',
    image: '/api/placeholder/400/300',
    description: 'Classic burgers with Y2K vibes'
  },
  {
    id: '2',
    name: 'PIXEL PIZZA',
    category: 'pizza',
    rating: 4.9,
    deliveryTime: '30-40 min',
    image: '/api/placeholder/400/300',
    description: 'Digital age pizzas'
  },
  {
    id: '3',
    name: 'CYBER SUSHI',
    category: 'sushi',
    rating: 4.7,
    deliveryTime: '20-30 min',
    image: '/api/placeholder/400/300',
    description: 'Future of Japanese cuisine'
  },
  {
    id: '4',
    name: 'SWEET.EXE',
    category: 'dessert',
    rating: 4.9,
    deliveryTime: '15-25 min',
    image: '/api/placeholder/400/300',
    description: 'Error 404: Calories not found'
  },
];

export const products: Product[] = [
  // Retro Burger products
  {
    id: 'p1',
    storeId: '1',
    name: 'Y2K CLASSIC',
    price: 12.99,
    description: 'Double beef, special sauce, vintage cheese',
    image: '/api/placeholder/300/300',
    category: 'burger'
  },
  {
    id: 'p2',
    storeId: '1',
    name: 'MILLENNIUM BACON',
    price: 14.99,
    description: 'Crispy bacon, aged cheddar, BBQ glaze',
    image: '/api/placeholder/300/300',
    category: 'burger'
  },
  {
    id: 'p3',
    storeId: '1',
    name: 'DIAL-UP DELUXE',
    price: 15.99,
    description: 'Triple patty, all the fixings',
    image: '/api/placeholder/300/300',
    category: 'burger'
  },
  // Pixel Pizza products
  {
    id: 'p4',
    storeId: '2',
    name: '8-BIT PEPPERONI',
    price: 18.99,
    description: 'Classic pepperoni in retro squares',
    image: '/api/placeholder/300/300',
    category: 'pizza'
  },
  {
    id: 'p5',
    storeId: '2',
    name: 'MODEM MARGHERITA',
    price: 16.99,
    description: 'Fresh basil, buffalo mozzarella',
    image: '/api/placeholder/300/300',
    category: 'pizza'
  },
  // Cyber Sushi products
  {
    id: 'p6',
    storeId: '3',
    name: 'MATRIX ROLL',
    price: 22.99,
    description: 'Salmon, avocado, digital wasabi',
    image: '/api/placeholder/300/300',
    category: 'sushi'
  },
  {
    id: 'p7',
    storeId: '3',
    name: 'FIREWALL FUTOMAKI',
    price: 19.99,
    description: 'Spicy tuna, cucumber, tempura flakes',
    image: '/api/placeholder/300/300',
    category: 'sushi'
  },
  // Sweet.exe products
  {
    id: 'p8',
    storeId: '4',
    name: 'REBOOT BROWNIE',
    price: 8.99,
    description: 'Triple chocolate, system overload',
    image: '/api/placeholder/300/300',
    category: 'dessert'
  },
  {
    id: 'p9',
    storeId: '4',
    name: 'COOKIE.DLL',
    price: 6.99,
    description: 'Chocolate chip, dynamically loaded',
    image: '/api/placeholder/300/300',
    category: 'dessert'
  },
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-2024-001',
    date: 'FEB 15, 2024',
    store: 'RETRO BURGER',
    total: 27.98,
    status: 'delivered',
    items: []
  },
  {
    id: 'ORD-2024-002',
    date: 'FEB 10, 2024',
    store: 'PIXEL PIZZA',
    total: 35.98,
    status: 'delivered',
    items: []
  },
  {
    id: 'ORD-2024-003',
    date: 'FEB 05, 2024',
    store: 'CYBER SUSHI',
    total: 42.98,
    status: 'delivered',
    items: []
  },
];

export const deliveryDriver = {
  name: 'ALEX.2000',
  rating: 4.9,
  deliveries: 1247,
  vehicle: 'CYBER BIKE',
  avatar: '/api/placeholder/100/100'
};
