import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.css']
})
export class UserSpaceComponent implements OnInit {

  @Input()
  user! : any;
  
  constructor(private authService: AuthService,
              private router: Router) { 

    }

  ngOnInit(): void {
  }

  logout(): void{
    this.authService.logout();
  }

}
