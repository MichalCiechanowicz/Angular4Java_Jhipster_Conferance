import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'speaker',
        data: { pageTitle: 'gatewayApp.speaker.home.title' },
        loadChildren: () => import('./speaker/speaker.module').then(m => m.SpeakerModule),
      },
      {
        path: 'session',
        data: { pageTitle: 'gatewayApp.session.home.title' },
        loadChildren: () => import('./session/session.module').then(m => m.SessionModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
