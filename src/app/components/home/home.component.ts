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

 delete(empId:any){
  this.service.deleteEmployee(empId).subscribe( data => {
    console.log(data);
    this.service.getEmployeeAll();
  })
}
}
