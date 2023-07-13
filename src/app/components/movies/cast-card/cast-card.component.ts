import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-cast-card',
  templateUrl: './cast-card.component.html',
  styleUrls: ['./cast-card.component.css']
})
export class CastCardComponent implements OnInit{

  
  @Input() castInfo: Cast | undefined
  actorImage: string = ''

  ngOnInit(): void {
    if(this.castInfo?.profile_path == null) this.actorImage = 'https://via.placeholder.com/200'
    else this.actorImage = `${environment.imageUrl}${this.castInfo?.profile_path}`
  }


}
