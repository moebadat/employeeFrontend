import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent{
onSubmit() {
throw new Error('Method not implemented.');
}
  empForm : FormGroup;



  constructor(private _fb :FormBuilder, private _empService: ServiceService, private http: HttpClient ){
    this.empForm = this._fb.group({
      //Emp_Id : "",
      name :"",
      surname:"",
      email:"",
      contactNo: "",
      department:"",
    });
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  onFormSubmit(){
      if(this.empForm.valid){
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee added successfully');
          },
          error: (err: any) => {
            console.error (err);
          },
          
        });
    }
  



  }







}