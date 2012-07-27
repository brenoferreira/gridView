var GridView = function () {
	
};

GridView.prototype.createGrid = function(element, data, headerMappings,tableAttr) {
    element.append($("<table>",tableAttr));
    var $table = element.find("table");
    $table.append(this.createTableHead(element, data, headerMappings));
    $table.append(this.createTableBody(element, data, headerMappings));
};

GridView.prototype.createTableHead = function(element, data, headerMappings) {
	var thead = $('<thead></thead>');

	var tr = $('<tr></tr>');

	var firstObject = data[0];
	for(property in firstObject)
	{
		if(!headerMappings)
			tr.append('<th>' + property + '</th>');
		else
			tr.append('<th>' + headerMappings[property] + '</th>');
	}

	thead.append(tr);

	return thead;
};

GridView.prototype.createTableBody = function(element, data, headerMappings) {
    var tbody = $('<tbody></tbody>');

    element.append(tbody);

    for(var i = 0; i < data.length; i++)
    {
        var tr = $('<tr></tr>');
        var obj = data[i];
        for(property in obj)
        {
            tr.append('<td>' + obj[property] + '</td>');
        }

        tbody.append(tr);
    }

   return tbody;
};