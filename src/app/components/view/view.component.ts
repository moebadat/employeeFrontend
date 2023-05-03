
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
   employees: Employee[] | undefined;
   id: number = 1;
   constructor(private route: ActivatedRoute,private employeeService: ServiceService) { }

      ngOnInit(): void{

       this.empId = this.route.snapshot.params['empId'];

         this.employeeService.getEmployee(this.id).subscribe( (data:any) => {
         this.employees= data;
       });
    }
  }
 