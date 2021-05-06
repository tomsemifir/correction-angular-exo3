import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm : FormGroup;

  @Output() userEvent = new EventEmitter<any>();

  constructor(private fb : FormBuilder) { 
    this.userForm = this.fb.group({
      nom : [''],
      prenom : [''],
      age : [0],
      adresse : this.fb.group({
        num : [0],
        rue : [''],
        ville : ['']
      }),
      chats : this.fb.array([
        this.fb.control('')
      ])
    })
  }

  ngOnInit(): void {
  }

  get chats() : FormArray {
    return this.userForm.get("chats") as FormArray;
  }

  ajouterChat = () => {
    this.chats.push(this.fb.control(''));
  }

  inscription = () => {
    this.userEvent.emit(this.userForm.value);
  }

}
