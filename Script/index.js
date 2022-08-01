// let menuhover = document.getElementsByClassName("menuhover")
let menulinks = document.getElementsByClassName("menuhover")
for(i = 0; i < menulinks.length; i++){
    menulinks[i].addEventListener("mouseover", function(){
        this.classList.toggle("active")

        // if(hovershow.style.display == "none"){
        //     hovershow.style.display = "block"
        // }else{
        //     hovershow.style.display = "none"
        // }
    })
}



// var faq = document.getElementsByClassName("heading");
// for (i = 0; i < faq.length; i++) {
//     faq[i].addEventListener("click", function () {
//         this.classList.toggle("actives");
//         var content = this.nextElementSibling;
//         if (content.style.display === "block") {
//             content.style.display = "none";
            
//         } else {
//             content.style.display = "block";
//         }
//     })
// }