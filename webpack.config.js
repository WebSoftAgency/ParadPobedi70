
module.exports = {
    entry: {
        app: "./source/app/index.js",
    },
    output: {
        path: __dirname,
        filename: "./www/js/[name].js"
    },

    module: {
        loaders: [{
            test: "\.tpl.html$/",
            loader: "html-tpl"
        }]
    }
};
