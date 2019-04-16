$( document ).ready( () => {
    NavBarButtonScale();
});


var NavBarButtonScale = () => {
    $( "button.navbar-toggler" ).each( () => {
        var $thisParagraph = $( ".navbar-toggler" );
        $thisParagraph.click( () => {
            $thisParagraph.toggleClass( "navbar-toggler-icon-scalein" );
            var $menu = $("div.collapse-content");
            if ($($menu).hasClass("show")) {
                $($menu).removeClass("show").addClass("hide");
                setTimeout( () => {
                    $($menu).removeClass("hide");
                }, 500);
            }
            else {
                $($menu).removeClass("hide").addClass("show");
            }
        });
    });
  };