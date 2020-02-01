# weather-action

This action prints weather for passed place with lat/long.

> The weather in Berlin is 10.83°C

## Inputs

### `lat`

**Required** latitude

### `long`

**Required** longitude

## Outputs

### `temperature`

Current temperature in passwd lat/long.

### `place`

The name of the passed place (extracted from lat/long).

## Example usage

```yaml
uses: vadimdez/weather-action@9
with:
  lat: "52.521737"
  long: "13.413117"
```
