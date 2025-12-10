export type ThemeStoreType = {
    theme: string | undefined
    setTheme: (theme: string)=> void
}

export type ProductStoreType = {
    products: ProductType[],
    loading: boolean,
    fetchProducts: ()=> void
    deleteProduct: (id: string)=> void
}

export type ProductType = {
    id: 1,
    name: string
    image: string
    price: string
    created_at: string
}