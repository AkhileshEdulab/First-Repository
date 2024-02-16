import { Component ,Input,OnInit} from '@angular/core';
import { Tag } from '../shared/model/tag';
import { FoodService } from '../service/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input()
  foodPageTags?:string[];
  @Input()
  justifyContent:string='center'
  tags?: Tag[] = [];
tagcount: any;
constructor(private fs:FoodService){}
ngOnInit(): void {
  if(!this.foodPageTags)
  this.tags = this.fs.getAllTag();
}
}
