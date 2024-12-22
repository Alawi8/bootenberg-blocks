( function( blocks, element, editor, components ) {
    var el = element.createElement;
    var InspectorControls = editor.InspectorControls;
    var SelectControl = components.SelectControl;
    var TextControl = components.TextControl;
    var ToggleControl = components.ToggleControl;
    var CheckboxControl = components.CheckboxControl;

    blocks.registerBlockType('gutenberg-bootstrap-blocks/dynamic-block', {
        title: 'Dynamic Block with Bootstrap',
        icon: 'grid-view',
        category: 'widgets',
    
        attributes: {
            postType: { type: 'string', default: 'post' },
            postsPerPage: { type: 'number', default: 3 },
            enableShadow: { type: 'boolean', default: false },
            cardColor: { type: 'string', default: 'bg-light' },
            selectedFields: { type: 'array', default: ['title', 'image', 'excerpt'] },
            columns: { type: 'number', default: 3 },
            readMoreText: { type: 'string', default: 'Read More' },
        },
    
        edit: function (props) {
            var attributes = props.attributes;

            return [
                el(InspectorControls, {},
                    el(SelectControl, {
                        label: 'Post Type',
                        value: attributes.postType,
                        options: [
                            { label: 'Posts', value: 'post' },
                            { label: 'Products', value: 'product' },
                        ],
                        onChange: function (value) {
                            props.setAttributes({ postType: value });
                        }
                    }),
                    el(TextControl, {
                        label: 'Number of Posts',
                        type: 'number',
                        value: attributes.postsPerPage,
                        onChange: function (value) {
                            props.setAttributes({ postsPerPage: parseInt(value) || 3 });
                        }
                    }),
                    el(ToggleControl, {
                        label: 'Enable Shadow',
                        checked: attributes.enableShadow,
                        onChange: function (value) {
                            props.setAttributes({ enableShadow: value });
                        }
                    }),
                    el(SelectControl, {
                        label: 'Card Color',
                        value: attributes.cardColor,
                        options: [
                            { label: 'Light', value: 'bg-light' },
                            { label: 'Dark', value: 'bg-dark' },
                            { label: 'Primary', value: 'bg-primary' },
                            { label: 'Secondary', value: 'bg-secondary' },
                        ],
                        onChange: function (value) {
                            props.setAttributes({ cardColor: value });
                        }
                    }),
                    el(TextControl, {
                        label: 'Read More Text',
                        type: 'text',
                        value: attributes.readMoreText,
                        onChange: function (value) {
                            props.setAttributes({ readMoreText: value });
                        }
                    }),
                    el('div', { className: 'field-selector' },
                        el('label', {}, 'Select Fields to Display:'),
                        ['title', 'image', 'excerpt', 'date'].map(function (field) {
                            return el(CheckboxControl, {
                                key: field,
                                label: field.charAt(0).toUpperCase() + field.slice(1),
                                checked: attributes.selectedFields.includes(field),
                                onChange: function (isChecked) {
                                    const updatedFields = isChecked
                                        ? [...attributes.selectedFields, field]
                                        : attributes.selectedFields.filter(f => f !== field);
                                    props.setAttributes({ selectedFields: updatedFields });
                                }
                            });
                        })
                    ),
                    el(SelectControl, {
                        label: 'Number of Columns',
                        value: attributes.columns,
                        options: [
                            { label: '1 Column', value: 1 },
                            { label: '2 Columns', value: 2 },
                            { label: '3 Columns', value: 3 },
                            { label: '4 Columns', value: 4 },
                        ],
                        onChange: function (value) {
                            props.setAttributes({ columns: parseInt(value) || 3 });
                        }
                    })
                ),
                el('div', { className: 'bootstrap-grid' },
                    el('p', {}, 'Dynamic block preview - configuration in editor only.')
                )
            ];
        },
    
        save: function () {
            return null; // يتم توليد المحتوى ديناميكيًا عبر PHP
        },
    });

} )( window.wp.blocks, window.wp.element, window.wp.editor, window.wp.components );


