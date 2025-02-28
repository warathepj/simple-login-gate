import { Button } from './button';
import { Card, CardContent, CardFooter, CardHeader } from './card';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-4">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </CardHeader>
      <CardContent className="flex-1">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <span className="text-lg font-bold">${product.price}</span>
        <Button onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}