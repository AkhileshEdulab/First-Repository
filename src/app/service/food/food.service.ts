import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
getFoodById(id:number){
return this.getAll().find(food =>food.id == id)!;
}
  constructor() { }
  
  getAllFoodByTag(tag:string):Foods[]{
    return tag =="All" ?
    this.getAll():this .getAll().filter(food=>food.tag?.includes(tag));
  }
  getAllTag():Tag[]{
    return[
{name:'All',count:22},
{name:'Non-Veg',count:4},
{name:'Veg Thali',count:2},
{name:'Non-Veg Thali',count:3},
{name:'Veg',count:2},
{name:'Spice',count:1},
{name:'Vegitables',count:1},
{name:'fruits',count:1}
    ];
  }
  getAll():Foods[]{
    return[
      {
      id:1,
      price:150,
      name:'Non-Veg',
      favorite:true,
      star:4.5,
      tag:['fastfood','Non-veg','lunch'],
      imageUrl:'/assets/images (1).jpg',
      origins:['JAPAN, INDIA ,ITELY'],
      cooktime:'15-20',
      },
      {
        id:2,
        price:40,
        name:'Veg',
        favorite:false,
        star:4.5,
        tag:['fastfood','Veg','lunch'],
        imageUrl:'/assets/images (2).jpg',
        origins:['INDIA, JAPAN'],
        cooktime:'10-20',
        },
        {
          id:3,
          price:101,
          name:'Fruits',
          favorite:true,
          star:2.5,
          tag:['fastfood','fruits','lunch'],
          imageUrl:'/assets/images (3).jpg',
          origins:['ITELY ,AFFRICAN'],
          cooktime:'15-20',
          },
          {
            id:4,
            price:30,
            name:'Non-Veg',
            favorite:false,
            star:3.5,
            tag:['fastfood','Non-Veg','fry'],
            imageUrl:'/assets/images (4).jpg',
            origins:['BELGUM,FRANCE,INDIA'],
            cooktime:'10-20',
            },
            {
              id:5,
              price:60,
              name:'Vegitables',
              favorite:false,
              star:1.5,
              tag:['fastfood','Vegitables','lunch'],
              imageUrl:'/assets/images (5).jpg',
              origins:['ITALY ,FRANCE'],
              cooktime:'20-40',
              },
              {
                id:6,
                price:70,
                name:' Protien',
                favorite:false,
                star:2.5,
                tag:['fastfood','Non-Veg','lunch'],
                imageUrl:'/assets/images (6).jpg',
                origins:['ITALY ,AFFRICA'],
                cooktime:'15-20',
                },
                {
                  id:7,
                  price:30,
                  name:'Spice',
                  favorite:false,
                  star:2.1,
                  tag:['fastfood','Spice','lunch'],
                  imageUrl:'/assets/images (7).jpg',
                  origins:['INDIA, DUBAI'],
                  cooktime:'20-30',
                  },
                  {
                    id:8,
                    price:50,
                    name:'Fruits ',
                    favorite:true,
                    star:4.5,
                    tag:['fastfood','fruits','lunch'],
                    imageUrl:'/assets/images (8).jpg',
                    origins:['INDIA ,USA'],
                    cooktime:'10-15',
                    },
                    {
                      id:9,
                      price:80,
                      name:'Chicken ',
                      favorite:true,
                      star:4.5,
                      tag:['fastfood','Non-Veg','lunch'],
                      imageUrl:'/assets/images (9).jpg',
                      origins:['INDIA ,USA'],
                      cooktime:'10-15',
                      },
                      {
                        id:10,
                        price:60,
                        name:'Chicken Rice ',
                        favorite:true,
                        star:4.5,
                        tag:['fastfood','Non-Veg','lunch'],
                        imageUrl:'/assets/images (10).jpg',
                        origins:['INDIA ,USA'],
                        cooktime:'10-15',
                        },
                        {
                          id:11,
                          price:100,
                          name:'Non-Veg Thali ',
                          favorite:true,
                          star:4.5,
                          tag:['fastfood','Non-Veg Thali','lunch'],
                          imageUrl:'/assets/images (11).jpg',
                          origins:['INDIA ,USA'],
                          cooktime:'10-15',
                          },
                          {
                            id:12,
                            price:200,
                            name:'Leg-pice ',
                            favorite:false,
                            star:4.5,
                            tag:['fastfood','Non-Veg','lunch'],
                            imageUrl:'/assets/images (12).jpg',
                            origins:['INDIA ,USA'],
                            cooktime:'10-15',
                            },
                            {
                              id:13,
                              price:150,
                              name:'Chiken-fry ',
                              favorite:false,
                              star:4.5,
                              tag:['fastfood','Non-Veg','Non-Veg'],
                              imageUrl:'/assets/images (13).jpg',
                              origins:['INDIA ,USA'],
                              cooktime:'10-15',
                              },
                              {
                                id:14,
                                price:150,
                                name:'Chicen-spice ',
                                favorite:true,
                                star:4.5,
                                tag:['fastfood','Non-Veg','lunch'],
                                imageUrl:'/assets/images (13).jpg',
                                origins:['INDIA ,USA'],
                                cooktime:'10-15',
                                },
                                {
                                  id:15,
                                  price:90,
                                  name:'Polaw Rice ',
                                  favorite:true,
                                  star:4.4,
                                  tag:['fastfood','Veg'],
                                  imageUrl:'/assets/images (14).jpg',
                                  origins:['INDIA ,USA'],
                                  cooktime:'10-15',
                                  },
                                  {
                                    id:16,
                                    price:140,
                                    name:'Pannir ',
                                    favorite:true,
                                    star:4.5,
                                    tag:['fastfood','Veg'],
                                    imageUrl:'/assets/images (15).jpg',
                                    origins:['INDIA ,USA'],
                                    cooktime:'10-15',
                                    },
                                    {
                                      id:17,
                                      price:70,
                                      name:'Pizza ',
                                      favorite:true,
                                      star:3.5,
                                      tag:['fastfood','Veg','lunch'],
                                      imageUrl:'/assets/images (16).jpg',
                                      origins:['INDIA ,USA'],
                                      cooktime:'10-15',
                                      },
                                      {
                                        id:18,
                                        price:70,
                                        name:'Veg Thali ',
                                        favorite:true,
                                        star:4.5,
                                        tag:['fastfood','Veg Thali ','lunch'],
                                        imageUrl:'/assets/images (17).jpg',
                                        origins:['INDIA ,USA'],
                                        cooktime:'10-15',
                                        },
                                        {
                                          id:19,
                                          price:90,
                                          name:'Rice ',
                                          favorite:true,
                                          star:4.2,
                                          tag:['fastfood','Veg Thali','lunch'],
                                          imageUrl:'/assets/images (18).jpg',
                                          origins:['INDIA ,USA'],
                                          cooktime:'10-15',
                                          },
                                          {
                                            id:20,
                                            price:50,
                                            name:'Chiken-rice ',
                                            favorite:true,
                                            star:4.5,
                                            tag:['fastfood','Non-Veg','lunch'],
                                            imageUrl:'/assets/images (19).jpg',
                                            origins:['INDIA ,USA'],
                                            cooktime:'10-15',
                                            },
                                            {
                                              id:21,
                                              price:120,
                                              name:'Ege Rice ',
                                              favorite:false,
                                              star:3.5,
                                              tag:['fastfood','Non-Veg','lunch'],
                                              imageUrl:'/assets/images (20).jpg',
                                              origins:['INDIA ,USA'],
                                              cooktime:'10-15',
                                              },
                                              {
                                                id:22,
                                                price:80,
                                                name:'Pizza spicy ',
                                                favorite:true,
                                                star:4.5,
                                                tag:['fastfood','Veg Thali','break-fast'],
                                                imageUrl:'/assets/images (21).jpg',
                                                origins:['INDIA ,USA'],
                                                cooktime:'10-15',
                                                }
    ];
  }
}

