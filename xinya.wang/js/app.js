



//Document Ready
$(()=>{

	checkUserId();

	$(document)


	/* FORM SUBMISSIONS */ 


	//event delegation
	.on("submit", "#signin-form", function(e){

		e.preventDefault();
		checkSigninForm();

	})

	/* ANCHOR CLICKS */ 

	.on("click", ".js-logout", function(e){
		// console.log("click");
		sessionStorage.removeItem('userId');
		checkUserId();
	})

    .on("click", ".error-button", function(){
        $("#login-error-msg").removeClass("active");
        $("#signin-email").val("");
        $("#signin-password").val("");
    })

	// add atrribute 
	.on("click","[data-activate]",function(){
     	let target = $(this).data('activate');
     	$(target).addClass("active");
   	})
   	.on("click","[data-deactivate]",function(){
     	let target = $(this).data('deactivate');
   		$(target).removeClass("active");
   	})
   	.on("click","[data-toggle]",function(){
        let target = $(this).data('toggle');
        $(target).toggleClass("active");
   	})



})