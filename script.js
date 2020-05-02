var toggle = 0;

var polish = {
	courses:
		{
			 course: ["Cisco Routing and Switching", "Cisco IT Essentials", "Prawo jazdy kategorii B"],
			 education: ["09/2010 - 05/2014 Zespół Szkół Licealnych i Technicznych nr1"],
			 expierience: ["05/2014 - 06/2014: ALSTOR T.Szukała i Wspólnicy Sp.j", "09/2015 - 10/2017: Testronic Sp. z o.o.","12/2017 - 12/2019: Ericsson Sp. z o.o."],
				expierienceTestronic:["Praca na platformie Jira","Praca na platformie Testrail","Praca na platformie Crittercism","Praca na platformie Fabric.io","Praca z pomocą platformy Confluence","Funkcjonalne testowanie gier i aplikacji mobilnych"],
				expierienceAlstor:["Pomoc w utrzymaniu sprzętu komputerowego","Naprawa sprzętu komputerowego","Przygotowywanie sprzętu komputerowego i sieci LAN"],
				expierienceEricsson:[
					"Testy oprogramowania dla kontrolerów sieci komórkowej",
					"Wewnętrzne narzędzia do kontroli środowiska oraz testów na bazie Javy",
					"Continuous integration",
					"Jira",
					"Confluence",
					"Praca w systemie Agile",
					"Git",
					"Linux",
					"Jenkins"
					],
			 language: ["Polski - ojczysty","Angielski - zaawansowany (B2-C1)"],
			 intrests: ["Formuła 1","Motoryzacja","Kolarstwo"],
		},
};
var english = {
	courses: 
		{ 
			course: ["Cisco Routing and Switching", "Cisco IT Essentials", "Driving License"],
			education: ["09/2010 - 05/2014 Zespół Szkół Licealnych i Technicznych nr1"],
			expierience: ["05/2014 - 06/2014: ALSTOR T.Szukała i Wspólnicy Sp.j", "09/2015 - 10/2017: Testronic Sp. z o.o.","12/2017 - 12/2019: Ericsson Sp. z o.o."],
				expierienceTestronic:["Working with JIRA ","Working with Testrail","Working with Crittercism","Working with Fabric.io","Working with help of Confluence","Black box testing of mobile games and applications"],
				expierienceAlstor:["Helping with daily maintenance of electronic equipment", "Repairs of PCs and other office equipment", "Setting-up of PC equipment and LAN network"],
				expierienceEricsson:[
					"Testing of software for radio network controllers",
					"Internal tools for controlling tests and test environment based on Java",
					"Continuous integration",
					"Jira",
					"Confluence",
					"Working in Agile environment",
					"Git",
					"Linux",
					"Jenkins"
					],
			language: ["Polish - native","English - advanced (B2-C1)"],
			intrests: ["Formula 1","Motorsports","Cycling"],
		},
};

	html = 3;
	css = 3;
	javascript = 2;
	git = 3;
	java = 2;



const maxSkills = 5;

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
		for (i=0; i<polish.courses.expierienceEricsson.length; i++)
		{
			fill("exp_eric_"+i, polish.courses.expierienceEricsson[i]);
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
		document.getElementById("download-text").innerHTML = "Wersja PDF "
		document.getElementById("href-link").href = "Radosław Borowicz CV.pdf"
			
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
		for (i=0; i<english.courses.expierienceEricsson.length; i++)
		{
			fill("exp_eric_"+i, english.courses.expierienceEricsson[i]);
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
		document.getElementById("download-text").innerHTML = "PDF Version "
		document.getElementById("href-link").href = "Radosław-Borowicz-CV.pdf"
		
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
		var eric = document.getElementById("eric");
		var tesro = document.getElementById("tesro");
		var alstor = document.getElementById("alstor");
		eric.style.height="300px";
		tesro.style.height="200px";
		alstor.style.height="150px";
		var y = document.getElementById("experience-box");
		y.style.height="835px";
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
		y.style.height="183px";
		document.getElementById("arrow").style.transform = "rotate(0deg)";
		toggle=0;
	}

};

function loadSkills(){
	function countSkills(skillType, skillTypeID){
		let skillElement = document.getElementById(`${skillTypeID}`);
	for (i=0; i<skillType; i++)
	{
	skillElement.innerHTML += "<span class='dot'></span>";
	};
	for (i=0; i<(maxSkills-skillType);i++)
	{
	skillElement.innerHTML += "<span class='dot gray'></span>";	
	}

	};
	countSkills(html,"html");
	countSkills(css,"css");
	countSkills(javascript,"javascript");
};

