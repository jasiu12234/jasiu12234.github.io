import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("balwan", "pend.png")
loadSprite("tlo", "obraz.png")
loadSound("muzyka", "muza.mp3")



add([
    sprite("tlo")
])

const balwan = add([
    sprite ("balwan"),
    pos(0,0)
])


let wprawo = true


balwan.onUpdate(() => {

     if(wprawo && balwan.pos.x < 600)
          balwan.pos.x += 1

    else if(!wprawo && balwan.pos.x > 50)   
          balwan.pos.x -= 1
          
          else wprawo ^= true
})

onMouseRelease(( )=>play("muzyka"))