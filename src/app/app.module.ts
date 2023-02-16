import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { ChangeDirective } from './customDirective/change.directive';
import { DatePipe } from '@angular/common';
import { TextValidationPipe } from './customPipe/textValodation.pipe';

@NgModule({
  declarations: [AppComponent, ChangeDirective],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
  ],

  exports: [],
  providers: [DatePipe],

  bootstrap: [AppComponent],
})
export class AppModule {}
