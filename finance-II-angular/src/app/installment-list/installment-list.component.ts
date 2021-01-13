import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Installments } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-installment-list',
  templateUrl: './installment-list.component.html',
  styleUrls: ['./installment-list.component.css']
})
export class InstallmentListComponent implements OnInit {

  @Input() purchaseId :Number;
  
  constructor(private dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.fetchInstallment();
  }

  installments : Installments[];

  fetchInstallment(){
    
    this.dashboardService.fetchInstallment(this.purchaseId).subscribe(response => {
      
      this.installments = response;
    });
  }

}
