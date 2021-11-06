$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 300){
            $('.about').addClass("ascrool");
        }
        else{
            $('.about').removeClass("ascrool");
        }
        if(this.scrollY>600){
            $('.about').addClass("ascrool2");
        }
        else{
            $('.about').removeClass("ascrool2");
        }
        
      
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
         
        }
        else{
            $('.scroll-up-btn').removeClass("show");
       
        }
  
    });

    $('.scroll-up-btn').click(function(){
        $("html").animate({scrollTop:0})
    });
    $('.menue-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
         $('.menue-btn i').toggleClass("active");
    }); 
    

    var typed = new Typed(".typing",{
        Strings:["web developer","fontend developer","web developer"],
        typeSpeed:100,
        backSpeed: 60,
        loop:true
    });
    
});



const Ctime=()=>{
    const time= new Date()
  const Utime=time.toLocaleTimeString();
  document.getElementById("time").innerHTML=Utime;
  

}
setInterval("Ctime()",1000)

let x=0;
 const imge=()=>{
     if(x==0){
        document.getElementById("aboutimg").src="b34.jpg";
      
     }
     if(x==1){
        document.getElementById("aboutimg").src="ad.jpg";
      
     }
     if(x==2){
        document.getElementById("aboutimg").src="ad4.jpg";
      
     }
    //  if(x==3){
    //     document.getElementById("aboutimg").src="b31.jpg";
      
    //  }
     x++;
     if(x>=3){
         x=0;
     }
     
 }
 setInterval("imge()",4000);

  
