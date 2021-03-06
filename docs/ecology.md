VictoryBar
=============

Draw SVG bar charts with [React](https://github.com/facebook/react). VictoryBar is a composable component, so it doesn't include axes. Check out [VictoryChart](https://github.com/FormidableLabs/victory-animation) for complete bar charts and more.

## Features

### Props are Optional

VictoryBar is written to be highly configurable, but it also includes a set of sensible defaults and fallbacks. If no props are provided, VictoryBar will plot sample data.

``` playground
<VictoryBar/>
```

To display your own data, just pass in an array of data objects, or an array of arrays via the data prop. Here, the x domain is automatically set to contain the data. The y domain is explicity set here to make the smallest bars more visible.

```playground
<VictoryBar
  domain={{y: [0, 4]}}
  data={[
    {x: 1, y: 1},
    {x: 2, y: 2},
    {x: 3, y: 3},
    {x: 4, y: 2},
    {x: 5, y: 1}
  ]}
/>
```

Pass in an array of arrays of data objects to create a set of grouped bars. The bars are automatically colored separately for each data series.

```playground
<VictoryBar
  domain={{y: [0, 4]}}
  height={500}
  data={[
    [
      {x: 1, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 3}
    ],
    [
      {x: 1, y: 2},
      {x: 2, y: 1},
      {x: 3, y: 1}
    ],
    [
      {x: 1, y: 3},
      {x: 2, y: 4},
      {x: 3, y: 2}
    ],
  ]}
/>
```

Add the `stacked` prop to create a stacked layout. The y domain is automatically set to account for the cumulative maximum of the data:

```playground
<VictoryBar stacked
  height={500}
  data={[
    [
      {x: 1, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 3}
    ],
    [
      {x: 1, y: 2},
      {x: 2, y: 1},
      {x: 3, y: 1}
    ],
    [
      {x: 1, y: 3},
      {x: 2, y: 4},
      {x: 3, y: 2}
    ],
  ]}
/>
```

### Flexible and Configurable

The sensible defaults VictoryBar provides makes it easy to get started, but everything can be overridden, and configured to suit your needs:

```playground
<VictoryBar horizontal stacked
  height={500}
  padding={75}
  style={{
    data: {width: 20},
    labels: {fontSize: 14}
  }}
  data={[
    [
      {x: 1, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 3}
    ],
    [
      {x: 1, y: 2},
      {x: 2, y: 1},
      {x: 3, y: 1}
    ],
    [
      {x: 1, y: 3},
      {x: 2, y: 4},
      {x: 3, y: 2}
    ],
  ]}
  labels={["one", "two", "three"]}
  dataAttributes={[
    {fill: "tomato"},
    {fill: "orange"},
    {fill: "cornflowerblue"},
  ]}
/>
```
*NOTE: horizontal bars are only partially supported in VictoryChart. Check for updates soon!*

### Animating

VictoryBar animates with [VictoryAnimation](http://github.com/formidablelabs/victory-animation) as data changes when an `animate` prop is provided.

```playground_norender
class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
    };
  }

  getData() {
    return _.map(_.range(5), (index) => {
      return [
        {x: "apples", y: _.random(1, 5)},
        {x: "oranges", y: _.random(1, 5)},
        {x: "bananas", y: _.random(1, 5)}
      ];
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 3000);
  }

  render() {
    return (
      <VictoryBar
        height={600}
        padding={75}
        domain={{
          x: [1, 3],
          y: [0, 5]
        }}
        animate={{velocity: 0.02}}
        data={this.state.data}
        dataAttributes={[
          {fill: "cornflowerblue"},
          {fill: "tomato"},
          {fill: "orange"},
          {fill: "gold"}
        ]}
      />  
    );
  }
}
ReactDOM.render(<App/>, mountNode);

```
