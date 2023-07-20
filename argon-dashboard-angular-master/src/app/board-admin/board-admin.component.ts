import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {

  content: string;
  users: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  getAllUsers() {
    this.userService.fetchUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  removeUser(userId: number) {
    this.userService.removeUser(userId).subscribe(
      () => {
        // If the user was removed successfully, remove it from the local users array.
        this.users = this.users.filter(user => user.id !== userId);
      },
      (error) => {
        console.error('Error removing user:', error);
      }
    );
  }

}
