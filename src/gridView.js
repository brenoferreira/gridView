(function( $ ) {
    $.fn.gridView = function(options) {
        var settings = $.extend( {
            'data'         : null,
            'headerMappings' : null,
            'tableAttr':{}
        }, options);

        var $table = getTable(this,settings.tableAttr);
        $table.append(createTableHead(this, settings.data, settings.headerMappings));
        $table.append(createTableBody(this, settings.data, settings.headerMappings));

        function getTable(element,tableAttr){

            var $table;
            if(element.is("table")) {
                $table = element;
            }
            else{
                element.append($("<table>",tableAttr));
                $table = element.find("table");
            }
            return $table;

        }

        function createTableHead(element, data, headerMappings) {
            var thead = $('<thead></thead>');

            var tr = $('<tr></tr>');

            var firstObject = data[0];

            if(headerMappings)
                for(mapping in headerMappings)
                    tr.append('<th>' + headerMappings[mapping] + '</th>');
            else
                for(property in firstObject)
                    tr.append('<th>' + property + '</th>');

            thead.append(tr);

            return thead;
        };
        function createTableBody(element, data, headerMappings) {
            var tbody = $('<tbody></tbody>');

            element.append(tbody);

            for(var i = 0; i < data.length; i++){
                var tr = $('<tr></tr>');
                var obj = data[i];
                if(headerMappings)
                    for(mapping in headerMappings)
                        tr.append('<td>' + obj[mapping] + '</td>');
                else
                    for(property in obj)
                        tr.append('<td>' + obj[property] + '</td>');

                tbody.append(tr);
            }

            return tbody;
        };

    };
})( jQuery );