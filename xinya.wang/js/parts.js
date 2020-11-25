
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

const makeJournalList = templater(o =>`
    <li class="journal-list-item">
        <a href="#animal-journal-page" class="display-flex">
            <div class="journal-data">
                <h1>18</h1>
                <h4>Oct</h4>
            </div>
            <div class="journal-list-photo display-flex flex-justify-center flex-align-center">
                <img src="${o.photo}" alt="Animal Photo">
            </div>
            <div class="journal-content display-flex flex-column">
                <p class="journal-text flex-strech">${o.description}</p>
                <div class="animal-journal-location display-flex">
                    <img src="img/iconLocation.svg">
                    <p>${o.lat},${o.lng}</p>
                </div>
            </div>
        </a>
    </li>
`);

const makeUserProfile = templater(o =>`
    <div class="profile-image">
        <img src="${o.img}" alt="User Profile Photo">
    </div>
    <h2>${o.name}</h2>
`);

const makeUserProfileMostTracked = templater(o =>`
    <div class="item-content flex-strech"><h4>${o.name}</h4></div>
    <div class="item-title"><p>Most Tracked</p></div>
`);

const makeUserProfileRecentlyTracked = templater(o =>`
    <div class="item-content flex-strech"><h4>${o.name}</h4></div>
    <div class="item-title"><p>Rencently Tracked</p></div>
`);

const makeUserProfileAnimalTypes = templater(o =>`
    <div class="item-content flex-strech"><h3>${o}</h3></div>
    <div class="item-title"><p>Animal Types</p></div>
`);

const makeUserProfileJournalSum = templater(o =>`
    <div class="item-content flex-strech"><h3>${o}</h3></div>
    <div class="item-title"><p>Journal Sum</p></div>
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
            <img src="${o.photo}" alt="Animal Photo">
        </div>
        <div class="journal-content display-flex flex-column">
            <p class="journal-text flex-strech">${o.description}</p>
            <div class="animal-journal-location display-flex">
                <img src="img/iconLocation.svg">
                <p class="flex-align-self-center">${o.lat},${o.lng}</p>
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

const AccountFormControl = ({url, namespace, name, displayname, type, placeholder, value}) => {
    return `
    <a href="${url}">
        <div class="settings-form-control display-flex flex-align-center">
            <label for="${namespace}-${name}" class="form-label">${displayname}</label>
            <input id="${namespace}-${name}" type="${type}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
            <img src="img/iconMore.svg">
        </div>
    </a>
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
        <textarea id="animal-edit-bio" style="overflow: visible; margin-bottom:1em;" placeholder="Type Animal Description">${o.description}</textarea>
    </div> 

`;


const makeUserProfileUpdateForm = o => `
${FormControl({
    namespace:"user-edit",
    name:"name",
    displayname:"Name",
    type:"text",
    placeholder:"Type Your Full Name",
    value: o.name
})}

${FormControl({
    namespace:"user-edit",
    name:"username",
    displayname:"UserName",
    type:"text",
    placeholder:"Type Your User Name",
    value: o.username
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

const makeAccountForm = o => `
${AccountFormControl({
    url:"#email-settings-page",
    namespace:"setting-account",
    name:"email",
    displayname:"Email",
    type:"text",
    placeholder:"Type Your Email",
    value: o.email
})}

${AccountFormControl({
    url:"#password-settings-page",
    namespace:"setting-account",
    name:"password",
    displayname:"Password",
    type:"text",
    placeholder:"Change password",
    value: "Change password"
})}

${AccountFormControl({
    url:"#contry-settings-page",
    namespace:"setting-account",
    name:"contry",
    displayname:"Contry/Region",
    type:"text",
    placeholder:"Choose Your Contry",
    value: "Unitied States"
})}

${AccountFormControl({
    url:"#login-options-settings-page",
    namespace:"setting-account",
    name:"loginOptions",
    displayname:"Login options",
    type:"text",
    placeholder:"",
    value: ""
})}
`;

const editAccountEmail = o => `
${FormControl({
    namespace:"account-edit",
    name:"email",
    displayname:"Email",
    type:"text",
    placeholder:"Type Your Email",
    value: o.email
})}
`;


const makeAnimalProfileUpdateImage = o => `
    <img src="${o.img}" alt="Aniaml Image">
    <a class="">Change Profile Banner Image</a>
`;

const makeUserProfileUpdateImage = o => `
    <img src="${o.img}" alt="User Photo">
    <a class="">Change Profile Photo</a>
`;














   