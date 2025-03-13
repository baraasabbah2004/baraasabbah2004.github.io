var PROJECTS = [
{
    img  : "project1.png",
    title : "مشروع 1" , 
    description : "نبذة عن مشروع 1"
}
, 

{
    img  : "project2.png",
    title : "مشروع2" , 
    description : "نبذة عن مشروع2 "
}
] 


var projectsDive = document.getElementById("projects"); 

for(let i=0 ; i<PROJECTS.length;i++) 
{
    // make a div for each project  
    var projectDiv = document.createElement("div"); 
    var divStyle = document.createAttribute("style"); 
    divStyle.value = "display:inline-block ;width :300px; margin : 10px"; 
    projectDiv.setAttributeNode(divStyle);  


    // h3 
    var title = document.createElement("h3"); 
    var titleNode = document.createTextNode(PROJECTS[i].title);
    title.appendChild(titleNode);


    // img  

    var img  = document.createElement("img");
    var source = document.createAttribute("src");
    source.value = "./images/"+PROJECTS[i].img;
    img.setAttributeNode(source);
    var imgStyle = document.createAttribute("style");
    imgStyle.value = "width:180px ; height : 100px";
    img.setAttributeNode(imgStyle); 

    // p 
    var p = document.createElement("p"); 
    var pNode = document.createTextNode(PROJECTS[i].description); 
    p.appendChild(pNode);

    projectDiv.appendChild(title);
    projectDiv.appendChild(img);
    projectDiv.appendChild(p);

    projectsDive.appendChild(projectDiv); 

}
