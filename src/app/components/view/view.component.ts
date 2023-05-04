
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

   empId: any;
   employee: any;
  
   constructor(private route: ActivatedRoute,private employeeService: ServiceService) { }

      ngOnInit(): void{
      
       this.route.params.subscribe(params => {
        this.empId = params["id"];
        
       })
       

         this.employeeService.getEmployee(this.empId).subscribe( (data:any) => {  
         this.employee= data;

       });
    }
  }
 