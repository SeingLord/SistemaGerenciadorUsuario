import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/Usuarios';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    private API_PATH = 'https://localhost:44372/api/';
    httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
        })
    };
    constructor(private http: HttpClient) { }

    public get(endPoint): Promise<any> {
        return this.http.get(`${this.API_PATH + endPoint}`).toPromise();
    }

    public post(endPoint, body): Promise<any> {
        return this.http.post(`${this.API_PATH + endPoint}`, body).toPromise();
    }
    public put(endPoint, body): Promise<any> {
        return this.http.put(`${this.API_PATH + endPoint}`, body).toPromise();
    }
    public delete(endPoint) {
        return this.http.delete(`${this.API_PATH + endPoint}`).toPromise();
    }
}