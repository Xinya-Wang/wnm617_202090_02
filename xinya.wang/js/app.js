//Document Ready
$(()=>{

    checkUserId();

    $(document)

    // ROUTES
    .on("pagecontainerbeforeshow",function(e,ui){
        // console.log(e,ui)
        console.log(ui.toPage[0].id)

        // Routing
        switch(ui.toPage[0].id) {
            case 'recent-page': RecentPage(); break;
            case 'list-page': ListPage(); break;
            case 'journal-page': JournalPage(); break;
            case 'user-profile-page': UserProfilePage(); break;
            case 'animal-profile-page': AnimalProfilePage(); break;
        }
    })


    /* FORM SUBMISSIONS */

    //event delegation
    .on("submit", "#signin-form", function(e){

        e.preventDefault();
        checkSigninForm();

    })

    /* ANCHOR CLICKS */ 

    .on("click", ".js-logout", function(e){
        // console.log("click");
        sessionStorage.removeItem('userId');
        checkUserId();
    })

    .on("click", ".error-button", function(){
        $("#login-error-msg").removeClass("active");

    })
    .on("click", ".error-button.empty", function(){
        $("#login-error-msg-empty").removeClass("active");
    })

    // add atrribute 
    .on("click","[data-activate]",function(){
        let target = $(this).data('activate');
        $(target).addClass("active");
    })
    .on("click","[data-deactivate]",function(){
        let target = $(this).data('deactivate');
        $(target).removeClass("active");
    })
    .on("click","[data-toggle]",function(){
        let target = $(this).data('toggle');
        $(target).toggleClass("active");
    })
    

    $("[data-template]").each(function(){
        let target = $(this).data("template");
        let template = $(target).html();
        $(this).html(template);
    })

})