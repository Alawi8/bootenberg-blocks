( function( blocks, element, editor, components ) {
    var el = element.createElement;
    var InspectorControls = editor.InspectorControls;
    var SelectControl = components.SelectControl;
    var TextControl = components.TextControl;
    var ToggleControl = components.ToggleControl;
    var CheckboxControl = components.CheckboxControl;
    var RangeControl = components.RangeControl;

    blocks.registerBlockType('gutenberg-bootstrap-blocks/dynamic-block', {
        title: 'Dynamic Block with Bootstrap',
        icon: 'grid-view',
        category: 'widgets',

        attributes: {
            postType: { type: 'string', default: 'post' },
            postsPerPage: { type: 'number', default: 3 },
            enableShadow: { type: 'boolean', default: false },
            cardColor: { type: 'string', default: 'bg-light' },
            buttonColor: { type: 'string', default: 'btn-primary' },
            textColor: { type: 'string', default: 'text-dark' },
            selectedFields: { type: 'array', default: ['title', 'image', 'excerpt'] },
            columns: { type: 'number', default: 3 },
            readMoreText: { type: 'string', default: 'Read More' },
            excerptLength: { type: 'number', default: 15 },
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
                            { label: 'pages', value: 'pages'},
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
                            props.setAttributes({ postsPerPage: parseInt(value) || 8 });
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
                        label: 'Card Background Color',
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
                    el(SelectControl, {
                        label: 'Button Color',
                        value: attributes.buttonColor,
                        options: [
                            { label: 'Primary', value: 'btn-primary' },
                            { label: 'Secondary', value: 'btn-secondary' },
                            { label: 'Success', value: 'btn-success' },
                            { label: 'Danger', value: 'btn-danger' },
                        ],
                        onChange: function (value) {
                            props.setAttributes({ buttonColor: value });
                        }
                    }),
                    el(SelectControl, {
                        label: 'Text Color',
                        value: attributes.textColor,
                        options: [
                            { label: 'Dark', value: 'text-dark' },
                            { label: 'Light', value: 'text-light' },
                            { label: 'Muted', value: 'text-muted' },
                        ],
                        onChange: function (value) {
                            props.setAttributes({ textColor: value });
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
                    el(RangeControl, {
                        label: 'Excerpt Length',
                        value: attributes.excerptLength,
                        min: 5,
                        max: 50,
                        onChange: function (value) {
                            props.setAttributes({ excerptLength: value });
                        }
                    }),
                    el('div', { className: 'field-selector' },
                        el('label', { style: { fontWeight: 'bold', display: 'block', marginBottom: '10px' } }, 'Select Fields to Display:'),
                        ['title', 'image', 'excerpt', 'date'].map(function (field) {
                            return el(CheckboxControl, {
                                key: field,
                                label: field.charAt(0).toUpperCase() + field.slice(1),
                                checked: attributes.selectedFields.includes(field),
                                onChange: function (isChecked) {
                                    const updatedFields = isChecked
                                        ? [...new Set([...attributes.selectedFields, field])] // منع التكرار
                                        : attributes.selectedFields.filter(f => f !== field);
                    
                                    props.setAttributes({ selectedFields: updatedFields });
                                }
                            });
                        })
                    )
                    ,
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