(function($){

    $('#recipe_rating').bind('rated', function(){

        $(this).rateit('readonly', true);

        var params = {
            action: 'r_rate_recipe',
            rid:    $(this).data('rid'),
            rating: $(this).rateit('value')
        }


        $.post(theme.ajax_url, params, function(data){

        });


    });

})(jQuery);