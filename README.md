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
mutation addStop ($stopId: String!, $name: String!) {
  createStop(stopId: $stopId, name: $name) {
    id
    name
  }
}

// QUERY VARIABLES
{
  "stopId": "1000", "name": "Brussel Beurs"
}
```

## License

This project is open source and available under the [MIT License](LICENSE).
