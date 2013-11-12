var fs = require('fs');

function getData(cb, filePath) {
	fs.readFile(filePath, {encoding: 'utf8'}, function(err, data) {
		data && cb(data);
	});
}

function parseFile(str) {
	var lines = str.split('\n');
	for (var i = 0; i < lines.length; i++) {
		lines[i] = lines[i].split(' ');
	}
	return lines;
}

function traverseTree(lines) {
	lines = lines;
	for (var i = lines.length - 2; i >= 0; i--) {
		for (var j = 0; j < lines[i].length; j++) {
			var nextNumbers = lines[i + 1];
			var max = Math.max(+nextNumbers[j], +nextNumbers[j + 1]);
			lines[i][j] = +lines[i][j] + max;
		}
	}
	return lines;
}

var solution = function(str) {
	console.log(traverseTree(parseFile(str))[0][0]);
};

var ans = function(path) {
	getData(solution, path);
};

ans('problem18.data');
ans('problem67.data');
