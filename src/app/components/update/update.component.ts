
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id=localStorage.getItem("id");
  
  name!:string;
  surname!:string;
  email!:string;
  contactNo!:string;
  department!:string;

  namePlaceholder!:string;
  surnamePlaceholder!:string;
  emailPlaceholder!:string;
  contactNoPlaceholder!:string;
  departmentPlaceholder!:string;


  




  constructor(private service: ServiceService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      this.getdata();
      }

      update(){
        this.service.updateEmployee(({name:this.name, surname:this.surname, email:this.email, contactNo:this.contactNo, department:this.department}),this.id).subscribe(res=>{
          this.router.navigate([''])})

      }
      getdata(){
        this.service.getEmployee(this.id).subscribe((data:any)=>{
          this.namePlaceholder=data.name;
          this.surnamePlaceholder=data.surname;
          this.emailPlaceholder=data.email;
          this.contactNoPlaceholder=data.contactNo;
          this.departmentPlaceholder=data.department;
        }
       
     ) }
    
      goToEmployeeList(){
        this.router.navigate(['/']);
      }
    }


     
    


  







