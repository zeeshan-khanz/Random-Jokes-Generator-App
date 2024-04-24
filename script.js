const jokeText = document.getElementById('joke');
const newJokeButton = document.getElementById('newJoke');

const jokes = [
    'Why did the chicken cross the road? To get to the other side!',
    'Why was the math book sad? Because it had too many problems!',
    'What do you call a fake noodle? An impasta!',
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    'What do you get when you cross a snowman and a vampire? Frostbite!',
    'Why do Java developers wear glasses? Because they can\'t C#.',
    'Why did the programmer quit his job? Because he didn\'t get arrays.',
    'What do you call a programmer who never makes mistakes? An oxymoron.',
    'Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.',
    'What do you call a programmer who sleeps all day? A keyboard.',
    'Why did the computer go to the doctor? It had a virus.',
    'What do you call a programmer who drinks a lot of coffee? A keypad.',
    'Why did the programmer go to the beach? To get some sand-oxide.',
    'What do you call a programmer who can fix any problem? A magician.',
    'Why did the programmer get kicked out of the supermarket? He tried to scan a watermelon with a barcode scanner.',
    'Why don\'t programmers like nature? Because it has too many bugs!',
    'Why did the computer go to art school? It wanted to learn how to draw a better box.',
    'What do you call a programmer who writes code that doesn\'t work? A failed experiment.',
    'Why did the programmer get a tattoo of a pointer? So they could point to themselves.',
    'What do you call a programmer who doesn\'t use comments? An optimist.',
    

    'Why did the chicken cross the road? To get to the other side!',
    'Why was the math book sad? Because it had too many problems!',
    'What do you call a fake noodle? An impasta!',
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    'What do you get when you cross a snowman and a vampire? Frostbite!',
    'Why did the senior programmer go back to school for programming?',
    'Why did the chicken cross the road? To get to the other side!',
    'Why was the math book sad? Because it had too many problems!',
    'What do you call a fake noodle? An impasta!',
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
];


let currentJoke = 0;

jokeText.textContent = jokes[currentJoke];

newJokeButton.addEventListener('click', () => {
    currentJoke = (currentJoke + 1) % jokes.length;
    jokeText.textContent = jokes[currentJoke];
});