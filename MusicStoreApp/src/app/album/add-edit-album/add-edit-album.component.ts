import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumApiService } from 'src/app/service/album-api.service';

@Component({
  selector: 'app-add-edit-album',
  templateUrl: './add-edit-album.component.html',
  styleUrls: ['./add-edit-album.component.css']
})
export class AddEditAlbumComponent implements OnInit {
  
  albumList$!:Observable<any[]>;
  performerList$!:Observable<any[]>;
  

  constructor(private service:AlbumApiService) { }

  
  @Input()album:any;
  id:number=0;
  albumDescription:string="";
  albumName:string="";
  performerId!:null;

  ngOnInit(): void {
    
    this.id=this.album.id;
    this.albumDescription=this.album.albumDescription;
    this.albumName=this.album.albumName;
    this.performerId=this.album.performerId;
    this.performerList$=this.service.getPerformersList();
    this.albumList$=this.service.getAlbumList();

    
  }
  addAlbum(){
    var album ={
      albumName:this.albumName,
      albumDescription:this.albumDescription,
      performerId:this.performerId
    }
    this.service.addAlbum(album).subscribe(res=>{
      var closeModalBtn=document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showAddSuccess=document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display="block";
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display="none";
        }
      },4000);
    });
  }
  updateAlbum(){
    var album ={
      id:this.id,
      albumName:this.albumName,
      albumDescription:this.albumDescription,
      performerId:this.performerId
    }
    var id:number=this.id;
    this.service.updateAlbum(id,album).subscribe(res=>{
      var closeModalBtn=document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showUpdateSuccess=document.getElementById('update-success-alert');
      if(showUpdateSuccess){
        showUpdateSuccess.style.display="block";
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display="none";
        }
      },4000);
    });
  }
  
}
