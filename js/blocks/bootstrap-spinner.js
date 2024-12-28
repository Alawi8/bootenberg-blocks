const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, ToggleControl, TextControl } = wp.components;
const { createElement: el } = wp.element;

// تسجيل البلوك
registerBlockType("myplugin/loading-button", {
    title: "Loading Button",
    icon: "update",
    category: "design",
    attributes: {
        buttonText: {
            type: "string",
            default: "Loading...",
        },
        buttonStyle: {
            type: "string",
            default: "btn-primary",
        },
        spinnerSize: {
            type: "string",
            default: "spinner-border-sm",
        },
        isDisabled: {
            type: "boolean",
            default: true,
        },
        triggerEvent: {
            type: "string",
            default: "onPageLoad",
        },
        showButton: {
            type: "boolean",
            default: false,
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
                    { title: "Button Settings", initialOpen: true },
                    el(TextControl, {
                        label: "Button Text",
                        value: attributes.buttonText,
                        onChange: (value) => setAttributes({ buttonText: value }),
                    }),
                    el(SelectControl, {
                        label: "Button Style",
                        value: attributes.buttonStyle,
                        options: [
                            { label: "Primary", value: "btn-primary" },
                            { label: "Secondary", value: "btn-secondary" },
                            { label: "Success", value: "btn-success" },
                            { label: "Danger", value: "btn-danger" },
                            { label: "Warning", value: "btn-warning" },
                            { label: "Info", value: "btn-info" },
                            { label: "Light", value: "btn-light" },
                            { label: "Dark", value: "btn-dark" },
                        ],
                        onChange: (value) => setAttributes({ buttonStyle: value }),
                    }),
                    el(SelectControl, {
                        label: "Spinner Size",
                        value: attributes.spinnerSize,
                        options: [
                            { label: "Small", value: "spinner-border-sm" },
                            { label: "Medium", value: "spinner-border" },
                            { label: "Large", value: "spinner-border-lg" },
                        ],
                        onChange: (value) => setAttributes({ spinnerSize: value }),
                    }),
                    el(SelectControl, {
                        label: "Trigger Event",
                        value: attributes.triggerEvent,
                        options: [
                            { label: "On Page Load", value: "onPageLoad" },
                            { label: "On Click", value: "onClick" },
                            { label: "On Form Submit", value: "onFormSubmit" },
                            { label: "Always Visible", value: "always" },
                        ],
                        onChange: (value) => setAttributes({ triggerEvent: value }),
                    }),
                    el(ToggleControl, {
                        label: "Disabled",
                        checked: attributes.isDisabled,
                        onChange: (value) => setAttributes({ isDisabled: value }),
                    }),
                    el(ToggleControl, {
                        label: "Show Button Initially",
                        checked: attributes.showButton,
                        onChange: (value) => setAttributes({ showButton: value }),
                    })
                )
            ),
            el(
                "button",
                {
                    className: `btn ${attributes.buttonStyle}`,
                    type: "button",
                    disabled: attributes.isDisabled,
                    style: { display: attributes.showButton ? "inline-block" : "none" },
                },
                el("span", {
                    className: `spinner-border ${attributes.spinnerSize}`,
                    "aria-hidden": "true",
                }),
                el("span", { role: "status" }, ` ${attributes.buttonText}`)
            )
        );
    },
    save: (props) => {
        const { attributes } = props;

        return el(
            "div",
            {
                "data-trigger-event": attributes.triggerEvent,
                "data-show-button": attributes.showButton,
            },
            el(
                "button",
                {
                    className: `btn ${attributes.buttonStyle}`,
                    type: "button",
                    disabled: attributes.isDisabled,
                    style: { display: attributes.showButton ? "inline-block" : "none" },
                },
                el("span", {
                    className: `spinner-border ${attributes.spinnerSize}`,
                    "aria-hidden": "true",
                }),
                el("span", { role: "status" }, ` ${attributes.buttonText}`)
            )
        );
    },
});
