

const checkSignupForm = () => {
    let username        = $("#signup-username").val();
    let email           = $("#signup-email").val();
    let password        = $("#signup-password").val();
    let passwordconfirm = $("#signup-password-confirm").val();


    if(password!=passwordconfirm){
        throw "Passwords don't match";
    }else{
        query({type:'insert_user',params:[username,email,password]})
        .then(d=>{
            if(d.error){
                throw d.error;
            }
            console.log(d.id)
            $.mobile.navigate("#signin-page");
        })
    }

}


const checkUserEditForm = () => {
    let name        = $("#user-edit-name").val();
    let username    = $("#user-edit-username").val();
    let bio         = $("#user-edit-bio").val();
    let phone       = $("#user-edit-phone").val();
    let gender      = $("#user-edit-gender").val();
    

    query({
        type:'update_user',
        params:[name,username,bio,phone,gender,sessionStorage.userId]})
    .then(d=>{
        if(d.error) {
            throw d.error;
        }
        window.history.go(-1);
    })
}



const checkAnimalAddForm = () => {
    let name            = $("#animal-profile-new-name").val();
    let color           = $("#animal-profile-new-color").val();
    let description     = $("#animal-profile-new-bio").val();


    query({
        type:'insert_animal',
        params:[sessionStorage.userId,name,color,description]
    }) 
    .then(d=>{
        if(d.error){
            throw d.error;
        }
        console.log(d.id)

        $("#new-animal-profile-form")[0].reset();


        sessionStorage.animalId = d.id;
        $.mobile.navigate($("#animal-add-destination").val());

    })
}


const checkAnimalEditForm = () => {
    let name            = $("#animal-edit-name").val();
    let color           = $("#animal-edit-color").val();
    let description     = $("#animal-edit-bio").val();

    query({
        type:'update_animal',
        params:[name,color,description,sessionStorage.animalId]})
    .then(d=>{
        if(d.error) {
            throw d.error;
        }
        window.history.back();
   })
}


const checkAnimalDelete = id => {
    query({
        type:'delete_animal',
        params:[id]})
    .then(d=>{
        if(d.error) {
            throw d.error;
        }
        window.history.back();
   })
}


const checkLocationAddForm = () => {
    let lat         = $("#location-add-lat").val();
    let lng         = $("#location-add-lng").val();
    let description = $("#location-add-description").val();

    query({
        type:'insert_location',
        params:[sessionStorage.animalId,lat,lng,description]})
    .then(d=>{
        if(d.error) {
            throw d.error;
        }
        $("#location-add-form")[0].reset();
        // window.history.go(-2);
    })
}

const checkSelectedAnimal = () => {
    // let listLength = $(".js-animal-select").length;
    // let animalId = $(".js-animal-select")[0].dataset.id;

    let el = document.querySelector('.js-animal-select');
    let aniaml = $(".js-animal-select");
    // let animal = el.dataset.id;

    // for (var i = 0; i < listLength; i++) {
    //     $(".js-animal-select")[i].dataset.id;
    // }
    // sessionStorage.animalId = animalId;
    // console.log(aniaml);
    // console.log($(this).dataset);
}












