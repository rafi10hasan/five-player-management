let count=0;
function selectPlayer(button){
   button.setAttribute('disabled',true);

//    console.log(element.parentNode.parentNode.children[0])
const playerElement=button.parentNode.parentNode.children[0].innerText;

const displayPlayer=document.getElementById('player-display');

    if(count==5){
        alert("you don't added than five playerd")
    }

    else{
        const tr=document.createElement("tr");
        tr.innerHTML=` 
        <td>${count+1}.</td>
        <td>${playerElement}</td>
        
        `;
       
       displayPlayer.appendChild(tr)
       count++;
    }
    
}



    