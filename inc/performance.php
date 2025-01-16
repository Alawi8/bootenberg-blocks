<?php
function bootenberg_enqueue_block_editor_assets() {
    $plugin_dir_url = plugins_url('', __FILE__) . '/../';
    $plugin_dir_path = dirname(plugin_dir_path(__FILE__)) . '/';

    wp_enqueue_script(
        'tailwindcss-editor',
        $plugin_dir_url . 'dist/editor.js',
        [],
        filemtime($plugin_dir_path . 'dist/editor.js'),
        true
    );

    wp_enqueue_script(
        'bootenberg-editor-js',
        $plugin_dir_url . 'assets/js/bundle.js',
        ['wp-blocks', 'wp-element', 'wp-block-editor'],
        filemtime($plugin_dir_path . 'assets/js/bundle.js'),
        true
    );
}
add_action('enqueue_block_editor_assets', 'bootenberg_enqueue_block_editor_assets');



function bootenberg_enqueue_frontend_assets() {
    $plugin_dir_url = plugins_url('', __FILE__) . '/../';
    $plugin_dir_path = dirname(plugin_dir_path(__FILE__)) . '/';


    wp_enqueue_script(
        'tailwindcss-editor',
        $plugin_dir_url . 'dist/editor.js',
        [],
        filemtime($plugin_dir_path . 'dist/editor.js'),
        true
    );


    wp_enqueue_script(
        'bootenberg-frontend-js',
        $plugin_dir_url . 'assets/js/bundle.js',
        ['jquery'], // الاعتماد على مكتبة jQuery
        filemtime($plugin_dir_path . 'assets/js/bundle.js'), // وقت التعديل الأخير للملف
        true // تحميل الملف في تذييل الصفحة
    );
}
add_action('wp_enqueue_scripts', 'bootenberg_enqueue_frontend_assets');
?>