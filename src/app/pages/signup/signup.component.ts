import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private navigationService: NavigationService){
  }
  navigateTo(url: string) {
    this.navigationService.navigateTo(url);
  }


  strengthBlocks = Array(6).fill(0); // Initializes 6 blocks

  onPasswordChange(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const password = input.value;

    // Check password strength logic (example: update number of active blocks)
    const strength = this.calculateStrength(password);

    // Update strength blocks (e.g., 3/6 blocks active for medium strength)
    this.strengthBlocks = Array(6).fill(0).map((_, i) => i < strength ? 1 : 0);
  }

  calculateStrength(password: string): number {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    if (password.length >= 12) strength++;

    return strength; // Returns 0-6 based on strength
  }
  passwordChecks = [
    { text: 'Lower-case', passed: false },
    { text: 'At least 1 number', passed: false },
    { text: 'Special character', passed: false },
    { text: '8 or more characters', passed: false },
    { text: 'Upper-case', passed: false },
  ];


}