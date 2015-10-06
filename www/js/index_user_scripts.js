(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn_beep */
    $(document).on("click", "#btn_beep", function(evt)
    {
        /* your code goes here */ 
        
    });
    
        /* button  #btn_vibrate */
    $(document).on("click", "#btn_vibrate", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #btn_sound */
    $(document).on("click", "#btn_sound", function(evt)
    {
        /* your code goes here */ 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
