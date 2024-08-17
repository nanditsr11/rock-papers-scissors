document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];

    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = getResult(userChoice, computerChoice);

            document.getElementById('result').textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
        });
    });

    function getResult(user, computer) {
        if (user === computer) {
            return "It's a draw!";
        } else if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
});
