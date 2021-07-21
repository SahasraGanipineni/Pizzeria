menu_list_array = ["Veg Margherita Pizza", "Double Cheese Margherita" , "Farm House" , "Peppy Paneer" , "Mexican Green Wave" , "Deluxe Veggie" , "Veg Extravaganza" , "CHEESE N CORN" , "PANEER MAKHANI"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.lenth;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '<li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.lenth;i++){
    htmldata=htmldata='<div class="card">'
    +'<img src="https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg">'
    +menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
var item=document.getElementById("additem").value;
menu_list_array.push(item);
add_item();
}