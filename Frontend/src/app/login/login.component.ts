import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/services/user.services';
import { ReactiveFormsModule } from '@angular/forms';
import { Register } from '@app/register/register.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
    assetPath: string;
    google: string;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
    this.assetPath = `${document.baseURI}assets/next.png`;
    this.google = `${document.baseURI}assets/google.png`;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        const newUser: Register = {
          name: response.user.displayName!,
          email: response.user.email!,
          firebase_id: response.user.uid
      }
        this.userService.registerUser(newUser).subscribe(() => {
          this.router.navigate(['/home']);
        });
      })
      .catch(error => console.log(error))
  }

  onRegister() {
        this.router.navigate(['/register']);
  }

}