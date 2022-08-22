function getPerPlayerCost(playerCostId){
    let playerInputField=document.getElementById(playerCostId);
    playerInputField=parseFloat(playerInputField.value);
    return playerInputField;
}

function setPerPlayerCostById(totalplayerCostId, playerValue){
    const playerTotalCost = document.getElementById(totalplayerCostId);
    playerTotalCost.innerText = playerValue;
}


function getManagerCost(ManagerId) {
    const managerInput=document.getElementById(ManagerId);
    managerInputValue=parseFloat(managerInput.value);
    return managerInputValue;
}


function getCoachCost(coachId) {
    const coachInput=document.getElementById(coachId);
    coachInputValue=parseFloat(coachInput.value);
    return coachInputValue;
}

function setTotalCostById(totalCostId, totalValue){
    const totalCostText = document.getElementById(totalCostId);
    totalCostText.innerText = totalValue;
}
