
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
    let d = await query({ type:'animals_by_user_id', params:[sessionStorage.userId] });
    console.log(d)
    // console.log(makeAnimalList(d.result))
    $("#list-page .animallist").html(makeAnimalList(d.result));

    
    // let d = await query({
    //     type:'animals_by_user_id', 
    //     params:[sessionStorage.userId]});
    //     console.log(d);

    // $("#list-page .animallist").html(makeAnimalList(d.result));
}

const JournalPage = async() => {}

const UserProfilePage = async() => {
    // let d = await query({
    //     type:'user_by_id', 
    //     params:[sessionStorage.userId]});
    //     console.log(d);

    // $("#user-profile-page .profile").html(makeAnimalList(d.result));
}

const AnimalProfilePage = async() => {
    // let d = await query({
    //     type:'aniaml_by_id', 
    //     params:[sessionStorage.aniamlId]});
    //     console.log(d);

    // $("#animal-profile-page .profile").html(makeAnimalList(d.result));
}