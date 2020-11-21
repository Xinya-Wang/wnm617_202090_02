
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

const makeAnimalPopup = o =>`
    
    <div class="display-flex flex-column flex-align-center">
        <img src="${o.img}" alt="Animal Profile Photo" style="width:100px; height:100px;">
        <h4>${o.name} &#183; </h2>
        <h6>${o.color}</h4>
    </div>

    <div>
    <a href="#" class="form-button js-animal-jump" data-id="${o.aniaml_id}"
    </div>
        
`;

const FormControl = ({namespace, name, displayname, type, placeholder, value}) => {

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
    name:"type",
    displayname:"Type",
    type:"text",
    placeholder:"Choose An Animal Type",
    value: o.type
})}

${FormControl({
    namespace:"animal-edit",
    name:"color",
    displayname:"Color",
    type:"text",
    placeholder:"Choose An Animal Color",
    value: o.color
})}

`;


const makeUserProfileUpdateForm = o => `
${FormControl({
    namespace:"user-edit",
    name:"username",
    displayname:"Username",
    type:"text",
    placeholder:"Type your Username",
    value: o.name
})}

${FormControl({
    namespace:"user-edit",
    name:"name",
    displayname:"Full name",
    type:"text",
    placeholder:"Type Yout Full name",
    value: o.type
})}

${FormControl({
    namespace:"user-edit",
    name:"email",
    displayname:"Email",
    type:"text",
    placeholder:"Type Yout Email",
    value: o.color
})}

`;

   