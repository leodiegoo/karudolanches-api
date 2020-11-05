export default interface ICreateCategoryAdditionOptionalDTO {
  price: number;
  description: string;
  category_addition_id: string;
  blocked?: boolean;
}
