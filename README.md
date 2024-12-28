# Bootenberg Blocks

**Bootenberg Blocks** is a powerful WordPress plugin that bridges the gap between the **Gutenberg block editor** and **Bootstrap framework**. It enables developers and content creators to craft responsive, dynamic, and visually appealing layouts effortlessly. With support for dynamic data rendering, it brings flexibility and design sophistication to WordPress websites.

---

## Features

- **Bootstrap Integration**: Seamlessly load the latest version of Bootstrap to style your blocks and enhance layout responsiveness.
- **Custom Gutenberg Blocks**: Pre-built, Bootstrap-styled blocks ready to use in the Gutenberg editor.
- **Dynamic Data Rendering**: Populate blocks with data from WordPress posts, custom fields, or external APIs.
- **User-Friendly Settings**: Simple and intuitive block controls for content creators and developers alike.
- **Lightweight Performance**: Optimized to minimize impact on your site's speed.

---

## Installation

1. **Download and Install the Plugin**:
   - Download the `.zip` file from the repository.
   - Navigate to `Plugins > Add New` in your WordPress dashboard.
   - Upload the file and activate the plugin.

2. **Bootstrap Activation**:
   - Bootenberg Blocks automatically enqueues the latest Bootstrap CSS and JS files.

3. **Start Using the Blocks**:
   - Open the Gutenberg editor and explore the new **Bootenberg Blocks** section.

---

## How to Use Bootenberg Blocks

1. **Adding a Block**:
   - Open the Gutenberg editor and select a block from the **Bootenberg Blocks** section:
     - **Grid Layout**: Use Bootstrap's 12-column grid system.
     - **Card Block**: Display content dynamically in a Bootstrap card.
     - **Button Block**: Add buttons styled with Bootstrap.

2. **Dynamic Data Rendering**:
   - Use the block settings panel to configure dynamic content:
     - Pull data from WordPress posts, custom fields (ACF), or API endpoints.
     - Customize layout using Bootstrap utility classes.

3. **Styling Options**:
   - Add custom classes to further style blocks using Bootstrap’s CSS utilities.

---

## Configuration

- **Bootstrap Version**:
  - Navigate to `Settings > Bootenberg Blocks` to choose your desired Bootstrap version (e.g., 4.x, 5.x).

- **Dynamic Content**:
  - Configure API endpoints or WordPress queries in the plugin settings to fetch data dynamically.

---

## Developer Guide

### Extending Bootenberg Blocks
Developers can extend the plugin by adding custom blocks or modifying existing ones.

1. **Register Custom Blocks**:
   Use the WordPress `registerBlockType` function to create blocks with Bootstrap styling.

2. **Dynamic Data**:
   Use WordPress REST API or custom queries to fetch data for blocks.

3. **Example Block Registration**:
   ```javascript
   wp.blocks.registerBlockType('bootenberg/custom-block', {
       title: 'Custom Block',
       category: 'layout',
       attributes: {
           content: { type: 'string' }
       },
       edit: ({ attributes, setAttributes }) => {
           return <div className="container">{attributes.content}</div>;
       },
       save: ({ attributes }) => {
           return <div className="container">{attributes.content}</div>;
       }
   });
