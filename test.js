const args = require("./arg-parser.js")({
    "wat:w|wat": [i => parseInt(i)],
    "first:x|f|first": [i => parseFloat(i)],
    "test:t|test": [i => i, i => i],
    "flag:flag": undefined
});

console.log(args);

// const argParser = require("./arg-parser.js");
//
// argParser.arg(i => i);
// argParser.option("c", "compile");
// argParser.option("t", "test", [i => parseInt(i)]);
// argParser.option("b", "beta", [i => i]);
// argParser.option("d", "delta", [i => parseFloat(i)]);
//
// const {args, options} = argParser.parse();
//
// console.log(args, options);
