// user-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { User } from './user.model';
import { InsurancePolicy } from '../policies/insurance-policy.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User = { ID: 0, Name: "", Email: "" };
  policies: InsurancePolicy[] = [];
  userPolicy: InsurancePolicy = { ID: 0, InsuranceAmount: 0, PolicyNumber: "", UserID: this.user.ID, EndDate: new Date(), StartDate: new Date() };


  constructor(
    private route: ActivatedRoute,
    private service: ApiService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let Id = params["id"];

      this.service.getUserById(Id).subscribe(user => {
        this.user = user;
        this.service.getUserPolicies(Id).subscribe(policies => {
          this.policies = policies;
        });
      });
    });
  }
  addPolicy(id: number): void {
    this.service.addPolicy(this.userPolicy).subscribe(response => {
      console.log(response);
      this.service.getUserPolicies(id).subscribe(policies => {
        this.policies = policies;
      });
    });
  }
}

