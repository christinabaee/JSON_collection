let contentGridElement=document.getElementsById('contentGrid');

let jsonDatabase=[
  {
    "Name":"Kirby",
    "color":"#25a526",
    "font":"Courier",
    "Skills":["Swallow"],
    "picture_url":"https://cdn.vox-cdn.com/thumbor/D9AWn8zEzjYbStYQGs6pfL_q-t8=/0x0:1920x1080/1400x933/filters:focal(826x392:1132x698):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69898542/kirby-review-hero.0.0.jpg"
  }

  {
    "Name":"Meta Knight",
    "color":"#25a526",
    "font":"Courier",
    "Skills":["Clone","Dimensional Strike","Heal"],
    "picture_url":"https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/3/meta-knight-nick-savino.jpg?&targetx=0&targety=-100&imagewidth=700&imageheight=700&modelwidth=700&modelheight=500&backgroundcolor=79757C&orientation=0"
  }

  {
    "Name":"Morpho Knight",
    "color":"#25a526",
    "font":"Courier",
    "Skills":["Teleport","Sound Waves","Enlargement"],
    "picture_url":"https://i.ytimg.com/vi/uqGUBIvX-9s/maxresdefault.jpg"
  }

  {
    "Name":"Galacta Knight",
    "color":"#25a526",
    "font":"Courier",
    "Skills":["Crescent Shot","Hyper Rush","Tornado"],
    "picture_url":"https://external-preview.redd.it/r1MTQa1N8psd06-PzodcEV0IUbsPy6Jtp20D4XkvVNs.jpg?width=640&crop=smart&auto=webp&s=95f9e89a02e438c79a51fbb1888b0d1a076ffae9"
  }

]

for (var i=0; i<jsonDatabase.length; i++){
  createElementProper(jsonDatabase[i]);
  console.log("working");
}

function createElementProper(incomingJSON){
  console.log ("function going");
  //div and set class
  let newContentElement=document.createElement("DIV");
  newContentElement.style.backgroundColor=incomingJSON["color"];
  newContentElement.style.fontFamily=incomingJSON["font"];
  newContentElement.classList.add('contentItem');

  let newContentHeading=document.createElement("H3");
  newContentHeading.classList.add("contentTitle");
  newContentHeading.innerText=incomingJSON["title"];
  newContentElement.appendChild(newContentHeading);

  let newContentSubhead=document.createElement("H4");
  newContentSubhead.innerText="Skills:";
  newContentElement.appendChild(newContentSubhead);

  let newContentSkillList=document.createElement("UL");
  newContentElement.appendChild(newContentPetList);

  for(var i=0, i<incomingJSON["Skills"].length,i++){
    var currentSkillString=incomingJSON["Skills"][i];
    var newSkillItem=document.createElement("LI");
    newSkillItem.innerText=currentSkillString;
    newContentSkillList.appendChild(newSkillItem);
  }

  let newImage=document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src=incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  contentGridElement.appendChild(newContentElement);
}

createElementProper(jsonDatabase);
