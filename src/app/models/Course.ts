import { Category } from "./Category";

export interface Course {
    id: string,
    title: string,
    author: string,
    image: string,
    catrgory: string,
    price: number,
    rating: number,
}