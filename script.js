document.addEventListener('DOMContentLoaded', () => {
    let coins = 0;
    let upgradeCost = 10;

    const coinCountElement = document.getElementById('coinCount');
    const clickButton = document.getElementById('clickButton');
    const upgradeButton = document.getElementById('upgradeButton');
    const upgradeCostElement = document.getElementById('upgradeCost');

    clickButton.addEventListener('click', () => {
        coins++;
        coinCountElement.innerText = coins; // Измените textContent на innerText
    });

    upgradeButton.addEventListener('click', () => {
        if (coins >= upgradeCost) {
            coins -= upgradeCost;
            coinCountElement.innerText = coins; // Измените textContent на innerText

            // Увеличиваем стоимость следующего улучшения
            upgradeCost = Math.floor(upgradeCost * 1.5);
            upgradeCostElement.innerText = upgradeCost; // Измените textContent на innerText

            alert("Улучшение куплено!");
        } else {
            alert("Недостаточно монет!");
        }
    });
});
