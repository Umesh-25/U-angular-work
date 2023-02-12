import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { ChangeDirective } from "../../customDirective/change.directive";

@NgModule({
  declarations:[LoginComponent,ChangeDirective],
  imports:[AuthRoutingModule]

})

export class AuthModule{}