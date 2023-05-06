
import { Component,OnInit} from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})


export class ViewComponent implements OnInit {
//declare variables
   empId: any;
   employee: any;
  
   constructor(private route: ActivatedRoute,private employeeService: ServiceService) { }

      ngOnInit(): void{
      // when the component is called retrieve the value of an employees id from the viewEmployee method in home component and assign to variable
       this.route.params.subscribe(params => {
        this.empId = params["id"];
        
       })
       
// invoke the  get one employee method, passing in the id as an argument and then when the record has been retrieved, assign the data to the employee variable
         this.employeeService.getEmployee(this.empId).subscribe( (data:any) => {  
         this.employee= data;

       });
    }
  }
 