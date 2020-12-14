

const checkSignupForm = () => {
    let username        = $("#signup-username").val();
    let email           = $("#signup-email").val();
    let password        = $("#signup-password").val();
    let passwordconfirm = $("#signup-password-confirm").val();



    if(username=="" || email== "" || password== ""){
        $("#signup-error-msg-empty").addClass("active");
        return;
    }

    if(password!=passwordconfirm){
        $("#signup-password-error-msg").addClass("active");
        throw "Passwords don't match";
    }else{
        query({type:'insert_user',params:[username,email,password]})
        .then(d=>{
            if(d.error){
                $("#signup-error-msg").addClass("active");
                throw d.error;
            }
            console.log(d.id)
    
            sessionStorage.userId = d.id;
            $.mobile.navigate("#profile-add-page");
            
        })
    }

}

const checkUserAddForm = () => {
    let name            = $("#user-profile-new-name").val();
    let bio             = $("#user-profile-new-bio").val();
    let img             = $("#user-add-image").val();


    query({
        type:'update_user_basic_info',
        params:[name,bio,img,sessionStorage.userId]
    }) 
    .then(d=>{
        if(d.error){
            throw d.error;
        }
        $.mobile.navigate("#recent-page");
    })
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
    let img             = $("#animal-add-image").val();


    query({
        type:'insert_animal',
        params:[sessionStorage.userId,name,color,description,img]
    }) 
    .then(d=>{
        if(d.error){
            throw d.error;
        }
        console.log(d.id)
        $("#animal-add-image").val("");
        $(".photo-uploader.banner-add-new").removeClass("picked");
        $(".photo-uploader.banner-add-new").css({'background-image':`url('')`});
        $("#new-animal-profile-form")[0].reset();


        sessionStorage.animalId = d.id;
         window.history.back();
        // $.mobile.navigate($("#animal-add-destination").val());

    })
}


const checkAnimalAddToSelectList = () => {
    let name            = $("#animal-profile-new-name").val();
    let color           = $("#animal-profile-new-color").val();
    let description     = $("#animal-profile-new-bio").val();
    let img             = $("#animal-add-image").val();


    query({
        type:'insert_animal',
        params:[sessionStorage.userId,name,color,description,img]
    }) 
    .then(d=>{
        if(d.error){
            throw d.error;
        }
        console.log(d.id)
        $("#animal-add-image").val("");
        $("#new-animal-profile-form")[0].reset();


        sessionStorage.animalId = d.id;
        $.mobile.navigate($("#animal-add-destination").val());

    })
}


const checkAnimalEditForm = () => {
    let name            = $("#animal-edit-name").val();
    let color           = $("#animal-edit-color").val();
    let description     = $("#animal-edit-bio").val();
    let img             = $("#animal-edit-image").val();

    query({
        type:'update_animal',
        params:[name,color,description,img,sessionStorage.animalId]})
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
        $.mobile.navigate("#list-page");
   })
}


const checkLocationAddForm = () => {

    let lat         = $("#location-add-lat").val();
    let lng         = $("#location-add-lng").val();
    let description = $("#location-add-description").val();
    let photo       = $("#location-add-image").val();

    query({
        type:'insert_location',
        params:[sessionStorage.animalId,lat,lng,description,photo]})
    .then(d=>{
        if(d.error) {
            throw d.error;
        }
        $("#location-add-lat").val("");
        $("#location-add-lng").val("");
        $("#location-add-image").val("");
        $(".photo-uploader.thumbnail").removeClass("picked");
        $(".photo-uploader.thumbnail").css({'background-image':`url('')`});
        $("#location-add-form")[0].reset();

        makeMarkers($("#add-new-journal .map"),[]);
        // window.history.go(-2);
    })
}







const checkSearchForm = async() => {
    let s = $("#list-search-input").val();
    console.log(s);

    let r = await query({ 
        type:"search_animals",
        params:[s,sessionStorage.userId]
    });

    drawAnimalList(r.result,'No resluts found');

    console.log(r);
}


const checkListFilter = async(d) =>{
    let r = d.value == 'all' ?
    await query({
        type:'animals_by_user_id',
        params:[sessionStorage.userId]
    }) :
    await query({
        type:'animal_filter',
        params:[d.field, d.value, sessionStorage.userId]
    });

    console.log(r);
    drawAnimalList(r.result,'No results found');
}



const checkUpload = file => {
   let fd = new FormData();
   fd.append("image",file);

   return fetch('data/api.php',{
      method:'POST',
      body:fd
   }).then(d=>d.json())
}

const checkUserUpload = () => {
    let upload = $("#user-upload-image").val()
    if(upload=="") return;

    query({
        type:'update_user_image',
        params:[upload,sessionStorage.userId]
    }).then(d=>{
        if(d.error) {
            throw d.error;
        }
        // window.history.back();
   })
}












