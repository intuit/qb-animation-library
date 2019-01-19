# qbal - QuickBooks Animation Library

[![CircleCI](https://circleci.com/gh/intuit/qb-animation-library.svg?style=svg)](https://circleci.com/gh/intuit/qb-animation-library)

The QuickBooks Animation Library is a solution to add QuickBooks motion to your product, page, or feature. Our motion is natural, guiding, and calm.

This is one approach to implementing and systematizing motion on the web. If you are an Intuit employee, refer to our <a href="https://designsystem.quickbooks.com/bolt/forward-momentum/">design system</a> for more detail on motion principles, motivation, and rationale.</p>

### [**Demos + Docs + Examples**](https://intuit.github.io/qb-animation-library/) 👈 👈&nbsp; 😀 🎉

## Challenges

- Creating consistent QuickBooks style animation across marketing and product web experiences
- Designers and developers collaborating on motion without working code examples

## Approach

- Ready-to-use QuickBooks motion styles that can be applied with **CSS classes** or **SCSS mixins**
- Semantic mappings that make it clearer which animations to use and provide a path to updating specific animations (like `qbal-trowserModal-enter`) by updating the library
- Detailed examples show exactly what animations look like to help designers and developers collaborate
- Includes:
  - Entrance & exit animations for various UI elements (modals, dialogs, tooltips, etc.)
  - Transitions classes for height, width, opacity, and color
  - Plus more! [See all examples 👀](https://intuit.github.io/qb-animation-library/)

## Library structure

`_qbal-variables.scss` defines timing, easing, and property values to animate

`_qbal-keyframes.scss` builds the CSS keyframes needed for specific animations

`_qbal-animation-classes.scss` defines the cores set of generic animations

`_qbal-semantic-classes.scss` defines semantic mappings for entrance and exit animations for specific components

The 4 above files can be included via `_qbal-mixins.scss` and then used as mixins, or developers can use the CSS classes generated from `qb_animation_library.scss`.

## Usage

### Usage as CSS

1. Download [qb_animation_library.css](css/qb_animation_library.css)

1. Link to it in your HTML  
   `<link rel="stylesheet" href="path/to/qb_animation_library.css">`

1. Start adding classes:  
   `<div class="qbal-fade-enter"> ... </div>`

### Usage as SCSS

1. Clone repository or [download as ZIP](../../archive/master.zip)

1. Copy `/scss` folder to your project

1. Import qbal mixins into your scss:  
   `@import "qbal-mixins";`

1. Start including mixins in your scss (mixin names are the same as the class names above):

   ```scss
   .my-tooltip {
     @include qbal-tooltip-enter;
   }
   ```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

<!-- ## Issues -->

<!-- ## Inspiration -->

## Development setup

- Clone repository and install

  ```bash
  git clone git@github.com:intuit/qb-animation-library.git
  cd qb-animation-library/
  npm install
  ```

- **To build CSS**

  ```bash
  npm run build
  ```

- **To build CSS when SCSS files change**

  ```bash
  npm run watch
  ```

- **To build CSS when SCSS files change & launch dev http server**

  ```bash
  npm run dev
  ```

  Then open http://localhost:8080/ in your browser
