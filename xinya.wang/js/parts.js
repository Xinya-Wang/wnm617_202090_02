
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

const makeAnimalList = templater((o) =>`
    <li>
        <a href="#animal-profile-page">
            <figure>
                <img src="${o.img}" alt="Deer">
            </figure>
            <figcaption>${o.name}</figcaption>
            <p>${o.classtype}</p>
        </a>
    </li>
`);


// const makeUserProfile = template(o=>`

// `);



// const makeAniamlProfile = template(o=>`

// `);
   