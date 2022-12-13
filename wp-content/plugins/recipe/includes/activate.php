<?php

function r_activate_plugin(){

    if(version_compare(get_bloginfo('version'),"5.0",'<')){

        wp_die(__('You must update WordPress to use this plugin','recipe'));
    }

    global $wpdb;
    $tablePrefix = $wpdb->prefix;
    $createSQL = "CREATE TABLE `".$tablePrefix."recipe_ratings` 
    (
        `ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
        `recipe_id` BIGINT(20) UNSIGNED NOT NULL,
        `rating` FLOAT(3,2) UNSIGNED NULL DEFAULT NULL,
        `user_ip` VARCHAR(50) NULL DEFAULT NULL,
        PRIMARY KEY (`ID`)
    )
   
    ENGINE=InnoDB ".$wpdb->get_charset_collate().";";

  
    require(ABSPATH . "/wp-admin/includes/upgrade.php");
    dbDelta($createSQL);

}