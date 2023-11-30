import { create } from 'zustand'

type ProductType =  {
    id: number;
    name: string;
    image: string;
    rating: number;
    price: number;
    availability: string;
    quantity: number;
  }

interface CartStoreState{
    products:ProductType[]
    totalPrice:number
    totalProducts:number
}

interface CartStoreActions{
    addToCart:(product:ProductType) => void
    removeFromCart:(product:ProductType) => void
    increaseQuantity:(product:ProductType) => void
    decreaseQuantity:(product:ProductType) => void
}


export const useCart = create<CartStoreState & CartStoreActions>((set) => ({
  products: [],
  totalPrice: 0,
  totalProducts: 0,
  addToCart: (product) => set((state) => ({products: [product, ...state.products], totalPrice: state.totalPrice + product.price, totalProducts: state.totalProducts + 1})),
  removeFromCart: (product) => set((state) => ({products: state.products.filter((item) => item.id !== product.id), totalPrice: state.totalPrice - (product.quantity * product.price), totalProducts: state.totalProducts - 1})),
  increaseQuantity: (product) => set((state) => ({products: state.products.map((item) => {
    if(item.id === product.id){
        return {...item, quantity: item.quantity + 1}
    }
    else{
        return item
    }

  }), totalPrice: state.totalPrice + product.price})),

  decreaseQuantity:  (product) => set((state) => ({products: state.products.map((item) => {
    if(item.id === product.id){
        return {...item, quantity: item.quantity - 1}
    }
    else{
        return item
    }

  }), totalPrice: state.totalPrice - product.price})),
})) 