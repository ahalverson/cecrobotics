function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNum = getRandomInt(0, 58);

var randomArray = ["Run into something real quick. No not that hard!", "You done broke it! x(1000)", "You hot glued tape to metal?!", "Stop bumping into stuff!", "The battery is coming out!", "You used all the duct tape!", 
"I lost connection again", "Do we have any knobby wheels?", "No, the other shaft!", "Did you guys break something?", "That was the best ramp entry I've ever seen!", 
"It looked like a house until I put a hole in the roof.", "Let's just say that the wall is the robot...", "I am getting so much gold, just from this meeting.", 
"Um, I think I did something reeeaaaly bad...", "The thing was unplugged.", "The chair looks like it was mauled by a beaver.", "I think we should stay away from the ramp...", 
"No. His name is Tim.", "Every time my brother is awake, I'll randomly hear 'spam, spam, spam, spam' coming from the other room.", 
"Oh gosh, it's terrifying", "Guess who sang that to me?", "Would anyone mind if I just took the 2 liter of mtn dew over here?", "What if we just fueled the robot with mtn dew?", 
"Why does everyone keep running into the thing hanging from the ceiling?!", "Be careful what you say. Anything you say can and will be used against you.", 
"Is the teacher a human?", "You should put a chimney in the hole.", "I actually thought about that at one point.", "Can you get out of my chair?", 
"Tim is back!", "He has no face!", "Your face is too mainstream!", "An hour without it is too much!", "Wyatt, why are you para-cording your house?", 
"See, that's too common. I'm sorry.", "Andrew's playing with clams again!", "Why would I say clams?", "I want the top plane!", "You beheaded the dog!", 
"Stop bending his ears!", "You stole his neck!", "Why are you poking a rod at the dog's head?", "That's a really long tongue.", "Nate, here's your power supply.", 
"The dog is lapping up cookies.", "He looks like an elephant!", "No, his ears aren't big enough.", "Is the rest of the team mute?!", "You just ate out of the dog's mouth!", 
"Actually, it looks kind of like a platypus.", "Why does the chute look like a coffin for a dwarf?", "Is that a dead chocolate chip?", "You gotta punch it!", 
"Why is the duct tape hanging?", "Does anybody have a taco?", "Tim - he's....mangled.", "Tim is not a real person. He is a dog. He's not even a real dog."];

document.getElementById("random-phrase").innerHTML = randomArray[randomNum];

function ifBroke() {
	if (randomNum === 1) {
		document.getElementById('youDoneBrokeIt').play();
	}
}