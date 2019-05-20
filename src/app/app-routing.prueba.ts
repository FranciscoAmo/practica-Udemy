import { NgModule } from '@angular/core';
import { AboutComponent } from './paginas/about/about.component';
import { BodyComponent } from './paginas/body/body.component';
import { ItemComponent } from './paginas/item/item.component';
import { Routes, RouterModule } from '@angular/router';

const app_routes: Routes=[
    {path:'home',component:BodyComponent},
    {path:'about',component:AboutComponent},
    {path:'item',component:ItemComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}

];


@NgModule({
imports:[RouterModule.forRoot(app_routes,{useHash:true})],
exports: [RouterModule
]

})
export class AppRouting{


}