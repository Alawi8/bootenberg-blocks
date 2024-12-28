(function (blocks, element, blockEditor, components, i18n) {
    const { __ } = i18n; // استيراد دالة الترجمة
    const { createElement: el } = element;
    const { InspectorControls, InnerBlocks } = blockEditor;
    const { PanelBody, SelectControl } = components;
  
    blocks.registerBlockType("myplugin/bootstrap-card", {
      title: __("Bootstrap Card", "myplugin"),
      icon: "id", // أيقونة الكارد
      category: "common",
  
      attributes: {
        customClass: { type: "string", default: "card bg-light" }, // الكلاس الخاص بالكارد
        margin: { type: "string", default: "m-3" }, // التحكم في الهوامش
        border: { type: "string", default: "border border-secondary" }, // التحكم في الحدود
      },
  
      edit: function (props) {
        const { attributes, setAttributes } = props;
  
        // تحديث الخاصيات
        const updateAttribute = (attribute, value) =>
          setAttributes({ [attribute]: value });
  
        return [
          // لوحة التحكم الجانبية لتخصيص الكارد
          el(
            InspectorControls,
            {},
            el(
              PanelBody,
              { title: __("Card Settings", "myplugin"), initialOpen: true },
              el(SelectControl, {
                label: __("Card Class", "myplugin"),
                value: attributes.customClass,
                options: [
                  { label: __("Light", "myplugin"), value: "card bg-light" },
                  {
                    label: __("Primary", "myplugin"),
                    value: "card bg-primary text-white",
                  },
                  {
                    label: __("Secondary", "myplugin"),
                    value: "card bg-secondary text-white",
                  },
                  {
                    label: __("Success", "myplugin"),
                    value: "card bg-success text-white",
                  },
                  {
                    label: __("Danger", "myplugin"),
                    value: "card bg-danger text-white",
                  },
                  {
                    label: __("Warning", "myplugin"),
                    value: "card bg-warning",
                  },
                  {
                    label: __("Info", "myplugin"),
                    value: "card bg-info text-white",
                  },
                  {
                    label: __("Dark", "myplugin"),
                    value: "card bg-dark text-white",
                  },
                ],
                onChange: (value) => updateAttribute("customClass", value),
              }),
              el(SelectControl, {
                label: __("Margin", "myplugin"),
                value: attributes.margin,
                options: [
                  { label: __("None", "myplugin"), value: "" },
                  { label: __("Small", "myplugin"), value: "m-1" },
                  { label: __("Medium", "myplugin"), value: "m-3" },
                  { label: __("Large", "myplugin"), value: "m-5" },
                ],
                onChange: (value) => updateAttribute("margin", value),
              }),
              el(SelectControl, {
                label: __("Border", "myplugin"),
                value: attributes.border,
                options: [
                  { label: __("None", "myplugin"), value: "" },
                  {
                    label: __("Secondary Border", "myplugin"),
                    value: "border border-secondary",
                  },
                  {
                    label: __("Primary Border", "myplugin"),
                    value: "border border-primary",
                  },
                  {
                    label: __("Danger Border", "myplugin"),
                    value: "border border-danger",
                  },
                ],
                onChange: (value) => updateAttribute("border", value),
              })
            )
          ),
          // عرض الكارد مع InnerBlocks
          el(
            "div",
            {
              className: `${attributes.customClass} ${attributes.margin} ${attributes.border}`,
              style: {
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
              },
            },
            el(
              "div",
              { className: "card-header text-center" },
              __("Card Header", "myplugin")
            ),
            el(
              "div",
              { className: "card-body" },
              el(InnerBlocks, {
                allowedBlocks: ["core/paragraph", "core/image", "core/heading"], // البلوكات المسموح إضافتها
                template: [
                  [
                    "core/heading",
                    { placeholder: __("Enter Card Title", "myplugin"), level: 4 },
                  ],
                  [
                    "core/paragraph",
                    { placeholder: __("Enter card content here...", "myplugin") },
                  ],
                ],
                templateLock: false, // يمكن تحرير المحتويات بحرية
              })
            ),
            el(
              "div",
              { className: "card-footer text-center" },
              __("Card Footer", "myplugin")
            )
          )
        ];
      },
  
      save: function (props) {
        const { attributes } = props;
  
        return el(
          "div",
          {
            className: `${attributes.customClass} ${attributes.margin} ${attributes.border}`,
          },
          el(
            "div",
            { className: "card-header text-center" },
            __("Card Header", "myplugin")
          ),
          el("div", { className: "card-body" }, el(InnerBlocks.Content)),
          el(
            "div",
            { className: "card-footer text-center" },
            __("Card Footer", "myplugin")
          )
        );
      },
    });
  })(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor,
    window.wp.components,
    window.wp.i18n
  );
  