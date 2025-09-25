import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login-admin.component.html',
  styleUrls: ['../login-usuario/login-usuario.component.scss']
})
export class LoginAdminComponent {

}