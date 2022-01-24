import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumApiService {
  readonly albumAPIUrl="http://musicstoreapitest.azurewebsites.net/api";
  constructor(private http:HttpClient) { 
     
  }
  //Albums
  getAlbumList():Observable<any[]>{
    return this.http.get<any>(this.albumAPIUrl+'/Albums');
  }

  addAlbum(data:any){
    return this.http.post(this.albumAPIUrl+'/Albums',data);
  }
  updateAlbum(id:number|string,data:any){
    return this.http.put(this.albumAPIUrl+`/Albums/${id}`,data);
  }
  deleteAlbum(id:number|string){
    return this.http.delete(this.albumAPIUrl+`Albums/${id}`);
  }

  //Performers
  getPerformersList():Observable<any[]>{
    return this.http.get<any>(this.albumAPIUrl+'/performers');
  }

  addPerformer(data:any){
    return this.http.post(this.albumAPIUrl+'/performers',data);
  }
  updatePerformer(id:number|string,data:any){
    return this.http.put(this.albumAPIUrl+`/performers/${id}`,data);
  }
  deletePerformer(id:number|string){
    return this.http.delete(this.albumAPIUrl+`performers/${id}`);
  }
}
