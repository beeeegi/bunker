window.fbAsyncInit = function() {
    FB.init({
        appId: '1092461288577137',
        xfbml: true,
        version: 'v18.0'
    });
};

function startFacebookLogin() {
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome! Fetching your information....');
            FB.api('/me', { fields: 'name' }, function(response) {
                document.getElementById("profile").innerHTML = "Good to see you, " + response.name;
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    });
}

// Load the Facebook SDK script
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));