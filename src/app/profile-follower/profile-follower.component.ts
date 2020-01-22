import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {
 id: number
 username: string
 type: string
 page: number

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(
    //   params => {
    //     this.id = +params.get('id');
    //     this.username = params.get('username')
        // console.log(params.get('username'))       
    //   }
    // )
        this.id = +this.route.snapshot.paramMap.get('id')
        this.username = this.route.snapshot.paramMap.get('username')
    // this.route.queryParamMap.subscribe(
    //   qParams => {
    //     console.log(qParams.get('type')) 
    //   }
    // )
    
    this.page = +this.route.snapshot.queryParamMap.get('page')
    this.type = this.route.snapshot.queryParamMap.get('type')

  }

}
