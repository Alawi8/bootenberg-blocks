const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: "./js/index.js", // نقطة الدخول الرئيسية
    output: {
        path: path.resolve(__dirname, "assets/js"), // المسار النهائي
        filename: "bundle.js", // الملف الناتج
    },
    mode: "development", // أو "production"
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"], // لتحميل CSS
            },
            {
                test: /\.(scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"], // لتحميل SCSS إذا كنت بحاجة إلى ذلك
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader", // لتحويل ES6 إلى JavaScript متوافق مع المتصفحات
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
