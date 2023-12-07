import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/core/configs/app.config';
import { AppComponent } from './app/core/containers/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
