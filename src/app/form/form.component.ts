import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User = {id: this.data.getUsers().length + 1, name: '', job: ''}

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  addUser(){
    this.data.addNewUser(this.user)
    this.user = this.data.newUser()
  }

}
