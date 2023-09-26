let ui = new UI();
document.getElementById("searchBtn").addEventListener("click", (e) => {
    e.preventDefault();
	let username = document.getElementById("searchUser").value;
    if (username != ''){
        fetch(`https:\/\/api.github.com/users/${username}`)
		.then(res => res.json())
		.then(data => {
			if(data.message == 'Not Found'){
                // User Not Found
                ui.showAlert('User Not Found!', 'alert alert-danger');
            }
            else {
                // Fetch Repos
                fetch(`https:\/\/api.github.com/users/${username}/repos`)
                .then(result => result.json()).then(repos => {
                    // Show Profile
                    ui.showProfile(data, repos);
                })                
            }
		})
    }
    else {
        // Clear Profile
        ui.clearProfile();
    }
});
