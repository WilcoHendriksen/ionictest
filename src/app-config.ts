import { InjectionToken } from '@angular/core';

export interface ApplicationConfig {
    apiBase: string;
}
  
// Configuration values for our app
export const MY_CONFIG: ApplicationConfig = {
    apiBase: 'https://dev.npqasp.com/hackaton3/'
};
  
// Create a config token to avoid naming conflicts
export const MY_CONFIG_TOKEN = new InjectionToken<ApplicationConfig>('config');
