
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

const makeAnimalList = templater(o =>`
    <li>
        <div href="#animal-profile-page js-animal-jump" data-id="${o.id}">
            <figure>
                <img src="${o.img}" alt="Deer">
            </figure>
            <figcaption>${o.name}</figcaption>
            <p>${o.color}</p>
        </div>
    </li>
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

   