export interface PromotionCodeInterface<T> {
    [key: string]: T;
  }

export interface PromotionCode {
    promotion_code_id: number;
    promotion_id:number;
    user_id: number;
    code_status:number;
    create_date:Date;
    update_date:Date;
}