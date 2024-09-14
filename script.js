let coinCount = 0;
const upgradeCost = 10;
let upgradePurchased = false;

const coinCountElement = document.getElementById('coinCount');
const upgradeCostElement = document.getElementById('upgradeCost');
const messageElement = document.getElementById('message');

document.getElementById('clickButton').addEventListener('click', () => {
    coinCount++;
    coinCountElement.textContent = coinCount;
});

document.getElementById('upgradeButton').addEventListener('click', () => {
    if (coinCount >= upgradeCost && !upgradePurchased) {
        coinCount -= upgradeCost;
        coinCountElement.textContent = coinCount;
        upgradePurchased = true;

        // Отобразить сообщение
        messageElement.textContent = 'Улучшение успешно куплено!';
        messageElement.style.display = 'block';

        // Скрыть сообщение через 3 секунды
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 3000);
    } else if (upgradePurchased) {
        alert('Вы уже купили это улучшение!');
    } else {
        alert('Недостаточно монет для покупки улучшения!');
    }
});

