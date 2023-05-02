
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
   employee!: Employee;
   constructor(private route: ActivatedRoute,private employeeService: ServiceService) { }

      ngOnInit(): void{

       this.empId = this.route.snapshot.params['empId'];

         this.employeeService.getEmployee(this.empId).subscribe( (data:any) => {
         this.employee = data;
       });
    }
  }
 