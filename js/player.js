let count=0;
function selectPlayer(button){
   button.setAttribute('disabled',true);

const playerElement=button.parentNode.parentNode.children[0].innerText;

const displayPlayer=document.getElementById('player-display');

    if(count==5){
        button.removeAttribute('disabled',false);
        alert("you can't added than five player..");
        return;
    }

    else{
        const ol=document.createElement("ol");
        ol.innerHTML=` 
        <span>${count+1}.</span>
        <span>${playerElement}</span>
        
        `;
        ol.style.listStyle='none';
        ol.style.display="inline-block"
       displayPlayer.appendChild(ol);
       count++;
       
    }
}


//added Event Handler in calculate button
document.getElementById("calculate-btn").addEventListener('click',function(){
    let totalPlayer=count;
    const totalPlayerInputField=getTextInputFieldValue('per-player-cost');
    if(isNaN(totalPlayerInputField) ){
        
        alert('please provide valid input.');
        return;
        
      }
    const PlayerExpenses=document.getElementById('player-expenses')

    const totalPlayerExpenses=totalPlayerInputField*totalPlayer;
    setPerPlayerCostById('player-expenses', totalPlayerExpenses);

})

//added Event Handler in calculate total button
document.getElementById('calculate-total').addEventListener('click',function(){
        

    let totalCost= document.getElementById('total-cost');
    const PlayerExpenses=document.getElementById('player-expenses')
    const playerExpensesValue=parseFloat(PlayerExpenses.innerText);
    const managerInputFieldValue= getTextInputFieldValue('manager-input');
    if(isNaN(managerInputFieldValue) ){
        
        alert('please provide valid input.');
        return;
        
      }
    const coachInputFieldValue= getTextInputFieldValue('coach-input');
    if(isNaN(coachInputFieldValue) ){
        
        alert('please provide valid input.');
        return;
        
      }
    let totalCostValue=playerExpensesValue+ managerInputFieldValue+coachInputFieldValue;
     setTotalCostById('total-cost',totalCostValue);

 })



   
   






    