import { Component } from '@angular/core';
import { MenuDashboard } from "../menu-dashboard/menu-dashboard";
import { Statistics } from "../statistics/statistics";


@Component({
  selector: 'app-dashboard',
  imports: [MenuDashboard, Statistics],
  templateUrl: './dashboard.html',
})
export class Dashboard {

}
