const calcutercontainer = document.getElementById ('calculater_container');
const displayArea = document.getElementById ('display_area');

calcutercontainer.addEventListener('click', (e) => { 
    if (e.target.nodeName =="BUTTON"){
        switch (e.target.textContent) {
            case 'C':
                clear();
                break;
            case 'DEL':
                deletOnevalue();
                break;
            case '=':
                evaluate();
                break;
            default : 
            addToDisplayArea(e.target.textContent);
        }  
    }  
});

function clear() {
    displayArea.textContent = "";
}

function addToDisplayArea(value){
    displayArea.textContent = displayArea.textContent + value ;
}

function deletOnevalue() {
    let currentContent = displayArea.textContent
    displayArea.textContent = currentContent.substring(0,currentContent.length - 1);
}

function evaluate() {
    try {
        let calculation = math.evaluate (displayArea.textContent);
        displayArea.textContent = calculation;
    }  catch (error){
        displayArea.textContent = 'invalid';
        console.error (error);
    }
    
}