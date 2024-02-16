import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchIteam:string ="";
constructor(private route:ActivatedRoute,private router: Router){}
ngOnInit():void{
  this.route.params.subscribe(params=>{
    if (params['searchIteam'])
    this.searchIteam=params['searchIteam'];
 
  })
}
search():void{
if(this.searchIteam)
this.router.navigateByUrl('/search/'+ this.searchIteam)
}
}
