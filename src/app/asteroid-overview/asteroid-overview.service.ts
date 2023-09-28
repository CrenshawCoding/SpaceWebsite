import { testNeos } from 'src/test/testdata';
import { Neo, NeowsResponse } from '../app.api.models';

export class AsteroidOverviewService {
  static testMode = true;

  key = 'wpTie0GXS97IRCDGD4jUXm1ubjUqWe6SE4daK1OD';
  neoApi = 'https://api.nasa.gov/neo/rest/v1/feed';

  getCurrentDateFormatted(): string {
    const today = new Date();
    return today.toISOString().substring(0, 10); // Gets only the Date part from the string
  }

  getApiForTodaysNeos() {
    const timestampToday = this.getCurrentDateFormatted();
    return this.appendApiKey(
      this.neoApi + `?start_date=${timestampToday}&end_date=${timestampToday}`
    );
  }

  appendApiKey(target: string) {
    return target + '&api_key=' + this.key;
  }

  getData(): Promise<NeowsResponse> {
    if (AsteroidOverviewService.testMode) {
      return new Promise((resolve) => {
        resolve(testNeos);
      });
    }
    return fetch(this.getApiForTodaysNeos())
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response as NeowsResponse;
      });
  }

  stripBracketsFromName(name: string): string {
    if (name.startsWith('(')) {
      name = name.substring(1);
    }
    if (name.endsWith(')')) {
      name = name.substring(0, name.length - 1);
    }
    return name;
  }
}
