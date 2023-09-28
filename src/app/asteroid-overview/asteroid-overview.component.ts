import { AsteroidOverviewService } from './asteroid-overview.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'asteroid-overview',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AsteroidOverview implements OnInit {
  asteroidOverviewService = new AsteroidOverviewService();

  title = 'space-website';

  key = 'wpTie0GXS97IRCDGD4jUXm1ubjUqWe6SE4daK1OD';
  neoApi = 'https://api.nasa.gov/neo/rest/v1/feed';

  data: TableContent[] = [];

  public AppComponent() {}

  ngOnInit(): void {
    if (this.data.length > 0) {
      return;
    }
    this.asteroidOverviewService.getData().then((result) => {
      console.log(result.near_earth_objects);
      const neos =
        result.near_earth_objects[
          AsteroidOverviewService.testMode
            ? this.asteroidOverviewService.getCurrentDateFormatted()
            : '2023-09-28'
        ];
      console.log(
        'Neos: ' +
          result.near_earth_objects[
            this.asteroidOverviewService.getCurrentDateFormatted()
          ],
        this.asteroidOverviewService.getCurrentDateFormatted()
      );
      neos.forEach((neo) => {
        this.data.push({
          name: this.asteroidOverviewService.stripBracketsFromName(neo.name),
          size:
            Math.round(
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
          time: neo.close_approach_data
            .at(0)
            ?.close_approach_date_full.substring(12),
            speed: neo.close_approach_data.at(0).relative_velocity.kilometers_per_hour
        });
      });
    });
  }
}

interface TableContent {
  name: string;
  size: number;
  distance: number;
  hazard: boolean;
  time: any;
  speed: string;
}
