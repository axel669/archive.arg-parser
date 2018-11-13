(module.exports = (argFormats = {

}) => {
    var ref0, nullref0, nullref1, nullref2, nullref3;

    const args = process.argv.slice(2, undefined);
    const parsers = {
        _: []
    };
    const names = {

    };
    const results = {
        _: []
    };
    const parseFor = (name) => {
        return (() => {
            if (parsers[name] !== undefined) {
                return parsers[name].map((parser) => {
                    return parser(args.shift());
                });
            }
            else {
                return true;
            };
        })();
    };
    for (const key of Object.keys(ref0 = argFormats)) {
        const value = ref0[key];
        const [name, keys] = key.split(":");
        const pkeys = keys.split("|");
        for (const pkey of pkeys) {
            (names[pkey] = name);
            (parsers[pkey] = value);
        };
    };
    while (args.length > 0) {
        const arg = args.shift();
        switch (true) {
            case (arg.startsWith("--") === true):
                {
                    const argName = arg.slice(2, undefined);
                    (results[((nullref0 = names[argName]) != null ? nullref0 : argName)] = parseFor(argName));
                    break;;
                }
            case (arg.startsWith("-") === true):
                {
                    const [, ...flags] = arg.split(``);
                    for (const flag of flags) {
                        (results[((nullref1 = names[flag]) != null ? nullref1 : flag)] = parseFor(flag));
                    };
                    break;;
                }
            default:
                {
                    const parser = parsers._.shift();
                    results._.push(((nullref2 = ((nullref3 = parser) != null ? nullref3(arg) : undefined)) != null ? nullref2 : arg));
                }
        };
    };
    return results;
});

