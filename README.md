#GridView

Generates table markup with JSON input. It also supports mapping JSON properties to custom table headers.

## Example

Markup
```html
<div id="myTable"></div>
```

Javascript

```Javascript
var people = [
	{
		firstName: 'Breno',
		lastName: 'Ferreira',
		email: 'breno@example.com',
		age: 23
	},
	{
		firstName: 'Rodrigo',
		lastName: 'Vidal',
		email: 'vidal@example.com',
		age: 23
	},
	{
		firstName: 'Rodrigo',
		lastName: 'Andrade',
		email: 'andrade@example.com',
		age: 23
	}
];

var mapping = {
	firstName: 'First Name',
	lastName: 'Last Name',
	email: 'Email',
	age: 'Age'
};

var gridView = new GridView();
gridView.createGrid($('#myTableMapping'), people, mapping);
```

For a more comprehensive sample, check samples in sample folder