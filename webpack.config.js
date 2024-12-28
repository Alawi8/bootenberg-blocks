const path = require("path");

module.exports = {
    entry: "./js/index.js", // نقطة الدخول
    output: {
        path: path.resolve(__dirname, "assets/js"), // المسار النهائي
        filename: "bundle.js", // اسم الملف الناتج
    },
    mode: "production", // أو "production" للإنتاج
    module: {
        rules: [
            {
                test: /\.css$/, // تحديد ملفات CSS
                use: ["style-loader", "css-loader"], // تحميل CSS
            },
        ],
    },
};
