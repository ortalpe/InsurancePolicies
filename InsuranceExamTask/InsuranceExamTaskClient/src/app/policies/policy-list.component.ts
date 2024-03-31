import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Router } from '@angular/router';
import { InsurancePolicy } from './insurance-policy.model';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
  policies: InsurancePolicy[] = [];
  policy: InsurancePolicy = { ID: 0, InsuranceAmount: 0, PolicyNumber: "", UserID: 0, EndDate: new Date(), StartDate: new Date() };

  constructor(private service: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getAllInsurancePolicies().subscribe((data: any[]) => {
      this.policies = data;
    });
  }

  getAllInsurancePolicies() {
    this.service.getAllInsurancePolicies().subscribe((data: any[]) => {
      this.policies = data;
    });
  }

  getInsurancePolicyByID(userId: number) :void{
    this.service.getInsurancePolicyByID(userId).subscribe((data) => {
      this.policy = data;
    });
  }
  addPolicy() :void{
    this.service.addPolicy(this.policy).subscribe(response => {
      let res = response;
      console.log(res);
      this.service.getAllInsurancePolicies().subscribe(policies => {
        this.policies = policies;
      });
    });
  }

  deletePolicy(id: number): void {
    if (confirm('Are you sure you want to delete this policy?')) {
      this.service.deletePolicy(id).subscribe(response => {
        let res = response;
        console.log(res);
        this.service.getAllInsurancePolicies().subscribe(policies => {
          this.policies = policies;
        });
      });
    }
  }

  updatePolicy(policy: InsurancePolicy) {
    this.service.editUser(policy).subscribe(response => {
      let res = response;
      console.log(res);
      this.service.getAllInsurancePolicies().subscribe(policies => {
        this.policies = policies;
      });
    });
  }
}
