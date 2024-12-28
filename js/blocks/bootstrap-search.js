const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.blockEditor;
const { TextControl, PanelBody } = wp.components;
const { createElement: el } = wp.element;

// تسجيل البلوك
registerBlockType("myplugin/search-form", {
    title: "Search Form",
    icon: "search",
    category: "widgets",
    attributes: {
        placeholder: {
            type: "string",
            default: "Search",
        },
        buttonText: {
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
                    { title: "Form Settings", initialOpen: true },
                    el(TextControl, {
                        label: "Placeholder Text",
                        value: attributes.placeholder,
                        onChange: (value) => setAttributes({ placeholder: value }),
                    }),
                    el(TextControl, {
                        label: "Button Text",
                        value: attributes.buttonText,
                        onChange: (value) => setAttributes({ buttonText: value }),
                    })
                )
            ),
            el(
                "form",
                {
                    className: "d-flex",
                    role: "search",
                    onSubmit: (e) => e.preventDefault(), // منع الإرسال أثناء التحرير
                },
                el("input", {
                    className: "form-control me-2",
                    type: "search",
                    placeholder: attributes.placeholder,
                    "aria-label": "Search",
                }),
                el(
                    "button",
                    { className: "btn btn-outline-success", type: "submit" },
                    attributes.buttonText
                )
            )
        );
    },
    save: (props) => {
        const { attributes } = props;
        const siteUrl = wp.data.select("core").getSiteUrl(); // الحصول على رابط الموقع ديناميكيًا

        return el(
            "form",
            {
                className: "d-flex",
                role: "search",
                method: "get",
                action: siteUrl || "/", // استخدام الرابط الديناميكي أو رابط افتراضي
                onSubmit: (event) => {
                    const input = event.target.querySelector("input[name='s']");
                    if (!input.value.trim()) {
                        event.preventDefault(); // منع الإرسال إذا كان الحقل فارغاً
                        alert("Please enter a search term."); // عرض رسالة
                    }
                },
            },
            el("input", {
                className: "form-control me-2",
                type: "search",
                name: "s", // الاسم الصحيح لمعلمات البحث في ووردبريس
                placeholder: attributes.placeholder || "Search here...", // قيمة افتراضية
                "aria-label": "Search",
                required: true, // جعل الحقل مطلوباً
            }),
            el(
                "button",
                {
                    className: "btn btn-outline-success",
                    type: "submit",
                    style: {
                        backgroundColor: attributes.buttonColor || "initial", // دعم لون الزر المخصص
                        borderColor: attributes.borderColor || "initial", // دعم لون الإطار المخصص
                    },
                },
                attributes.buttonText || "Search" // قيمة افتراضية للنص
            )
        );
        
    },
});
