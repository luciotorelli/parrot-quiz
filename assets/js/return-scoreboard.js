function returnScoreboard() {
    const SCOREBOARD_TABLE = document.getElementById("scoreboard-table");
    const SCOREBOARD = JSON.parse(localStorage.getItem("scoreboard")) || [];

    SCOREBOARD_TABLE.innerHTML += SCOREBOARD
    .map(score => {
        return `
        <tr class="high-score">
            <td>${score.name}</td>
            <td>${score.score}</td>
        </tr>`;
    })
    .join("");
}