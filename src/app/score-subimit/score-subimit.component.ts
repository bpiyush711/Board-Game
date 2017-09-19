import { RandomIdService } from './../random-id.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-subimit',
  templateUrl: './score-subimit.component.html',
  styleUrls: ['./score-subimit.component.css']
})
export class ScoreSubimitComponent implements OnInit {
  score_title: number;

  constructor(private randomIdService: RandomIdService) {
  }

  ngOnInit() {
    this.randomIdService.score$.subscribe(
          data => {
            console.log('Sibling1Component-received from search: ' + data);
            this.score_title = data;
          });
  }

}
