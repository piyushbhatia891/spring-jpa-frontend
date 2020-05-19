import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BooksComponent } from "./books.component";

const routes: Routes = [
  { path: "", redirectTo: "view-books/:id", pathMatch: "full" },
  {
    path: "view-books/:id",
    component: BooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
