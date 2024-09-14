
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let multiplier = localStorage.getItem('multiplier') ? parseInt(localStorage.getItem('multiplier')) : 1;
let upgradeCost = 10;

document.getElementById('score').innerText = 'Счет: ' + score;
document.getElementById('multiplier').innerText = 'Умножитель: ' + multiplier;

document.getElementById('clickButton').addEventListener('click', function() {
    score += multiplier;
    document.getElementById('score').innerText = 'Счет: ' + score;
    localStorage.setItem('score', score); // Сохраняем счет
});

document.getElementById('upgradeButton').addEventListener('click', function() {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        multiplier++;
        upgradeCost = Math.floor(upgradeCost * 1.5); // Увеличиваем стоимость улучшения
        document.getElementById('score').innerText = 'Счет: ' + score;
        document.getElementById('multiplier').innerText = 'Умножитель: ' + multiplier;
        this.innerText = 'Улучшить (Цена: ' + upgradeCost + ')'; // Обновляем текст кнопки
        localStorage.setItem('score', score); // Сохраняем обновленный счет
        localStorage.setItem('multiplier', multiplier); // Сохраняем обновленный умножитель
        localStorage.setItem('upgradeCost', upgradeCost); // Сохраняем обновленную стоимость улучшения
    } else {
        alert('Недостаточно button coin для улучшения!');
    }
});

// Восстанавливаем значение стоимости улучшения из localStorage
if (localStorage.getItem('upgradeCost')) {
    upgradeCost = parseInt(localStorage.getItem('upgradeCost'));
    document.getElementById('upgradeButton').innerText = 'Улучшить (Цена: ' + upgradeCost + ')';
}
