import { NgModule } from '@angular/core';
import { AboutComponent } from './paginas/about/about.component';
import { BodyComponent } from './paginas/body/body.component';
import { ItemComponent } from './paginas/item/item.component';
import { Routes, RouterModule } from '@angular/router';

const app_routes: Routes=[
    {path:'',component:BodyComponent},
    {path:'about',component:AboutComponent},
    {path:'item',component:ItemComponent},
    {path:'**',pathMatch:'full',redirectTo:''}

];


@NgModule({
imports:[RouterModule.forRoot(app_routes)],
exports: [RouterModule
]

})
export class AppRouting{


}