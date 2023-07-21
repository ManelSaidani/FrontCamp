import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
  editingUser: any; // To store the user being edited
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
  editUser(user: any) {
    // Create a copy of the user object to avoid directly modifying the original object
    this.editingUser = { ...user };
  }

  handleUpdateUser(updatedUser: any) {
    if (updatedUser) {
      // If the updated user is not null, it means the user clicked the "Update" button
      // Perform the update logic here (similar to the updateUser() method in the previous approach)

      // For example, you can call the UserService method to update the user on the backend
      this.userService.updateUser(updatedUser.id, updatedUser).subscribe(
        (updatedUserResponse) => {
          // Replace the original user with the updated user in the users array
          const index = this.users.findIndex(user => user.id === updatedUser.id);
          if (index !== -1) {
            this.users[index] = updatedUserResponse;
          }
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }

    // Reset the editingUser to null to close the modal
    this.editingUser = null;
  }
}
