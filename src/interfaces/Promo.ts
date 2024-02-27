export interface PromotionInterface<T> {
    [key: string]: T;
  }

export interface Promotion {
    promotion_id: number;
    promotion_name:string;
    promotion_description:string;
    store_id: number;
    expiration_date:string;
}