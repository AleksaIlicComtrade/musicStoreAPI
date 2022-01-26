import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumApiService } from 'src/app/service/album-api.service';

@Component({
  selector: 'app-show-album',
  templateUrl: './show-album.component.html',
  styleUrls: ['./show-album.component.css']
})
export class ShowAlbumComponent implements OnInit {

  albumList$!:Observable<any[]>;
  performerList$!:Observable<any[]>;
  performerList:any=[];

  performerListMap:Map<number,string>=new Map();
  constructor(private service:AlbumApiService) { }

  ngOnInit(): void {
    this.albumList$=this.service.getAlbumList();
    this.performerList$=this.service.getPerformersList();
    this.refreshPerformerTypesMap();
  }
  //Variable (properties)
  modalTitle:string='';
  activateAddEditAlbumComponent:boolean=false;
  album:any;

  modalAdd(){
    this.album={
      id:0,
      performerId:null,
      albumName:null,
      albumDescription:null
    }
    this.modalTitle="Add Album";
    this.activateAddEditAlbumComponent=true;
  }
  modalClose(){
    this.activateAddEditAlbumComponent=false;
    this.albumList$=this.service.getAlbumList();
  }
  modalEdit(item:any){
    this.album=item;
    this.modalTitle="Edit Album";
    this.activateAddEditAlbumComponent=true;
  }
  delete(item:any){
    if(confirm(`Are you sure you want to delete album ${item.albumName}?`)){
      this.service.deleteAlbum(item.id).subscribe(res=>{
        var closeModalBtn=document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showDeleteSuccess=document.getElementById('delete-success-alert');
      if(showDeleteSuccess){
        showDeleteSuccess.style.display="block";
      }
      setTimeout(function(){
        if(showDeleteSuccess){
          showDeleteSuccess.style.display="none";
        }
      },4000);
      this.albumList$=this.service.getAlbumList();
    });
 
     
    }
    
    
  }

  refreshPerformerTypesMap(){
    this.service.getPerformersList().subscribe(data=>{
      this.performerList=data;
      for(let i=0;i<data.length;i++){
        this.performerListMap.set(this.performerList[i].id,this.performerList[i].performerName);
      }
    })
  }
}
