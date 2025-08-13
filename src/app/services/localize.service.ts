import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizeService {
  translateData: Record<string, string> = {
    "versionLabel": "Version",
    "publisherLabel": "Veröffentlicht durch",
    "aboutLinkLabel": "Impressum",
    "emailLabel": "Kontakt E-Mail",
    "startQuestionsButtonLabel": "Starte Fragenbaum",
    "goHomeButtonLabel": "Zurück zur Startseite"
  };

  translate(key: string): string {
    return this.translateData[key] || key
  }
}
