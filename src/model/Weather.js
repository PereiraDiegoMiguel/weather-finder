const Weather = function (data) {
  this.data = data;
  this.errors = [];
}

Weather.prototype.validadeUserInput = function () {
  if (this.data === "") {
    this.errors.push("Please enter the name of the city.")
  }
}

module.exports = Weather;