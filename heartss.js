var i = 0;
    var txt = "Hi lodibabes,love,babe,loml, nam-ra hehe. I want u to know that u're very special to me & i really like you.lovelots! HAPPY HEARTS DAY!!!"; /* The text */
    var speed = 55; /* The speed/duration of the effect in milliseconds */
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        document.getElementById("subtitle").style.display = "none";
        document.getElementById("chng").style.color = "red";
        const container = document.querySelector('.container');


        const creat =document.createElement ('div');
        creat.classList.add('hearts');
        creat.innerHTML = ' 💗️';
    
        creat.style.left = Math.random() * 100 + 'vw';
    
        creat.style.animationDuration = Math.random()* 3 + 2 + 'vw';
        container.appendChild(creat);
         setTimeout(() => {
              creat.remove ();
         }, 2000 );
     
        }
        setInterval(hearts,  150);
      }
      
   
 
  