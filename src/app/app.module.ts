import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  exports: [],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
