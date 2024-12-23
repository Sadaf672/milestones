const toggleButton=document.getElementById("togglebuttion") as HTMLButtonElement|null;
const skillsDiv = document.getElementById("skills") as HTMLDivElement|null;

if(toggleButton && skillsDiv ){
    toggleButton.addEventListener("click", () => {
        if(skillsDiv.style.display === "none"){
            skillsDiv.style.display ="block";
            toggleButton.value = "Hide skills";

        }else{
            skillsDiv.style.display = "none";
            toggleButton.value = "show skills";

        }

    });

}
else{
    console.log("Required element not found in the DOM");
}
    
    
