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



successNotification(){
  Swal.fire('Employee added successfully')
}


  empForm : FormGroup;



  constructor(private _fb :FormBuilder, private _empService: ServiceService, private http: HttpClient, private router: Router){
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
  onFormSubmit(){
      if(this.empForm.valid){
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
          alert("Employee added successfully");
          this.empForm.reset();
          },
        
          error: (err: any) => {
            console.error (err);
          },
          
        });
      
    }


  }


}


