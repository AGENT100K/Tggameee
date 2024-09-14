let score = 0;
let multiplier = 1;
let upgradeCost = 10;

document.getElementById('clickButton').addEventListener('click', function() {
    score += multiplier;
    document.getElementById('score').innerText = 'Счет: ' + score;
});

document.getElementById('upgradeButton').addEventListener('click', function() {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        multiplier++;
        upgradeCost = Math.floor(upgradeCost * 1.5); // Увеличиваем стоимость улучшения
        document.getElementById('score').innerText = 'Счет: ' + score;
        document.getElementById('multiplier').innerText = 'Умножитель: ' + multiplier;
        this.innerText = 'Улучшить (Цена: ' + upgradeCost + ')'; // Обновляем текст кнопки
    } else {
        alert('Недостаточно очков для улучшения!');
    }
});
