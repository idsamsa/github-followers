import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { faStar} from '@fortawesome/free-solid-svg-icons/faStop'
import { from } from 'rxjs';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite:boolean = false
  @Output('change')  click = new EventEmitter()

  
  constructor() { }

  maFavorite(){
    this.isFavorite = !this.isFavorite
    this.click.emit({
      'status': this.isFavorite,
      'color': 'black'
    })
  }

  ngOnInit() {
  }

}
