import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    {nom : "Vossough", prenom : "Thomas", age : 12, adresse : {num : 10, rue : "du marais", ville : "Lille"}, chats : ["Marius", "pasFelix"]},
    {nom : "Raoux", prenom : "Killian", age : 12, adresse : {num : 60, rue : "de la paix", ville : "Paris"}, chats : ["Jaya", "Milo", "Lylas"]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ajouterUser = (user) => {
    this.users.push(user);
  } 

}
