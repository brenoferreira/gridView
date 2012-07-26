var GridView = function () {
	
};

GridView.prototype.createGrid = function(element, data, headerMappings) {
	var thead = $('<thead></thead>');
	element.append(thead);

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
};

