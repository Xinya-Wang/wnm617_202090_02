//Document Ready
$(()=>{

    console.dir($("#user-edit-form")[0])

    checkUserId();

    $(document)

    // ROUTES
    .on("pagecontainerbeforeshow",function(e,ui){
        // console.log(e,ui)
        console.log(ui.toPage[0].id)

        // Routing
        switch(ui.toPage[0].id) {
            case 'recent-page':             RecentPage();                   break;
            case 'list-page':               ListPage();                     break;

            case 'journal-page':            JournalPage();                  break;
            case 'add-new-journal':         NewJournalPage();               break;
            case 'add-new-location':        LocationAddPage();              break;
            case 'select-animal-page':      SelectAnimalPage();              break;

            case 'user-profile-page':       UserProfilePage();              break;
            case 'profile-settings-page':   UserProfileEditPage();          break; //UserEditPage

            case 'animal-profile-page':     AnimalProfilePage();            break;
            case 'animal-edit-profile':     AnimalProfileEditPage();        break; //AnimalEditPage

            case 'account-settings-page':   AccountPage();                  break;
            case 'email-settings-page':     EmailEditPage();                break;

            // case 'location-add-page':       LocationAddPage();              break;

        }
    })


    /* FORM SUBMISSIONS */

    //event delegation
    .on("submit", "#signin-form", function(e){
        e.preventDefault();
        checkSigninForm();
    })

    .on("submit", "#signup-form", function(e){
        e.preventDefault();
        checkSignupForm();
    })

    .on("click", ".error-button", function(){
        $("#login-error-msg").removeClass("active");

    })
    .on("click", ".error-button.empty", function(){
        $("#login-error-msg-empty").removeClass("active");
    })


    //Form submit by button
    .on("click",".js-animal-add",function(e){
        checkAnimalAddForm();
    })
    .on("click",".js-animal-edit",function(e){
        checkAnimalEditForm();
    })
    .on("click",".js-user-edit",function(e){
        checkUserEditForm();
    })
    .on("click",".js-location-add",function(e){
        checkLocationAddForm();
    })
    .on("click",".js-animal-select",function(e){
        checkSelectedAnimal();
    })


    /* ANCHOR CLICKS */ 

    .on("click", ".js-logout", function(e){
        sessionStorage.removeItem('userId');
        checkUserId();
    })

    .on("click",".js-animal-jump",function(e){
        sessionStorage.animalId = $(this).data("id");
        $.mobile.navigate("#animal-profile-page");
    })

    .on("click",".js-location-jump",function(e){
        sessionStorage.locationId = $(this).data("id");
        $.mobile.navigate("#location-profile-page");
    })

    .on("click",".js-animal-delete",function(e){
        checkAnimalDelete($(this).data("id"));
    })


    

    


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