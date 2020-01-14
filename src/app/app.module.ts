import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { routing } from './app.routing';
import { DeplRecordsComponent } from './depl-records/depl-records.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { DeplRecordComponent } from './depl-record/depl-record.component';
import { ViewerComponent } from './viewer/viewer.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DeplRecordsComponent,
    DeplRecordComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxJsonViewerModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
