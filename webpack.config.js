const path=require("path")
const webpack= require("webpack")

module.exports={
    entry: "./webpack/js/app.js",

    output:{
        filename:"bundle.js",
        path: path.join(__dirname,"./webpack/dist"),
    },

    module:{
        rules:[
            {
            test: /\.m?$/, //expresion pre definida  
            use:{
                loader:"babel-loader",
                option:{
                    presets:["@babel/preset-env"]
                },
            },
            },
        ],
    },
};