var toggle = 0;

var polish = {
	courses:
		{
			 course: ["Cisco Routing and Switching", "Cisco IT Essentials", "Prawo jazdy kategorii B"],
			 education: ["09/2010 - 05/2014 Zespół Szkół Licealnych i Technicznych nr1"],
			 expierience: ["05/2014 - 06/2014: ALSTOR T.Szukała i Wspólnicy Sp.j", "09/2015 - obecnie: Testronic Sp. z o.o."],
				expierienceTestronic:["Praca na platformie Jira","Praca na platformie Testrail","Praca na platformie Crittercism","Praca na platformie Fabric.io","Praca z pomocą platformy Confluence","Funkcjonalne testowanie gier mobilnych"],
				expierienceAlstor:["Pomoc w utrzymaniu sprzętu komputerowego","Naprawa sprzętu komputerowego","Przygotowywanie sprzętu i sieci LAN na turniej gry Call of Duty"],
			 language: ["Polski - ojczysty","Angielski - zaawansowany (B2-C1)"],
			 intrests: ["Tworzenie niepotrzebnych stron WWW.","Wszystko czym zajmuje się Elon Musk.","Wywracanie się na deskorolce."],
		},
};
var english = {
	courses: 
		{ 
			course: ["Cisco Routing and Switching", "Cisco IT Essentials", "Driving License"],
			education: ["09/2010 - 05/2014 Zespół Szkół Licealnych i Technicznych nr1"],
			expierience: ["05/2014 - 06/2014: ALSTOR T.Szukała i Wspólnicy Sp.j", "09/2015 - at present: Testronic Sp. z o.o."],
				expierienceTestronic:["Working with JIRA ","Working with Testrail","Working with Crittercism","Working with Fabric.io","Working with help of Confluence","Black box testing of mobile games"],
				expierienceAlstor:["Helping with daily maintenance of electronic equipment", "Repairs of PCs and other office equipment", "Setting-up of equipment and LAN network for Call Of Duty Tournament"],
			language: ["Polish - native","English - advanced (B2-C1)"],
			intrests: ["Making websites without particular purpose.","Everything Elon Musk does.","Falling off skateboard."],
		},
};
function cvLang(lang)
{ 
	
	if (lang == "Pol")
	{
		fill("birth", "Data Urodzenia");
		fill("address", "Adres");
		fill("phone", "Telefon");
		fill("courses", "Kursy, Szkolenia i Certyfikaty");
		fill("education","Edukacja");
		fill("experience", "Doświadczenie Zawodowe");
		fill("lang", "Języki Obce");
		fill("intrests", "Zainteresowania");
		
		for (i=0; i<polish.courses.course.length; i++)
		{
			fill("course_"+i, polish.courses.course[i]);
		};
		for (i=0; i<polish.courses.education.length; i++)
		{
			fill("educ_"+i, polish.courses.education[i]);
		};
		for (i=0; i<polish.courses.expierience.length; i++)
		{
			fill("exp_"+i, polish.courses.expierience[i]);
		};
		for (i=0; i<polish.courses.language.length; i++)
		{
			fill("language_"+i, polish.courses.language[i]);
		};
		for (i=0; i<polish.courses.expierienceTestronic.length; i++)
		{
			fill("exp_tesro_"+i, polish.courses.expierienceTestronic[i]);
		};
		for (i=0; i<polish.courses.expierienceAlstor.length; i++)
		{
			fill("exp_alstor_"+i, polish.courses.expierienceAlstor[i]);
		};
		for (i=0; i<polish.courses.intrests.length; i++)
		{
			fill("intrests_"+i, polish.courses.intrests[i]);
		};
		document.getElementById("polish-button").disabled = 1;
		document.getElementById("polish-button").style.backgroundColor = "#f2f4f7";
		document.getElementById("polish-button").style.cursor = "initial"
		document.getElementById("polish-button").style.boxShadow = "none";
		document.getElementById("english-button").disabled = 0;
		document.getElementById("english-button").style.backgroundColor = "white";
		document.getElementById("english-button").style.boxShadow = "0px 0px 15px 2px rgba(0,0,0,0.56)";
		document.getElementById("english-button").style.cursor = "pointer"
		
			
	}
	if (lang == "Eng")
	{ 

		fill("birth", "Birth Date");
		fill("address", "Address");
		fill("phone", "Phone Number");
		fill("courses", "Courses and Certificates");
		fill("education","Education");
		fill("experience", "Professional Experience");
		fill("lang", "Languages");
		fill("intrests", "Interests")
		for (i=0; i<english.courses.course.length; i++)
		{
			fill("course_"+i, english.courses.course[i]);
		};
		for (i=0; i<english.courses.education.length; i++)
		{
			fill("educ_"+i, english.courses.education[i]);
		};
		for (i=0; i<english.courses.expierience.length; i++)
		{
			fill("exp_"+i, english.courses.expierience[i]);
		};
		for (i=0; i<english.courses.language.length; i++)
		{
			fill("language_"+i, english.courses.language[i]);
		};
		for (i=0; i<english.courses.expierienceTestronic.length; i++)
		{
			fill("exp_tesro_"+i, english.courses.expierienceTestronic[i]);
		};
		for (i=0; i<english.courses.expierienceAlstor.length; i++)
		{
			fill("exp_alstor_"+i, english.courses.expierienceAlstor[i]);
		};
		for (i=0; i<english.courses.intrests.length; i++)
		{
			fill("intrests_"+i, english.courses.intrests[i]);
		};
		document.getElementById("polish-button").disabled = 0;
		document.getElementById("polish-button").style.backgroundColor = "white";
		document.getElementById("polish-button").style.boxShadow = "0px 0px 15px 2px rgba(0,0,0,0.56)";
		document.getElementById("polish-button").style.cursor = "pointer"
		document.getElementById("english-button").disabled = 1;
		document.getElementById("english-button").style.backgroundColor = "#f2f4f7";
		document.getElementById("english-button").style.boxShadow = "none";
		document.getElementById("english-button").style.cursor = "initial"
		
	}
	function fill(id, inner)
	{
	document.getElementById(id).innerHTML = inner;
	};
};


function fadeIn()
{ 
	var x = document.getElementsByClassName("box");
	var i;
	for (i = 0; i< x.length; i++)
		{
			x[i].style.opacity ="1";
			
			
		}
};

function fadeOut()
{ 
	var x = document.getElementsByClassName("box");
	var i;
	for (i = 0; i< x.length; i++)
		{
			x[i].style.opacity ="0";
			
			
		}
};

function showMore()
{
	if (toggle == 0)
	{
		var x = document.getElementsByClassName("expand");
		for(i=0; i<x.length; i++)
			{
				x[i].style.height = "200px";
			}
		var y = document.getElementById("experience-box");
		y.style.height="550px";
		document.getElementById("arrow").style.transform = "rotate(180deg)";
		toggle++;
	} 
	else 
	{
		var x = document.getElementsByClassName("expand");
		for(i=0; i<x.length; i++)
		{
			x[i].style.height = "0px";
		}
	
		var y = document.getElementById("experience-box");
		y.style.height="150px";
		document.getElementById("arrow").style.transform = "rotate(0deg)";
		toggle=0;
	}
		
};

