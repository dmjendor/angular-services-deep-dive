import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
// With the service added to the main.ts you do not need an injectable tag in the service.  But that does not allow "treeshaking" since it will always be injected.
// bootstrapApplication(AppComponent, { providers: [TasksService] }).catch((err) =>
//   console.error(err)
// );
