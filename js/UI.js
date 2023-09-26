class UI {
	constructor() {
		this.profile = document.getElementById("profile");
	}
	showProfile(user, repos) {
        this.clearAlert();
		this.profile.innerHTML = `
        <div class="card card-body mb-3">
			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid mb-2" src="${user.avatar_url}" />
					<a
						href="${user.html_url}"
						target="_blank"
                        style="width:100%"
						class="btn btn-primary btn-block mb-4"
						>View Profile</a
					>
				</div>
				<div class="col-md-9">
					<span class="badge badge-primary"
						>Public Repos: ${user.public_repos}</span
					>
					<span class="badge badge-secondary"
						>Public Gists: ${user.public_gists}</span
					>
					<span class="badge badge-success"
						>Followers: ${user.followers}</span
					>
					<span class="badge badge-info"
						>Following: ${user.following}</span
					>
					<br /><br />
					<ul class="list-group">
						<li class="list-group-item">
							Company: ${user.company}
						</li>
						<li class="list-group-item">
							Website/Blog: ${user.blog}
						</li>
						<li class="list-group-item">
							Location: ${user.location}
						</li>
						<li class="list-group-item">
							Member Since: ${user.created_at}
						</li>
					</ul>
				</div>
			</div>
            <div class="row">
        `;
        repos.forEach(element => {
            this.profile.innerHTML += `
            <div class="card card-body mb-3">
                <p><a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="${element.html_url}" target="_blank" rel="noopener noreferrer">${element.full_name}</a></p>
                <p>${element.private ? "Private" : "Public"}</p>
                <p>${element.language}</p>
            </div>
            `
        });

        this.profile.innerHTML += "</div></div>"
	}
	clearProfile() {
		this.profile.innerHTML = "";
	}

	showAlert(message, className) {
        this.clearProfile();
        this.clearAlert();
		let div = document.createElement("div");
		div.className = className;
		div.appendChild(document.createTextNode(message));
		let container = document.querySelector(".searchContainer");
		let search = document.querySelector(".search");
		container.insertBefore(div, search);
	}
    clearAlert() {
        let currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }
}
