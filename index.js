function convert (input) {
    if ((input===null) || (input===''))
         return false;
    else
     input = input.toString();
   var output = input.replace(/\w\S*/g, 
  function(txt){return txt.charAt(0).toUpperCase() +
         txt.substr(1).toLowerCase();});
         document.getElementById("x").value = output;
  }

  