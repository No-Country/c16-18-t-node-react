import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  setCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

  subtotal: [],
  setSubtotal: (productSubtotal, productId) =>
    set((state) => {
      const existingIndex = state.subtotal.findIndex(
        (item) => item.productId === productId
      );
      if (existingIndex !== -1) {
        const newSubtotal = [...state.subtotal];
        newSubtotal[existingIndex] = { productId, productSubtotal };
        return { subtotal: newSubtotal };
      } else {
        return { 
          subtotal: [...state.subtotal, { productId, productSubtotal }],
        };
      }
    }),

  deleteProductFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== productId),
      subtotal: state.subtotal.filter((item) => item.productId !== productId),
    })),



  clearCart: () => set({ cart: [] }),
  clearSubtotal: ()=> set({ subtotal: []})
}));
