// export class Foods{
//     id!:number
//     price!:number
//     name!:string
//     favorite:boolean=false
//     star!:number
//     tag?:string[]
//     imageUrl!:string
//     origins!:string[]
//     cooktime!:string 
//   foodService: any
// }

// src/app/shared/model/food.ts

export interface Foods {
  id: number;
  price: number;
  name: string;
  favorite: boolean;
  star: number;
  tag: string[];
  imageUrl: string;
  origins: string[];
  cooktime: string;
}
