import { createContext, useContext, useState, type ReactNode } from 'react';

export type ProductItem = {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
};

// Initial state with some dummy products
const initialProducts: ProductItem[] = [
    {
        id: 1,
        image: "/hero.png",
        name: "Intellicart Pro",
        description: "The ultimate AI-powered shopping assistant.",
        price: 1299
    },
    {
        id: 2,
        image: "/hero.png",
        name: "Smart Watch Series 9",
        description: "Track your fitness and stay connected seamlessly.",
        price: 399
    },
    {
        id: 3,
        image: "/hero.png",
        name: "Noise-Cancelling Headphones",
        description: "Immersive audio experience with active noise cancellation.",
        price: 249
    },
    {
        id: 4,
        image: "/hero.png",
        name: "Wireless Charging Pad",
        description: "Fast charging for all your Qi-enabled devices.",
        price: 45
    },
    {
        id: 5,
        image: "/hero.png",
        name: "Charging Pad",
        description: "Fast charging for all your Qi-enabled devices.",
        price: 35
    }
];

interface ProductContextType {
    products: ProductItem[];
    addProduct: (product: Omit<ProductItem, 'id'>) => void;
    deleteProduct: (id: number) => void;
    updateProduct: (product: ProductItem) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<ProductItem[]>(initialProducts);

    const addProduct = (product: Omit<ProductItem, 'id'>) => {
        setProducts(prev => {
            const newId = prev.length > 0 ? Math.max(...prev.map(p => p.id)) + 1 : 1;
            return [...prev, { ...product, id: newId }];
        });
    };

    const deleteProduct = (id: number) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const updateProduct = (updatedProduct: ProductItem) => {
        setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
}
