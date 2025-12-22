import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-maintenance-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './maintenance-request.html',
  styleUrls: ['./maintenance-request.css']
})
export class MaintenanceRequestComponent {

  category = '';
  description = '';
  priority = 'Medium';
  selectedFile: File | null = null;
  imagePreview: string | null = null;

  constructor(private service: MaintenanceService) {}

  submit() {
    const formData = new FormData();
    formData.append('resident_id', '1');
    formData.append('category', this.category);
    formData.append('description', this.description);
    formData.append('priority', this.priority);
    
    if (this.selectedFile) {
      formData.append('media', this.selectedFile);
    }

    this.service.createRequest(formData).subscribe(() => {
      this.showSuccessMessage();
      this.resetForm();
    });
  }

  resetForm() {
    this.category = '';
    this.description = '';
    this.priority = 'Medium';
    this.selectedFile = null;
    this.imagePreview = null;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      
      // Create image preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.selectedFile = null;
    this.imagePreview = null;
  }

  private showSuccessMessage() {
    // Create a modern success notification
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">✅</span>
        <span>Request submitted successfully!</span>
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}
