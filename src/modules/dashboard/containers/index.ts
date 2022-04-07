import { DashboardComponent } from './dashboard/dashboard.component';
import { LightComponent } from './light/light.component';
import { MangeDocumentComponent } from './mange-document/mange-document.component';
import { StaticComponent } from './static/static.component';

export const containers = [DashboardComponent, StaticComponent, LightComponent, MangeDocumentComponent];

export * from './dashboard/dashboard.component';
export * from './static/static.component';
export * from './light/light.component';
export * from './mange-document/mange-document.component';
