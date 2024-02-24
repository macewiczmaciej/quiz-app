const questions = [
	{
		question: "Which player has won the most Ballon d'Or awards?",
		options: ['Lionel Messi', 'Cristiano Ronaldo', 'Zinedine Zidane', 'Michel Platini'],
		answer: 'Lionel Messi',
	},
	{
		question: 'Which country has won the most FIFA World Cup titles?',
		options: ['Brazil', 'Germany', 'Argentina', 'Italy'],
		answer: 'Brazil',
	},
	{
		question: 'Who is the all-time top scorer in the UEFA Champions League?',
		options: ['Lionel Messi', 'Cristiano Ronaldo', 'Raul', 'Robert Lewandowski'],
		answer: 'Cristiano Ronaldo',
	},
	{
		question: 'Which team has won the most English Premier League titles?',
		options: ['Manchester United', 'Liverpool', 'Chelsea', 'Arsenal'],
		answer: 'Manchester United',
	},
	{
		question: 'Which club has won the most UEFA Champions League titles?',
		options: ['Real Madrid', 'FC Barcelona', 'Bayern Munich', 'Liverpool'],
		answer: 'Real Madrid',
	},
	{
		question: 'Who is the all-time top scorer in the FIFA World Cup?',
		options: ['Pele', 'Miroslav Klose', 'Ronaldo (Brazil)', 'Lionel Messi'],
		answer: 'Miroslav Klose',
	},
	{
		question: 'Which country has won the most FIFA World Cup titles?',
		options: ['Brazil', 'Germany', 'Argentina', 'Italy'],
		answer: 'Brazil',
	},
	{
		question: 'Who is the only player to have won the UEFA Champions League with three different clubs?',
		options: ['Cristiano Ronaldo', 'Clarence Seedorf', 'Andrés Iniesta', 'Lionel Messi'],
		answer: 'Clarence Seedorf',
	},
	{
		question: 'Who is the youngest player to score a goal in the UEFA Champions League?',
		options: ['Ansu Fati', 'Kylian Mbappé', 'Raúl', 'Wayne Rooney'],
		answer: 'Ansu Fati',
	},
	{
		question: 'Which country hosted the first ever FIFA World Cup?',
		options: ['Uruguay', 'Brazil', 'Italy', 'France'],
		answer: 'Uruguay',
	},
	{
		question: "Who is the only goalkeeper to have won the FIFA Ballon d'Or?",
		options: ['Lev Yashin', 'Manuel Neuer', 'Gianluigi Buffon', 'Peter Schmeichel'],
		answer: 'Lev Yashin',
	},
	{
		question: 'Which player has the most assists in Premier League history?',
		options: ['Ryan Giggs', 'Cesc Fàbregas', 'Frank Lampard', 'Thierry Henry'],
		answer: 'Ryan Giggs',
	},
	{
		question: 'Who is the only player to have scored in three separate UEFA Champions League finals?',
		options: ['Lionel Messi', 'Cristiano Ronaldo', 'Zinedine Zidane', 'Franz Beckenbauer'],
		answer: 'Cristiano Ronaldo',
	},
]

const textScore = document.querySelector('.score')
const textRound = document.querySelector('.round')
const textQuestion = document.querySelector('.question-content')
const btnsAnswer = document.querySelectorAll('.btn-answer')
const textMessage = document.querySelector('.text-message')

let score = 0
let round = 1
let currentQuestion = 0

const displayQuestion = () => {
	btnsAnswer.forEach(btn => {
		btn.classList.remove('correct-answer')
		btn.classList.remove('wrong-answer')
	})
	textRound.textContent = 'Round: ' + round
	textScore.textContent = 'Score: ' + score

	const q = questions[currentQuestion]
	textQuestion.textContent = q.question

	for (let i = 0; i < q.options.length; i++) {
		btnsAnswer[i].textContent = q.options[i]
	}
}

const checkAnswer = e => {
	const a = questions[currentQuestion].answer
	const value = e.target.textContent
	if (value === a) {
		score += 1
		e.target.classList.add('correct-answer')
	} else {
		e.target.classList.add('wrong-answer')
	}
	round += 1
	currentQuestion += 1

	if (currentQuestion < questions.length) {
		setTimeout(displayQuestion, 500)
	} else {
		showResult()
	}
}

const showResult = () => {
	textQuestion.textContent = ''
	textRound.textContent = ''
	textScore.textContent = ''
	textMessage.textContent = ''
	btnsAnswer.forEach(e => {
		e.style.display = 'none'
	})
	textQuestion.textContent = `You scored ${score} out of ${questions.length}`
}
displayQuestion()

btnsAnswer.forEach(btn => btn.addEventListener('click', checkAnswer))
