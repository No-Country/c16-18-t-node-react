import { create } from "zustand";

// export const useCart = create((set) => ({
//   cart: [],
//   setCart: (product) =>
//     set((state) => ({
//       cart: [...state.cart, product],
//     })),

//   subtotal: [],
//   setSubtotal: (productSubtotal, productId) =>
//     set((state) => {
//       const existingIndex = state.subtotal.findIndex(
//         (item) => item.productId === productId
//       );
//       if (existingIndex !== -1) {
//         const newSubtotal = [...state.subtotal];
//         newSubtotal[existingIndex] = { productId, productSubtotal };
//         return { subtotal: newSubtotal };
//       } else {
//         return {
//           subtotal: [...state.subtotal, { productId, productSubtotal }],
//         };
//       }
//     }),

//   deleteProductFromCart: (productId) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item._id !== productId),
//       subtotal: state.subtotal.filter((item) => item.productId !== productId),
//     })),

//   clearCart: () => set({ cart: [] }),
//   clearSubtotal: () => set({ subtotal: [] }),
// }));

export const useCart = create((set) => {
  // implementacion para mantener los profuctos en el carrito ante cierre de sesion y actualizacion.
  // No aplica a cambio de usuario, necesita un sistema de auth.
  // Recuperar datos del localStorage al inicio

  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const storedSubtotal = JSON.parse(localStorage.getItem("subtotal")) || [];

  return {
    cart: storedCart,
    setCart: (product) =>
      set((state) => {
        const updatedCart = [...state.cart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),

    subtotal: storedSubtotal,
    setSubtotal: (productSubtotal, productId) =>
      set((state) => {
        const existingIndex = state.subtotal.findIndex(
          (item) => item.productId === productId
        );
        const newSubtotal = [...state.subtotal];
        if (existingIndex !== -1) {
          newSubtotal[existingIndex] = { productId, productSubtotal };
        } else {
          newSubtotal.push({ productId, productSubtotal });
        }
        localStorage.setItem("subtotal", JSON.stringify(newSubtotal));
        return { subtotal: newSubtotal };
      }),

    deleteProductFromCart: (productId) =>
      set((state) => {
        const updatedCart = state.cart.filter((item) => item._id !== productId);
        const updatedSubtotal = state.subtotal.filter(
          (item) => item.productId !== productId
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        localStorage.setItem("subtotal", JSON.stringify(updatedSubtotal));
        return { cart: updatedCart, subtotal: updatedSubtotal };
      }),

    clearCart: () => {
      localStorage.removeItem("cart");
      set({ cart: [] });
    },

    clearSubtotal: () => {
      localStorage.removeItem("subtotal");
      set({ subtotal: [] });
    },
  };
});
