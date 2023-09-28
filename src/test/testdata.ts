import { NeowsResponse, SatelliteData } from 'src/app/app.api.models';

export const testNeos: NeowsResponse = {
  links: { self: '' },
  near_earth_objects: {
    '2023-09-28': [
      {
        links: {
          self: 'http://api.nasa.gov/neo/rest/v1/neo/3384067?api_key=wpTie0GXS97IRCDGD4jUXm1ubjUqWe6SE4daK1OD',
        },
        id: '3384067',
        neo_reference_id: '3384067',
        name: '(2007 RU9)',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3384067',
        absolute_magnitude_h: 20.7,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.1925550782,
            estimated_diameter_max: 0.4305662442,
          },
          meters: {
            estimated_diameter_min: 192.5550781879,
            estimated_diameter_max: 430.566244241,
          },
        },
        is_potentially_hazardous_asteroid: true,
        close_approach_data: [
          {
            close_approach_date: '2023-09-28',
            close_approach_date_full: '2023-Sep-28 15:52',
            epoch_date_close_approach: 1695916320000,
            relative_velocity: {
              kilometers_per_second: '21.2534376859',
              kilometers_per_hour: '76512.3756692011',
            },
            miss_distance: {
              astronomical: '0.1604399752',
              kilometers: '24001478.552772824',
            },
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: 'http://api.nasa.gov/neo/rest/v1/neo/3581506?api_key=wpTie0GXS97IRCDGD4jUXm1ubjUqWe6SE4daK1OD',
        },
        id: '3581506',
        neo_reference_id: '3581506',
        name: '(2011 TB4)',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3581506',
        absolute_magnitude_h: 25.4,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.022108281,
            estimated_diameter_max: 0.0494356193,
          },
          meters: {
            estimated_diameter_min: 22.1082810359,
            estimated_diameter_max: 49.435619262,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: '2023-09-28',
            close_approach_date_full: '2023-Sep-28 21:43',
            epoch_date_close_approach: 1695937380000,
            relative_velocity: {
              kilometers_per_second: '19.6051964197',
              kilometers_per_hour: '70578.7071110284',
            },
            miss_distance: {
              astronomical: '0.2179460329',
              kilometers: '32604262.296789923',
            },
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: 'http://api.nasa.gov/neo/rest/v1/neo/3608565?api_key=wpTie0GXS97IRCDGD4jUXm1ubjUqWe6SE4daK1OD',
        },
        id: '3608565',
        neo_reference_id: '3608565',
        name: '(2012 RH10)',
        nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3608565',
        absolute_magnitude_h: 22.14,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0992098919,
            estimated_diameter_max: 0.2218400624,
          },
          meters: {
            estimated_diameter_min: 99.2098919421,
            estimated_diameter_max: 221.8400624229,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: '2023-09-28',
            close_approach_date_full: '2023-Sep-28 00:02',
            epoch_date_close_approach: 1695859320000,
            relative_velocity: {
              kilometers_per_second: '10.2005587063',
              kilometers_per_hour: '36722.0113425569',
            },
            miss_distance: {
              astronomical: '0.2989174969',
              kilometers: '44717420.841971603',
            },
          },
        ],
        is_sentry_object: false,
      },
    ],
  },
};

const iss: SatelliteData = {
  satelliteId: 25544,
  name: 'ISS (ZARYA)',
  date: new Date('2023-09-24T04:24:22+00:00'),
  line1:
    '1 25544U 98067A   23267.18358897  .00017598  00000+0  32006-3 0  9992',
  line2:
    '2 25544  51.6414 198.1738 0005906  52.6735  89.7966 15.49591051417140',
};
