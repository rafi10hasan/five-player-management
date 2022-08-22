let count=0;
function selectPlayer(button){
   button.setAttribute('disabled',true);

const playerElement=button.parentNode.parentNode.children[0].innerText;

const displayPlayer=document.getElementById('player-display');

    if(count==5){
        alert("you don't added than five player");
        return;
    }

    else{
        const tr=document.createElement("tr");
        tr.innerHTML=` 
        <td>${count+1}.</td>
        <td>${playerElement}</td>
        
        `;
       displayPlayer.appendChild(tr);
       count++;
       
    }
}

document.getElementById("calculate-btn").addEventListener('click',function(){
    let totalPlayer=count;
    const totalPlayerInputField=getPerPlayerCost('per-player-cost');
    const totalPlayerExpenses=totalPlayerInputField*totalPlayer;
    const PlayerExpenses=document.getElementById('player-expenses')
    setPerPlayerCostById('player-expenses', totalPlayerExpenses);

})

document.getElementById('calculate-total').addEventListener('click',function(){
        

    let totalCost= document.getElementById('total-cost');
    const PlayerExpenses=document.getElementById('player-expenses')
    const playerExpensesValue=parseFloat(PlayerExpenses.innerText);
    const managerInputFieldValue=getCoachCost('manager-input');
    const coachInputFieldValue=getCoachCost('coach-input');
    let totalCostValue=playerExpensesValue+ managerInputFieldValue+coachInputFieldValue;
     setTotalCostById('total-cost',totalCostValue);
 })








   
   






    