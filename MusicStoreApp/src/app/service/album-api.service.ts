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
    return this.http.get<any>(this.albumAPIUrl+'/albums');
  }

  addAlbum(data:any){
    return this.http.post(this.albumAPIUrl+'/albums',data);
  }
  updateAlbum(id:number|string,data:any){
    return this.http.put(this.albumAPIUrl+`/albums/${id}`,data);
  }
  deleteAlbum(id:number|string){
    return this.http.delete(this.albumAPIUrl+`/albums/${id}`);
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
