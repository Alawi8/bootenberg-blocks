const { registerBlockType } = wp.blocks;
const { createElement } = wp.element;
const { RichText } = wp.blockEditor || wp.editor;

registerBlockType("myplugin/call-to-action", {
    title: "Call to Action",
    icon: "megaphone", // استخدم أيقونة مدعومة إذا كانت هذه لا تعمل
    category: "layout", // تأكد من أن التصنيف موجود
    attributes: {
        ctaTitle: {
            type: "string",
            default: "Your Title Here",
        },
        ctaDescription: {
            type: "string",
            default: "Your description here.",
        },
    },
    edit: function (props) {
        const { attributes, setAttributes } = props;
        const { ctaTitle, ctaDescription } = attributes;

        return createElement(
            "div",
            { className: "call-to-action-block" },
            createElement(RichText, {
                tagName: "h2",
                value: ctaTitle,
                onChange: (value) => setAttributes({ ctaTitle: value }),
                placeholder: "Enter title...",
            }),
            createElement(RichText, {
                tagName: "p",
                value: ctaDescription,
                onChange: (value) => setAttributes({ ctaDescription: value }),
                placeholder: "Enter description...",
            })
        );
    },
    save: function (props) {
        const { attributes } = props;
        const { ctaTitle, ctaDescription } = attributes;

        return createElement(
            "div",
            { className: "call-to-action-block" },
            createElement(RichText.Content, {
                tagName: "h2",
                value: ctaTitle,
            }),
            createElement(RichText.Content, {
                tagName: "p",
                value: ctaDescription,
            })
        );
    },
});
