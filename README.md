# codex.dispatcher
CodeX Module Dispatcher

Class for frontend Modules initialization from the DOM without inline scripts
## Installation
Install npm package
```
npm i module-dispatcher
```
## Usage
Import it in your JavaScript file
```js
import moduleDispatcher from 'module-dispatcher';
```
### Create an instance of Dispatcher
If your JavaScript Modules are parts of one global Library object, like

- YourLibrary.moduleOne
- YourLibrary.moduleTwo
- YourLibrary.moduleThree

You can instantiate Dispatcher by the following way
```js
new moduleDispatcher({
    Library : YourLibrary
});
```
If you don't specify Library, your Modules will be called as ```window.moduleOne``` by default.

## Passing setting to the Modules
Add attribute ```data-module="yourModuleName"``` to the HTML Element of the Module you want to init.
### Example
```html
<div data-module="comments"></div>
```
You can init multiple Modules on one node as well
```html
<div data-module="comments likes"></div>
```
If your Module has settings, place them <b>inside</b> node with data-module.

Don't forget to add attribute `hidden` to ```<module-settings>``` tag
```html
<div data-module="comments likes">
	<module-settings hidden>
		 {
		     // your module's settings
		 }
	</module-settings>
</div>
```
Put your Module settings in JSON format
```html
<div data-module="comments likes">
	<module-settings hidden>
		 {
		     "key1" : "value1",
		     "key2" : "value2",
		     ...
		 }
	</module-settings>
</div>
```
For several Modules on one node, your settings should be an Array
```html
<module-settings>
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
```