import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LibraryComponent } from "./modules/library/library/library.component";
import { BooksComponent } from "./modules/books/books/books.component";

const routes: Routes = [
  { path: "", redirectTo: "view-libraries", pathMatch: "full" },
  {
    path: "view-libraries",
    loadChildren: "./modules/library/library/library.module#LibraryModule"
  },
  { path: "view-books/:id", component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
