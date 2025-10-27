import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormModelHelper } from '../../helper/FormModelHelper';
import { Auth } from '../../../../core/services/auth';

interface FormParams {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  form!: FormGroup<FormModelHelper<FormParams>>;

  constructor(private fb: NonNullableFormBuilder, private auth: Auth) {}

  ngOnInit(): void {
    this.form = this.fb.group<FormModelHelper<FormParams>>({
      username: this.fb.control('', { validators: [Validators.required] }),
      password: this.fb.control('', { validators: [Validators.required] }),
    });
  }

  submit() {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      this.auth.login(data);
    }
  }
}
