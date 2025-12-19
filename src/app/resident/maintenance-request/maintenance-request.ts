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

  constructor(private service: MaintenanceService) {}

  submit() {
    const data = {
      resident_id: 1,
      category: this.category,
      description: this.description
    };

    this.service.createRequest(data).subscribe(() => {
      alert('Request submitted');
    });
  }
}
