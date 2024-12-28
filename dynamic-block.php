<?php
// Function to render a dynamic block
function render_dynamic_block( $attributes ) {
    // Default attributes with fallback values
    $post_type       = $attributes['postType'] ?? ['post', 'page', 'product']; // Post types
    $posts_per_page  = $attributes['postsPerPage'] ?? 9; // Number of posts per page
    $enable_shadow   = $attributes['enableShadow'] ? 'shadow' : ''; // Enable shadow for cards
    $columns         = $attributes['columns'] ?? 3; // Number of columns
    $button_color    = $attributes['buttonColor'] ?? 'btn-primary'; // Button color
    $read_more_text  = $attributes['readMoreText'] ?? 'Read More'; // "Read More" button text
    $selected_fields = $attributes['selectedFields'] ?? ['title', 'image', 'excerpt']; // Selected fields to display
    $excerpt_length  = $attributes['excerptLength'] ?? 15; // Length of the excerpt
    $card_color      = $attributes['cardColor'] ?? 'bg-light'; // Default card background color
    $category_slug   = $attributes['categorySlug'] ?? ''; // Optional category slug

    $paged = max( 1, get_query_var( 'paged' ) ); // Current page number

    // Query arguments
    $query_args = [
        'post_type'      => $post_type,
        'posts_per_page' => $posts_per_page,
        'post_status'    => 'publish',
        'paged'          => $paged,
    ];

    // Add taxonomy filter if category slug is provided
    if ( ! empty( $category_slug ) ) {
        $query_args['tax_query'] = [
            [
                'taxonomy' => 'category', // Taxonomy name
                'field'    => 'slug',
                'terms'    => $category_slug,
            ],
        ];
    }

    $query = new WP_Query( $query_args );

    // Start output buffering
    ob_start();
    echo '<div class="row">';

    if ( $query->have_posts() ) {
        // Loop through posts
        while ( $query->have_posts() ) {
            $query->the_post();
            ?>
            <div class="col-md-<?php echo intval( 12 / $columns ); ?> mb-4">
                <div class="card h-100 <?php echo esc_attr( $enable_shadow ); ?> <?php echo esc_attr( $card_color ); ?>">
                    <?php if ( in_array( 'image', $selected_fields ) && has_post_thumbnail() ): ?>
                        <img src="<?php the_post_thumbnail_url( 'medium' ); ?>" class="card-img-top" alt="<?php the_title(); ?>">
                    <?php endif; ?>
                    <div class="card-body">
                        <?php if ( in_array( 'title', $selected_fields ) ): ?>
                            <h2 class="card-title h5"><?php the_title(); ?></h2>
                        <?php endif; ?>
                        <?php if ( in_array( 'excerpt', $selected_fields ) ): ?>
                            <p class="card-text"><?php echo wp_trim_words( get_the_excerpt(), $excerpt_length, '...' ); ?></p>
                        <?php endif; ?>
                        <?php if ( in_array( 'date', $selected_fields ) ): ?>
                            <p class="card-text text-muted"><small><?php echo get_the_date(); ?></small></p>
                        <?php endif; ?>
                        <a href="<?php the_permalink(); ?>" class="btn <?php echo esc_attr( $button_color ); ?>"><?php echo esc_html( $read_more_text ); ?></a>
                    </div>
                </div>
            </div>
            <?php
        }
        echo '</div>';

        // Pagination
        echo '<nav class="mt-4">';
        $pagination_links = paginate_links( [
            'total'        => $query->max_num_pages,
            'current'      => $paged,
            'type'         => 'array',
            'prev_text'    => '&laquo;',
            'next_text'    => '&raquo;',
        ] );

        if ( $pagination_links ) {
            echo '<ul class="pagination justify-content-center">';
            foreach ( $pagination_links as $link ) {
                $active_class = strpos( $link, 'current' ) !== false ? 'active' : '';
                echo '<li class="page-item ' . esc_attr( $active_class ) . '">' . str_replace( 'page-numbers', 'page-link', $link ) . '</li>';
            }
            echo '</ul>';
        }
        echo '</nav>';

        wp_reset_postdata();
    } else {
        // No posts found
        echo '<div class="alert alert-danger">';
        echo '<p>' . esc_html__( 'No posts found.', 'text-domain' ) . '</p>';
        echo '</div>';
    }

    // Return the buffered output
    return ob_get_clean();
}
