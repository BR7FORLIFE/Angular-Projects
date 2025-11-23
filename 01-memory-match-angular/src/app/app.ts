import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Table } from "./table/table";

@Component({
  selector: 'app-template',
  imports: [RouterOutlet, Table],
  templateUrl: './app.html',
})
export class App {
  protected title = 'Memory Game!';
  protected description = 'this is memorama game, enjoy thinking!';
}
