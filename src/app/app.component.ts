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

  getData(): Promise<NeowsResponse> {
    // return new Promise((resolve, reject) =>
    //   setTimeout(() => {
    //     resolve(this.iss);
    //   }, 100)
    // );
    return fetch(
      'https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-24&end_date=2023-09-24&api_key=' +
        this.key
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response as NeowsResponse;
      });
  }

  ngOnInit(): void {
    this.getData().then((result) => {
      console.log(result.near_earth_objects);
      const neos = result.near_earth_objects['2023-09-24'];
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
}
