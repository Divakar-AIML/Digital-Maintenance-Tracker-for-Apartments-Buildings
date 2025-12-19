import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-request-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './request-history.html',
  styleUrls: ['./request-history.css']
})
export class RequestHistoryComponent implements OnInit {

  requests: any[] = [];
  loading = true;

  constructor(private service: MaintenanceService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('RequestHistoryComponent initialized');
    // Small delay to ensure proper initialization
    setTimeout(() => {
      this.loadRequests();
    }, 100);
  }

  loadRequests() {
    console.log('Loading requests...');
    this.loading = true;
    
    // Add timeout to prevent infinite loading
    setTimeout(() => {
      if (this.loading) {
        console.log('Request timed out');
        this.loading = false;
        this.requests = [];
      }
    }, 10000);
    
    this.service.getRequestsByResident(1).subscribe({
      next: (data: any) => {
        console.log('API Response received:', data);
        this.requests = Array.isArray(data) ? data : [];
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('API Error:', error);
        this.requests = [];
        this.loading = false;
        this.cdr.detectChanges();      }
    });
  }

  getStatusClass(status: string): string {
    if (!status) return 'pending';
    return status.toLowerCase().replace(' ', '-');
  }
}
