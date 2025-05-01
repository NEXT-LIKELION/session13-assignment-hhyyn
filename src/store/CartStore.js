import { create } from "zustand";

export const useCartStore = create((set, get) => ({
    cart: [],
    setCart: (newCart) => {
        if (typeof newCart === 'function') {
            set({ cart: newCart(get().cart) });
        } else {
            set({ cart: newCart });
        }
    },
}));