//Document Ready
$(()=>{

    console.dir($("#profile-form")[0])

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
            case 'select-animal-page':      SelectAnimalPage();             break;

            case 'user-profile-page':       UserProfilePage();              break;
            case 'profile-settings-page':   UserProfileEditPage();          break;

            case 'animal-profile-page':     AnimalProfilePage();            break;
            case 'animal-edit-profile':     AnimalProfileEditPage();        break;    

            case 'account-settings-page':   AccountPage();                  break;
            case 'email-settings-page':     EmailEditPage();                break;
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

    .on("submit", "#list-search-form", function(e){
        e.preventDefault();
        checkSearchForm();
    })



    //Form submit by button
    .on("click",".js-animal-add-to-select-list",function(e){
        checkAnimalAddToSelectList();
    })
    .on("click",".js-animal-add",function(e){
        checkAnimalAddForm();
    })
    .on("click",".js-animal-edit",function(e){
        checkAnimalEditForm();
    })
    .on("click",".js-user-add",function(e){
        checkUserAddForm();
    })
    .on("click",".js-user-edit",function(e){
        checkUserEditForm();
    })
    .on("click",".js-location-add",function(e){
        checkLocationAddForm();
    })
    .on("click",".js-animal-select",function(e){
        $(this).addClass("active").siblings().removeClass("active");
        sessionStorage.animalId = $(this).data("id");
        // checkSelectedAnimal();
        console.log(sessionStorage.animalId);
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
        $.mobile.navigate("#animal-journal-page");
        SingleJournalPage();
    })
    .on("click",".js-locationlist-jump",function(e){
        sessionStorage.locationId = $(this).data("id");
        $.mobile.navigate("#animal-journal-page");
        checkJournalContent($(this).index());
    })
    .on("click",".grid-container .js-locationPhoto-jump",function(e){
        sessionStorage.locationId = $(this).data("id");
        $.mobile.navigate("#animal-journal-page");
        checkPhotoContent($(this).index());
    })

    .on("click",".js-animal-delete",function(e){
        checkAnimalDelete($(this).data("id"));
        // console.log(sessionStorage.animalId);
    })


    
    .on("click",".filter",function(e){
        checkListFilter($(this).data());
    })

    .on("click",".js-user-upload",function(e){
        checkUserUpload();
    })
    
    .on("change",".image-uploader input",function(e){
        checkUpload(this.files[0]).then(d=>{
            console.log(d)
            makeUserUploaderImage({
                namespace:'user-upload',
                folder:'uploads/',
                name:d.result
            })
        })
    })

    .on("change",".photo-uploader input",function(e){
        checkUpload(this.files[0])
        .then(d=>{
            console.log(d)
            makeUploaderImage(this,d.result,'uploads/')
        })
    })



    .on("click",".tablist .tab",function(e){
        $(this).addClass("active").siblings().removeClass("active");
        checkAnimalProfileContent($(this).index());
    })

    // .on("click","#footer-navs .nav-item",function(e){
    //     $(this).addClass("active").siblings().removeClass("active");
    //     console.log($(this));
    // })

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

    .on("click", ".error-button", function(){
        $("#login-error-msg").removeClass("active");
        $("#signup-error-msg").removeClass("active");
        $("#signup-password-error-msg").removeClass("active");
    })
    .on("click", ".error-button.empty", function(){
        $("#login-error-msg-empty").removeClass("active");
        $("#signup-error-msg-empty").removeClass("active");
    })


    

    $("[data-template]").each(function(){
        let target = $(this).data("template");
        let template = $(target).html();
        $(this).html(template);
    })

})