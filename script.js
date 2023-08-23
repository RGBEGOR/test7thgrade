const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

class Quiz
{
	constructor(type, questions, results)
	{

		this.type = type;


		this.questions = questions;

		this.results = results;

		this.score = 0;

		this.result = 0;

		this.current = 0;
	}

	Click(index)
	{
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;


		if(value >= 1)
		{
			correct = index;
		}
		else
		{

			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}


	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}


	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 


class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}


class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}


class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}


	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}


const results = 
[
	new Result("Вам многому нужно научиться", 0),
	new Result("Вы уже неплохо разбираетесь", 8),
	new Result("Ваш уровень выше среднего", 10),
	new Result("Поздравляем Вы успешно прошли вступительные тесты", 13)
];


const questions = 
[
	new Question(" Последний царь из рода Ахеменидов – это ", 
	[
		new Answer('Камбиз II  ', 0),
		new Answer("Дарий I ", 0),
		new Answer("Ксеркс ", 0),
		new Answer("Дарий III", 1)
	]),
	new Question("Римской республикой управляли консулы, в количестве … человек ", 
	[
		new Answer('в количестве 2', 1),
		new Answer("в количестве 3", 0),
		new Answer("в количестве 4", 0),
		new Answer("в количестве 5", 0)
	]),
	new Question("Самые крупные греческие города-государства? ", 
	[
		new Answer(' Афина и Милет ', 0),
		new Answer("Спарта и Троя ", 0),
		new Answer("ПИтака и Троя ", 0),
		new Answer("Афина и Спарта", 1)
	]),
	new Question("Согласно легенде этот город был основан братьями Ромул и Рем. ", 
	[
		new Answer('Константинополь ', 0),
		new Answer("Рим", 1),
		new Answer("Карфаген", 0),
		new Answer("Афина", 0)
	]),
	new Question("Что означает слово «Италия» в переводе с греческого? ", 
	[
		new Answer(' «страна телят» ', 1),
		new Answer("«страна непобедимых» ", 0),
		new Answer("«страна тысяча городов» ", 0),
		new Answer("«страна высоких вершин»", 0)

	]),
	new Question(" Что означает слово «сенат» по-латински?  ", 
	[
		new Answer('«место обсуждения» ', 0),
		new Answer("«совет старейшин»", 1),
		new Answer("«народное дело» ", 0),
		new Answer("«народная власть»", 0)
	]),
	new Question("При каком правителе Кушанское государство превратилось в огромную империю, занимавшую территории от Индии до Афганистана и южного Узбекистана? ", 
	[
		new Answer('Кудзула Кадфиз', 0),
		new Answer("Вима Кадфиз ", 0),
		new Answer("Канишка ", 1),
		new Answer("Хувишка", 0)
	]),
	new Question("При каких императорах начинается кризис Римской империи? ", 
	[
		new Answer('Траян и Константин', 0),
		new Answer("Нерон и Калигула ", 1),
		new Answer("Флавий и Аврелиан", 0),
		new Answer("Калигула и Траян", 0)
	]),
	new Question("Под каким названием вошли в историю войны между Карфагеном и Римом? ", 
	[
		new Answer('Пуническими', 1),
		new Answer("Средиземноморскими", 0),
		new Answer("Итальянскими", 0),
		new Answer("Сицилийскими", 0)
	]),
	new Question("На каком полуострове находится страна Италия?", 
	[
		new Answer('Балканском', 0),
		new Answer("Пиренейском", 0),
		new Answer("Апеннинском", 1),
		new Answer("Малой Азия", 0)
	]),
	new Question("Куду сбежали Антоний и Клеопатра от Октавиана?", 
	[
		new Answer('в Константинополь (Византия) ', 0),
		new Answer("в Карфаген ", 0),
		new Answer("в Сицилию ", 0),
		new Answer("в Александрию (Египет)", 1)
	]),
	new Question("Кто является основателем Римской империи? ", 
	[
		new Answer('Пилат ', 0),
		new Answer("О. Август ", 1),
		new Answer("Траян", 0),
		new Answer("Константин", 0)
	]),
	new Question("Кто возглавил заговору против Цезаря? ", 
	[
		new Answer('Октавиан ', 0),
		new Answer("Антоний ", 0),
		new Answer("Брут", 1),
		new Answer("Помпей", 0)
	]),
	new Question("Кому перешла власть в Греко-Бактрии после смерти Диодота? ", 
	[
		new Answer(' к Евтидему ', 1),
		new Answer("к Деметрию ", 0),
		new Answer("к Митридату ", 0),
		new Answer("к Оксиарту", 0)
	]),
	new Question("Кого римляне называли варварами? ", 
	[
		new Answer('все другие народы, язык которых для них непонятен ', 1),
		new Answer("народы, стоящие на более низкой ступени культурного развития ", 0),
		new Answer("народов, которых мужчины носить бороду ", 0),
		new Answer("народы, которые живут на севере и на востоке от Греции", 0)
	]),

	
];


const quiz = new Quiz(1, questions, results);

Update();


function Update()
{

	if(quiz.current < quiz.questions.length) 
	{

		headElem.innerHTML = quiz.questions[quiz.current].text;


		buttonsElem.innerHTML = "";


		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		

		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		Init();
	}
	else
	{

		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Ваши очки: " + quiz.score;
	}
}

function Init()
{

	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{

		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{

	let correct = quiz.Click(index);


	let btns = document.getElementsByClassName("button");


	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{

		btns[index].className = "button button_correct";
	}


	setTimeout(Update, 1000);
}