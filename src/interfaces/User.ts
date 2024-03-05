export interface User {
    user_id: number;
    username: string;
    password: string;
    profile_image: string;
    user_status: string;
    email: string;
    phone_num: string;
    latitude: number;
    longitude: number;
    createAt: Date;
    updateAt: Date;
}