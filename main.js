function addUser() {
    var player_1_name = document.getElementById("player_1_input").value;
    var player_2_name = document.getElementById("player_2_input").value;

    localStorage.setItem("player_1", player_1_name);
    localStorage.setItem("player_2", player_2_name);

    window.location.replace("game_page.html");
}