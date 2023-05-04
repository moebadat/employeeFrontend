import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:ServiceService) {}

  items:any;

  ngOnInit() {
    this.service.getEmployeeAll()
      .subscribe(data => {
        this.items = data;
      });
 }

 delete(Id:number){
  this.service.deleteEmployee(Id).subscribe( data => {
    this.ngOnInit(); 
    this.service.getEmployeeAll();
  })
}

setId(Id:any){
  localStorage.setItem("id",Id)
}
}
