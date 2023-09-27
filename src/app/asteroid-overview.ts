import { Component, OnInit } from '@angular/core';
import { SatelliteData, NeowsResponse, Neo } from './app.api.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'space-website';

  key = 'wpTie0GXS97IRCDGD4jUXm1ubjUqWe6SE4daK1OD';
  neoApi = 'https://api.nasa.gov/neo/rest/v1/feed';

  data: TableContent[] = [];

  iss: SatelliteData = {
    satelliteId: 25544,
    name: 'ISS (ZARYA)',
    date: new Date('2023-09-24T04:24:22+00:00'),
    line1:
      '1 25544U 98067A   23267.18358897  .00017598  00000+0  32006-3 0  9992',
    line2:
      '2 25544  51.6414 198.1738 0005906  52.6735  89.7966 15.49591051417140',
  };

  public AppComponent() {}

  getCurrentDateFormatted(): string {
    const today = new Date();
    return today.toISOString().substring(0, 10); // Gets only the Date part from the string
  }

  getApiForTodaysNeos() {
    const timestampToday = this.getCurrentDateFormatted();
    return this.appendApiKey(this.neoApi + `?start_date=${timestampToday}&end_date=${timestampToday}`);
  }

  appendApiKey(target: string) {
    return target + '&api_key=' + this.key;
  }

  getData(): Promise<NeowsResponse> {
    return fetch(this.getApiForTodaysNeos())
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response as NeowsResponse;
      });
  }

  ngOnInit(): void {
    this.getData().then((result) => {
      console.log(result.near_earth_objects);
      const neos = result.near_earth_objects[this.getCurrentDateFormatted()];
      console.log('Neos: ' + result.near_earth_objects[this.getCurrentDateFormatted()], this.getCurrentDateFormatted())
      neos.forEach((neo) => {
        this.data.push({
          id: neo.id,
          size: Math.round(
            Number(
              ((neo.estimated_diameter.meters.estimated_diameter_max +
                neo.estimated_diameter.meters.estimated_diameter_min) /
                2) *
                100
            )
          ) / 100,
          distance:
            Math.round(
              Number(
                neo.close_approach_data.at(0)?.miss_distance.astronomical
              ) * 1000
            ) / 1000,
          hazard: neo.is_potentially_hazardous_asteroid,
          time: neo.close_approach_data.at(0)?.close_approach_date_full.toTimeString()
        });
      });
    });
  }
}

interface TableContent {
  id: string;
  size: number;
  distance: number;
  hazard: boolean;
  time: string | undefined;
}
