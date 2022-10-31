import { NgModule } from "@angular/core";
// import { RouterModule } from "@angular/router";
import { SideBarComponent } from "src/app/shared/layout/side-bar/side-bar.component";
import { FeatureRoutingComponent } from "./feature-routing.component";
import { FeatureComponent } from "./feature.component";

@NgModule({
  declarations: [FeatureComponent, SideBarComponent],
  imports: [
    FeatureRoutingComponent
  ],
})
export class FeatureModule {}