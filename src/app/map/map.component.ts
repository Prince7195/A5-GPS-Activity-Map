import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IActivity } from '../shared/activity.model';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private _mapService: MapService,
              private _route: ActivatedRoute) { }

  activity: any;
  activityName: string;
  activityComments: string;
  activityDate: Date;
  activityDistance: number;
  gpx: any;

  ngOnInit() {
    this.activity = this._mapService.getActivity(
      +this._route.snapshot.params['id']
    );
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this._mapService.plotActivity(this.activity);
    this.activityName = this.activity.name;
    this.activityComments = this.activity.comments;
    this.activityDate = this.activity.date;
    this.activityDistance = this.activity.distance;
    this.gpx = this.activity.gpxData;
  }

}
