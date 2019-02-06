# CodeX Module Dispatcher

Class for frontend Modules initialization from the DOM without inline scripts. Calls Modules **init()** method

## Installation

Install npm package
```
npm i module-dispatcher --save
```

## Usage

Import it in your JavaScript file
```js
import ModuleDispatcher from 'module-dispatcher';
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

**Important:** escape settings data, so xss vulnerabilities won't ruin your code. 

Don't forget to add an attribute `hidden` to the `<textarea>` tag
```html
<div data-module="comments">
    <textarea name="module-settings" hidden>
         {
             // your module's settings
         }
    </textarea>
    <!-- Other stuff -->
</div>
```
For several Modules on one node, your settings should be an Array
```html
<div data-module="module1 module2">
    <textarea name="module-settings" hidden>
        [
            {
                // Module 1 settings
            },
            {
                // Module 2 settings
            },
            ...
        ]
    </textarea>
</div>
```

## Issues and improvements

Ask a question or report a bug on the [create issue page](https://github.com/codex-team/moduleDispatcher/issues/new).

Know how to improve ModuleDispatcher? [Fork it](https://github.com/codex-team/moduleDispatcher) and send pull request.

You can also drop a few lines to [CodeX Team's email](mailto:team@ifmo.su).

## License

[MIT](https://github.com/codex-team/dispatcher/LICENSE)
