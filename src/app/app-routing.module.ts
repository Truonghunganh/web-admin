import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'categories',
        loadChildren: () =>
            import('modules/categories/categories-routing.module').then(m => m.CategoriesRoutingModule),
    },
    {
        path: 'customers',
        loadChildren: () =>
            import('modules/customers/customers-routing.module').then(m => m.CustomersRoutingModule),
    },
    {
        path: 'promotions',
        loadChildren: () =>
            import('modules/promotion/promotion-routing.module').then(m => m.PromotionRoutingModule),
    },
    {
        path: 'services',
        loadChildren: () =>
            import('modules/services/services-routing.module').then(m => m.ServicesRoutingModule),
    },
    {
        path: 'doctors',
        loadChildren: () =>
            import('modules/doctors/doctors-routing.module').then(m => m.DoctorsRoutingModule),
    },
    {
        path: 'orders',
        loadChildren: () =>
            import('modules/orders/orders-routing.module').then(m => m.OrdersRoutingModule),
    },
    {
        path: 'permission-admin',
        loadChildren: () =>
            import('modules/permission-admin/permission-admin-routing.module').then(m => m.PermissionAdminRoutingModule),
    },
    {
        path: 'permission-customer',
        loadChildren: () =>
            import('modules/permission-customer/permission-customer-routing.module').then(m => m.PermissionCustomerRoutingModule),
    },
    {
        path: 'permission-doctor',
        loadChildren: () =>
            import('modules/permission-doctor/permission-doctor-routing.module').then(m => m.PermissionDoctorRoutingModule),
    },
    {
        path: 'notifications',
        loadChildren: () =>
            import('modules/notifications/notifications-routing.module').then(m => m.NotificationsRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
