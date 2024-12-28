const { registerBlockType } = wp.blocks;
const { createElement: el } = wp.element;
const { RichText } = wp.blockEditor;

// تسجيل البلوك
registerBlockType("myplugin/bootstrap-accordion", {
    title: "Bootstrap Accordion",
    icon: "menu", // أيقونة البلوك
    category: "design", // تصنيف البلوك
    attributes: {
        items: {
            type: "array",
            default: [
                {
                    title: "Accordion Item #1",
                    content:
                        "This is the first item's accordion body. You can customize this content.",
                },
                {
                    title: "Accordion Item #2",
                    content:
                        "This is the second item's accordion body. You can customize this content.",
                },
                {
                    title: "Accordion Item #3",
                    content:
                        "This is the third item's accordion body. You can customize this content.",
                },
            ],
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { items } = attributes;

        const updateItem = (index, key, value) => {
            const newItems = [...items];
            newItems[index][key] = value;
            setAttributes({ items: newItems });
        };

        return el(
            "div",
            { className: "accordion-editor" },
            items.map((item, index) =>
                el(
                    "div",
                    { className: "accordion-item", key: index },
                    el(RichText, {
                        tagName: "h3",
                        value: item.title,
                        onChange: (value) => updateItem(index, "title", value),
                        placeholder: "Accordion Title",
                        className: "accordion-title",
                    }),
                    el(RichText, {
                        tagName: "p",
                        value: item.content,
                        onChange: (value) => updateItem(index, "content", value),
                        placeholder: "Accordion Content",
                        className: "accordion-content",
                    })
                )
            )
        );
    },
    save: ({ attributes }) => {
        const { items } = attributes;

        return el(
            "div",
            { className: "accordion", id: "accordionExample" },
            items.map((item, index) =>
                el(
                    "div",
                    { className: "accordion-item", key: index },
                    el(
                        "h2",
                        { className: "accordion-header" },
                        el(
                            "button",
                            {
                                className:
                                    index === 0
                                        ? "accordion-button"
                                        : "accordion-button collapsed",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": `#collapse-${index}`,
                                "aria-expanded": index === 0 ? "true" : "false",
                                "aria-controls": `collapse-${index}`,
                            },
                            item.title
                        )
                    ),
                    el(
                        "div",
                        {
                            id: `collapse-${index}`,
                            className:
                                index === 0
                                    ? "accordion-collapse collapse show"
                                    : "accordion-collapse collapse",
                            "aria-labelledby": `heading-${index}`,
                            "data-bs-parent": "#accordionExample",
                        },
                        el(
                            "div",
                            { className: "accordion-body" },
                            item.content
                        )
                    )
                )
            )
        );
    },
});
