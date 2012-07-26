describe('gridView', function(){
	var testObj = null;

	beforeEach(function(){
		setFixtures('<table id="myTable"></table>')

		testObj = [
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
	});

	describe('table head', function(){
		it('should append tableHead', function(){
			var gridView = new GridView();
			gridView.createGrid($('#myTable'), testObj);

			expect($('#myTable')).toContain('thead');
		});

		it('should append headers containing object property names', function(){
			var gridView = new GridView();
			gridView.createGrid($('#myTable'), testObj);

			expect($('#myTable')).toContainHtml('<thead><tr><th>firstName</th><th>lastName</th><th>email</th><th>age</th></tr></thead>');
		});

		it('should append headers containing mapped headers', function(){
			var gridView = new GridView();

			var headerMapping = {
				'firstName': 'First Name',
				'lastName': 'Last Name',
				'email': 'Email',
				'age': 'Age'
			};

			gridView.createGrid($('#myTable'), testObj, headerMapping);

			expect($('#myTable')).toContainHtml('<thead><tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Age</th></tr></thead>');
		});
	});

	describe('table body', function(){
		it('should append tableBody', function(){
			var gridView = new GridView();
			gridView.createGrid($('#myTable'), testObj);

			expect($('#myTable')).toContain('tbody');
		});

		it('should append object data to table body with first item in array', function(){
			var gridView = new GridView();
			gridView.createGrid($('#myTable'), testObj);

			expect($('#myTable')).toContainHtml('<tr><td>Breno</td><td>Ferreira</td><td>breno@example.com</td><td>23</td></tr>')
		});

		it('should append object data to table body with second item in array', function(){
			var gridView = new GridView();
			gridView.createGrid($('#myTable'), testObj);

			expect($('#myTable')).toContainHtml('<tr><td>Rodrigo</td><td>Vidal</td><td>vidal@example.com</td><td>23</td></tr>')
		});

		it('should append object data to table body with thrid item in array', function(){
			var gridView = new GridView();
			gridView.createGrid($('#myTable'), testObj);

			expect($('#myTable')).toContainHtml('<tr><td>Rodrigo</td><td>Andrade</td><td>andrade@example.com</td><td>23</td></tr>')
		});
	});
});