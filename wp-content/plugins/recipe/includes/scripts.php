<?php

function r_scripts () {
    wp_enqueue_style( 'rate-style', plugins_url("/assets/rateit/rateit.css" ,RECIPE_PLUGIN_URL ));
    wp_enqueue_script( 'rate', plugins_url( "/assets/rateit/jquery.rateit.min.js", RECIPE_PLUGIN_URL), array('jquery'), null, true );
    wp_enqueue_script( 'main-js', plugins_url( "/assets/js/main.js", RECIPE_PLUGIN_URL), array('jquery'), null, true );

    wp_localize_script('main-js','theme',array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));
   
}



