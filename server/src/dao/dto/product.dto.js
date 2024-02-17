export default class ProductDTO {
  static productDTO = (product) =>{
      return {
          name: product.name,
          price: product.price,
          quanty:product.quanty
      }
  }
}