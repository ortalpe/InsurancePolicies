import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
  
  }

  viewUsersDetails() {
    this.router.navigate(['/allusers']);
  }
  viewPoliciesDetails() {
    this.router.navigate(['/policies']);
  }


  title = 'InsuranceExamTaskClient';
}
