<?php
/**
 * The template for displaying Search Results pages.
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */
get_header(); ?>
<div id="content">
<div class="main_content">
    <div class="div_content_left">
          <div class="search-main">
            <?php if ( have_posts() ) : ?>
                    <div class="page-title"><?php printf( __( '<span>Search Results for:</span> %s', 'twentyten' ), '<span>' . get_search_query() . '</span>' ); ?><div>
                    <?php
                    /* Run the loop for the search to output the results.
                     * If you want to overload this in a child theme then include a file
                     * called loop-search.php and that will be used instead.
                     */
                     get_template_part( 'loop', 'search' );
                    ?>
            <?php else : ?>
                    <div id="post-0" class="post no-results not-found" style="line-height: 30px;">
                        <div class="sp_title"><?php _e( 'Nothing Found', 'twentyten' ); ?></div>
                        <div class="entry-content">
                            <p><?php _e( 'Sorry, but nothing matched your search criteria. Please try again with some different keywords.', 'twentyten' ); ?></p>
                            <?php get_search_form(); ?>
                        </div><!-- .entry-content -->
                    </div><!-- #post-0 -->
            <?php endif; ?>
            </div>
            </div>
        </div>
    </div>
    <div class="div_content_right">
        <?php include(TEMPLATEPATH .'/includes/page_right.php'); ?>
    </div>
    </div>
    <div class="clearfix"></div>
</div>
<?php get_footer(); ?>
