const classRename = require('postcss-class-rename');

module.exports = {
    plugins: [
        classRename({
            '\\b(\\w+)-': 'tw-$1-', // إضافة بادئة "tw-" لجميع الكلاسات
        }),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
