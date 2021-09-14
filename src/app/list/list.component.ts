import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = []

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.users = this.data.getUsers()
  }

  viewUser(user: User) {
    this.data.deleteUser(user)
    this.users = this.data.getUsers()
  }

}
