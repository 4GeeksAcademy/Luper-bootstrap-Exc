/* cambiar corazones a like */
let changeHearth = function(icon){
   if(icon.classList.contains('fa-regular')){
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid','liked');    
   }
   else {
    icon.classList.remove('fa-solid', 'liked');
    icon.classList.add('fa-regular');
   }
}
/*funcion para cambiar iconos que no cambian de color */
let changeIcon = function(icon){
    if(icon.classList.contains('fa-regular')){
     icon.classList.remove('fa-regular');
     icon.classList.add('fa-solid');    
    }
    else {
     icon.classList.remove('fa-solid');
     icon.classList.add('fa-regular');
    }
 }