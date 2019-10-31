```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="experimental"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Box/Box.tsx"
  feedbackTitle="Box Component Feedback"
/>
```

### About Box

`<Box />` is a low level component whose primary purpose is to provide a utility for easily controlling the spacing around elements in a consistent way using the [Lens spacing values](/#!/Spacing).

---

### Spacing with Box

The `<Box />` component allows you to control it's margin and padding properties for a chosen side.

Using spacing on a `<Box />` is like following a recipe, you select:

```js noeditor
import { List, ListItem } from '../List'
;<List type="number">
  <ListItem>The type of spacing, margin or padding</ListItem>
  <ListItem>The side to apply it to </ListItem>
  <ListItem>The amount of space to apply</ListItem>
</List>
```

```js noeditor
import { Box } from './Box'

const BoxSpacingRecipeTableRender = require('../../../styleguide_components/BoxSpacingRecipeTable')
  .BoxSpacingRecipeTableRender
;<Box my="xxlarge">
  <BoxSpacingRecipeTableRender />
</Box>
```

To get the correct spacing you choose one value from each of the above columns. For example, to get 8px of margin on the right side you would do. `<Box mr="small">` or if you wanted 40px of padding on all sides you would do `<Box p="xxlarge">`.

You can combine different spacing recipes to apply spacing to multiple sides at one time. For example if you wanted 16px of margin on the left and 20px of padding on the top you would do `<Box ml="medium" pt="large">`

#### Spacing Examples

Below are a few more examples of building a spacing recipe to help clarify how to use spacing with the `<Box>` component.

```js
import { Box } from './Box'
;<>
  <Box m="large">Margin All Sides - Large</Box>
  <Box pl="xsmall">Padding left - Extra Small</Box>
  <Box pl="medium">Padding left - Medium</Box>
  <Box my="xxxlarge" ml="xlarge">
    Margin Top & Bottom - XXXLarge, Margin left - XLarge
  </Box>
  <Box pb="xxlarge" ml="xxxlarge">
    {' '}
    Padding Bottom - XXLarge, Margin left - XXXLarge
  </Box>
</>
```

#### Spacing Responsively

Any one of the spacing properties can be passed an array of spacing sizes that will then apply at different breakpoints. There are 5 [breakpoints](/#!/Breakpoints) slots that you can target. Here is an example of what that looks like.

```js
import { Box } from './Box'
;<Box
  pl={[
    'xsmall', // xsmall spacing up to the first breakpoint
    'medium', // medium spacing after first breakpoint
    'xlarge', // xlarge spacing after second breakpoint
    'xxxlarge', // xxxlarge spacing after third breakpoint
  ]}
>
  My padding on the left changes with breakpoints
</Box>
```

#### Customizing a Box

Boxes provide a low-level customization interface which allows them to have different display properties, heights, widths, background colors, positioning, etc. Here are some examples:

##### Customized Display

```js
import { Box } from './Box'
;<>
  <Box display="inline">I'm inline.</Box>
  <Box display="inline">I'm also inline.</Box>
</>
```

##### Heights and Widths

```js
import { Box } from './Box'
;<>
  <Box
    display="inline-block"
    height="100px"
    bg="palette.green200"
    p="small"
    minWidth="200px"
  >
    I'm 100px tall.
  </Box>
  <Box
    display="inline-block"
    height="50px"
    bg="palette.blue200"
    ml="small"
    p="small"
    width="100px"
  >
    I'm 50px tall.
  </Box>
</>
```

##### Background Colors

Boxes can reference colors from the theme object, pulling any color on the theme's `colors` property.

```js
import { Box } from './Box'
;<>
  <Box bg="palette.purple200">My background is purple200.</Box>
  <Box bg="semanticColors.primary.main">
    I'm the semantic color "primary.main".
  </Box>
</>
```

##### Positioning

Boxes can set positioning when needed.

```js
import { Box } from './Box'
;<Box p="small" position="relative">
  <Box position="absolute" top="0" right="0" bg="palette.red300">
    I'm absolutely positioned!
  </Box>
</Box>
```

##### Borders

Boxes can have borders.

```js
import { Box } from './Box'
;<Box
  width="50px"
  height="50px"
  bg="palette.purple200"
  border="1px solid black"
  borderRadius="4px"
>
  I've got borders.
</Box>
```