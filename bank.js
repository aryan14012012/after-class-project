const statementButton = document.getElementById('viewStatementBtn');
        const statementBox = document.getElementById('statementBox');

        if (statementButton && statementBox) {
            statementButton.addEventListener('click', () => {
                const isHidden = statementBox.classList.contains('d-none');
                statementBox.classList.toggle('d-none', !isHidden);
                statementButton.textContent = isHidden ? 'Hide Statement' : 'View Statement';
            });
        }