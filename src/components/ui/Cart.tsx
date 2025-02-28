import { Button } from './button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerTrigger } from './drawer';
import { Input } from './input';
import { useCart } from '../../context/CartContext';
import { X } from 'lucide-react';

export function Cart() {
  const {
    cartItems,
    totalPrice,
    totalItems,
    isCartOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <Drawer open={isCartOpen} onOpenChange={toggleCart}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="fixed top-4 right-4 z-50">
          Cart ({totalItems})
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[90vh]">
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle>Shopping Cart</DrawerTitle>
          </DrawerHeader>
          
          <div className="p-4 space-y-4 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-20"
                        min="1"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <DrawerFooter className="border-t">
            <div className="flex justify-between items-center py-4">
              <span className="font-bold">Total:</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <Button size="lg">Checkout</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}