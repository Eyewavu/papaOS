const path =require("path")
const htmlWebpackPlugin =require("html-webpack-plugin") 

module.exports ={
    entry: {
        contentScripts: "./src/content.ts",
        background: "./src/bg.ts",
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")]
            },{
                test: /\.html$/,
                use: ["html-loader"],
            },{
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },{
            },{
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },{
                test: /\.(tff|otf)$/,
                type: "asset/resource"
            }
        ]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname,"public"),
        assetModuleFilename: 'assets/[name][ext]',
        // clean: true
    },
    mode: "production",
    experiments: {
        topLevelAwait: true
    },
    resolve: {
        extensions: [".ts",".js"]
    }
}