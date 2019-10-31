Breakpoints give hooks for components and layouts to adapt and change in relation to the window size of the users device.

Lens uses a mobile first approach to breakpoints, that means we use the `min-width` property for our media queries. This technique is used for applying basic layout styles first and then using breakpoints to adjust for wider screens.

***

### Available Breakpoints


```js noeditor
const BreakpointOptionsRender = require('../../../styleguide_components/BreakpointTable').BreakpointOptionsRender;

<BreakpointOptionsRender />
```

There are a few ways to use the breakpoints, for simpler responsive behaviors you can use them as an array of values inline like

```js
import { Box } from '../../components/Box';

<Box bg={['green', 'blue', 'red', 'purple']} p="xxlarge" color="white">My background changes color as you resize the window</Box>
```

Another option if you are writing more complex responsive behaviors you can access the breakpoints from the theme and use them a styled block

```typescript jsx
import { Box, styled } from looker-lens

const ResponsiveBox = styled(Box)`
  background: green;

  //  make the background red at breakpoint[0] (480px)
  @media (min-width ${props => props.theme.breakpoints[0]}) {
    background: red;
  }

  // make the background red at breakpoint[1] (768x)
  @media (min-width ${props => props.theme.breakpoints[1]}) {
    background: blue;
  }

`
```
