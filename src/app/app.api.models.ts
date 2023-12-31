export interface TleResponse {
  member: Array<SatelliteData>;
  totalItems: number;
}

export interface SatelliteData {
  satelliteId: number;
  name: string;
  date: Date;
  line1: string;
  line2: string;
}

// Near Earth Object Web Service
export interface NeowsResponse {
  links: {self: string};
  near_earth_objects: { [date: string]: Neo[] };
}

export interface Neo {
  links: {self: string};
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    meters: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: Array<CloseApproachData>;
  is_sentry_object: boolean;
}

export interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: {
    kilometers_per_second: string;
    kilometers_per_hour: string;
  };
  miss_distance: { astronomical: string; kilometers: string };
}
