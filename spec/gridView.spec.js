describe('gridView', function(){
	var testObj = null;

	beforeEach(function(){
		setFixtures('<div id="myTable"></div>')

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
			$('#myTable').gridView({data:testObj});
			expect($('#myTable')).toContain('thead');
		});

		it('should append headers containing object property names', function(){
            $('#myTable').gridView({data:testObj});

			expect($('#myTable')).toContainHtml('<thead><tr><th>firstName</th><th>lastName</th><th>email</th><th>age</th></tr></thead>');
		});

		it('should append headers containing mapped headers', function(){
			var headerMapping = {
				'firstName': 'First Name',
				'lastName': 'Last Name',
				'email': 'Email',
				'age': 'Age'
			};
            $('#myTable').gridView({data:testObj,headerMappings:headerMapping});


			expect($('#myTable')).toContainHtml('<thead><tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Age</th></tr></thead>');
		});

		it('should not append header that is not mapped', function(){
			var headerMapping = {
				'firstName': 'First Name',
				'lastName': 'Last Name'
			};
            $('#myTable').gridView({data:testObj,headerMappings:headerMapping});


			expect($('#myTable')).toContainHtml('<thead><tr><th>First Name</th><th>Last Name</th></tr></thead>');
		});
	});

	describe('table body', function(){
		it('should append tableBody', function(){
            $('#myTable').gridView({data:testObj});

			expect($('#myTable')).toContain('tbody');
		});

		it('should append object data to table body with first item in array', function(){
            $('#myTable').gridView({data:testObj});

			expect($('#myTable')).toContainHtml('<tr><td>Breno</td><td>Ferreira</td><td>breno@example.com</td><td>23</td></tr>')
		});

		it('should append object data to table body with second item in array', function(){
            $('#myTable').gridView({data:testObj});

			expect($('#myTable')).toContainHtml('<tr><td>Rodrigo</td><td>Vidal</td><td>vidal@example.com</td><td>23</td></tr>')
		});

		it('should append object data to table body with thrid item in array', function(){
            $('#myTable').gridView({data:testObj});

			expect($('#myTable')).toContainHtml('<tr><td>Rodrigo</td><td>Andrade</td><td>andrade@example.com</td><td>23</td></tr>')
		});

		it('should not append object data that is not mapped to table body', function(){
			var headerMapping = {
				'firstName': 'First Name',
				'lastName': 'Last Name'
			};
            $('#myTable').gridView({data:testObj,headerMappings:headerMapping});


			expect($('#myTable')).toContainHtml('<tr><td>Breno</td><td>Ferreira</td></tr>')
		});
	});
    describe("Render table", function(){
        beforeEach(function(){
            $('#myTable').gridView({data:testObj});
        });
        it("should append table", function(){
            expect($("#myTable")).toContain("table");
        });
        it("should append thead inside a table", function(){
            expect($("#myTable table")).toContain("thead");
        });
        it("should append tbody inside a table", function(){
            expect($("#myTable table")).toContain("tbody");
        });

    })
    describe("Render table with attributes",function(){
        it("should apply the class attribute in a table",function(){
            $('#myTable').gridView({data:testObj,tableAttr:{"class":"teste"}});

            expect($("#myTable table")).toHaveClass("teste");

        });
        it("should apply the complex attribute in a table",function(){
            $('#myTable').gridView({data:testObj,tableAttr:{"class":"teste","data-cliente":"Victor"}});
            expect($("#myTable table")).toHaveClass("teste");
            expect($("#myTable table").data("cliente")).toBe("Victor");
        });
    });

    describe("if the container is a table",function(){
        beforeEach(function()   {
            setFixtures('<div id="myContainerTable"><table></table></div>');
            $('#myContainerTable table').gridView({data:testObj});
        });
        it("should not render tag table ",function(){
            expect($("#myContainerTable table").length).toBe(1);
        });
        it("should render content inside a table container",function(){
            expect($("#myContainerTable table")).toContain("thead");
            expect($("#myContainerTable table")).toContain("tbody");
        });
    });
});