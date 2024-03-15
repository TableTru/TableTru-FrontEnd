export interface ReviewInterface<T> {
    [key: string]: T;
  }

export interface Review {
    store_id: number;
    store_name: string;
    review_comment: string;
    createAt: Date;
    updateAt: Date;
}

