   document.addEventListener('DOMContentLoaded', () => {
       let coins = 0;
       let upgradeCost = 10;

       const coinCountElement = document.getElementById('coinCount');
       const clickButton = document.getElementById('clickButton');
       const upgradeButton = document.getElementById('upgradeButton');
       const upgradeCostElement = document.getElementById('upgradeCost');

       clickButton.addEventListener('click', () => {
           coins++;
           coinCountElement.textContent = coins;
       });

       upgradeButton.addEventListener('click', () => {
           if (coins >= upgradeCost) {
               coins -= upgradeCost;
               coinCountElement.textContent = coins;

               // Увеличиваем стоимость следующего улучшения
               upgradeCost = Math.floor(upgradeCost * 1.5);
               upgradeCostElement.textContent = upgradeCost;

               alert("Улучшение куплено!");
           } else {
               alert("Недостаточно монет!");
           }
       });
   });
   
