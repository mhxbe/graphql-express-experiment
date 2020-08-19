# GraphQL Express Experiment

A small experiment with bare-bones GraphQL.
It's possible this experiment will be extended with [Apollo GraphQL](https://www.apollographql.com/) examples but for now, it's _"just GraphQL"_.

## Setup

```
npm install
npm start
open http://localhost:3413
```

## Basic Examples

### Query

Get all lines

```
{
  lines {
    id
    name
  }
}
```

Get line by id

```
{
  line(lineId: "32") {
    id
    name
  }
}
```

### Mutation

Add a stop

```
mutation addStop($stop: StopInput!) {
  createStop(stop: $stop) {
    id
    name
  }
}

// QUERY VARIABLES
{
  "stop": {"stopId": "9000", "name": "Gent"}
}
```

## Advanced Example

In this example, a nested query is made so we can merge/enrich our request from different data sources.

```
{
  EnrichedLines {
    id
    colors {
      text
      background
      border
    }
    stops {
      id
      name
    }
  }
}
```

If you want to test this, make sure to swap `simpleSchema` with `advancedSchema` in `graphql.controller.js`.

## License

This project is open source and available under the [MIT License](LICENSE).
