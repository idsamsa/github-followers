import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectUnsubscribedError } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { IPost } from './post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
btnStatus:boolean = true
posts
post = {
  id:0,
  title:'',
  body:'',
  userId:0
  }

constructor(private posteService: PostService) 
  {
    
  }
  ngOnInit() {
    this.getPosts()
  }
  /*
    get Posts function one Post from server
    and from Posts collection
    param:
  */
  getPosts(){
    this.posteService.getAll()
           .subscribe(data => (this.posts = data)
        , error => {
          alert('erreur inattendue!!!')
        }
    );
  }
  
  /*
    create Post function one Post from server
    and from Posts collection
    param:
  */
  createPost(){
    this.posteService.create(this.post)
        .subscribe( newPost =>{    
      this.post.id = newPost['id']
      this.posts.unshift(this.post);
      this.post = {
        id:0,
        title:'',
        body:'',
        userId:0
        }      
    }, (error: AppError) =>{
      if (error instanceof BadInput) {
        alert('merci de vérifier vos informations')
      } else {
        alert('erreur inattendue!!!')
        console.log(error)
      }
      
    })
  }
  /*
    edit Post function one Post from server
    and from Posts collection
    param:
  */
  editPost(epost)
  {
    this.post = epost
    this.btnStatus=false
  }
  /*
    update Post function one Post from server
    and from Posts collection
    param:
  */
  updatePost(){
    this.posteService.update(this.post)
    .subscribe(() => {
      this.post = { //init the object post
        id:0,
        title:'',
        body:'',
        userId:0
        }
    this.btnStatus=true
    }, error =>{
      alert('erreur inattendue!!!')
    })
    
  }
  /*
    delete Post function remove one Post from server
    and from Posts collection
    param: Post
  */
  deletePost(dpost){
    this.posteService.delete(dpost)
    .subscribe(() => {
      let index = this.posts.indexOf(dpost)
      this.posts.splice(index,1)  //delete one post from this index
    }, (error: AppError) =>{
      if (error instanceof NotFoundError) {
        alert('ce post est deja supprime')
      }else{
        alert('erreur inattendue!!!')
      }      
    })
  }
}
