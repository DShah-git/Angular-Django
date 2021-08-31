import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000"
  readonly PhotoUrl = "http://127.0.0.1:8000/media/"

  constructor(private http:HttpClient) { }

  getDeptList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }

  addDept(val:any){
    return this.http.post(this.APIUrl+'/department/',val);
  }

  updateDept(val:any){
    return this.http.put(this.APIUrl+'/department/',val);
  }

  deleteDept(val:any){
    return this.http.delete(this.APIUrl+'/department/'+val);
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }

  addEmp(val:any){
    return this.http.post(this.APIUrl+'/department/',val);
  }

  updateEmp(val:any){
    return this.http.put(this.APIUrl+'/department/',val);
  }

  deleteEmp(val:any){
    return this.http.delete(this.APIUrl+'/department/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val);
  }

  getAllDepartmentName()
  {
    return this.http.get<any[]>(this.APIUrl+'/department/')
  }

}
