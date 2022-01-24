import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { ShowAlbumComponent } from './album/show-album/show-album.component';
import { AddEditAlbumComponent } from './album/add-edit-album/add-edit-album.component';
import { AlbumApiService } from './album-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ShowAlbumComponent,
    AddEditAlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [AlbumApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
