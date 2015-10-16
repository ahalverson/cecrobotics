
// The contents of this file were written by Caleb Gentry so if they suck they are His (my) fault
Person = function(month, date, year, text, name, image){
	var now = new Date();
if(year < 100){
if(year > now.getFullYear()){
	year = year + 1900;
}
else{
	year = year + 2000;
	
}
}
var age;
if(month > now.getMonth + 1 && day > now.getDate){
	age = now.getFullYear() - year;
}
  else{
    age = now.getFullYear() - 1 - year;
  }

  var textArr;
textArr = text.split(" ");
//buggy, yet to be implemented
/*
var moveUpBy = 0;
 if(now.getFullYear > 2015 && now.getMonth +1 > 9 ){
	 moveUpBy = now.getFullYear - 2015;
 }
 */
  for(var i = 0; i < textArr.length; i++){
	  //update age
    if(textArr[i] == "[age]"){
      textArr[i] = age;
    }
	//buggy, yet to be implemented
	/*
	// update grade
	if(textArr[i] == "junior" || textArr[i] == "freshman" || textArr[i] == "sophomore" || textArr[i] == " senior" || ){
		if(moveUpBy > 0){
		textArr[i] = moveUp(textArr[i], moveUpBy);
	}
	//update text if it is "first year" etc
  if(textArr[i] =="first" || "second" || "third" || "fourth" || "[three]"){
	 
	  if(textArr[i + 1] == "year" && moveUpBy > 0){
		 
		  textArr[i] = moveUp(textArr[i], moveUpBy);
	  } 
	  if(textArr[i] == "[one]" || textArr[i] == "[two]" || textArr[i] == "[three]" ){
		  textArr[i] == moveUp(textArr[i], moveUpBy);
	  }
  }
  }
  */
  }
  text = " ";
  
 for(var h = 0; h < textArr.length; h++){
	 text = text + " " + textArr[h];
 } 
 
 var div = document.createElement("div");
 div.className ="col-lg-4";
 var imgHTML =  document.createElement("img");
 imgHTML.className = "img-circle";
 imgHTML.src = image;
 imgHTML.setAttribute("width", "140px;");
 var h4 = document.createElement("h4");
 var nameHTML = document.createTextNode(name);
 var textHTML = document.createTextNode(text);
 h4.appendChild(nameHTML);
 div.appendChild(imgHTML);
 div.appendChild(h4);
 div.appendChild(textHTML);
 document.getElementById("bioRow").appendChild(div);
 
};

Person(
/*DOB*/
//month
12,
//day
 7,
 //year
 01,
 //Bio text (use [age] in place of the person's age)
 "Wyatt Chanley is a [age] year old highschool senior who enjoys the occasional mock sword fight, in depth reading, and of course, videogames. Wyatt was born in San Diego, California and this has had no effect upon his overall behaviour. Seriously. Wyatt plans on being a bio-engineer when he gets older, and has plans to be the real life Tony Stark... a kid can have dreams.",
 //Name
 "Wyatt",
 //Image
 "img/wyatt.jpg"
 );
 
 Person(
/*DOB*/
//month
12,
//day
 7,
 //year
 01,
 //Bio text (use [age] in place of the person's age)
 "Andrew Halverson is a [age] year old junior in high school. He likes to install, uninstall, and break the Arch Linux on his computer, as well as submit the occasional bug fixes to GNOME, and is constantly on the forums for his favorite game of all time, Freelancer. Andrew is the main programmer for the team, and wants to be a Linux SysAdmin when he graduates college.",
 //Name
 "Andrew",
 //Image
 "img/andrew.jpg"
 );
 
 
  Person(
/*DOB*/
//month
12,
//day
 7,
 //year
 01,
 //Bio text (use [age] in place of the person's age)
 "Zac Lewis is a [age] year old senior who enjoys playing drums, building, and swimming. He is one of the main builders for the team, and has done FLL for three years and FTC for three. Zac enjoys tinkering with things, playing video games, and blaring loud music. He plans on becoming either a mechanical engineer or architect, but he doesn't know for sure yet. ",
 //Name
 "Zac",
 //Image
 "img/Zac.jpg"
 );
 
  
		  
  Person(
/*DOB*/
//month
12,
//day
 7,
 //year
 01,
 //Bio text (use [age] in place of the person's age)
 "Nathan Pomles is a [age] year old senior at CEC. He is on an FRC team and helps coach an FLL team. On both the FRC and FTC teams, he is involved with CAD. Besides robotics, he likes camping, backpacking, and climbing. His favorite band is Demon Hunter. ",
 //Name
 "Nathan",
 //Image
 "img/Nathan.jpg"
 );
 
 
 
 

  Person(
/*DOB*/
//month
12,
//day
 7,
 //year
 01,
 //Bio text (use [age] in place of the person's age)
 " Caedyn Skiff is a high-school senior who is in her third year in FTC. She is a Carolina Girl in a Kentucky world. Her main passion is for elephants, and volunteers with the elephants at the Louisville Zoo every week. She is planning on majoring in either zoology or biology in college. ",
 //Name
 "Caedyn",
 //Image
 "img/Caedyn.jpg"
 );
 
 
 
   Person(
/*DOB*/
//month
12,
//day
 7,
 //year
 01,
 //Bio text (use [age] in place of the person's age)
 "Amelia Winrich is a [age] year old senior at CEC. This is her second year on the team. Although she's not a future engineer, she enjoys the robot building process. She works on the design aspect of the robot attachments. Some of the things she has learned on this FTC team is gratious professionalism, CAD design, and teamwork. ",
 //Name
 "Amelia",
 //Image
 "img/Amelia.jpg"
 );
 
    Person(
/*DOB*/
//month
12,
//day
 7,
 //year
 01,
 //Bio text (use [age] in place of the person's age)
 "Austin Aldrich is a [age] year old junior at CEC. This is his second year in FTC. He was born in Wisconsin, and moved to Louisville when he was nine. He is working on the sweeper/forklift. He likes video games and hanging out with friends. ",
 //Name
 "Austin",
 //Image
 "img/Austin.jpg"
 );
 
     Person(
/*DOB*/
//month
12,
//day
 7,
 //year
 01,
 //Bio text (use [age] in place of the person's age)
 "Hunter Lewis is a [age] year old sophmore at CEC. He is on his second year of FTC. He has done FLL for three years and was an honorary member of the FTC team in 8th grade. He is a programmer and builder on the team. He likes to swim and dreams of working at SpaceX.  ",
 //Name
 "Hunter",
 //Image
 "img/Hunter.jpg"
 );
 
 
 
