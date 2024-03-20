export interface ReviewInterface<T> {
    [key: string]: T;
  }

export interface Review {
  store_id: number;
  // store_name: string;
  user_id: number;
  username: string;
  review_comment: string;
  rating_score: number;
  rating_status: boolean;
  review_id: number
}

