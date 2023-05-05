import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  deleteConfirmation(Id:any){
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.service.deleteEmployee(Id).subscribe( data => {
          this.ngOnInit(); 
          this.service.getEmployeeAll();
        })
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    }
  )}

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
    this.ngOnInit(); 
    this.service.getEmployeeAll();
  })
}

setId(Id:any){
  localStorage.setItem("id",Id)
}
  viewEmployee(id: number) {
    console.log("Id on home", id);
    this.router.navigate(['/view/' + id])
    
  }
}

