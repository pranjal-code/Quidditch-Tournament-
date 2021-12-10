class Form 
{
  constructor ()
{

}
display (){
  var title = createElement ("h2");
  title.html ("The Quidditch World Tournament!");
  title.position (130,12);

  var input = createInput ("Your Name")
  input.position(140, 160);

  var button = createButton ("Play")
  button.position (220, 160);
  button.mousePressed(
    function ()
   {
    input.hide()
    button.hide()
    var name = input.value ()
    playerCount += 1
    player.update(name)

    player.updateCount(playerCount);

    var greeting = createElement ("H3");
    greeting.html ("Welcome, " +name+ "!")

}  )
  
}


}
