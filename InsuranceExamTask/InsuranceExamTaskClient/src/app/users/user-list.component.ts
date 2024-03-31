// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  policies: any;
  user: User = { ID: 0, Name: "", Email: "" };
  userChanges: User = { ID: 0, Name: "", Email: "" };


  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  selectUser(user: User): void {
    // Logic to handle user selection
    this.router.navigate(['/users'], { queryParams: { id: user.ID } }); 
  }

  showUserPolicies(userId: number): void {
    this.router.navigate(['/users'], { queryParams: { id: userId } }); 

  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.service.deleteUser(id).subscribe(response => {
        let res = response;
        console.log(res);
        this.service.getUsers().subscribe(users => {
          this.users = users;
        });
      });
    }
  }

  addUser() :void{
    this.service.addUser(this.user).subscribe(response => {
      let res = response;
      console.log(res);
      this.service.getUsers().subscribe(users => {
        this.users = users;
      });
    });
  }
  updateUser(user: User) {
    let newUser: User = { ID: user.ID, Email: "", Name: "" };
    this.userChanges.ID = user.ID;
    if (this.userChanges.Email == "" && this.userChanges.Name == "") {
      return;
    }
    else {
      if (this.userChanges.Email != "") {
        newUser.Email = this.userChanges.Email;
      }
      else {
        newUser.Email = user.Email;
      }
      if (this.userChanges.Name != "") {
        newUser.Name = this.userChanges.Name;
      }
      else {
        newUser.Name = user.Name;
      }
    }
    this.service.editUser(newUser).subscribe(response => {
      let res = response;
      console.log(res);
      this.service.getUsers().subscribe(users => {
        this.users = users;
      });
    });
  }

}
