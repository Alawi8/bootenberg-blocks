(function (blocks, element, blockEditor, components) {
  const { createElement: el } = element;
  const { InnerBlocks, InspectorControls, ColorPalette } = blockEditor;
  const { PanelBody, SelectControl, TextControl } = components;

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
      const { attributes, setAttributes } = props;

      const updateAttribute = (attribute) => (value) =>
        setAttributes({ [attribute]: value });

      return [
        el(
          InspectorControls,
          {},
          el(
            PanelBody,
            { title: "Row Settings", initialOpen: true },
            el(SelectControl, {
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
            el(SelectControl, {
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
            el(SelectControl, {
              label: "Alignment",
              value: attributes.alignment,
              options: [
                { label: "Left", value: "text-left" },
                { label: "Center", value: "text-center" },
                { label: "Right", value: "text-right" },
              ],
              onChange: updateAttribute("alignment"),
            }),
            el(ColorPalette, {
              label: "Background Color",
              value: attributes.backgroundColor,
              onChange: updateAttribute("backgroundColor"),
            }),
            el(ColorPalette, {
              label: "Text Color",
              value: attributes.textColor,
              onChange: updateAttribute("textColor"),
            }),
            el(TextControl, {
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
      const { attributes } = props;

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
})(
  window.wp.blocks,
  window.wp.element,
  window.wp.blockEditor,
  window.wp.components
);
