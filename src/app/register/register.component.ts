import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/services/user.services';
import { environment } from '@environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Register } from './register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;
  assetPath: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
    this.assetPath = `${document.baseURI}assets/next.png`;
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .register(this.formReg.value)
      .then((response) => {
        console.log(response);
        const newUser: Register = {
          name: '',
          email: this.formReg.value.email,
          firebase_id: '',
        };
        console.log(newUser);
        this.userService.registerUser(newUser).subscribe(() => {
          this.router.navigate(['/login']);
        });
      })
      .catch((error) => console.log(error));
  }
}
