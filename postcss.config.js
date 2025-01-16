const classRename = require('postcss-class-rename');

module.exports = {
    plugins: [
        classRename({
            '\\b(\\w+)-': 'tw-$1-', 
        }),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
