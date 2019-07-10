import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Member } from '../classes/member';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMembers$() {
    return this.http.get('http://localhost:3000/clientes');
  }

  getMember$(id: string) {
    return this.http.get<Member>(`http://localhost:3000/clientes/${id}`);
  }

  addMember$(member:Member) {
    return this.http.post<Member>('http://localhost:3000/clientes', member)
      .pipe(tap((member: Member) => console.log(`added member: id=${member.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }

  deleteMember$(id: string) {
    return this.http.delete(`http://localhost:3000/clientes/${id}`);
  }

  editMember$(member:Member) {
    return this.http.put<Member>('http://localhost:3000/clientes', member)
      .pipe(tap((member: Member) => console.log(`edited member: id=${member.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }
}
