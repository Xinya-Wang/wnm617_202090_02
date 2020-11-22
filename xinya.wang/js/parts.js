
/*
//array()
const makeAnimalList = (a) => {
    // o= object; i=index; a=array 
    return a.reduce((r,o,i,a)=>{
        return r+`
        <div>${o.name}</div>
       `
    },'')
}

//after build templater function in functions.js use blew code will get same thing

const makeAnimalList = templater((o) =>`
    <div>${o.name}</div>
`);
*/

/*const makeAnimalList = templater(o =>`
    <li>
        <div class="js-animal-jump" data-id="${o.id}">
            <figure>
                <img src="${o.img}" alt="Deer">
            </figure>
            <figcaption>${o.name}</figcaption>
            <p>${o.color}</p>
        </div>
    </li>
`);*/


const makeAnimalList = templater(o =>`
    
        <div class="js-animal-jump grid-item" data-id="${o.id}">
            <figure>
                <img src="${o.img}" alt="Deer">
            </figure>
            <figcaption>${o.name}</figcaption>
            <p>${o.color}</p>
        </div>
    
`);

const makeUserProfile = templater(o =>`
    <div class="profile-body">
        <div class="profile-image">
            <img src="${o.img}" alt="User Profile Photo">
        </div>
        <h2>${o.name}</h2>
    </div>
    <div class="profile-others display-flex flex-align-center flex-justify-around">
        <div class="profile-item display-flex flex-column flex-justify-center">
            <div class="item-content flex-strech"><h4>Mule deer</h4></div>
            <div class="item-title"><p>Most Tracked</p></div>
        </div> 
        <div class="profile-item display-flex flex-column flex-justify-center">
            <div class="item-content flex-strech"><h3>23</h3></div>
            <div class="item-title"><p>Track days</p></div>
        </div> 
    </div>
    <div class="profile-others display-flex flex-align-center flex-justify-around">
        <div class="profile-item display-flex flex-column flex-justify-center">
            <div class="item-content flex-strech"><h3>50</h3></div>
            <div class="item-title"><p>Photos Sum</p></div>
        </div> 
        <div class="profile-item display-flex flex-column flex-justify-center">
            <div class="item-content flex-strech"><h3>42</h3></div>
            <div class="item-title"><p>Journal Sum</p></div>
        </div> 
    </div>      
`);


const makeAnimalProfile = templater(o =>`
        <img src="${o.img}" alt="Animal Profile Photo">
        <div class="animal-banner-intro">
            <div class="display-flex flex-align-center">
                <h2>${o.name} &#183; </h2>
                <h4>${o.color}</h4>
            </div>
            <p class="details">${o.description}</p>
        </div>
`);

//templater is really specifically for an array of objects. so only one we can remove it

    // <div class="display-flex flex-column flex-align-center">
    //     <img src="${o.img}" alt="Animal Profile Photo" style="width:100px; height:100px;">
    //     <h4>${o.name} &#183; </h2>
    //     <h6>${o.color}</h4>
    // </div>
const makeAnimalPopup = o =>`
    <div class="journal-list-item display-flex">
        <div class="journal-data">
            <h1>18</h1>
            <h4>Oct</h4>
        </div>
        <div class="journal-list-photo display-flex flex-justify-center flex-align-center">
            <img src="${o.img}" alt="Animal Photo">
        </div>
        <div class="journal-content display-flex flex-column">
            <p class="journal-text flex-strech">${o.name}</p>
            <div class="animal-journal-location display-flex">
                <img src="${o.img}">
                <p>${o.color}</p>
            </div>
        </div>
        <div>
            <a href="#" class="form-button js-animal-jump" data-id="${o.animal_id}">Visit</a> 
        </div>
    </div>
`;

const FormControl = ({namespace, name, displayname, type, placeholder, value}) => {
    return `
    <div class="settings-form-control display-flex flex-align-center">
        <label for="${namespace}-${name}" class="form-label">${displayname}</label>
        <input id="${namespace}-${name}" type="${type}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
    </div> 
    `
}


const makeAnimalProfileUpdateForm = o => `
${FormControl({
    namespace:"animal-edit",
    name:"name",
    displayname:"Name",
    type:"text",
    placeholder:"Type Animal Name",
    value: o.name
})}

${FormControl({
    namespace:"animal-edit",
    name:"color",
    displayname:"Color",
    type:"text",
    placeholder:"Type Animal Color",
    value: o.color
})}

    <div class="settings-form-control display-flex flex-column">
        <label for="animal-edit-bio" class="form-label">Bio</label>
        <textarea id="animal-edit-bio" style="overflow: visible; margin-bottom:1em;">${o.description}</textarea>
    </div> 

`;


const makeAnimalProfileUpdateImage = o => `
    <img src="${o.img}" alt="Aniaml Image">
    <a class="">Change Profile Banner Image</a>
`;


const makeUserProfileUpdateForm = o => `
${FormControl({
    namespace:"user-edit",
    name:"name",
    displayname:"Name",
    type:"text",
    placeholder:"Type your Full Name",
    value: o.name
})}

${FormControl({
    namespace:"user-edit",
    name:"username",
    displayname:"UserName",
    type:"text",
    placeholder:"Type Yout User Name",
    value: o.username
})}

${FormControl({
    namespace:"user-edit",
    name:"email",
    displayname:"Email",
    type:"text",
    placeholder:"Type Your Email",
    value: o.email
})}


${FormControl({
    namespace:"user-edit",
    name:"phone",
    displayname:"Phone",
    type:"tel",
    placeholder:"+1 555-555-5555",
    value: o.phone
})}

${FormControl({
    namespace:"user-edit",
    name:"gender",
    displayname:"Gender",
    type:"text",
    placeholder:"Gender",
    value: o.gender
})}


    <div class="settings-form-control display-flex flex-column">
        <label for="user-edit-bio" class="form-label">Bio</label>
        <textarea id="user-edit-bio" style="overflow: visible; margin-bottom:1em;">${o.bio}</textarea>
    </div> 

`;

const makeUserProfileUpdateImage = o => `
    <img src="${o.img}" alt="User Photo">
    <a class="">Change Profile Photo</a>
`;














   