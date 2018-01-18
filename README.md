# CodeX Module Dispatcher

Class for frontend Modules initialization from the DOM without inline scripts

## Installation

Install npm package
```
npm i module-dispatcher --save
```

## Usage

Import it in your JavaScript file
```js
import moduleDispatcher from 'module-dispatcher';
```

### Create an instance of Dispatcher

If your JavaScript Modules are parts of one global `Library` object, like

- YourLibrary.moduleOne
- YourLibrary.moduleTwo
- YourLibrary.moduleThree

You can instantiate Dispatcher by the following way
```js
new moduleDispatcher({
    Library : YourLibrary
});
```
If you don't specify Library, your Modules will be called as `window.moduleOne` by default.

### Add Modules to the DOM

Add attribute ```data-module="yourModuleName"``` to the HTML Element of the Module you want to init.
```html
<div data-module="comments">
    <!-- Any stuff -->
</div>
```
You can init multiple Modules on one node as well
```html
<div data-module="comments likes"></div>
```

## Passing settings to the Modules

If your Module has settings, place them via JSON **inside** the Node with data-module.

Don't forget to add an attribute `hidden` to the `<module-settings>` tag
```html
<div data-module="comments">
    <module-settings hidden>
         {
             // your module's settings
         }
    </module-settings>
    <!-- Other stuff -->
</div>
```
For several Modules on one node, your settings should be an Array
```html
<div data-module="module1 module2">
    <module-settings hidden>
        [
            {
                // Module 1 settings
            },
            {
                // Module 2 settings
            },
            ...
        ]
    </module-settings>
</div>
```

## Issues and improvements

Ask a question or report a bug on the [create issue page](https://github.com/codex-team/moduleDispatcher/issues/new).

Know how to improve moduleDispatcher? [Fork it](https://github.com/codex-team/moduleDispatcher) and send pull request.

You can also drop a few lines to [CodeX Team's email](mailto:team@ifmo.su).

## License

[MIT](https://github.com/codex-team/dispatcher/LICENSE)

Copyright (c) 2018 CodeX Team <team@ifmo.su>

## About CodeX Team

CodeX is a new team based in ITMO University, unifying students and graduates interested in web-development, design and studying new technologies in practice.

[https://ifmo.su](https://ifmo.su) 