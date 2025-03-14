import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  languages: string[] = ['English', 'French', 'Spanish'];
  timezones: string[] = ['UTC-5 (New York)', 'UTC+1 (London)', 'UTC+8 (Beijing)'];
  timeFormats: string[] = ['24 Hours', '12 Hours'];

  selectedLanguage = this.languages[0];
  selectedTimezone = this.timezones[0];
  selectedFormat = this.timeFormats[0];

  message = true;       
  taskUpdate = true;    
  taskDeadline = false; 
  mentorHelp = false;   

}
