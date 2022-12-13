<?php
function r_add_news_recipe_columns($columns) {

   $new_columns = [];
   $new_columns ['cb'] = "input type='checkbox'/>";
   $new_columns ['title'] = __('Title', 'recipe');
   $new_columns ['author'] = __('Author', 'recipe');
   $new_columns ['categories'] = __('Categories', 'recipe');
   $new_columns ['count'] = __('Count', 'recipe');
   $new_columns ['rating'] = __('Rating', 'recipe');
   $new_columns ['date'] = __('Date', 'recipe');

   return $new_columns;

}

function  r_manage_recipe_columns($column, $post_id){

    $recipe_data = get_post_meta($post_id, 'recipe_data' , true);

    switch($column){

        case "count":
            echo isset($recipe_data['rating_count'])  ? $recipe_data['rating_count'] : "N/A";
            break;
        case "rating":
            echo isset($recipe_data['rating'])  ? $recipe_data['rating'] : 0;
            break;
    }
}