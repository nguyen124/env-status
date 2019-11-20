import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { DeplRecordComponent } from './depl-record/depl-record.component';
import { routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DeplRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
