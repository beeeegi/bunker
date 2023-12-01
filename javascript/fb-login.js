(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


window.fbAsyncInit = function() {
    FB.init({
        appId            : '1092461288577137',
        xfbml            : true,
        version          : 'v18.0'
    });
};

function startFacebookLogin() {
    reloadFacebookSDK();

    FB.login(function(response) {
        if (response.authResponse) {
            FB.api('/me', {fields: 'name'}, function(response) {
                document.getElementById("profile").innerHTML = "Good to see you, " + response.name;
            });
        } else { 
            console.log('User cancelled login or did not fully authorize.');
        }
    });
}

function reloadFacebookSDK() {
    var existingScript = document.getElementById('facebook-jssdk');
    if (existingScript) {
        existingScript.parentNode.removeChild(existingScript);
    }

    var js = document.createElement('script');
    js.id = 'facebook-jssdk';
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    document.getElementsByTagName('head')[0].appendChild(js);
}


function startFacebookLogout() {
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            FB.logout(function(logoutResponse) {
                document.getElementById("profile").innerHTML = "You are now logged out";
            });
        } else {
            document.getElementById("profile").innerHTML = "you are not logged in";
        }
    });
}