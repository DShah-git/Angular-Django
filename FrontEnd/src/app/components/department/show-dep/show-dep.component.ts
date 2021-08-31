import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ModalTitle:String='';
  ActivateAddEditDepComp:boolean=false;
  dep:any;


  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDeptList().subscribe(data=>{
        this.DepartmentList=data;
    })
  }

addClick(){
  this.dep={
    DepartmentId:0,
    DepartmentName:""
  }

  this.ModalTitle="Add Department";
  this.ActivateAddEditDepComp=true;
}

closeClick()
{
  this.ActivateAddEditDepComp=false;
  this.refreshDepList();
}

editClick(item:any)
{
  this.ModalTitle="Edit Department";
  this.ActivateAddEditDepComp=true;
  this.dep=item;

}

delete(item:any)
{
  this.service.deleteDept(item.DepartmentId).subscribe(res=>{
    alert(res.toString());
    this.refreshDepList();
  });


}
}
