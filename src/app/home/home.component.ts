import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  ajouter(){
    this.route.navigate(['follower', 12, 'saidi'],
    {
      queryParams: {page: 13, type: 'admin'}
    }
    )
  }

}
