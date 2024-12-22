// Initialize scores
let homeCount = 0;
let guestCount = 0;

// Function to update scores
function updateScore(team, points) {
    if (team === 'home') {
        homeCount += points; // Increment HOME score
        document.getElementById('digital-home').textContent = homeCount; // Update HOME score display
    } else if (team === 'guest') {
        guestCount += points; // Increment GUEST score
        document.getElementById('digital-guest').textContent = guestCount; // Update GUEST score display
    }
}
