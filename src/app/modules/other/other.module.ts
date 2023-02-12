import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { OtherRoutingModule } from './other-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [OtherRoutingModule],
})
export class OtherModule {}
