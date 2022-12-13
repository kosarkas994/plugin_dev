<?php
/*
Plugin Name: Recipe
Description: Practice Plugin
Author: Ivan Nikolic
Version: 1.0.0
Text Domain: recipe
*/

define ('RECIPE_PLUGIN_URL', __FILE__);

if(!function_exists('add_action')){

    echo "Hi There! I'm just a plugin!";
    exit;
}

// Setup

// Includes

include('includes/activate.php');
include('includes/init.php');
include('includes/scripts.php');
include('process/save-post.php');
include('process/filter-content.php');
include('process/rate-recipe.php');
include('includes/admin/init.php');
include('blocks/scripts.php');

// Hooks

register_activation_hook( __FILE__ , 'r_activate_plugin' );
add_action('init', 'recipe_init');
add_action('save_post_recipe', 'r_save_post_admin', 10, 3);
add_filter('the_content', 'r_filter_recipe_content');
add_action('wp_enqueue_scripts', 'r_scripts');
add_action('wp_ajax_r_rate_recipe','r_rate_recipe');
add_action('wp_ajax_nopriv_r_rate_recipe','r_rate_recipe');
add_action('admin_init', 'recipe_admin_init');
add_action('enqueue_block_editor_assets', 'r_block_assets');
add_action('enqueue_block_assets', 'r_front_block_assets');

//Shortcodes