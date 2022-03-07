const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    // mode: "development",
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      
      module: {
        rules: [
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [{
                loader: "url-loader",
                options: {
                    limit:5000
                }
            }]
             
          }
        ]
      },
};