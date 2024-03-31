//import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { InsurancePolicy } from './insurance-policy.model'; // Import Policy interface or model

//@Component({
//  selector: 'app-insurance-policy-form',
//  templateUrl: './insurance-policy-form.component.html',
//  styleUrls: ['./insurance-policy-form.component.css']
//})
//export class InsurancePolicyFormComponent implements OnInit {
//  @Input() policy: InsurancePolicy | undefined; // Input property to receive policy data
//  @Output() save: EventEmitter<InsurancePolicy> = new EventEmitter<InsurancePolicy>(); // Output event for saving policy
//  @Output() cancel: EventEmitter<void> = new EventEmitter<void>(); // Output event for cancelling operation

//  constructor() { }

//  ngOnInit(): void {
//    if (!this.policy) {
//      // Initialize policy if not provided
//      this.policy = {
//        UserID:0,
//        ID:0,
//        PolicyNumber: '',
//        InsuranceAmount: 0,
//        StartDate: new Date(),
//        EndDate: new Date()
//      };
//    }
//  }

//  savePolicy(): void {
//    // Emit save event with policy data
//    this.save.emit(this.policy);
//  }

//  cancelPolicy(): void {
//    // Emit cancel event
//    this.cancel.emit();
//  }
//}
