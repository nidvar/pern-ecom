export type ThemeStoreType = {
    theme: string | undefined
    setTheme: (theme: string)=> void
}

export type ProductStoreType = {
    products: ProductType[],
    loading: boolean,
    fetchProducts: ()=> Promise<void>
    deleteProduct: (id: string)=> Promise<void>
    addProduct: (product: ProductType)=> Promise<void>
}

export type ProductType = {
    id?: 1,
    name: string
    image: string
    price: string
    created_at?: string
}