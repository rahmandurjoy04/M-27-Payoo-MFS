function getInputValueByID(id){
    const amount= document.getElementById(id).value;
    convertedValue = parseFloat(amount);
    return convertedValue;
}

function getInputStringByID(id){
    const string= document.getElementById(id).value;
    return string;
}

function getInnerTextByID(id){
    const innerText=document.getElementById(id).innerText;
    convertedInnerText = parseFloat(innerText);
    return convertedInnerText;
}

function setInnerTextByIDAndValue(id,value){
    document.getElementById(id).innerText = value;
}