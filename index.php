<?php
/**
 * Plugin Name: Gutenberg Bootstrap Blocks
 * Description: إلغاء الكلاسات الافتراضية لـ Gutenberg واستخدام كلاسات Bootstrap فقط مع إضافة بلوك مخصص.
 * Version: 1.0
 * Author: Your Name
 */

// تضمين Bootstrap CSS و JS
function enqueue_bootstrap_for_plugin() {
    // تضمين مكتبة Bootstrap CSS
    wp_enqueue_style(
        'bootstrap-css',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        array(),
        '5.3.0'
    );

    // includ Bootstrap JS
    wp_enqueue_script(
        'bootstrap-js',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        array('jquery'),
        '5.3.0',
        true
    );
}
add_action( 'wp_enqueue_scripts', 'enqueue_bootstrap_for_plugin' );
add_action( 'admin_enqueue_scripts', 'enqueue_bootstrap_for_plugin' );

// إضافة بلوك مخصص مع Bootstrap
function my_custom_gutenberg_block() {
    $js_file = plugin_dir_path( __FILE__ ) . 'js/custom-block.js';

    if ( file_exists( $js_file ) ) {
        wp_register_script(
            'bootstrap-custom-block',
            plugins_url( 'js/custom-block.js', __FILE__ ),
            array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
            filemtime( $js_file )
        );

        // تسجيل البلوك
        register_block_type( 'myplugin/bootstrap-block', array(
            'editor_script' => 'bootstrap-custom-block',
        ) );
    } else {
        error_log( 'ملف custom-block.js مفقود. الرجاء التأكد من المسار.' );
    }
}
add_action( 'init', 'my_custom_gutenberg_block' );

// feach date by blocks dynamic 
function register_gutenberg_block_scripts() {
    // ملف البلوك الديناميكي
    wp_register_script(
        'dynamic-block-script',
        plugins_url( 'js/dynamic-block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'js/dynamic-block.js' )
    );

    // ملف البلوك المخصص
    wp_register_script(
        'custom-block-script',
        plugins_url( 'js/custom-block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'js/custom-block.js' )
    );

    // تسجيل البلوك الديناميكي
    register_block_type( 'gutenberg-bootstrap-blocks/dynamic-block', array(
        'editor_script'   => 'dynamic-block-script',
        'render_callback' => 'render_dynamic_block',
        'attributes'      => array(
            'postType'     => array( 'type' => 'string', 'default' => 'post' ),
            'postsPerPage' => array( 'type' => 'number', 'default' => 3 ),
            'enableShadow' => array( 'type' => 'boolean', 'default' => false ),
        ),
    ) );

    // تسجيل البلوك المخصص
    register_block_type( 'gutenberg-bootstrap-blocks/custom-block', array(
        'editor_script' => 'custom-block-script',
    ) );
}
add_action( 'init', 'register_gutenberg_block_scripts' );

// دالة عرض البلوك الديناميكي
function render_dynamic_block( $attributes ) {
    $post_type      = $attributes['postType'] ?? 'post';
    $posts_per_page = $attributes['postsPerPage'] ?? 3;
    $enable_shadow  = $attributes['enableShadow'] ? 'shadow' : '';

    $query_args = array(
        'post_type'      => $post_type,
        'posts_per_page' => $posts_per_page,
        'post_status'    => 'publish',
    );
    $query = new WP_Query( $query_args );

    ob_start();
    echo '<div class="row">';
    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();
            ?>
            <div class="col-md-4 mb-4">
                <div class="card h-100 <?php echo esc_attr( $enable_shadow ); ?>">
                    <?php if ( has_post_thumbnail() ): ?>
                        <img src="<?php the_post_thumbnail_url( 'medium' ); ?>" class="card-img-top" alt="<?php the_title(); ?>">
                    <?php endif; ?>
                    <div class="card-body">
                        <h5 class="card-title"><?php the_title(); ?></h5>
                        <p class="card-text"><?php echo wp_trim_words( get_the_excerpt(), 15, '...' ); ?></p>
                        <a href="<?php the_permalink(); ?>" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <?php
        }
        echo '</div>';

        // إضافة الباجنيشن
        echo '<nav class="mt-4">';
        echo paginate_links( array(
            'total'   => $query->max_num_pages,
            'current' => max( 1, get_query_var( 'paged' ) ),
        ) );
        echo '</nav>';

        wp_reset_postdata();
    } else {
        echo '<p>No posts found.</p>';
    }
    return ob_get_clean();
}
