import { create } from "zustand";

export const useCart = create((set) => ({
  productsCart: [],
  setProductForOrder: (product) =>
    set((state) => ({
      productsCart: [...state.productsCart, product],
    })),
  setAmount: (productId, newQuantity) =>
    set((state) => {
      const updatedCart = state.productsCart.map((item) =>
        item.id === productId ? { ...item, amount: newQuantity } : item,
      );
      return { productsCart: updatedCart };
    }),
  updateExistingProduct: (productId, count) =>
    set((state) => {
      const updatedCart = state.productsCart.map((item) =>
        item.id === productId ? { ...item, amount: count } : item,
      );
      console.log(updatedCart);
      return { productsCart: updatedCart };
    }),
  deleteProductFromCart: (productId) =>
    set((state) => ({
      productsCart: state.productsCart.filter(
        (item) => item.id !== productId,
      ),
    })),
  clearCart: () => set({ productsCart: [] }),
}));