import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  constructor(private router: Router) {
    
   }

  ngOnInit() {
  }
  signUp(){
    this.router.navigate(['/singup']);

  }
  signIn(){
    this.router.navigate(['/login']);
  }
}
