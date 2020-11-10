
// async and await, async is going to be something that essentially is now a promise. 
const RecentPage = async() => {}


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

const JournalPage = async() => {}

const UserProfilePage = async() => {

    let d = await query({ 
        type:'user_by_id', 
        params:[sessionStorage.userId]
    });
    console.log(d);

    $("#user-profile-page .user-profile").html(makeUserProfile(d.result));
}

const AnimalProfilePage = async() => {

    let d = await query({ 
        type:'animal_by_id', 
        params:[sessionStorage.animalId] 
    });
    console.log(d);

    $("#animal-profile-page .animal-banner").html(makeAnimalProfile(d.result));
}














