
// const makeWarning = (target, message) =>{
// 	$(target).addClass("active")
// 		.find(".message").html(message);

// 	setTimeout(() => {
// 		$(target).removeClass("active");
// 	},2000);
// }

const checkSigninForm = async () =>{

	let user  = $("#signin-email").val();
	let pass  = $("#signin-password").val();


	if(user=="" || pass== ""){
		$("#login-error-msg-empty").addClass("active");
		return;
	}


	let found_user = await query({
      	type:'check_signin',
      	params:[user,pass]
    });
	
	// if(user== 'user' && pass == 'pass'){
	if(found_user.result.length) {
		// logged in
		console.log('success');
		sessionStorage.userId = found_user.result[0].id;
		// sessionStorage.userId = 3;
		$("#signin-form")[0].reset();

	}else{
		// not logged in 
		console.log('failure');
		sessionStorage.removeItem('userId');

		// DO SOMETHING HERE
		$("#login-error-msg").addClass("active");
		// console.log(user, pass);
		console.log(found_user.result.length);
	}

	checkUserId();
}

const checkUserId = () => {
	let p = ['#signin-page', '#signup-page', ''];

	if(sessionStorage.userId === undefined){
		//not logged in
		if(!p.some( o=>window.location.hash === o))
			$.mobile.navigate("#signin-page");
		
	}else{
		//logged in
		if(p.some( o=>window.location.hash === o))
			$.mobile.navigate("#recent-page");
	}	
}