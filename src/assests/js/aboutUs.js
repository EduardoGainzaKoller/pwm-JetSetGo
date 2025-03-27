document.addEventListener("DOMContentLoaded", function () {

    const githubUsernames = ["EduardoGainzaKoller", "AlvaroRodriguezMiranda", "AlbertooRedondoo"];
    const lowerContent = document.querySelector(".lower-content");

    githubUsernames.forEach(username => {
        const profileContainer = document.createElement("div");
        profileContainer.classList.add("profile-container");

        const img = document.createElement("img");
        img.src = `https://github.com/${username}.png`;
        img.alt = `Perfil de ${username}`;
        img.classList.add("profile-img");

        const nameLink = document.createElement("a");
        nameLink.href = `https://github.com/${username}`;
        nameLink.target = "_blank";
        nameLink.classList.add("profile-name");
        nameLink.textContent = username;

        profileContainer.appendChild(img);
        profileContainer.appendChild(nameLink);
        lowerContent.appendChild(profileContainer);
    });
});
