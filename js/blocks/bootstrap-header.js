const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.blockEditor;
const { PanelBody, TextControl } = wp.components;
const { createElement: el } = wp.element;

// تسجيل البلوك
registerBlockType("myplugin/bootstrap-navbar", {
    title: "Bootstrap Navbar",
    icon: "menu",
    category: "design",
    attributes: {
        brandName: {
            type: "string",
            default: "Navbar",
        },
        searchPlaceholder: {
            type: "string",
            default: "Search",
        },
    },
    edit: (props) => {
        const { attributes, setAttributes } = props;

        return el(
            "div",
            null,
            el(
                InspectorControls,
                null,
                el(
                    PanelBody,
                    { title: "Navbar Settings", initialOpen: true },
                    el(TextControl, {
                        label: "Brand Name",
                        value: attributes.brandName,
                        onChange: (value) => setAttributes({ brandName: value }),
                    }),
                    el(TextControl, {
                        label: "Search Placeholder",
                        value: attributes.searchPlaceholder,
                        onChange: (value) =>
                            setAttributes({ searchPlaceholder: value }),
                    })
                )
            ),
            el(
                "nav",
                { className: "navbar navbar-expand-lg bg-body-tertiary" },
                el(
                    "div",
                    { className: "container-fluid" },
                    el(
                        "a",
                        { className: "navbar-brand", href: "#" },
                        attributes.brandName
                    ),
                    el(
                        "button",
                        {
                            className: "navbar-toggler",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#navbarSupportedContent",
                            "aria-controls": "navbarSupportedContent",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                        },
                        el("span", { className: "navbar-toggler-icon" })
                    ),
                    el(
                        "div",
                        { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                        el(
                            "ul",
                            { className: "navbar-nav me-auto mb-2 mb-lg-0" },
                            el(
                                InnerBlocks,
                                {
                                    allowedBlocks: ["core/navigation-link"],
                                    template: [
                                        [
                                            "core/navigation-link",
                                            { label: "Home", url: "#" },
                                        ],
                                        [
                                            "core/navigation-link",
                                            { label: "Link", url: "#" },
                                        ],
                                    ],
                                    templateLock: false,
                                }
                            )
                        ),
                        el(
                            "form",
                            { className: "d-flex", role: "search" },
                            el("input", {
                                className: "form-control me-2",
                                type: "search",
                                placeholder: attributes.searchPlaceholder,
                                "aria-label": "Search",
                            }),
                            el(
                                "button",
                                {
                                    className: "btn btn-outline-success",
                                    type: "submit",
                                },
                                "Search"
                            )
                        )
                    )
                )
            )
        );
    },
    save: (props) => {
        const { attributes } = props;

        return el(
            "nav",
            { className: "navbar navbar-expand-lg bg-body-tertiary" },
            el(
                "div",
                { className: "container-fluid" },
                el(
                    "a",
                    { className: "navbar-brand", href: "#" },
                    attributes.brandName
                ),
                el(
                    "button",
                    {
                        className: "navbar-toggler",
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                    },
                    el("span", { className: "navbar-toggler-icon" })
                ),
                el(
                    "div",
                    { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                    el("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0" }, el(InnerBlocks.Content)),
                    el(
                        "form",
                        { className: "d-flex", role: "search" },
                        el("input", {
                            className: "form-control me-2",
                            type: "search",
                            placeholder: attributes.searchPlaceholder,
                            "aria-label": "Search",
                        }),
                        el(
                            "button",
                            {
                                className: "btn btn-outline-success",
                                type: "submit",
                            },
                            "Search"
                        )
                    )
                )
            )
        );
    },
});
