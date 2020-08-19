# GraphQL Express Experiment

## Setup

```
npm install
npm start
open http://localhost:3413
```

## Examples

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

## License

This project is open source and available under the [MIT License](LICENSE).
