import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'country', loadChildren: '../sorting/country/country.module#CountryModule'},
            { path: 'city', loadChildren: '../sorting/city/city.module#CityModule'},
            { path: 'area', loadChildren: '../sorting/area/area.module#AreaModule'},
            { path: 'organization', loadChildren: '../sorting/organization/organization.module#OrganizationModule'},
            { path: 'customer', loadChildren: '../sorting/customer/customer.module#CustomerModule'},
            { path: 'courier', loadChildren: '../sorting/customer/customer.module#CustomerModule'},
            { path: 'vendor', loadChildren: '../sorting/vendor/vendor.module#VendorModule'},
            { path: 'POD', loadChildren: '../sorting/POD/POD.module#PODModule'}

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
