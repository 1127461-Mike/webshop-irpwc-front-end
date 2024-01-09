import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:8080/authenticate', { email, password });
  }

  register(user: any) {
    return this.http.post<any>('http://localhost:8080/api/v1/user/registrate', user);
  }

  loggedin(LoggedIn: boolean){
  }

}
