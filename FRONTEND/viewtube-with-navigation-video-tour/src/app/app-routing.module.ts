import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';

const routes: Routes = [
  {
    path: "",
    component: HeaderComponent,
  },
  {
    path: "navigationurl",
    component: NavigationComponent,
    children: [
      {
        path: "studiourl",
        component: StudioUploadComponent,
      },
      {
        path: "livestreamurl",
        component: StudioLivestreamComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
