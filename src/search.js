import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';
import fetchJsonp from 'fetchJsonp';

@inject(HttpClient)
export class Search {
  heading = "All of Man's Knowledge:";
  search = '';
  results = [];

  constructor(http) {
    http.configure(config => {
      config 
        .useStandardConfiguration() // credentials: 'same-origin',
        .withDefaults({
              headers: {
                'Accept': 'application/javascript',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'Fetch'
            }
        });
        // .withBaseUrl(`https://en.wikipedia.org/w/api.php?`);
    });

    this.http = http;
  }

  submit() {
    return fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&prop=extracts&format=json&titles=${this.search}`)
      .then(response => response.json())
      .then(json => console.log('json --> ', json))
      .catch(ex => console.log('parsing failed --> ', ex));
  }

  custom_callback(data) {
    return data;
  }
}