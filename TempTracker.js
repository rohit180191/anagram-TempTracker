class TempTracker() {

  var obj = {};
  this.max = null;
  this.min = null;
  this.count = 0;
  this.mean = null;
  this.mode = null;
  // var max, min, count = 0, mean = 0, mode;

  function insert (temperature) {
  
    obj[temperature] = (obj[temperature] || 0) + 1;
    if (this.max == null && (temperature)) {
      this.max = this.min = this.mode = this.mean = temperature;
    }
    if (temperature > this.max) {
      this.max = temperature;
    }
    if (temperature < this.min) {
      this.min = temperature;
    }
    if (obj[temperature] > obj[this.mode]) {
      this.mode = temperature;
    }
    this.mean = this.mean * this.count;
    this.count++;
    this.mean = (this.mean + temperature) / this.count;
  };
  
 function get_max() {
    return this.max;
  };
  
  function get_min() {
    return this.min;
  };
  
  function get_mean() {
    return this.mean;
  };
  
 function get_mode() {
    return this.mode;
  };
}
