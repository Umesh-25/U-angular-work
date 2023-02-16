import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { TextValidationPipe } from '../../customPipe/textValodation.pipe';
// import { ChangeDirective } from "../../customDirective/change.directive";

@NgModule({
  declarations: [LoginComponent,TextValidationPipe],
  imports: [AuthRoutingModule],
})
export class AuthModule {}
