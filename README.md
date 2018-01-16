# codex.dispatcher
CodeX Module Dispatcher — Initialize frontend Modules from the DOM without inline scripts

Install npm package
```
npm i codex.dispatcher
```
Require it in your main javascript file
```js
const dispatcher = require('codex.dispatcher');
```
##Create instance of dispatcher
```js
new dispatcher();
```
If your javascript modules are parts of one global Library object, like

- YourLibrary.moduleOne
- YourLibrary.moduleTwo
- YourLibrary.moduleThree

You can instantiate dispatcher the following way
```js
new dispatcher({
    Library : YourLibrary
});
```
##Prepare your modules settings
To the HTML Element node of the module you want to init add attribute data-module="" with module name.
###Example
```html
<div data-module="comments"></div>
```
You can init multiple modules on one node as well
```html
<div data-module="comments likes"></div>
```
If your module has settings, place them <b>inside</b> node with data-module. Otherwise, don't write anything.

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
Put your module settings in JSON format
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
If you initialized several modules on one node, your settings should be an Array
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