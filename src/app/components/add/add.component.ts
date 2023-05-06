import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{


// function that displays a success notification when an employee is added
successNotification(){
  Swal.fire('Employee added successfully')
}

//an instance of the add form
  empForm : FormGroup;



  constructor(private _fb :FormBuilder, private _empService: ServiceService, private http: HttpClient, private router: Router){


//form builder group where values from fields within the form a validated
    this.empForm = this._fb.group({
      name :new FormControl("", [Validators.required]),
      surname:new FormControl("", [Validators.required]),
      email:new FormControl("", [Validators.required,Validators.email],),
      contactNo: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      department:new FormControl("", [Validators.required]),
    });
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  //get methods that reuturn the values of fields in the add form
  get name(){
    return this.empForm.get('name');
  }
  get surname(){
    return this.empForm.get('surname');
  }
  get email(){
    return this.empForm.get('email');
  }
  get contactNumber(){
    return this.empForm.get('contactNo');
  }
  get department(){
    return this.empForm.get('department');
  }

  //When the form is submitted 
  onFormSubmit(){
    //If the form passes all the validations, invoke the http ass method and pass the form values as an argument
      if(this.empForm.valid){
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            // once the employee has been addedng, display the success notification and reset the form
           this.successNotification();
            this.empForm.reset();
          },
          // log a console error if the employee was not deleted
          error: (err: any) => {
            console.error (err);
          },
          
        });
      
    }


  }


}


