const classRename = require('postcss-class-rename');

// js
module.exports = {
    plugins: [
        classRename({
            '\\b(\\w+)-': 'tw-$1-', 
        }),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
