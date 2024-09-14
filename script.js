
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let multiplier = localStorage.getItem('multiplier') ? parseInt(localStorage.getItem('multiplier')) : 1;
let upgradeCost = 10;
let doubleUpgradeCost = 50;

document.getElementById('coin').innerText = 'Coin: ' + score;

document.getElementById('clickButton').addEventListener('click', function() {
    score += multiplier;
    document.getElementById('coin').innerText = 'Coin: ' + score;
    localStorage.setItem('score', score);
});

document.getElementById('upgradeButton').addEventListener('click', function() {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        multiplier++;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        document.getElementById('coin').innerText = 'Coin: ' + score;
        this.innerText = 'Улучшить (Цена: ' + upgradeCost + ')';
        localStorage.setItem('score', score);
        localStorage.setItem('multiplier', multiplier);
        localStorage.setItem('upgradeCost', upgradeCost);
    } else {
        alert('Недостаточно монет для улучшения!');
    }
});

document.getElementById('doubleUpgradeButton').addEventListener('click', function() {
    if (score >= doubleUpgradeCost) {
        score -= doubleUpgradeCost;
        multiplier *= 2; // Удваиваем умножитель
        doubleUpgradeCost = Math.floor(doubleUpgradeCost * 1.5); // Увеличиваем стоимость
        document.getElementById('coin').innerText = 'Coin: ' + score;
        this.innerText = 'Удвоить умножитель (Цена: ' + doubleUpgradeCost + ')';
        localStorage.setItem('score', score);
        localStorage.setItem('multiplier', multiplier);
        localStorage.setItem('doubleUpgradeCost', doubleUpgradeCost);
    } else {
        alert('Недостаточно монет для удвоения умножителя!');
    }
});

// Восстанавливаем значения из localStorage
if (localStorage.getItem('upgradeCost')) {
    upgradeCost = parseInt(localStorage.getItem('upgradeCost'));
    document.getElementById('upgradeButton').innerText = 'Улучшить (Цена: ' + upgradeCost + ')';
}

if (localStorage.getItem('doubleUpgradeCost')) {
    doubleUpgradeCost = parseInt(localStorage.getItem('doubleUpgradeCost'));
    document.getElementById('doubleUpgradeButton').innerText = 'Удвоить умножитель (Цена: ' + doubleUpgradeCost + ')';
}
