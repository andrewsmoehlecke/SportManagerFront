import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.initForm();
  }

  public initForm(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
