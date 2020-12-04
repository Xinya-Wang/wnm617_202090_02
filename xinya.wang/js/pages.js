
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

    $("#list-page .filter-list").html(makeFilterList(d.result));

    console.log(d);

    drawAnimalList(d.result);

    // $("#list-page .animallist").html(makeAnimalList(d.result));
    // $("#list-page .animallist")
    //     .html(d.result.length?makeAnimalList(d.result):'Hey, add an animal.');
}   

const JournalPage = async() => {

    let d = await query({
        type:'all_animal_location_by_user_id',
        params:[sessionStorage.userId]
    });

    console.log(d);
    // console.log(d.result.length);
    
    $("#journal-list").html(makeJournalList(d.result));
}


const UserProfilePage = async() => {
    //User
    query({ 
        type:'user_by_id', 
        params:[sessionStorage.userId]
    }).then(d=>{
        console.log(d);

        $("#user-profile .profile-body").html(makeUserProfile(d.result));
    });

    //Most tracked animal name
    query({ 
        type:'most_tracked_by_user_id', 
        params:[sessionStorage.userId]
    }).then(d=>{
        // console.log(d.result[0].name);
        $("#user-summary-row1 .most-tracked").html(makeUserProfileMostTracked(d.result[0]));
    });

    //Journal sum
    query({ 
        type:'all_animal_location_by_user_id', 
        params:[sessionStorage.userId] 
    }).then(d=>{
        // console.log("Journal sum:"+d.result.length);
        // console.log("Recently tracked animal:"+d.result[0].name);
        $("#user-summary-row1 .recently-tracked").html(makeUserProfileRecentlyTracked(d.result[0]));
        $("#user-summary-row2 .journal-sum").html(makeUserProfileJournalSum(d.result.length));
    });

    //Animal sum
    query({ 
        type:'animals_by_user_id', 
        params:[sessionStorage.userId] 
    }).then(d=>{
        // console.log("Animal type:"+ d.result.length);
        $("#user-summary-row2 .animal-types").html(makeUserProfileAnimalTypes(d.result.length));
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


const UserUploadPage = async() => {
    query({
        type:'user_by_id',
        params:[sessionStorage.userId]
    }).then(d=>{
        console.log(d)

        makeUploaderImage({
            namespace:'user-upload',
            folder:'',
            name:d.result[0].img
        })
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
        $("#animal-profile-page .grid-container")
            .html(d.result.length?makeAnimalPhotoList(d.result):'Hey, add a journal.');
    });
    // query({ 
    //     type:'locations_by_animal_id', 
    //     params:[sessionStorage.animalId] 
    // }).then(d=>{
    //     makeMap("#animal-profile-page .map").then(map_el=>{
    //         makeMarkers(map_el,d.result);
    //     })
    // });
    
}

const checkAnimalProfileContent = async(e) => {
    if(e == 0){
        // $("#animal-profile-page .map").empty();

        query({ 
            type:'locations_by_animal_id', 
            params:[sessionStorage.animalId] 
        }).then(d=>{

            $("#animal-profile-page .grid-container")
                .html(d.result.length?makeAnimalPhotoList(d.result):'Hey, add a journal.');
            $("#animal-profile-page .map").css({'height':`0`})

        });
    }
    else if(e == 1){

        $("#animal-profile-page .grid-container").empty();

        query({ 
            type:'locations_by_animal_id', 
            params:[sessionStorage.animalId] 
        }).then(d=>{
            $("#animal-profile-page .map").css({'height':`100%`})
            makeMap("#animal-profile-page .map").then(map_el=>{
                makeMarkers(map_el,d.result);
            })
        });   
    }
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



const LocationAddPage = async() => {
    let map_el = await makeMap("#add-new-location .map");
    makeMarkers(map_el,[]);

    let map = map_el.data("map");

    map.addListener("click",function(e){
        console.log(e, map.getCenter())

        let posFromClick = {
            lat:e.latLng.lat(),
            lng:e.latLng.lng(),
            icon:"img/iconMarker.png"
        };
        let posFromCenter = {
            lat:map.getCenter().lat(),
            lng:map.getCenter().lng(),
            icon:"img/iconMarker.png"
        };

        $("#location-add-lat").val(posFromClick.lat)
        $("#location-add-lng").val(posFromClick.lng)

        makeMarkers(map_el,[posFromClick])
    })
}

const NewJournalPage = async() => {
    let map_el = await makeMap("#add-new-journal .map");

    if($("#location-add-lat").val()!=="") {
        makeMarkers(map_el,[{
            lat:+$("#location-add-lat").val(),
            lng:+$("#location-add-lng").val(),
            icon:"img/iconMarker.png"
        }],10);
    }
}


const SelectAnimalPage = async() => {
    let d = await query({ 
        type:'animals_by_user_id', 
        params:[sessionStorage.userId] 
    });
    console.log(d);

    $("#all-animal-type-list")
        .html(d.result.length?makeJournalAnimalList(d.result):'Hey, add your first animal.');
}



















