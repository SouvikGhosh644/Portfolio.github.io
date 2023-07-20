function myFunction() 
{
  var elements = document.getElementsByClassName("hamb_menu");
  for (var i = 0; i < elements.length; i++) 
  {
    var element = elements[i];
    if (element.style.display === "block") 
    {
      element.style.display = "none";
    } 
    else 
    {
      element.style.display = "block";
    }
  }
}