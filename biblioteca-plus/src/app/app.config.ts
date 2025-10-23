import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';  

export const appConfig: ApplicationConfig = {
  providers: [
    // Habilita detecção de mudanças coalescida para performance
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Configura as rotas da aplicação
    provideRouter(routes),

    // Importa módulos necessários
    importProvidersFrom(HttpClientModule),

    // HttpClient global, habilitando fetch para SSR
    provideHttpClient(withFetch()),

    // Hidratação do cliente para SSR (opcional)
    // provideClientHydration(withEventReplay())
  ]
};
