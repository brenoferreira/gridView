(function ($) {
    $.fn.gridView = function (options) {
        var settings = $.extend({
            'data': null,
            'headerMappings': null,
            'tableAttr': {}
        }, options);

        var table = getTable(this, settings.tableAttr).append(createTableHead(this, settings.data, settings.headerMappings))
						                              .append(createTableBody(this, settings.data, settings.headerMappings));

        function getTable(element, tableAttr) {
            var $table;

            if (element.is("table"))
                $table = element;
            else
                $table = element.append($("<table>", tableAttr)).find("table");

            return $table;
        };

        function createTableHead(element, data, headerMappings) {
            var $thead = $('<thead></thead>');
            var firstObject = data[0];

            if (headerMappings)
                $thead.append(appendLine('th', headerMappings, headerMappings));
            else
                $thead.append(appendLine('th', firstObject));

            return $thead;
        };

        function createTableBody(element, data, headerMappings) {
            var $tbody = $('<tbody></tbody>');

            element.append($tbody);

            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                if (headerMappings)
                    $tbody.append(appendLine('td', headerMappings, obj));
                else
                    $tbody.append(appendLine('td', obj, obj));
            }

            return $tbody;
        };

        function appendLine(tagName, collMappings, lineMapping) {
            var $tr = $("<tr></tr>");
            if (lineMapping)
                for (var mapping in collMappings)
                    $tr.append('<' + tagName + '>' + lineMapping[mapping] + '</' + tagName + '>');
            else
                for (var mapping in collMappings)
                    $tr.append('<' + tagName + '>' + mapping + '</' + tagName + '>');

            return $tr;
        };
    };
})(jQuery);