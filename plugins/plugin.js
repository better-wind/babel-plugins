module.exports = function({ types: babelTypes }) {
    return {
        name: "deadly-simple-plugin-example",
        visitor: {
            Identifier(path, state) {
                // if (path.node.name === 'foo') {
                //     path.node.name = 'bar';
                // }
                var name = path.node.name
                if(state.opts[name]){
                    path.node.name = state.opts[name]
                }
            }
        }
    };
};