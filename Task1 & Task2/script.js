 let sidebarHeader= document.getElementById("sidebar__header");
 let sidebarImage = document.getElementById("sidebar__image");
 let sidbarDetails = document.querySelector(".sidbar__details");
 let sidebar = document.querySelector(".sidebar");
 let sidebarLinks = document.getElementsByClassName("sidebar__links");
 let taskContainer = document.getElementsByClassName("task__container")[0];
 let sidebarLists = document.getElementsByClassName("sidebar__lists");
 let dataDet = data[0].tasks[0];


// sidebar hide & show
sidebarImage.addEventListener("click",()=>{
    sidebar.classList.toggle("sidebar_box");
    sidebarHeader.classList.toggle("show");
    sidbarDetails.classList.toggle("show");

});

// creating the asset containers on window loading
window.onload = function(){
    for(let i=0;i<sidebarLinks.length;i++){
       createContainer(dataDet.assets[i]); 
     
    }
}

//  Creating the asset containers
function createContainer(elem){
    let maindiv = document.createElement("div");
    let h2 = document.createElement("h2");
    let div = document.createElement("div");
    let dataTitle = document.createTextNode(elem.asset_title);
    let datacontent = document.createTextNode(elem.asset_description);
     let asset = taskContainer.appendChild(maindiv);
    let heading = asset.appendChild(h2);

    dataelem(elem,maindiv);
    
    let content = asset.appendChild(div);

        heading.append(dataTitle);
       content.append(datacontent);
         asset.className ="task__box";   
       
}



//Display the data
function dataelem(elem,content){
  
  if(elem.asset_id === 6237){
        let dataimage = document.createElement('iframe');
        dataimage.src= elem.display_asset_docs;
        dataimage.type="application/pdf";
        dataimage.height="400px";
        dataimage.width="100%";
        content.append(dataimage);
        console.log(dataimage)
    }else if(elem.asset_id === 6242){
        let dataimage = document.createElement('iframe');
        dataimage.src= elem.display_asset_video;
        dataimage.height="100%";
        dataimage.width="100%";
        content.append(dataimage);
    }
    else if(elem.asset_id === 6241){
        let dataimage = document.createElement('iframe');
        dataimage.src= elem.display_asset_url;
        dataimage.height="100%";
        dataimage.width="100%";
        dataimage.style.padding="20px";
        content.append(dataimage);
    } 
    else if(elem.asset_id === 6238){
        let dataimage = document.createElement('img');
        dataimage.src= elem.display_asset_image;
        dataimage.style.height="300";
        dataimage.style.width="100%";
        content.append(dataimage);
    }else if(elem.asset_id === 6235){
        let datainput = document.createElement('textarea');
        let btn = document.createElement("button");
        btn.textContent="Submit";
        btn.className="btn";
        datainput.rows=10;
        datainput.cols=48;
        datainput.style.margin="10px";
        datainput.style.borderRadius="20px";
        content.append(datainput);
        content.append(btn);
    }
    
}








 



