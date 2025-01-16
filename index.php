<?php
/**
 * Plugin Name: Bootenberg Blocks
 * Description: Add dynamic blocks with tailwindcss styling features.
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
require_once('inc/inc.php');

// Remove default WordPress CSS files
function remove_all_default_styles() {
    wp_dequeue_style('wp-block-library');
    wp_deregister_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_deregister_style('wp-block-library-theme');
    wp_deregister_style('wc-block-style');
    wp_dequeue_style('global-styles');
    wp_deregister_style('global-styles');
}
add_action('wp_enqueue_scripts', 'remove_all_default_styles', 100);

    // Register custom block category
function my_custom_block_categories($categories, $post) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'custom-category',
                'title' => __('bootenberg', 'text-domain'),
                'icon'  => 'wordpress',
            ),
        )
    );
}
add_filter('block_categories_all', 'my_custom_block_categories', 10, 2);

?>