import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../../model/users";
import { environment } from "src/environments/environment.prod";
import {SearchForm} from "../../model/SearchForm";


@Injectable({
  providedIn: 'root'
})

export class UserService{
API_USER = environment.API_LOCAL + `user`;
  constructor(private http: HttpClient) {
  }

  findUserById(id: number): Observable<any> {
    return this.http.get<any>(this.API_USER+`/${id}`);
  }

  updateUser(id: number, user: Users): Observable<any> {
    return this.http.put(this.API_USER + `/${id}`, user);
  }

  getJobLocation():Observable<any>{
    return this.http.get<any>(this.API_USER +'/getJobLocation')
  }

  searching(searchForm: any): Observable<any> {
    let formSearch: SearchForm = new SearchForm("","",0,0,0);
    if (searchForm.salary != null){
      formSearch = new SearchForm(searchForm.title, searchForm.jobLocation, searchForm.idField, searchForm.salary.min, searchForm.salary.max);
    }else {
      formSearch = new SearchForm(searchForm.title, searchForm.jobLocation, searchForm.idField, null,null);
    }
    console.log(formSearch)
    // const params = nextPage;
    return this.http.put<any>(this.API_USER  +`/search/post`, formSearch);
  }

}
