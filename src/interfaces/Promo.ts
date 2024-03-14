export interface PromotionInterface<T> {
    [key: string]: T;
  }

  export interface Item {
    id: number;
    name: string;
    set: boolean;
    limit: number;
    created_at: Date;
    expiration_date: Date;
  };