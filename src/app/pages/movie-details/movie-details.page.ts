import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  information = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService : MovieService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("ID-->",id);
    this.movieService.getdetails(id).subscribe(result => {
      console.log("Details--->",result);
      this.information = result;
    })
  }

}
