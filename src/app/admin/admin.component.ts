import { Component, OnInit } from '@angular/core';
import {AdminService} from "./service/admin.service";
import {Company} from "../company/model/company";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listCompany!: Company[];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCompany();
  }

  getAllCompany() {
    this.adminService.getAllCompany().subscribe(data => {
      this.listCompany = data;
    })
  }

  confirmCompany(company: Company) {
    this.adminService.confirmCompany(company).subscribe(() => {
      this.getAllCompany();
    })
  }

  unConfirmCompany(company: Company) {
    this.adminService.unConfirmCompany(company).subscribe(() => {
      this.getAllCompany();
    })
  }

  logOut() {
    window.sessionStorage.removeItem('company')
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('user');
    this.router.navigate(['']);
    setTimeout(function () {
      window.location.reload();
    },1 );
  }
}
