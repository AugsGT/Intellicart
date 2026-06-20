import { createContext, useContext, useState, type ReactNode } from 'react';

// Define the shape of our Cart Item
export type CartItem = {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
};

// Define what functions and state are available in our global Context
interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, amount: number) => void;
    calculateTotal: () => number;
}

// 1. Create the Context. This is like a global "box" that will hold our state.
const CartContext = createContext<CartContextType | undefined>(undefined);

// 2. Create a Provider component. This wraps our app and gives it access to the Context.
export function CartProvider({ children }: { children: ReactNode }) {
    // State to hold our cart items globally
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Logic to add a new item or increase quantity if it's already in the cart
    const addToCart = (newItem: CartItem) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === newItem.id);
            if (existingItem) {
                // If the item exists, just increase its quantity by 1
                return prevItems.map(item =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // If it doesn't exist, add it to the array
            return [...prevItems, newItem];
        });
    };

    // Logic to remove an item completely
    const removeFromCart = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // Logic to increase (+1) or decrease (-1) the quantity
    const updateQuantity = (id: number, amount: number) => {
        setCartItems(prevItems => prevItems.map(item => {
            if (item.id === id) {
                // Prevent quantity from going below 1
                const newQuantity = Math.max(1, item.quantity + amount);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    // Logic to calculate the total price of all items in the cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        // We pass the state and functions into the "value" prop so any component can use them
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
}

// 3. Create a custom hook to easily use this context in other files
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
