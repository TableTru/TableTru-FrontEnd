export interface PromotionCodeInterface<T> {
    [key: string]: T;
  }

export interface PromotionCode {
    promotion_code_id: number;
    promotion_id:number;
    store_id: number;
    create_date:Date;
    update_date:Date;
}