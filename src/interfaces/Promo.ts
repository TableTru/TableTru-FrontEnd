export interface PromotionInterface<T> {
    [key: string]: T;
  }

  export interface Promotion {
    promotion_id: number;
    promotion_name: string;
    store_id:number;
    // set: boolean;
    // limit: number;
    created_at: Date;
    expiration_date: Date;
  };