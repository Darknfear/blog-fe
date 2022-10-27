import { NgModule } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [HeaderRoutingModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
