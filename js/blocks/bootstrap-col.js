(function (blocks, element, blockEditor, components, i18n) {
    const { __ } = i18n; // استيراد دالة الترجمة
    const { createElement: el } = element;
    const { InspectorControls, MediaUpload, InnerBlocks } = blockEditor; // استبدال الوحدات القديمة
    const { PanelBody, SelectControl, Button } = components;
  
    blocks.registerBlockType("myplugin/bootstrap-column", {
      title: __("Bootstrap Column", "myplugin"),
      icon: "grid-view",
      category: "layout",
  
      attributes: {
        columnSmall: { type: "string", default: "col-sm-12" },
        columnMedium: { type: "string", default: "col-md-6" },
        columnLarge: { type: "string", default: "col-lg-4" },
        columnXLarge: { type: "string", default: "col-xl-4" },
        columnColor: { type: "string", default: "" },
        columnImage: { type: "string", default: "" },
      },
  
      edit: function (props) {
        const { attributes, setAttributes } = props;
  
        // تحديث الخصائص
        function updateAttribute(attribute, value) {
          setAttributes({ [attribute]: value });
        }
  
        return [
          // لوحة التحكم الجانبية
          el(
            InspectorControls,
            {},
            el(
              PanelBody,
              { title: __("Column Settings", "myplugin"), initialOpen: true },
              el(SelectControl, {
                label: __("Small Screen (sm)", "myplugin"),
                value: attributes.columnSmall,
                options: [
                  { label: "1 Column", value: "col-sm-1" },
                  { label: "2 Columns", value: "col-sm-2" },
                  { label: "3 Columns", value: "col-sm-3" },
                  { label: "4 Columns", value: "col-sm-4" },
                  { label: "6 Columns", value: "col-sm-6" },
                  { label: "12 Columns", value: "col-sm-12" },
                ],
                onChange: (value) => updateAttribute("columnSmall", value),
              }),
              el(SelectControl, {
                label: __("Medium Screen (md)", "myplugin"),
                value: attributes.columnMedium,
                options: [
                  { label: "1 Column", value: "col-md-1" },
                  { label: "2 Columns", value: "col-md-2" },
                  { label: "3 Columns", value: "col-md-3" },
                  { label: "4 Columns", value: "col-md-4" },
                  { label: "6 Columns", value: "col-md-6" },
                  { label: "9 Columns", value: "col-md-9" },
                  { label: "12 Columns", value: "col-md-12" },
                ],
                onChange: (value) => updateAttribute("columnMedium", value),
              }),
              el(SelectControl, {
                label: __("Large Screen (lg)", "myplugin"),
                value: attributes.columnLarge,
                options: [
                  { label: "1 Column", value: "col-lg-1" },
                  { label: "2 Columns", value: "col-lg-2" },
                  { label: "3 Columns", value: "col-lg-3" },
                  { label: "4 Columns", value: "col-lg-4" },
                  { label: "6 Columns", value: "col-lg-6" },
                  { label: "9 Columns", value: "col-lg-9" },
                  { label: "12 Columns", value: "col-lg-12" },
                ],
                onChange: (value) => updateAttribute("columnLarge", value),
              }),
              el(SelectControl, {
                label: __("X-Large Screen (xl)", "myplugin"),
                value: attributes.columnXLarge,
                options: [
                  { label: "1 Column", value: "col-xl-1" },
                  { label: "2 Columns", value: "col-xl-2" },
                  { label: "3 Columns", value: "col-xl-3" },
                  { label: "4 Columns", value: "col-xl-4" },
                  { label: "6 Columns", value: "col-xl-6" },
                  { label: "9 Columns", value: "col-xl-9" },
                  { label: "12 Columns", value: "col-xl-12" },
                ],
                onChange: (value) => updateAttribute("columnXLarge", value),
              }),
              el(SelectControl, {
                label: __("Color", "myplugin"),
                value: attributes.columnColor,
                options: [
                  { label: __("None", "myplugin"), value: "" },
                  { label: __("Primary", "myplugin"), value: "alert alert-primary" },
                  { label: __("Secondary", "myplugin"), value: "alert alert-secondary" },
                  { label: __("Success", "myplugin"), value: "alert alert-success" },
                  { label: __("Danger", "myplugin"), value: "alert alert-danger" },
                  { label: __("Warning", "myplugin"), value: "alert alert-warning" },
                  { label: __("Info", "myplugin"), value: "alert alert-info" },
                  { label: __("Light", "myplugin"), value: "alert alert-light" },
                  { label: __("Dark", "myplugin"), value: "alert alert-dark" },
                ],
                onChange: (value) => updateAttribute("columnColor", value),
              }),
              el(MediaUpload, {
                onSelect: (media) => updateAttribute("columnImage", media.url),
                allowedTypes: ["image"],
                render: ({ open }) =>
                  el(
                    Button,
                    { onClick: open, isPrimary: true },
                    attributes.columnImage ? __("Change Image", "myplugin") : __("Add Image", "myplugin")
                  ),
              }),
              attributes.columnImage &&
                el(
                  "div",
                  { style: { marginTop: "10px" } },
                  el("p", {}, __("Selected Image:", "myplugin") + ` ${attributes.columnImage}`),
                  el(
                    Button,
                    {
                      onClick: () => updateAttribute("columnImage", ""),
                      isSecondary: true,
                    },
                    __("Remove Image", "myplugin")
                  )
                )
            )
          ),
          // عرض واجهة العمود
          el(
            "div",
            {
              className: `${attributes.columnSmall} ${attributes.columnMedium} ${attributes.columnLarge} ${attributes.columnXLarge} ${attributes.columnColor}`,
              style: { border: "1px dashed #ccc", padding: "10px" },
            },
            attributes.columnImage &&
              el("img", {
                src: attributes.columnImage,
                alt: __("Column Image", "myplugin"),
                style: { maxWidth: "100%", marginBottom: "10px" },
              }),
            el(InnerBlocks)
          ),
        ];
      },
  
      save: function (props) {
        const { attributes } = props;
  
        return el(
          "div",
          {
            className: `${attributes.columnSmall} ${attributes.columnMedium} ${attributes.columnLarge} ${attributes.columnXLarge} ${attributes.columnColor}`,
          },
          attributes.columnImage &&
            el("img", {
              src: attributes.columnImage,
              alt: __("Column Image", "myplugin"),
              style: { maxWidth: "100%", marginBottom: "10px" },
            }),
          el(InnerBlocks.Content)
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
  