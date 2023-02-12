import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OtherRoutingModule } from './other-routing.module';

@NgModule({
  declarations: [HomeComponent,AboutComponent],
  imports: [OtherRoutingModule],
})
export class OtherModule {}
