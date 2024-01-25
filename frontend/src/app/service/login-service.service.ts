import {Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{apiUrls} from '../api.urls';

@Injectable({
    providedIn: 'root'
})
export class authService{
    http= inject(HttpClient);
    LoginService(loginObj: any){
        return this.http.post<any>(`${apiUrls.authServiceApi}login`, loginObj);
    }
}

