


console.log('oshkosh file was loaded');

let grabContent=document.querySelector(".grab-content");
if(grabContent){
  console.log('value:',grabContent.innerText);
}
// -------------------------------------------------------------------


let addParagraph=document.querySelector(".add-paragraph");
let paragraphsContainer=document.querySelector(".paragraphs-container");
let oshForm=document.getElementById("osh-form");
if(addParagraph){
addParagraph.addEventListener('click',function(event){
  event.preventDefault();
  console.log('clicked add paragraph button');
  let textArea=document.createElement("textArea");
  textArea.name='paragraphs[]';
  textArea.classList.add('form-control');  
   textArea.rows = 10;
   textArea.placeholder = "Enter your blog paragraph";

  paragraphsContainer.appendChild(textArea);
});
}

// if(oshForm){
// oshForm.addEventListener('submit',function(){
//   console.log('submit was clicked for oshForm');
// event.preventDefault();

  // let combinedParagraph=document.createElement("p");
  //look for all children in that are called textArea inside body
// let allTextArea=document.querySelectorAll("textArea");
//   console.log(allTextArea);
//
//   allTextArea.forEach((e)=>{
//
//     console.log(e.value);
//     let p=document.createElement("p");
//     p.textContent=e.value;
//     body.appendChild(p);
//
//   })

// })
// }
