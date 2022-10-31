function hover(){   
    menuItems=document.getElementsByClassName('menuItem');
    for (i in menuItems){
                   
       menuItems[i].onmouseover = function(){
           this.style.backgroundColor='#D9D9D9'; 
           this.style.color='black';
       }
       menuItems[i].onmouseout=function(){ 
           this.style.backgroundColor=''; 
           this.style.color='black';
       }
       menuItems[i].onclick=function(){ 
           this.style.backgroundColor='black';
           this.style.color='white';
           }
           
    }
}


function newMenuItem(){
    var newMenuItemColor = document.getElementById("textAreaColor").value; 
    var textInMenu = document.getElementById("textField").value;
    var menu = document.getElementById('menu'); 
    
    var newMenuItem = document.createElement("a");
    newMenuItem.href = "bonusPage.html";
    newMenuItem.target = "_blank";
    newMenuItem.style.backgroundColor = newMenuItemColor; 
    
    var newDiv = document.createElement("div");
    newDiv.textContent = textInMenu;
    newDiv.className = "menuItem";   
    newMenuItem.appendChild(newDiv);   
    menu.appendChild(newMenuItem);  
    
    hover();
}



