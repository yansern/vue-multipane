# vue-multipane
> Resizable split panes for [Vue.js](http://vuejs.org).

Check out the [live demo](https://yansern.github.io/vue-multipane/demo/index.html).

## Features

* Supports vertical & horizontal layouts.
* Supports fixed and fluid panes.
* Uses CSS3 Flexbox.
* Simple. Customize everything with just CSS!

## Installation
```bash
$ npm install vue-multipane
```

## Using vue-multipane

First, import `Multipane` and `MultipaneResizer` into your existing Vue component.
```js
import { Multipane, MultipaneResizer } from 'vue-multipane';

export default {
  // ...
  components: {
    MultiPane,
    MultiPaneResizer
  }
}
```

Then, use the `<multipane>` and `<multipane-resizer>` tag to construct your split pane layout.
```html
<multipane>
  <div>Pane 1</div>
  <multipane-resizer></multipane-resizer>
  <div>Pane 2</div>
  <multipane-resizer></multipane-resizer>
  <div>Pane 3</div>
</multipane>
```

## Customizing vue-multipane
You can customize everything using CSS.

* Create vertical or horizontal layouts by using the `layout` attribute.
* Set initial pane size using `width` or `height` CSS property.
* Set pane size constraints using `min-width`, `min-height`, `max-width`, `max-height` CSS property.
* Create and mix both fixed or fluid panes by using the either `px` or `%` units when setting the pane's `width` or `height` CSS property.
* For that one pane that should take up remaining space available on the pane container, use the `flex-grow: 1` CSS property.

This example below shows a combination of different styling properties you can apply to make the panes render the way you want it to:
```html
<multipane layout="vertical">
  <div :style="{ width: '100px', maxWidth: '200px' }">Pane 1</div>
  <multipane-resizer></multipane-resizer>
  <div :style="{ width: '25%', maxWidth: '50%' }">Pane 2</div>
  <multipane-resizer></multipane-resizer>
  <div :style="{ flexGrow: 1 }">Pane 3</div>
</multipane>

```

## Customizing resize handle
By default, vue-multipane creates an invisible 10px resize handle that sits in between 2 panes. You can customize the appearance of the resize handle to fit your needs.

This example creates a resize handle that also acts as a separator:

**HTML**
```html
<div class="foobar">
  <multipane layout="vertical">
    <div>Pane 1</div>
    <multipane-resizer></multipane-resizer>
    <div>Pane 2</div>
    <multipane-resizer></multipane-resizer>
    <div>Pane 3</div>
  </multipane>
</div>
```

**CSS**
```css
.foobar .multipane.layout-v .multipane-resizer {
  margin: 0; left: 0; /* reset existing styling */
  width: 15px;
  background: grey;
}

.foobar .multipane.layout-h .multipane-resizer {
  margin: 0; left: 5; /* reset existing styling */
  height: 15px;
  background: grey;
}

```

#### Optional resize handle
You can also make only a specific pane to have the ability to resize by only adding the `<multipane-resizer>` next to the pane that requires it.

```html
<multipane>
  <div>Pane 1</div> <!-- No resizing on Pane 1. -->
  <div>Pane 2</div> <!-- Resizing is possible on Pane 2. -->
  <multipane-resizer></multipane-resizer>
  <div>Pane 3</div>
</multipane>
```

## Options
|    Property    |    Description   |   Type   |	Default	|
| -----------------  | ---------------- | :--------: | :----------: |
| layout       | Determine layout of panes. |String [vertical, horizontal] |vertical |
| classes      | Additional classnames you can add to the multipane container. |String | (empty string) |


## Events
|    Event    |    Description   |   Returns   |
| -----------------  | ---------------- | :--------: |
| paneresizestart    | When user clicks on the resize handle to start resizing a pane. | pane, container, size |
| paneresize    | When user is resizing a pane. | pane, container, size |
| paneresizestop    | When user release the resize handle to stop resizing a pane. | pane, container, size |

## License
**[vue-multipane](https://github.com/yansern/vue-multipane)** by [Yan Sern](https://twitter.com/yansernio). This is an open source project released under the [MIT License](LICENSE).

> PS: I would love to know if you're using vue-multipane. Tweet to me at [@yansernio](https://twitter.com/yansernio).
