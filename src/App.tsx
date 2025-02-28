import { CartProvider } from './context/CartContext';
import { ProductCard } from './components/ui/ProductCard';
import { Cart } from './components/ui/Cart';
import { products } from './products';
import { Toaster } from './components/ui/toaster';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-8">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
        <Cart />
        <Toaster />
      </div>
    </CartProvider>
  );
}