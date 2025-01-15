import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container max-w-7xl mx-auto p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- first panel -->
        <div class="p-6 border rounded-lg shadow-sm hover:border-violet-500">
          <h2 class="text-lg font-semibold mb-4 text-violet-600">Student Registration</h2>
          <form (ngSubmit)="submitForm()">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
              <input
                id="name"
                [(ngModel)]="student.name"
                name="name"
                type="text"
                class="mt-1 p-2 border w-full rounded"
              />
              <p *ngIf="errors.name" class="text-red-600 text-sm mt-1">{{ errors.name }}</p>
            </div>
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
              <input
                id="email"
                [(ngModel)]="student.email"
                name="email"
                type="email"
                class="mt-1 p-2 border w-full rounded"
              />
              <p *ngIf="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email }}</p>
            </div>
            <div class="mb-4">
              <label for="mobile" class="block text-sm font-medium text-gray-700">Mobile No:</label>
              <input
                id="mobile"
                [(ngModel)]="student.mobile"
                name="mobile"
                type="text"
                class="mt-1 p-2 border w-full rounded"
              />
              <p *ngIf="errors.mobile" class="text-red-600 text-sm mt-1">{{ errors.mobile }}</p>
            </div>
            <button
              type="submit"
              class="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700"
            >
              Submit
            </button>
          </form>
        </div>

        <!-- Second Panel -->
        <div class="p-6 border rounded-lg shadow-sm bg-gray-50 hover:border-violet-500">
          <h2 class="text-lg font-semibold mb-4 text-violet-600">Message Panel</h2>
          <div *ngIf="message" class="mb-4">
            <p [ngClass]="{'text-green-600': showDetails, 'text-red-600': !showDetails}" class="font-medium">{{ message }}</p>
          </div>
          <div *ngIf="showDetails" class="">
            <h3 class="text-lg font-semibold text-violet-500 mb-4">Registered Details</h3>
            <div class="mb-4 flex flex-col gap-3">
              <p class="text-md"><strong>Registered Name:</strong> {{ student.name }}</p>
              <p class="text-md"><strong>Registered Email:</strong> {{ student.email }}</p>
              <p class="text-md"><strong>Registered Mobile No:</strong> {{ student.mobile }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent {
  student = {
    name: '',
    email: '',
    mobile: '',
  };
  message = '';
  showDetails = false;

  errors = {
    name: '',
    email: '',
    mobile: '',
  };

  submitForm() {
    this.clearErrors();
    if (this.validateData()) {
      this.message = 'Test registration successful!';
      this.showDetails = true;
    } else {
      this.message = 'Please correct the highlighted errors.';
      this.showDetails = false;
    }
  }

  validateData(): boolean {
    const { name, email, mobile } = this.student;
    let isValid = true;

    // Name validation
    if (name.trim() === '') {
      this.errors.name = 'Name is required.';
      isValid = false;
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
      this.errors.name = 'Name can only contain letters and spaces.';
      isValid = false;
    }

    // Email validation
    if (email.trim() === '') {
      this.errors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      this.errors.email = 'Enter a valid email address.';
      isValid = false;
    }

    // Mobile number validation
    if (mobile.trim() === '') {
      this.errors.mobile = 'Mobile number is required.';
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      this.errors.mobile = 'Mobile number must be exactly 10 digits.';
      isValid = false;
    }

    return isValid;
  }

  clearErrors() {
    this.errors = { name: '', email: '', mobile: '' };
  }
}
