import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  exports: [],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule,AppRoutingModule, AuthModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
