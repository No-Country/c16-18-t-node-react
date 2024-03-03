import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  // quantity: 1,
  // cart: JSON.parse(localStorage.getItem('cart')) || [],
  userId: localStorage.getItem('userId') || null,

  // setCart: (product) =>
  //   set((state) => ({
  //     cart: [...state.cart, product],
  //   }),
  // ),



  // setCart: (product) =>
  //   set((state) => {
  //     const updatedCart = [...state.cart, product];
  //     localStorage.setItem('cart', JSON.stringify({ cart: updatedCart, userId: state.userId }));
  //     return { cart: updatedCart, userId: state.userId };
  //   }),
  

    setCart: (product) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex(item => item.id === product.id);
      let updatedCart;
      if (existingItemIndex !== -1) {
        // Si el producto ya está en el carrito, actualizamos la cantidad
        const updatedItem = { ...state.cart[existingItemIndex], quantity: state.cart[existingItemIndex].quantity + 1 };
        updatedCart = [...state.cart.slice(0, existingItemIndex), updatedItem, ...state.cart.slice(existingItemIndex + 1)];
      } else {
        // Si el producto no está en el carrito, lo añadimos con cantidad 1
        const newItem = { ...product, quantity: 1 };
        updatedCart = [...state.cart, newItem];
      }
      
      localStorage.setItem('cart', JSON.stringify({ cart: updatedCart, userId: state.userId }));
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

  // deleteProductFromCart: (productId) =>
  //   set((state) => ({
  //     cart: state.cart.filter((item) => item._id !== productId),
  //     subtotal: state.subtotal.filter((item) => item.productId !== productId),
  //   })),

  deleteProductFromCart: (productId) =>
  set((state) => {
    const newCart = state.cart.filter((item) => item._id !== productId);
    localStorage.setItem('cart', JSON.stringify(newCart)); // Guardar en localStorage
    const newSubtotal = state.subtotal.filter((item) => item.productId !== productId);
    return { cart: newCart, subtotal: newSubtotal };
  }),



  // clearCart: () => set({ cart: [] }),
  clearCart: () => {
    localStorage.removeItem('cart');
    set({ cart: [] });
  },

  clearSubtotal: ()=> set({ subtotal: []}),

}));
