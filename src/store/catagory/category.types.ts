


export enum CATEGORIES_ACTION_TYPES {
    FETCH_CATEGORIES_START = 'Category/FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS = 'Category/FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILD = 'Category/FETCH_CATEGORIES_FAILD',
}

export type CategoryItem ={
    id:number;
    imageUrl:string;
    name:string;
    price:number;
}

export type Category = {
    title : string;
    imageUrl:string;
    items:CategoryItem[]

}

export type categoryMap ={
    [key:string]: CategoryItem[]
}