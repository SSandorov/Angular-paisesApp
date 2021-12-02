import { NgModule } from "@angular/core"; 
import { RouterModule, Routes } from "@angular/router";

import { PorPaisComponent } from "./paises/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./paises/pages/por-region/por-region.component";
import { PorCapitalComponent } from "./paises/pages/por-capital/por-capital.component";
import { VerPaisComponent } from "./paises/pages/ver-pais/ver-pais.component";

const routes: Routes = [
    {
        path: "", // Es la extensión de la url, en este caso está vacío
        component: PorPaisComponent, // Tiene que estar exportado correctamente al app.module
        pathMatch: "full" //extrictamente buscará una url vacía
    },
    {
        path: "region",
        component: PorRegionComponent
    },
    {
        path: "capital",
        component: PorCapitalComponent
    },
    /*
     Ver país tiene una ruta especial, ya que la url sería pais/(seguido del nombre del país) 
     para ello creamos un argumento de la siguiente manera:

        "url/:nombreArgumento"

     */
    {
        path: "pais/:id",
        component: VerPaisComponent
    },
    // Tenemos que añadir una ruta para cuando no haya una ruta establecida
    {
        path: "**",
        redirectTo: ""
        /*
        Podríamos crear un component 404 en lugar del redirectTo
        seria:
        component: 404Component
        */
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}