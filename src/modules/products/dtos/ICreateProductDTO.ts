export default interface ICreateProductDTO {
  name: string;
  description?: string;
  price: number;
  promotion_price?: number;
  category_id: string;
}
