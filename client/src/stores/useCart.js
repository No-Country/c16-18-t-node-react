import { create } from "zustand";

export const useCart = create((set) => ({
  cart:JSON.parse(localStorage.getItem('cart')) || [],

  // userId: localStorage.getItem("userId") || null,

  //agrego productos a cart y le agrego la propiedad amount
  setCart: (product) =>
    set((state) => {
      // Creamos una copia del producto con la propiedad amount inicializada en 1
      const productWithAmount = { ...product, amount: 1 };
      const updatedCart = [...state.cart, productWithAmount];
      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
        // JSON.stringify({ cart: updatedCart, userId: state.userId })
      );
      return { cart: updatedCart, userId: state.userId };
    }),



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


  updateProductAmount: (productId, newAmount) =>
  set((state) => {
    const updatedCart = state.cart.map((product) =>
      product._id === productId ? { ...product, amount: newAmount } : product
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardar en localStorage
    // return { cart: updatedCart, userId: state.userId };  Devolver el nuevo estado actualizado
    return {cart: updatedCart};
  }),


  deleteProductFromCart: (productId) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item._id !== productId);
      localStorage.setItem("cart", JSON.stringify(newCart)); // Guardar en localStorage
      const newSubtotal = state.subtotal.filter(
        (item) => item.productId !== productId
      );
      console.log(newCart)
      // console.log(newSubtotal)
      return { cart: newCart };
      // return { cart: newCart, subtotal: newSubtotal };
    }),

  // clearCart: () => set({ cart: [] }),
  clearCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [] });
  },

  clearSubtotal: () => set({ subtotal: [] }),
}));
