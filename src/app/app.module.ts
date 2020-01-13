import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { routing } from './app.routing';
import { DeplRecordsComponent } from './depl-records/depl-records.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { KeysPipe } from './keys.pipe';
import { DeplRecordComponent } from './depl-record/depl-record.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DeplRecordsComponent,
    KeysPipe,
    DeplRecordComponent
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
