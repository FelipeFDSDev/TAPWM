document.addEventListener('DOMContentLoaded', () => {
    const choicesButtons = document.querySelectorAll('.selection-buttons button');
    const userImage = document.getElementById('userImage');
    const computerImage = document.getElementById('computerImage');
    const outcomeDisplay = document.getElementById('outcome');
    const userScoreDisplay = document.getElementById('userScore');
    const computerScoreDisplay = document.getElementById('computerScore');

    let userWins = 0;
    let computerWins = 0;

    const imagePaths = {
        pedraMaoDireita: 'imagens/pedra.png', 
        pedraMaoEsquerda: 'imagens/pedra2.png', 
        papelMaoDireita: 'imagens/papel2.png', 
        papelMaoEsquerda: 'imagens/papel.png', 
        tesouraMaoDireita: 'imagens/tesoura.png', 
        tesouraMaoEsquerda: 'imagens/tesoura2.png' 
    };

    choicesButtons.forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.getAttribute('data-choice');
            playGame(userChoice);
        });
    });

    function playGame(userChoice) {
        const computerChoice = getComputerChoice();
        updateChoicesDisplay(userChoice, computerChoice);
        const result = determineWinner(userChoice, computerChoice);
        outcomeDisplay.textContent = `Resultado: ${result}`;
        updateScore(result);
    }

    function getComputerChoice() {
        const options = ['pedra', 'papel', 'tesoura'];
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    }

    function updateChoicesDisplay(userChoice, computerChoice) {
       
        userImage.src = imagePaths[`${userChoice}MaoDireita`];
        userImage.style.display = 'block';

        computerImage.src = imagePaths[`${computerChoice}MaoEsquerda`];
        computerImage.style.display = 'block';
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'Empate!';
        } else if (
            (userChoice === 'pedra' && computerChoice === 'tesoura') ||
            (userChoice === 'papel' && computerChoice === 'pedra') ||
            (userChoice === 'tesoura' && computerChoice === 'papel')
        ) {
            return 'Você ganhou!';
        } else {
            return 'O computador ganhou!';
        }
    }

    function updateScore(result) {
        if (result === 'Você ganhou!') {
            userWins++;
        } else if (result === 'O computador ganhou!') {
            computerWins++;
        }
        userScoreDisplay.textContent = `Você venceu: ${userWins} vezes`;
        computerScoreDisplay.textContent = `Computador venceu: ${computerWins} vezes`;
    }
});