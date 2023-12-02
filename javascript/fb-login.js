// window.fbAsyncInit = function() {
//     FB.init({
//         appId: '1092461288577137',
//         xfbml: true,
//         version: 'v18.0'
//     });

//     FB.getLoginStatus(function(response) {
//         statusChangeCallback(response);
//     });

//     console.log("fbasyncinit function is running")
// };

// (function(d, s, id){
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {return;}
//     js = d.createElement(s); js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);

//     console.log("strange function is running")
// }(document, 'script', 'facebook-jssdk'));

// function startFacebookLogin() {

//     FB.login(function(response) {
//         console.log("login response " + response)
//         if (response.authResponse) {
//             console.log("login function is running")
//             FB.api('/me', {fields: 'name'}, function(response) {
//                 document.getElementById("profile").innerHTML = "Good to see you, " + response.name;
//             });
//         } else { 
//             console.log('User cancelled login or did not fully authorize.');
//         }
        
//     });
// }

// function startFacebookLogout() {
//     FB.getLoginStatus(function(response) {
//         console.log("logout response " + response)
//         if (response.status === 'connected') {
//             console.log("logout function is running")
//             FB.logout(function(logoutResponse) {
//                 document.getElementById("profile").innerHTML = "You are now logged out";
//             });
//         } else {
//             document.getElementById("profile").innerHTML = "You are not logged in";
//         }
        
//     });
// }



function startFacebookLogout() {
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk')
    );
    
    
    window.fbAsyncInit = function() {
    FB.init({
    appId            : '1092461288577137',
    xfbml            : true,
    version          : 'v18.0'
    });
    FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', {fields: 'name, email'}, function(response) {
         document.getElementById("profile").innerHTML = "Good to see you, " + response.name + ". i see your email address is " + response.email
     });
    } else { 
     console.log('User cancelled login or did not fully authorize.'); }
    });
    };
}
