import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

// With the service added to the main.ts you do not need an injectable tag in the service.  But that does not allow "treeshaking" since it will always be injected.
// bootstrapApplication(AppComponent, { providers: [TasksService] }).catch((err) =>
//   console.error(err)
// );

// The above is a shortcut for manually defining the token of the injectable such as
// const TasksServiceToken = new InjectionToken('tasks-services-token');
// bootstrapApplication(AppComponent, {
//   providers: [{ provide: TasksServiceToken, useClass: TasksService }],
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent).catch((err) => console.error(err));
