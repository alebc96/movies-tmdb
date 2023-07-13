import { Component, Input } from '@angular/core';
import { Review } from '../../../interfaces/review';

@Component({
  selector: 'app-reviews-info',
  templateUrl: './reviews-info.component.html',
  styleUrls: ['./reviews-info.component.css']
})
export class ReviewsInfoComponent {

  @Input() review: Review | undefined

}
