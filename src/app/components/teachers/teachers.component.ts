import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';
import { RepoService } from 'src/app/services/RepoService';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  isnew: boolean;
  teacher:Teacher=new Teacher();
  teacherList:Teacher[]=[];
  isSuccess:boolean=false;
  url;
  constructor(private repoService:RepoService) { 
    this.isnew = true;
   this.url=this.repoService.getAPIUrl();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    let url =this.url+'/Teachers/GetTeacherss';
    this.repoService.getAll(url).subscribe(data=> {
      this.teacherList=data;

      console.log(this.teacherList);
    })
  }

  insertOrUpdate(){
    let url =this.url+'/Teachers/InsertOrUpdateTeachers';
    this.repoService.InsertOrUpdate(url,this.teacher).subscribe(data=> {
      this.isSuccess=true;
      //this.teacherList.push(data);
      this.getAll();
      console.log(data);
    })
  }


  removeRow(id){
    let url =this.url+'/Teachers/DeleteTeacher';
    this.repoService.delete(id,url).subscribe(data=> {
      this.isSuccess=true;
      this.getAll();
      console.log(data);
    })
  }

  
  clear() {
    this.teacher =new Teacher();
    this.isSuccess=false;
  }
}
