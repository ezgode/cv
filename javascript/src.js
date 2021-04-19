// picture
let avatar = document.getElementsByClassName("avatar")
  
// {
let targ = document.getElementsByClassName("social_icon")
// function inflate_icon_(data){
let up_animation_list = []
let down_animation_list = []
for (var k = 0; k < targ.length; k++) {
  up_animation_list[k] = anime({
      targets: targ[k],
      easing: 'easeOutElastic(1, 1.0)',
      duration: 500,
      keyframes:[
        {translateY: -10},
        {translateY: 0},
      ],
      easing: 'easeInOutQuad',
      autoplay: false,
      direction: 'alternate',
      loop: false,
    });    
  targ[k].onmouseenter = up_animation_list[k].play
  // targ[k].onmouseleave = up_animation_list[k].stop;
}

// INFLATE SOCIAL ICONS WHEN HOVERING
function inflate_icon(data){
  data.path[0].setAttribute("fill", "#000000")
}
function deinflate_icon(data){
  data.path[0].setAttribute("fill", "#cfcfcf")
}
for (targ of document.getElementsByClassName("social_icon")){
  targ.addEventListener("mouseenter", inflate_icon)
  targ.addEventListener("mouseleave", deinflate_icon)    
}

// 
let table = document.getElementById("skill_table");
let skills = [
  [95, "Motion planning"],
  [95, "Collision avoidance"],
  [95, "Matlab"],
  [90, "Python"],
  [80, "Latex"],
  [80, "Technical writing"],
  [75, "Photoshop"],
  [75, "Illustrator"],
  [70, "Git"],
  [56, "ROS"], 
  [55, "C++"],
  [55, "Machine Learning"],
  [50, "Optimal Control"],
  [50, "HTML, CSS, javascript"],
  [40, "Catia"],
  [30, "Labview"],
]
let i = -1;
for(el of skills){
  i+=1;
  table.innerHTML += "\
    <tr>\
      <td class='column subleft_50'>" + el[1] + "</td>\
      <td class='column subright_50'>\
        <svg width=\"130\" height=\"10\" viewBox=\"0 0 120 10\">\
          <path class=\"skill_base_line\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\" d=\"M0,5 L100,5\"></path>\
          <path class=\"skill_line\" id=skill_" + i + " fill=\"none\" stroke=\"currentColor\" stroke-width=\"8\" d=\"M0,5 L0,5\" stroke-linecap=\"round\"></path>\
        </svg>\
      </td>\
    </tr>"
}
function animated_line (obj_idx, id, len){  
  var target = document.getElementById(id);
  anime({
    targets: target,
    easing: 'easeOutElastic(1, 1.0)',
    duration: 1000,
    d:[ {value: "M0,5 L0,5" }, {value: "M0,5 L"+len+",5" } ],
    delay:obj_idx*50,
  });}

i = -1;
for(el of skills){
  i+=1;
  animated_line(i, "skill_"+i, el[0])
}

// 
let language_table = document.getElementById("language_table");
let languages = [
  [100, "Spanish"],
  [85, "English"],
  [60, "French"]
]
i = -1;
for(el of languages){
  i+=1;
  language_table.innerHTML += "\
    <tr>\
      <td class='column subleft_50'>" + el[1] + "</td>\
      <td class='column subright_50'>\
        <svg width=\"130\" height=\"10\" viewBox=\"0 0 120 10\">\
          <path class=\"skill_base_line\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\" d=\"M0,5 L100,5\"></path>\
          <path class=\"skill_line\" id=language_" + i + " fill=\"none\" stroke=\"currentColor\" stroke-width=\"8\" d=\"M0,5 L0,5\" stroke-linecap=\"round\"></path>\
        </svg>\
      </td>\
    </tr>"
}
i = -1;
for(el of languages){
  i+=1;
  animated_line(i, "language_"+i, el[0])
}



console.log('asdfasfasdfasd')


var coll = document.getElementsByClassName("collapsible");
// var i;

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}