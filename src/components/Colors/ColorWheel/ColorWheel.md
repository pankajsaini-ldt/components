```js noeditor
const StatusAndResources = require('../../../../styleguide_components/StatusAndResources')
  .StatusAndResources

;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/h7RYPRCSlz3k8fLzEMRSzy/Color-Wheel?node-id=83%3A3"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Colors/ColorWheel.tsx"
  feedbackTitle="ColorWheel Component Feedback"
/>
```

### Default Colorwheel

The `<ColorWheel/>` renders an HSV based color wheel. The wheel can be rendered at any needed size by providing a `size` property.
The color wheel defaults to selecting a highly saturated and bright red hue.

[This website has a nice treatment on the HSV color space,](http://learn.leighcotnoir.com/artspeak/elements-color/hue-value-saturation/)
One takeaway is that HSV color space can be thought of as a cylinder, where each slice of the cylinder is showing a circle at a particular
value between 0 and 1. `Hue` can be thought of as the angle from the center of the circle can take on values between 0 and 360.
`Saturation` is the distance from the center on a unit circle.

```js
import { ColorWheel } from './ColorWheel'
;<ColorWheel size={300} />
```

### Hue, saturation, and value properties

The `<ColorWheel />` component accepts `hue`, `saturation`, and `value`. Setting the `value` will change the brightness of the
of the color wheel itself, while changing the `hue` and `saturation` will indicate what color has been selected on the color wheel.

```js
import { ColorWheel } from './ColorWheel'
;<ColorWheel size={200} hue={140} saturation={0.5} value={1} />
```

### onColorChanged property

Use this to provide a callback to know when a new (hue, saturation) tuple has been clicked. Note that the brightness will never change for a given
slice of a color wheel, and should be handled outside the color wheel component.

```js
const ColorWheelDemo = require('../../../../styleguide_components/ColorWheelDemo')
  .ColorWheelDemo
;<ColorWheelDemo />
```