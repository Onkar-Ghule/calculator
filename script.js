const buttons=document.querySelectorAll(".box")
const display=document.querySelector(".ans")
let currValue="";
let resetDisplay=false;
 buttons.forEach(button=>{
 button.addEventListener("click",()=>{
handleButtonClick(button)});
 });
const handleButtonClick=(button)=>{
    const value = button.textContent.trim();
    if(button.classList.contains("symbol1"))
        {
            handleSymbol1(value,button);
        } else if(button.classList.contains("symbol"))
        {
            handleSymbol(value);
        }else
        {
            handleNumber(value);
        }
};
const handleSymbol1=(value,button)=>
    {
        if(value==="AC")
            {
                 currValue="";
                 display.textContent="";
          }
        if(button.querySelector("i"))
            {
                currValue=currValue.slice(0,-1);
                display.textContent=currValue;
            }
        else if (value==="()")
        { 
            if(currValue.endsWith("(") ||   currValue=="")
                {
                    currValue+="(";
                }
            else
            {
                currValue+=")";
            }
            display.textContent=currValue;
        }
    }
const handleSymbol=(value)=>
   {
        if(value=="=")
            {
                calculateResult();
            }
        else
           {
              addOperator(value);
            }    
    }
const calculateResult =()=>
    {
        try{
        currValue=String(eval(currValue.replace(/X/g,"*")))
        display.textContent=currValue;
        resetDisplay=true;
        }
        catch{
            display.textContent="error";
            currValue="";
        }
    }
const addOperator=(value)=>{
     if(resetDisplay)
        {
            currValue=display.textContent
            resetDisplay=false;
        }
        currValue+=value.replace(/X/g,"*");
        display.textContent=currValue
}
const handleNumber=(value)=>{
if(resetDisplay)
    {
        currValue="";
        resetDisplay=false;
    }
   currValue+=value;
   display.textContent=currValue;
}
