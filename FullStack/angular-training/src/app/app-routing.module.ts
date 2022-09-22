import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { ContentLayoutComponent } from './shared/layout-components/layout/content-layout/content-layout.component';
import { content } from './shared/routes/routes';
import { Error404Component } from "./pages/authentication/error404/error404.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/pages/training',
        pathMatch: 'full'
    },
    {
        path: 'pages',
        component: ContentLayoutComponent,
        canActivate: [AuthGuard],
        children: content
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    { path: 'NXB', loadChildren: () => import('./pages/nxb/nxb.module').then(m => m.NxbModule) },
    { path: 'tac-gia', loadChildren: () => import('./pages/tacgia/tacgia.module').then(m => m.TacgiaModule) },
    { path: 'sach', loadChildren: () => import('./pages/sach/sach.module').then(m => m.SachModule) },
    { path: 'bandoc', loadChildren: () => import('./pages/bandoc/bandoc.module').then(m => m.BandocModule) },
    { path: 'muonsach', loadChildren: () => import('./pages/muonsach/muonsach.module').then(m => m.MuonsachModule) },
    {
        path: '**',
        component: Error404Component
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
