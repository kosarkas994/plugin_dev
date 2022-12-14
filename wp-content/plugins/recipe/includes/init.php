<?php
function recipe_init() {
	$labels = array(
		'name'                  => _x( 'Recipe', 'Post type general name', 'recipe' ),
		'singular_name'         => _x( 'Book', 'Post type singular name', 'recipe' ),
		'menu_name'             => _x( 'Recipe', 'Admin Menu text', 'recipe' ),
		'name_admin_bar'        => _x( 'Book', 'Add New on Toolbar', 'recipe' ),
		'add_new'               => __( 'Add New', 'recipe' ),
		'add_new_item'          => __( 'Add New Book', 'recipe' ),
		'new_item'              => __( 'New Book', 'recipe' ),
		'edit_item'             => __( 'Edit Book', 'recipe' ),
		'view_item'             => __( 'View Book', 'recipe' ),
		'all_items'             => __( 'All Recipe', 'recipe' ),
		'search_items'          => __( 'Search Recipe', 'recipe' ),
		'parent_item_colon'     => __( 'Parent Recipe:', 'recipe' ),
		'not_found'             => __( 'No Recipe found.', 'recipe' ),
		'not_found_in_trash'    => __( 'No Recipe found in Trash.', 'recipe' ),
		'featured_image'        => _x( 'Book Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'recipe' ),
		'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'recipe' ),
		'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'recipe' ),
		'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'recipe' ),
		'archives'              => _x( 'Book archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'recipe' ),
		'insert_into_item'      => _x( 'Insert into book', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'recipe' ),
		'uploaded_to_this_item' => _x( 'Uploaded to this book', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'recipe' ),
		'filter_items_list'     => _x( 'Filter Recipe list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'recipe' ),
		'items_list_navigation' => _x( 'Recipe list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'recipe' ),
		'items_list'            => _x( 'Recipe list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'recipe' ),
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'recipe' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 20,
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail' ),
        'taxonomies'         => array('category', 'post_tag'),
        'show_in_rest'       => true
	);

	register_post_type( 'recipe', $args );
}