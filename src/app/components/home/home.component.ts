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


  // Sweet alert for the delete button
  deleteConfirmation(Id: any) {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: 'This recod cannot be recovered!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      // if the obtained value is true(User indicated that they would sure they want to delete), then invole the delete http metjod
      if (result.value) {
        this.service.deleteEmployee(Id).subscribe(data => {
        })
        // delete confirmation
        Swal.fire(
          'Deleted!',
          'The record has been deleted!',
          'success'
        )
        // reload the page
        this.ngOnInit();

        // if the user has cabcelled the delete the confirm the deletion
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The record is safe',
          'error'
        )
      }
    }
    )
  }

  constructor(private service: ServiceService, private router: Router) { }

  items: any;


  //when this component is loaded then invoke the get all employees function
  ngOnInit() {
    this.service.getEmployeeAll()
      //open a channel of communication with observable (getAllEmployee()), then assign the obtained data to items
      .subscribe(data => {
        this.items = data;
      });
  }

  //delete a secific employee
  delete(Id: number) {
    this.service.deleteEmployee(Id).subscribe(data => {
      //once function is done then reload page
      this.ngOnInit();
    })
  }

  // set id obtained from form to local Storage(persistant storage provided by the browser )
  setId(Id: any) {
    localStorage.setItem("id", Id)
  }

  // method that navigates  to router component and sends the records id that is accessed in ts  through (params["id"])
  viewEmployee(id: number) {
    console.log("Id on home", id);
    this.router.navigate(['/view/' + id])

  }
}

