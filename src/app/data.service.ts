import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users: User[]

  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Jonathan',
        job: 'Front-end'
      },
      {
        id: 2,
        name: 'Carla',
        job: 'Back-end'
      },
      {
        id: 3,
        name: 'Mario',
        job: 'CEO'
      },      
    ]
  }

  getUsers(): User[] {
    return this.users
  }

  addNewUser(user: User): void {
    this.users.push(user)
  }

  newUser(): User {
    return {
      id: this.users.length + 1,
      name: '',
      job: ''
    }
  }

  deleteUser(user: User) {
    // alert(user.id)
    this.users = this.users.filter(el => el.id !== user.id)
  }

}
