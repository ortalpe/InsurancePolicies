import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'https://localhost:7106/api'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  //user methods
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Users/GetAllUsers`//, {
      //headers: new HttpHeaders({
      //'Accept': 'application/json'
      //  }
    )
    //}//);
  }

  getUserById(userId: number): Observable<any> {
    let params = new HttpParams()
      .set('id', userId);
    return this.http.get<any>(`${this.baseUrl}/Users/GetUserById`, {params});
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Users/CreateUser`, user);
  }

  editUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/Users/UpdateUser`, user);
  }

  deleteUser(userId: number): Observable<any> {
    let params = new HttpParams()
      .set('id', userId);
    return this.http.delete<any>(`${this.baseUrl}/Users/DeleteUser`, { params });
  }

  getUserPolicies(userId: number): Observable<any[]> {
    let params = new HttpParams()
      .set('userId', userId);
    return this.http.get<any[]>(`${this.baseUrl}/Users/GetPoliciesByUserId`, { params });
  }

  //policy methods
  getAllInsurancePolicies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/InsurancePolicies/GetAllInsurancePolicies`//, {
      //headers: new HttpHeaders({
      //'Accept': 'application/json'
      //  }
    )
    //}//);
  }

  getInsurancePolicyByID(userId: number): Observable<any> {
    let params = new HttpParams()
      .set('userId', userId);
    return this.http.get<any>(`${this.baseUrl}/InsurancePolicies/GetInsurancePolicyByID`, { params });
  }


  addPolicy(policy: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/InsurancePolicies/CreateInsurancePolicy`, policy);
  }

  editPolicy(policy: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/InsurancePolicies/UpdatePolicy`, policy);
  }

  deletePolicy(policyId: number): Observable<any> {
    let params = new HttpParams()
      .set('policyId', policyId);
    return this.http.delete<any>(`${this.baseUrl}/InsurancePolicies/DeleteInsurancePolicy`, { params });
  }
}
