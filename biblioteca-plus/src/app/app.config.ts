import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core'; // Adicione importProvidersFrom
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importe provideHttpClient e withFetch

import { routes } from './app.routes';
// Remova a linha abaixo se não estiver usando hidratação do lado do cliente
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Se estiver usando zone.js
    provideRouter(routes),
    provideHttpClient(withFetch()) // Adicione esta linha para habilitar HttpClient com fetch API
    // Remova a linha abaixo se não estiver usando hidratação do lado do cliente
    // provideClientHydration(withEventReplay())
  ]
};