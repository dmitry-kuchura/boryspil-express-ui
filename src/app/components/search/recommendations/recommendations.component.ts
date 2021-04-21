import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../api-repository/api.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
  }

}
