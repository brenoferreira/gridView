$(function(){
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

	var gridView = new GridView();

	gridView.createGrid($('#myTableWithoutMapping'), people);

	var mapping = {
		firstName: 'First Name',
		lastName: 'Last Name',
		email: 'Email',
		age: 'Age'
	}

	gridView.createGrid($('#myTableMapping'), people, mapping);
})