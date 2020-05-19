import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LibraryComponent } from "./library.component";

const routes: Routes = [
  { path: "", redirectTo: "libraries-list", pathMatch: "full" },
  {
    path: "libraries-list",
    component: LibraryComponent
  },
  {
    path: "view-books/:libraryId",
    loadChildren: "../../books/books/books.module#BooksModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {}
