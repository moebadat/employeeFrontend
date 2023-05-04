import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:ServiceService, private router: Router) {}

  items:any;
  // id?: number;

  ngOnInit() {
    this.service.getEmployeeAll()
      .subscribe(data => {
        this.items = data;
      });
 }

  delete(Id:number){
    this.service.deleteEmployee(Id).subscribe( data => {
      this.service.getEmployeeAll();
    })
  }
  viewEmployee(id: number) {
    console.log("Id on home", id);
    this.router.navigate(['/view/' + id])
    
  }
}

