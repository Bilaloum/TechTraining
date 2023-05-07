import { Category } from "./Category";

export interface Course {
    id: string,
    title: string,
    author: string,
    image: any,
    catrgory: Category,
    price: number,
    rating: number,
}