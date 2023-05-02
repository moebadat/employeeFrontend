import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public message = "Employee Updated Successfully!";

}

function getUpdatedEmployee(): void {
   
  let empNo = document.getElementById("empNo");
  let name = document.getElementById("name");
  

  console.log(empNo);
  console.log(name)

}


