import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Foods } from '../shared/model/food';
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[]
})
export class HomeComponent implements OnInit{
  foods:Foods[]=[];
  constructor(private fs:FoodService,private route :ActivatedRoute){}
ngOnInit(): void {
  
  
  this.route.params.subscribe(params=>{
    if(params['searchIteam'])
    this.foods=this.fs.getAll().filter(food=>food.name.toLowerCase().includes(params['searchIteam'].toLowerCase()));
    else if (params['tag'])
    this.foods=this.fs.getAllFoodByTag(params['tag'])
    else
    this.foods=this.fs.getAll();
  })
  
}
onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  alert(`Old Value:${$event.oldValue}, 
    New Value: ${$event.newValue}, 
    Checked Color: ${$event.starRating.checkedcolor}, 
    Unchecked Color: ${$event.starRating.uncheckedcolor}`);
}
}

// import { Component, OnInit } from '@angular/core';
// import { FoodService } from '../service/food/food.service';
// import { Foods } from '../shared/model/food';
// import { ActivatedRoute } from '@angular/router';
// import { StarRatingComponent } from 'ng-starrating';

// @Component({
//   selector: 'app-home',
//   templateUrl:'./home.component.html',
//   styleUrls: ['./home.component.css'],
//   providers: []
// })
// export class HomeComponent implements OnInit {
//   foods: Foods[] = [];

//   constructor(private fs: FoodService, private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       if (params['searchIteam'])
//         this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchIteam'].toLowerCase()));
//       else if (params['tag'])
//         this.foods = this.fs.getAllFoodByTag(params['tag']);
//       else
//         this.foods = this.fs.getAll();
//     });
//   }

//   onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
//     const checkedColor = $event.starRating['checkedcolor'] || 'defaultCheckedColor';
//     const uncheckedColor = $event.starRating['uncheckedcolor'] || 'defaultUncheckedColor';

//     alert(`Old Value: ${$event.oldValue}, New Value: ${$event.newValue}, Checked Color: ${checkedColor}, Unchecked Color: ${uncheckedColor}`);
//   }
// }
