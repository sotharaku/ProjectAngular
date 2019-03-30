import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNGProject';
  score :number =49;
  name :string = "sothara";
          studentList =[{
          studentid : "5921608327",
          name : "sothara niyom",
          weight:57,
          height:175},
          {
            studentid : "5921608327",
            name : "ooooo",
            weight:57,
            height:175
            },
            {
              studentid : "5921608327",
              name : "xxxx",
              weight:57,
              height:175
            }]
  constructor(){
    this.studentList.map((object,index)=>{
      let obj: any = object;
      
      
    })
    
  }
  
}
