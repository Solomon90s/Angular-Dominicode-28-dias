import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { withoutSaveGuard } from '../guards/without-save.guard';
import { DataResolverService } from '../resolvers/data.resolver.service';
import { ContactReactiveComponent } from './contact-reactive.component';

const routes: Routes = [
  {
    path: '',
    component: ContactReactiveComponent,
    canDeactivate: [withoutSaveGuard],
    resolve: { departments: DataResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactReactiveRoutingModule {}
