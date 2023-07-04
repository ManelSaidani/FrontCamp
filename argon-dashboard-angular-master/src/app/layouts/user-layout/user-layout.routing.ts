import { Routes } from '@angular/router';
import { BoardUserComponent } from 'src/app/pages/board-user/board-user.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';



export const UserLayoutRoutes: Routes = [
    { path: 'boarduser',          component: BoardUserComponent },
    { path: 'user-profile',   component: UserProfileComponent },
];
