const core = require("@actions/core");
const github = require("@actions/github");
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

    core.setOutput("temperature", `${ response.main.temp }`);
    core.setOutput("place", `${ response.name }`);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error);
  }
})();