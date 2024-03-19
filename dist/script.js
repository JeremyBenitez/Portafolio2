// Set Personal Portfolia to LocalStorage
const projectName = "portfolio";
localStorage.setItem("my_personal_portfolio", "Personal Portfolio");

// myCode
(myFunction = () => {
  const url = "https://api.github.com/users/carlosandresalzate";
  const nombre = document.getElementsByClassName("name");
  const imagen = document.getElementById("avatar");
  const nickname = document.getElementById("nickname");
  const bio = document.getElementById("bio");
  const followers = document.getElementById("follower_number");
  const following = document.getElementById("following_number");
  const repos = document.getElementById("repos");
  const git_url = document.getElementById("git_link");

  fetch(url).
  then(resp => {
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }
    return resp.json();
  }).
  then(data => {
    console.info(data);
    // implementar destructuring, para actualizar el codigo!
    /* const {
      name,
      bio: userBio,
      avatar_url,
      followers: followersCount,
      following: followingCount,
      public_repos,
      html_url
    } = data; */

    iterar = (val1, val2) => {
      for (let i = 0; i < val1.length; i++) {
        val1[i].textContext = val2;
      }
    };

    iterar(nombre, data.name);

    bio.textContext = data.bio;
    imagen.src = data.avatar_url;
    followers.textContext = data.followers;
    following.textContext = data.following;
    repos.textContext = data.public_repos;
    git_url.href = data.html_url;
  }).
  catch(e => console.error("algo va mal"));
})();

$(function () {
  $('#masonry').popover({
    container: 'body',
    trigger: 'hover' });

});