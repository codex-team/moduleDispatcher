# codex.dispatcher
CodeX Module Dispatcher

Class for frontend Modules initialization from the DOM without inline scripts

Install npm package
```
npm i codex.dispatcher
```
Require it in your JavaScript file
```js
const dispatcher = require('codex.dispatcher');
```
## Create instance of dispatcher
```js
new dispatcher();
```
If your javascript Modules are parts of one global Library object, like

- YourLibrary.moduleOne
- YourLibrary.moduleTwo
- YourLibrary.moduleThree

You can instantiate dispatcher the following way
```js
new dispatcher({
    Library : YourLibrary
});
```
If you don't specify Library, your Modules will be called as window.moduleOne by default.

## Prepare your Modules settings
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

Don't forget to add attribute 'hidden' to ```<module-settings>``` tag
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