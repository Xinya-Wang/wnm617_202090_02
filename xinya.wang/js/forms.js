

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



const checkAnimalAddForm = () => {
    let name = $("#animal-profile-new-name").val();
    let color = $("#animal-profile-new-color").val();
    let bio = $("#animal-profile-new-bio").val();


    query({
        type:'insert_animal',
        params:[sessionStorage.userId,name,color,bio]
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
    // let name = $("#animal-profile-new-name").val();
    // let color = $("#animal-profile-new-color").val();
    // let bio = $("#animal-profile-new-bio").val();

    // query({
    //     type:'update_animal',
    //     params:[sessionStorage.userId,name,color,bio]
    // }) 
    // .then(d=>{
    //     if(d.error){
    //         throw d.error;
    //     }
    //     console.log(d.id)

    //     $("#new-animal-profile-form")[0].reset();


    //     sessionStorage.animalId = d.id;
    //     $.mobile.navigate($("#animal-add-destination").val());

    // })

}


const checkUserEditForm = () => {

}










