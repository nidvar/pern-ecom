export type ThemeStoreType = {
    theme: string | undefined;
    setTheme: (theme: string)=> void;
}

export type ProductStoreType = {
    products: ProductType[];
    loading: boolean;
    currentProduct: ProductType | null;
    fetchProducts: ()=> Promise<void>;
    deleteProduct: (id: string)=> Promise<void>;
    addProduct: (product: ProductType)=> Promise<void>;
    editProduct: (id: string, product: ProductType)=> Promise<void>;
    fetchSingleProduct: (id: string)=> Promise<void>;
}

export type ProductType = {
    id?: number;
    name: string;
    image: string;
    price: string;
    created_at?: string;
}