import Stats from 'stats-js';
import $ from 'jquery';

class StatsHelper {

  constructor() {
    this.stats = new Stats();
    this.stats.setMode(0);
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px';
    $('#stats-container').append(this.stats.domElement);
  }

}

export default new StatsHelper();
