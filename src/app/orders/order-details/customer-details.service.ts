import { Injectable } from '@angular/core';

export type User = {
  Id:number;
  Name:string;
  Description:String;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {
public count:number = 1;
  public users: User[] = [];

  constructor() { }

  public addUser(cusDetails: User) {
    this.users.push({...cusDetails, Id: this.count++});
  }
  
  public updateUser(data : any) {
    const index = this.users.map(x => x.Id).indexOf(data.Id);
    if (index !== -1) {
      this.users[index] = data;
    }
  }
}
