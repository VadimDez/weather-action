const core = require("@actions/core");
const request = require("request-promise");

(async () => {
  try {
    const lat = core.getInput("lat");
    const long = core.getInput("long");

    if (lat === "" || long === "") {
      core.setFailed("No lat or long specified");
      return;
    }

    const uri = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

    const response = await request({
      uri: uri,
      json: true,
      headers: {
        'User-Agent': 'Request-Promise'
      },
    });

    core.setOutput("temperature", `${response.main.temp}`);
    core.setOutput("place", `${response.name}`);
  } catch (error) {
    core.setFailed(error);
  }
})();
