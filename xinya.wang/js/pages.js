
// async and await, async is going to be something that essentially is now a promise. 
const RecentPage = async() => {

    let d = await query({
        type:'recent_locations',
        params:[sessionStorage.userId]
    });

    console.log(d);
    
    let valid_animals = d.result.reduce((r,o)=>{
        o.icon = o.img;
        if(o.lat && o.lng) r.push(o);
        return r;
    },[])

    let map_el = await makeMap("#recent-page .map");

    //console.log(map_el.data('map'))

    makeMarkers(map_el,valid_animals);
    //for some animal no locaitons, if https it will show users current locations 
    // makeMarkers(map_el,[]);   

    //o- current object, i -current index
    map_el.data("markers").forEach((o,i)=>{
        //google map addlistener
        o.addListener("click",function(){
            // console.log("honk");

            /*
            //Simple Example
            sessionStorage.animalId = valid_animals[i].animal_id;
            $.mobile.navigate("#animal-profile-page");
            */

            /*
            //Infowindow example
            map_el.data("infoWindow")
                .open(map_el.data("map"),o);
            map_el.data("infoWindow")
                .setContent(makeAnimalPopup(valid_animals[i]));
            */
            

            //Activate example
            $("#recent-animal-modal").addClass("active");
            $("#recent-animal-modal .modal-body")
                .html(makeAnimalPopup(valid_animals[i]));
        })
    })
}


const ListPage = async() => {
    // let d = query({type:'aniamls_all'});

    /* promise environment can await another promise 
       We can sort of halt code and wait for something that would normally not wait normally promises.
       They just start and go, and then all the other code goes as well 
    */
    // let d = await query({ type:'animals_all' });
    // let d = await query({ type:'animals_by_user_id', params:[3] });
    let d = await query({ 
        type:'animals_by_user_id', 
        params:[sessionStorage.userId] 
    });
    console.log(d);

    $("#list-page .animallist").html(makeAnimalList(d.result));
}

const JournalPage = async() => {

    let d = await query({
        type:'all_animal_location_by_user_id',
        params:[sessionStorage.userId]
    });

    console.log(d);

    // let date        = d.result[0].date_create;
    // let date_arr    = date.split("");
    // var date_month  = date_arr[5] + date_arr[6];
    // var date_day    = date_arr[8] + date_arr[9];
    
    $("#journal-list").html(makeJournalList(d.result));

}

const UserProfilePage = async() => {

    query({ 
        type:'user_by_id', 
        params:[sessionStorage.userId]
    }).then(d=>{
        console.log(d);

        $("#user-profile-page .user-profile").html(makeUserProfile(d.result));
    });
}

const UserProfileEditPage = async() => {

    query({ 
        type:'user_by_id', 
        params:[sessionStorage.userId]
    }).then(d=>{
        console.log(d);

        $("#profile-photo").html(makeUserProfileUpdateImage(d.result[0]));
        $("#profile-form").html(makeUserProfileUpdateForm(d.result[0]));
    });
}


const AnimalProfilePage = async() => {

    query({ 
        type:'animal_by_id', 
        params:[sessionStorage.animalId] 
    }).then(d=>{
        console.log(d);

        $("#animal-profile-page .animal-banner").html(makeAnimalProfile(d.result));
    });


    query({ 
        type:'locations_by_animal_id', 
        params:[sessionStorage.animalId] 
    }).then(d=>{
        makeMap("#animal-profile-page .map").then(map_el=>{
            makeMarkers(map_el,d.result);
        })
    });
    
}


const AnimalProfileEditPage = async() => {

    query({ 
        type:'animal_by_id', 
        params:[sessionStorage.animalId] 
    }).then(d=>{
        console.log(d);

        $("#edit-profile-image").html(makeAnimalProfileUpdateImage(d.result[0]));
        $("#animal-profile-form").html(makeAnimalProfileUpdateForm(d.result[0]));
    });
}


const AccountPage = async() => {

    query({ 
        type:'user_by_id', 
        params:[sessionStorage.userId]
    }).then(d=>{
        console.log(d);

        $("#account-form").html(makeAccountForm(d.result[0]));
    });
}


const EmailEditPage = async() => {

    query({ 
        type:'user_by_id', 
        params:[sessionStorage.userId]
    }).then(d=>{
        console.log(d);

        $("#email-settings-form").html(editAccountEmail(d.result[0]));
    });
}


















