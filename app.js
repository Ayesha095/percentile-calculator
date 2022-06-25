var target=document.getElementById('btn');
target.addEventListener('click',function(){
   var eng= document.getElementById('eng').value;
   var urdu= document.getElementById('urdu').value;
   var phy= document.getElementById('phy').value;
   var mat= document.getElementById('mat').value;
  
   var total=Number(eng)+Number(urdu)+Number(phy)+Number(mat);
   var per=(total*100)/400;

   if(per>=80 && per<100){
    var grade="a you are pass";
   }
   else if(per>=60 && per<79){
    var grade="Byou are pass";
   }
   else if(per>=60 && per<79){
    var grade="Byou are pass";
   }
   else if(per>=60 && per<79){
    var grade="Byou are pass";
   }


  document.getElementById('text').innerHTML=(total);
}) 