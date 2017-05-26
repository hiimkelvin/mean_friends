import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserShowComponent } from './user/user-show/user-show.component';
import { UserDestroyComponent } from './user/user-destroy/user-destroy.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/friends', pathMatch: 'full' },
    { path: 'friends', component: UserComponent, children: [
        { path: '', component: UserListComponent },
        { path: 'new', component: UserNewComponent },
        { path: 'show/:id', component: UserShowComponent },
        { path: 'edit/:id', component: UserEditComponent },
        { path: 'destroy/:id', component: UserDestroyComponent },
    ]},
];

export const routing = RouterModule.forRoot(APP_ROUTES);