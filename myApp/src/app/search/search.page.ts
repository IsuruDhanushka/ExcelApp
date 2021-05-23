import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface datalist{

  id:string;
  regNo:number;
  name:string;
  school:string;

}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  list : datalist [] = [];

  filteredlist : datalist [] = [];


  constructor(private http: HttpClient) { }

  ngOnInit() {

    let url ="assets/data/udugam.json" 

   
    this.http.get<datalist[]>(url)
    .subscribe(data=>{
      this.list=data
      this.filteredlist=data

      console.log(this.list);


    })

  }

  searchItem($event){

    console.log($event)
  
    const inputvalue = $event ? $event.detail : {}; 
    console.log(inputvalue)
    const regNo : string = inputvalue && inputvalue.value ? inputvalue.value  : null

    console.log(regNo)
    if(regNo == null){
      this.filteredlist = this.list
      return
    }
    const filtered = this.list.filter(item => (item.regNo+'').match(regNo)) ;
    console.log(filtered)
    this.filteredlist = filtered
  }

}
