const controller=document.querySelector("#controller")
controller.addEventListener("click",(event)=>{
    let result=parseInt(prompt("New Grid Size"))
    generateNewGrid(result)
})
function generateNewGrid(number){
    const container=document.querySelector(".container")
    container.style.display="flex"
    container.style.width="100%"
    container.style.padding="0px"
    container.style.flexDirection="column"
    container.replaceChildren()
    for(let rowcount=0;rowcount<number;rowcount++){
        const row=document.createElement("div")
        row.classList.add("row")
        row.style.display="flex"
        row.style.gap="0"
        row.style.justifyContent="center"
        row.style.margin="0px"
        row.style.padding="0px"
        row.style.width="100%"
        row.style.height="70px;"
        for(let columncount=0; columncount<number;columncount++){
            const gridbox=document.createElement("div")
            gridbox.classList.add("gridbox")
            gridbox.style.padding="0px"
            gridbox.style.margin="0px"
            gridbox.style.border="1px solid black"
            gridbox.style.width=`${100/number}%`
            gridbox.style.aspectRatio="1/1"
            gridbox.addEventListener("mouseenter",(event)=>{
                event.target.style.backgroundColor="blue"
            })
            gridbox.addEventListener("mouseleave",(event)=>{
                event.target.style.backgroundColor="white"
            })
            row.appendChild(gridbox)
        }
        container.appendChild(row)
    }
}
generateNewGrid(20)