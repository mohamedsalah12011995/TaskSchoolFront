import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/app/services/RepoService';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor(private repoService:RepoService) { }

 private urlApi:string=environment.baseUrl;
  ngOnInit(): void {
    this.getAllSchool();
  }

  getAllSchool(){
    let url=this.urlApi+'/School/GetSchools';
    this.repoService.getAll(url).subscribe(data=> {
      console.log(data);
    })
  }
}
