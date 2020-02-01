const core = require("@actions/core");
const request = require("request-promise");

(async () => {
  try {
    const lat = core.getInput("lat");
    const long = core.getInput("long");
    console.log(`lat: ${lat}, long: ${long}`);
    const uri = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

    const response = await request({
      uri: uri,
      json: true
    });

    core.setOutput("temperature", `${response.main.temp}` || "100");
    core.setOutput("place", `${response.name}` || "Test");
  } catch (error) {
    core.setFailed(error);
  }
})();
