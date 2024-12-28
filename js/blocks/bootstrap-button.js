const { registerBlockType } = wp.blocks;
const { createElement } = wp.element;
const { RichText } = wp.blockEditor;

// تسجيل البلوك
registerBlockType('myplugin/simple-block', {
    title: 'Simple Blocksss', // اسم البلوك
    icon: 'smiley', // أيقونة البلوك (يمكن استخدام Dashicons)
    category: 'design', // تصنيف البلوك
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { content } = attributes;

        return createElement(RichText, {
            tagName: 'p',
            value: content,
            onChange: (value) => setAttributes({ content: value }),
            placeholder: 'Type your text here...',
        });
    },
    save: ({ attributes }) => {
        const { content } = attributes;

        return createElement(RichText.Content, {
            tagName: 'p',
            value: content,
        });
    },
});