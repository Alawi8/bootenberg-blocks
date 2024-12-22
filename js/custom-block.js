(function (blocks, element, editor, components) {
  var el = element.createElement;
  var InnerBlocks = editor.InnerBlocks;
  var RichText = editor.RichText;
  var InspectorControls = editor.InspectorControls;
  var TextControl = components.TextControl;
  var SelectControl = components.SelectControl;
  var MediaUpload = editor.MediaUpload;
  var Button = components.Button;

  // button blocks
  blocks.registerBlockType("myplugin/bootstrap-button", {
    title: "Bootstrap Button",
    icon: "button",
    category: "common",

    attributes: {
      content: { type: "string", default: "Button" }, // النص داخل الزر
      customClass: { type: "string", default: "btn btn-primary" }, // الكلاس الافتراضي
    },

    edit: function (props) {
      var content = props.attributes.content;
      var customClass = props.attributes.customClass;

      // تحديث النص
      function onChangeContent(newContent) {
        props.setAttributes({ content: newContent });
      }

      // تحديث الكلاس
      function onChangeClass(newClass) {
        props.setAttributes({ customClass: newClass });
      }

      return [
        // إضافة قائمة منسدلة لتغيير الكلاس في الشريط الجانبي
        el(
          InspectorControls,
          {},
          el(SelectControl, {
            label: "Button Class", // العنوان في الشريط الجانبي
            value: customClass, // القيمة الحالية
            options: [
              { label: "Primary", value: "btn btn-primary" },
              { label: "Secondary", value: "btn btn-secondary" },
              { label: "Success", value: "btn btn-success" },
              { label: "Danger", value: "btn btn-danger" },
              { label: "Warning", value: "btn btn-warning" },
              { label: "Info", value: "btn btn-info" },
              { label: "Light", value: "btn btn-light" },
              { label: "Dark", value: "btn btn-dark" },
            ],
            onChange: onChangeClass, // تحديث الكلاس عند تغيير الاختيار
          })
        ),
        // عرض الزر في المحرر
        el(
          "button",
          { className: customClass, style: { margin: "10px" } },
          el(RichText, {
            value: content,
            onChange: onChangeContent,
            placeholder: "Button Text",
          })
        ),
      ];
    },

    save: function (props) {
      return el(
        "button",
        { className: props.attributes.customClass },
        props.attributes.content
      );
    },
  });

  // row blocks
  blocks.registerBlockType("myplugin/bootstrap-row", {
    title: "Row",
    icon: "layout",
    category: "common",
  
    attributes: {
      marginClass: { type: "string", default: "m-0" },
      paddingClass: { type: "string", default: "p-0" },
      alignment: { type: "string", default: "text-left" },
      customClasses: { type: "string", default: "" },
      backgroundColor: { type: "string", default: "" }, // خلفية القسم
      textColor: { type: "string", default: "" }, // لون النص
    },
  
    edit: function (props) {
      const attributes = props.attributes;
  
      const updateAttribute = (attribute) => (value) =>
        props.setAttributes({ [attribute]: value });
  
      return [
        el(
          InspectorControls,
          {},
          el(
            components.PanelBody,
            { title: "Row Settings", initialOpen: true },
            el(components.SelectControl, {
              label: "Margin",
              value: attributes.marginClass,
              options: [
                { label: "No Margin", value: "m-0" },
                { label: "Small Margin", value: "m-1" },
                { label: "Medium Margin", value: "m-2" },
                { label: "Large Margin", value: "m-3" },
                { label: "Extra Large Margin", value: "m-4" },
                { label: "Custom Margin", value: "m-5" },
              ],
              onChange: updateAttribute("marginClass"),
            }),
            el(components.SelectControl, {
              label: "Padding",
              value: attributes.paddingClass,
              options: [
                { label: "No Padding", value: "p-0" },
                { label: "Small Padding", value: "p-1" },
                { label: "Medium Padding", value: "p-2" },
                { label: "Large Padding", value: "p-3" },
                { label: "Extra Large Padding", value: "p-4" },
                { label: "Custom Padding", value: "p-5" },
              ],
              onChange: updateAttribute("paddingClass"),
            }),
            el(components.SelectControl, {
              label: "Alignment",
              value: attributes.alignment,
              options: [
                { label: "Left", value: "text-left" },
                { label: "Center", value: "text-center" },
                { label: "Right", value: "text-right" },
              ],
              onChange: updateAttribute("alignment"),
            }),
            el(components.ColorPalette, {
              label: "Background Color",
              value: attributes.backgroundColor,
              onChange: updateAttribute("backgroundColor"),
            }),
            el(components.ColorPalette, {
              label: "Text Color",
              value: attributes.textColor,
              onChange: updateAttribute("textColor"),
            }),
            el(components.TextControl, {
              label: "Custom Classes",
              value: attributes.customClasses,
              onChange: updateAttribute("customClasses"),
            })
          )
        ),
        el(
          "div",
          {
            className: `row ${attributes.marginClass} ${attributes.paddingClass} ${attributes.alignment} ${attributes.customClasses}`,
            style: {
              backgroundColor: attributes.backgroundColor || "transparent",
              color: attributes.textColor || "inherit",
              border: "1px dashed #ccc",
            },
          },
          el(InnerBlocks, { allowedBlocks: ["myplugin/bootstrap-column"] })
        ),
      ];
    },
  
    save: function (props) {
      const attributes = props.attributes;
  
      return el(
        "div",
        {
          className: `row ${attributes.marginClass} ${attributes.paddingClass} ${attributes.alignment} ${attributes.customClasses}`,
          style: {
            backgroundColor: attributes.backgroundColor || "transparent",
            color: attributes.textColor || "inherit",
          },
        },
        el(InnerBlocks.Content)
      );
    },
  });

  // column blocks
  blocks.registerBlockType("myplugin/bootstrap-column", {
    title: "Bootstrap Column",
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
      var attributes = props.attributes;
  
      // تحديث الخصائص
      function updateAttribute(attribute, value) {
        props.setAttributes({ [attribute]: value });
      }
  
      return [
        // لوحة التحكم الجانبية
        el(
          InspectorControls,
          {},
          el(
            "div",
            {},
            el(SelectControl, {
              label: "Small Screen (sm)",
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
              label: "Medium Screen (md)",
              value: attributes.columnMedium,
              options: [
                { label: "1 Column", value: "col-md-1" },
                { label: "2 Columns", value: "col-md-2" },
                { label: "3 Columns", value: "col-md-3" },
                { label: "4 Columns", value: "col-md-4" },
                { label: "6 Columns", value: "col-md-6" },
                { label: "12 Columns", value: "col-md-12" },
              ],
              onChange: (value) => updateAttribute("columnMedium", value),
            }),
            // Large screen settings
            el(SelectControl, {
              label: "Large Screen (lg)",
              value: attributes.columnLarge,
              options: [
                { label: "1 Column", value: "col-lg-1" },
                { label: "2 Columns", value: "col-lg-2" },
                { label: "3 Columns", value: "col-lg-3" },
                { label: "4 Columns", value: "col-lg-4" },
                { label: "6 Columns", value: "col-lg-6" },
                { label: "12 Columns", value: "col-lg-12" },
              ],
              onChange: (value) => updateAttribute("columnLarge", value),
            }),
            // X-Large screen settings
            el(SelectControl, {
              label: "X-Large Screen (xl)",
              value: attributes.columnXLarge,
              options: [
                { label: "1 Column", value: "col-xl-1" },
                { label: "2 Columns", value: "col-xl-2" },
                { label: "3 Columns", value: "col-xl-3" },
                { label: "4 Columns", value: "col-xl-4" },
                { label: "6 Columns", value: "col-xl-6" },
                { label: "12 Columns", value: "col-xl-12" },
              ],
              onChange: (value) => updateAttribute("columnXLarge", value),
            }),
            el(SelectControl, {
              label: "Color",
              value: attributes.columnColor,
              options: [
                { label: "None", value: "" },
                { label: "Primary", value: "alert alert-primary" },
                { label: "Secondary", value: "alert alert-secondary" },
                { label: "Success", value: "alert alert-success" },
                { label: "Danger", value: "alert alert-danger" },
                { label: "Warning", value: "alert alert-warning" },
                { label: "Info", value: "alert alert-info" },
                { label: "Light", value: "alert alert-light" },
                { label: "Dark", value: "alert alert-dark" },
              ],
              onChange: (value) => updateAttribute("columnColor", value),
            }),
            el(MediaUpload, {
              onSelect: (media) => updateAttribute("columnImage", media.url),
              allowedTypes: ["image"],
              render: ({ open }) =>
                el(
                  components.Button,
                  { onClick: open, isPrimary: true },
                  attributes.columnImage ? "Change Image" : "Add Image"
                ),
            }),
            attributes.columnImage &&
              el(
                "div",
                { style: { marginTop: "10px" } },
                el("p", {}, `Selected Image: ${attributes.columnImage}`),
                el(
                  components.Button,
                  {
                    onClick: () => updateAttribute("columnImage", ""),
                    isSecondary: true,
                  },
                  "Remove Image"
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
              alt: "Column Image",
              style: { maxWidth: "100%", marginBottom: "10px" },
            }),
          el(InnerBlocks)
        ),
      ];
    },
  
    save: function (props) {
      var attributes = props.attributes;
  
      return el(
        "div",
        {
          className: `${attributes.columnSmall} ${attributes.columnMedium} ${attributes.columnLarge} ${attributes.columnXLarge} ${attributes.columnColor}`,
        },
        attributes.columnImage &&
          el("img", {
            src: attributes.columnImage,
            alt: "Column Image",
            style: { maxWidth: "100%", marginBottom: "10px" },
          }),
        el(InnerBlocks.Content)
      );
    },
  });
  
  // card blocks
  blocks.registerBlockType("myplugin/bootstrap-card", {
    title: "Bootstrap Card",
    icon: "id", // أيقونة الكارد
    category: "common",

    attributes: {
      customClass: { type: "string", default: "card bg-light" }, // الكلاس الخاص بالكارد
    },

    edit: function (props) {
      var attributes = props.attributes;

      // تحديث الكلاس الخاص بالكارد
      function onChangeClass(newClass) {
        props.setAttributes({ customClass: newClass });
      }

      return [
        // لوحة التحكم الجانبية لتخصيص كلاس Bootstrap
        el(
          InspectorControls,
          {},
          el(SelectControl, {
            label: "Card Class",
            value: attributes.customClass,
            options: [
              { label: "Light", value: "card bg-light" },
              { label: "Primary", value: "card bg-primary text-white" },
              { label: "Secondary", value: "card bg-secondary text-white" },
              { label: "Success", value: "card bg-success text-white" },
              { label: "Danger", value: "card bg-danger text-white" },
              { label: "Warning", value: "card bg-warning" },
              { label: "Info", value: "card bg-info text-white" },
              { label: "Dark", value: "card bg-dark text-white" },
            ],
            onChange: onChangeClass,
          })
        ),
        // عرض الكارد مع InnerBlocks
        el(
          "div",
          {
            className: attributes.customClass,
            style: {
              padding: "10px",
              margin: "10px",
              border: "1px solid #ddd",
            },
          },
          el("div", { className: "card-header text-center" }, "Card Header"),
          el(
            "div",
            { className: "card-body" },
            el(InnerBlocks, {
              allowedBlocks: ["core/paragraph", "core/image", "core/heading"], // البلوكات المسموح إضافتها
              template: [
                ["core/heading", { placeholder: "Enter Card Title", level: 4 }],
                [
                  "core/paragraph",
                  { placeholder: "Enter card content here..." },
                ],
              ],
              templateLock: false, // يمكن تحرير المحتويات بحرية
            })
          ),
          el("div", { className: "card-footer text-center" }, "Card Footer")
        ),
      ];
    },

    save: function (props) {
      var attributes = props.attributes;

      return el(
        "div",
        { className: attributes.customClass },
        el("div", { className: "card-header text-center" }, "Card Header"),
        el("div", { className: "card-body" }, el(InnerBlocks.Content)),
        el("div", { className: "card-footer text-center" }, "Card Footer")
      );
    },
  });

  // aleart blocks
  blocks.registerBlockType("myplugin/bootstrap-alert", {
    title: "Bootstrap Alert",
    icon: "warning",
    category: "common",

    attributes: {
      message: { type: "string", default: "This is an alert message!" },
      alertClass: { type: "string", default: "alert alert-primary" },
    },

    edit: function (props) {
      var attributes = props.attributes;

      function onChangeMessage(newMessage) {
        props.setAttributes({ message: newMessage });
      }

      function onChangeClass(newClass) {
        props.setAttributes({ alertClass: newClass });
      }

      return [
        el(
          InspectorControls,
          {},
          el(SelectControl, {
            label: "Alert Type",
            value: attributes.alertClass,
            options: [
              { label: "Primary", value: "alert alert-primary" },
              { label: "Secondary", value: "alert alert-secondary" },
              { label: "Success", value: "alert alert-success" },
              { label: "Danger", value: "alert alert-danger" },
              { label: "Warning", value: "alert alert-warning" },
              { label: "Info", value: "alert alert-info" },
              { label: "Light", value: "alert alert-light" },
              { label: "Dark", value: "alert alert-dark" },
            ],
            onChange: onChangeClass,
          })
        ),
        el(
          "div",
          {
            className: attributes.alertClass,
            style: { padding: "10px", margin: "10px" },
          },
          el(RichText, {
            tagName: "p",
            value: attributes.message,
            onChange: onChangeMessage,
            placeholder: "Enter alert message...",
          })
        ),
      ];
    },

    save: function (props) {
      return el(
        "div",
        { className: props.attributes.alertClass },
        el("p", {}, props.attributes.message)
      );
    },
  });

  //navbar blocks
  blocks.registerBlockType("myplugin/bootstrap-header", {
      title: "Bootstrap Header",
      icon: "menu",
      category: "layout",
  
      attributes: {
        logoUrl: { type: "string", default: "" },
        menuAlignment: { type: "string", default: "navbar-start" },
        bgColor: { type: "string", default: "bg-primary" },
        textColor: { type: "string", default: "text-white" },
      },
  
      edit: function (props) {
        var attributes = props.attributes;
  
        function updateAttribute(attribute, value) {
          props.setAttributes({ [attribute]: value });
        }
  
        return [
          el(
            InspectorControls,
            {},
            el(
              "div",
              {},
              el(MediaUpload, {
                onSelect: function (media) {
                  updateAttribute("logoUrl", media.url);
                },
                allowedTypes: ["image"],
                render: function (obj) {
                  return el(
                    Button,
                    { onClick: obj.open, isPrimary: true },
                    attributes.logoUrl ? "Change Logo" : "Add Logo"
                  );
                },
              }),
              el(SelectControl, {
                label: "Menu Alignment",
                value: attributes.menuAlignment,
                options: [
                  { label: "Start", value: "navbar-start" },
                  { label: "Center", value: "navbar-center" },
                  { label: "End", value: "navbar-end" },
                ],
                onChange: function (value) {
                  updateAttribute("menuAlignment", value);
                },
              }),
              el(SelectControl, {
                label: "Background Color",
                value: attributes.bgColor,
                options: [
                  { label: "Primary", value: "bg-primary" },
                  { label: "Secondary", value: "bg-secondary" },
                  { label: "Light", value: "bg-light" },
                  { label: "Dark", value: "bg-dark" },
                ],
                onChange: function (value) {
                  updateAttribute("bgColor", value);
                },
              }),
              el(SelectControl, {
                label: "Text Color",
                value: attributes.textColor,
                options: [
                  { label: "White", value: "text-white" },
                  { label: "Dark", value: "text-dark" },
                  { label: "Muted", value: "text-muted" },
                ],
                onChange: function (value) {
                  updateAttribute("textColor", value);
                },
              })
            )
          ),
          el(
            "header",
            {
              className: `navbar ${attributes.bgColor} ${attributes.textColor} d-flex align-items-center justify-content-between px-4`,
            },
            attributes.logoUrl &&
              el("img", {
                src: attributes.logoUrl,
                alt: "Logo",
                className: "navbar-brand",
                style: { maxHeight: "50px" },
              }),
            el(
              "nav",
              { className: `navbar-nav ${attributes.menuAlignment}` },
              el(InnerBlocks, { allowedBlocks: ["core/navigation"] })
            )
          )
        ];
      },
  
      save: function (props) {
        var attributes = props.attributes;
  
        return el(
          "header",
          {
            className: `navbar ${attributes.bgColor} ${attributes.textColor} d-flex align-items-center justify-content-between px-4`,
          },
          attributes.logoUrl &&
            el("img", {
              src: attributes.logoUrl,
              alt: "Logo",
              className: "navbar-brand",
              style: { maxHeight: "50px" },
            }),
          el(
            "nav",
            { className: `navbar-nav ${attributes.menuAlignment}` },
            el(InnerBlocks.Content)
          )
        );
      },
  });
  
  // call to action 
  blocks.registerBlockType("myplugin/call-to-action", {
      title: "Call to Action",
      icon: "megaphone",
      category: "layout",
  
      attributes: {
        ctaTitle: { type: "string", default: "Your Title Here" },
        ctaDescription: { type: "string", default: "Your description here." },
        ctaButtonText: { type: "string", default: "Click Me" },
        ctaButtonLink: { type: "string", default: "#" },
        bgColor: { type: "string", default: "bg-primary" },
        textColor: { type: "string", default: "text-white" },
      },
  
      edit: function (props) {
        var attributes = props.attributes;
  
        function updateAttribute(attribute, value) {
          props.setAttributes({ [attribute]: value });
        }
  
        return [
          el(
            InspectorControls,
            {},
            el(
              "div",
              {},
              el(TextControl, {
                label: "Button Link",
                value: attributes.ctaButtonLink,
                onChange: function (value) {
                  updateAttribute("ctaButtonLink", value);
                },
              }),
              el(SelectControl, {
                label: "Background Color",
                value: attributes.bgColor,
                options: [
                  { label: "Primary", value: "bg-primary" },
                  { label: "Secondary", value: "bg-secondary" },
                  { label: "Light", value: "bg-light" },
                  { label: "Dark", value: "bg-dark" },
                ],
                onChange: function (value) {
                  updateAttribute("bgColor", value);
                },
              }),
              el(SelectControl, {
                label: "Text Color",
                value: attributes.textColor,
                options: [
                  { label: "White", value: "text-white" },
                  { label: "Dark", value: "text-dark" },
                  { label: "Muted", value: "text-muted" },
                ],
                onChange: function (value) {
                  updateAttribute("textColor", value);
                },
              })
            )
          ),
          el(
            "div",
            {
              className: `cta ${attributes.bgColor} ${attributes.textColor} p-4 text-center`,
              style: { borderRadius: "8px" },
            },
            el(RichText, {
              tagName: "h2",
              value: attributes.ctaTitle,
              placeholder: "Add your title...",
              onChange: function (value) {
                updateAttribute("ctaTitle", value);
              },
              className: "cta-title",
            }),
            el(RichText, {
              tagName: "p",
              value: attributes.ctaDescription,
              placeholder: "Add your description...",
              onChange: function (value) {
                updateAttribute("ctaDescription", value);
              },
              className: "cta-description",
            }),
            el(RichText, {
              tagName: "a",
              value: attributes.ctaButtonText,
              placeholder: "Add button text...",
              onChange: function (value) {
                updateAttribute("ctaButtonText", value);
              },
              className: "btn btn-lg btn-light",
              href: attributes.ctaButtonLink,
            })
          )
        ];
      },
  
      save: function (props) {
        var attributes = props.attributes;
  
        return el(
          "div",
          {
            className: `cta ${attributes.bgColor} ${attributes.textColor} p-4 text-center`,
            style: { borderRadius: "8px" },
          },
          el(RichText.Content, {
            tagName: "h2",
            value: attributes.ctaTitle,
            className: "cta-title",
          }),
          el(RichText.Content, {
            tagName: "p",
            value: attributes.ctaDescription,
            className: "cta-description",
          }),
          el("a", {
            className: "btn btn-lg btn-light",
            href: attributes.ctaButtonLink,
          }, attributes.ctaButtonText)
        );
      },
  });
})(window.wp.blocks, window.wp.element, window.wp.editor, window.wp.components);
