import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "src/app/employee";
import { ServiceService } from "src/app/services/service.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"],
})
export class UpdateComponent implements OnInit {

  // obtain the value of id using the local storage option provided by the browser
  id = localStorage.getItem("id");
 
  // declare variable
  name!: any;
  surname!: any;
  email!: any;
  contactNo!: any;
  department!: any;

  // create an instance of the update form
  updateForm: FormGroup;

  constructor(private fb:FormBuilder,
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      name :new FormControl("", [Validators.required]),
      surname:new FormControl("", [Validators.required]),
      email:new FormControl("", [Validators.required,Validators.email],),
      contactNo: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      department:new FormControl("", [Validators.required]),
    });
  }

  

  UpdateNotification(){
    Swal.fire('Employee has been updated')
  }
  

  // when the component is called, the getData() method which gets the data of an individual employee using thier id is invoked
  ngOnInit(): void {
    this.getdata();
  }
 /*  update method that appends employee information by invoking the updateEmployee http function and passing the employees 
  details obtained from the form and id from local storage as arguments */
  update() {
    this.service
      .updateEmployee(
        {
          name: this.name,
          surname: this.surname,
          email: this.email,
          contactNo: this.contactNo,
          department: this.department,
        },
        this.id
      )
      .subscribe((res) => {
        //notify user that the record has been updated once a response is recieved 
        this.UpdateNotification();
        //refresh data after it has been updated 
        this.getdata();
      });
  }

  // function that gets a specific individual record by invoking  the get http method a and passing the id obtained from local stotage as an argumentL
  //Once a repsonse is recieved, the function assigns the recieved data to variables
  getdata() {
    this.service.getEmployee(this.id).subscribe((data: any) => {
      this.name = data.name;
      this.surname = data.surname;
      this.email = data.email;
      this.contactNo = data.contactNo;
      this.department = data.department;
    });
  }
//function that navigates to the home page
  goToEmployeeList() {
    this.router.navigate(["/"]);
  }
}
