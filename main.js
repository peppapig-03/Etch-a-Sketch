const container=document.querySelector(".container")
container.style.display="flex"
container.style.flexDirection="column"
for(let rowcount=0;rowcount<16;rowcount++){
    const row=document.createElement("div")
    row.classList.add("row")
    row.style.display="flex"
    row.style.gap="0"
    row.style.justifyContent="center"
    row.style.margin="0px"
    row.style.padding="0px"
    for(let columncount=0; columncount<16;columncount++){
        const gridbox=document.createElement("div")
        gridbox.classList.add("gridbox")
        gridbox.style.padding="0px"
        gridbox.style.margin="0px"
        gridbox.style.border="1px solid black"
        gridbox.style.width="50px"
        gridbox.style.height="50px"
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