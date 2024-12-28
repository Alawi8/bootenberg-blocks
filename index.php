<?php
/**
 * Plugin Name: Bootenberg Blocks
 * Description: Disable default Gutenberg classes and use Bootstrap classes only, along with adding custom blocks.
 * Version: 1.1
 * Author: Meshcah
 * Author URI: https://meshcah.net
 * License: GPL-2.0+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 *
 * This plugin is designed to add dynamic blocks with Bootstrap styling features.
 * For support or inquiries, visit: https://meshcah.net
 */

// Ensure WordPress files exist
if (!defined('ABSPATH')) {
    exit; // Prevent direct file access
}

/**
 * Load assets for the block editor only.
 */
function bootenberg_enqueue_block_editor_assets() {
    wp_enqueue_script(
        'bootenberg-editor-js',
        plugins_url('assets/js/bundle.js', __FILE__),
        ['wp-blocks', 'wp-element', 'wp-editor'],
        filemtime(plugin_dir_path(__FILE__) . 'assets/js/bundle.js')
    );

    wp_enqueue_style(
        'bootenberg-editor-css',
        plugins_url('assets/css/editor-style.css', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'assets/css/editor-style.css')
    );
}
add_action('enqueue_block_editor_assets', 'bootenberg_enqueue_block_editor_assets');

/**
 * Load assets for the frontend.
 */
function bootenberg_enqueue_frontend_assets() {
    wp_enqueue_script(
        'bootenberg-frontend-js',
        plugins_url('assets/js/bundle.js', __FILE__),
        ['wp-element', 'jquery'],
        filemtime(plugin_dir_path(__FILE__) . 'assets/js/bundle.js'),
        true
    );

    wp_localize_script(
        'bootenberg-frontend-js',
        'bootenberg_ajax_object',
        [
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce'    => wp_create_nonce('bootenberg_nonce'),
        ]
    );

    wp_enqueue_style(
        'bootenberg-frontend-css',
        plugins_url('assets/css/style.css', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'assets/css/style.css')
    );
}
add_action('wp_enqueue_scripts', 'bootenberg_enqueue_frontend_assets');

/**
 * Register blocks and their settings.
 */
function bootenberg_register_blocks() {
    $blocks = [
        [
            'handle' => 'dynamic-block-script',
            'path' => 'js/dynamic-block.js',
            'type' => 'gutenberg-bootstrap-blocks/dynamic-block',
            'attributes' => [
                'postType'     => ['type' => 'string', 'default' => 'post'],
                'postsPerPage' => ['type' => 'number', 'default' => 3],
                'enableShadow' => ['type' => 'boolean', 'default' => false],
            ],
            'render_callback' => 'render_dynamic_block',
        ],
        [
            'handle' => 'custom-card',
            'path' => 'js/blocks/custom-card.js',
            'type' => 'gutenberg-bootstrap-blocks/custom-card',
        ],
        [
            'handle' => 'bootstrap-row',
            'path' => 'js/blocks/bootstrap-row.js',
            'type' => 'gutenberg-bootstrap-blocks/bootstrap-row',
        ],
    ];

    foreach ($blocks as $block) {
        wp_register_script(
            $block['handle'],
            plugins_url($block['path'], __FILE__),
            ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components'],
            filemtime(plugin_dir_path(__FILE__) . $block['path'])
        );

        $block_type_args = ['editor_script' => $block['handle']];

        if (!empty($block['attributes'])) {
            $block_type_args['attributes'] = $block['attributes'];
        }

        if (!empty($block['render_callback'])) {
            $block_type_args['render_callback'] = $block['render_callback'];
        }

        register_block_type($block['type'], $block_type_args);
    }
}
add_action('init', 'bootenberg_register_blocks');

/**
 * Include dynamic block files.
 */
include_once('dynamic-block.php');
