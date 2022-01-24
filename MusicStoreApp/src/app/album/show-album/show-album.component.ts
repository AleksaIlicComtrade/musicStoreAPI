import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumApiService } from 'src/app/album-api.service';

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
  }

}
