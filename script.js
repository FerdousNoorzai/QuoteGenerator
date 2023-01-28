const quotes = [
    {
      "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "author": "Thomas Edison"
    },
    {
      "text": "You can observe a lot just by watching.",
      "author": "Yogi Berra"
    },
    {
      "text": "A house divided against itself cannot stand.",
      "author": "Abraham Lincoln"
    },
    {
      "text": "Ideas are the beginning points of all fortunes.",
      "author": "Napoleon Hill"
    },
    {
      "text": "Everything in life is luck.",
      "author": "Donald Trump"
    },
    {
      "text": "Doing nothing is better than being busy doing nothing.",
      "author": "Lao Tzu"
    },
    {
      "text": "Trust yourself. You know more than you think you do.",
      "author": "Benjamin Spock"
    },
    {
      "text": "Study the past, if you would divine the future.",
      "author": "Confucius"
    },
    {
      "text": "The day is already blessed, find peace within it.",
      "author": null
    },
    {
      "text": "From error to error one discovers the entire truth.",
      "author": "Sigmund Freud"
    },
    {
      "text": "Well done is better than well said.",
      "author": "Benjamin Franklin"
    },
    {
      "text": "Bite off more than you can chew, then chew it.",
      "author": "Ella Williams"
    },
    {
      "text": "Work out your own salvation. Do not depend on others.",
      "author": "Buddha"
    },
    {
      "text": "One today is worth two tomorrows.",
      "author": "Benjamin Franklin"
    },
    {
      "text": "Once you choose hope, anythings possible.",
      "author": "Christopher Reeve"
    },
    {
      "text": "God always takes the simplest way.",
      "author": "Albert Einstein"
    },
    {
      "text": "One fails forward toward success.",
      "author": "Charles Kettering"
    },
    {
      "text": "From small beginnings come great things.",
      "author": null
    },
    {
      "text": "Learning is a treasure that will follow its owner everywhere",
      "author": "Chinese proverb"
    },
    {
      "text": "Be as you wish to seem.",
      "author": "Socrates"
    },
    {
      "text": "The world is always in movement.",
      "author": "V. Naipaul"
    },
    {
      "text": "Never mistake activity for achievement.",
      "author": "John Wooden"
    },
    {
      "text": "What worries you masters you.",
      "author": "Haddon Robinson"
    },
    {
      "text": "One faces the future with ones past.",
      "author": "Pearl Buck"
    },
    {
      "text": "Goals are the fuel in the furnace of achievement.",
      "author": "Brian Tracy"
    },
    {
      "text": "Who sows virtue reaps honour.",
      "author": "Leonardo da Vinci"
    },
    {
      "text": "Be kind whenever possible. It is always possible.",
      "author": "Dalai Lama"
    },
    {
      "text": "Talk doesn't cook rice.",
      "author": "Chinese proverb"
    },
    {
      "text": "He is able who thinks he is able.",
      "author": "Buddha"
    },
    {
      "text": "A goal without a plan is just a wish.",
      "author": "Larry Elder"
    },
    {
      "text": "To succeed, we must first believe that we can.",
      "author": "Michael Korda"
    },
    {
      "text": "Learn from yesterday, live for today, hope for tomorrow.",
      "author": "Albert Einstein"
    },
    {
      "text": "A weed is no more than a flower in disguise.",
      "author": "James Lowell"
    },
    {
      "text": "Do, or do not. There is no try.",
      "author": "Yoda"
    },
    {
      "text": "All serious daring starts from within.",
      "author": "Harriet Beecher Stowe"
    },
    {
      "text": "The best teacher is experience learned from failures.",
      "author": "Byron Pulsifer"
    },
    {
      "text": "Think how hard physics would be if particles could think.",
      "author": "Murray Gell-Mann"
    },
    {
      "text": "Love is the flower you've got to let grow.",
      "author": "John Lennon"
    },
    {
      "text": "Don't wait. The time will never be just right.",
      "author": "Napoleon Hill"
    },
    {
      "text": "Time is the wisest counsellor of all.",
      "author": "Pericles"
    },
    {
      "text": "You give before you get.",
      "author": "Napoleon Hill"
    },
    {
      "text": "Wisdom begins in wonder.",
      "author": "Socrates"
    },
    {
      "text": "Without courage, wisdom bears no fruit.",
      "author": "Baltasar Gracian"
    },
    {
      "text": "Change in all things is sweet.",
      "author": "Aristotle"
    },
    {
      "text": "What you fear is that which requires action to overcome.",
      "author": "Byron Pulsifer"
    },
    {
      "text": "When performance exceeds ambition, the overlap is called success.",
      "author": "Cullen Hightower"
    },
    {
      "text": "When deeds speak, words are nothing.",
      "author": "African proverb"
    },
    {
      "text": "Real magic in relationships means an absence of judgement of others.",
      "author": "Wayne Dyer"
    },
    {
      "text": "I never think of the future. It comes soon enough.",
      "author": "Albert Einstein"
    },
    {
      "text": "Difficulties increase the nearer we get to the goal.",
      "author": "Johann Wolfgang von Goethe"
    },
    {
      "text": "Fate is in your hands and no one elses",
      "author": "Byron Pulsifer"
    },
    {
        "text": "Be the chief but never the lord.",
        "author": "Lao Tzu"
      },
      {
        "text": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg"
      },
      {
        "text": "Well begun is half done.",
        "author": "Aristotle"
      },
      {
        "text": "Life is a learning experience, only if you learn.",
        "author": "Yogi Berra"
      },
      {
        "text": "Self-complacency is fatal to progress.",
        "author": "Margaret Sangster"
      },
      {
        "text": "Peace comes from within. Do not seek it without.",
        "author": "Buddha"
      },
      {
        "text": "What you give is what you get.",
        "author": "Byron Pulsifer"
      },
      {
        "text": "We can only learn to love by loving.",
        "author": "Iris Murdoch"
      },
      {
        "text": "Life is change. Growth is optional. Choose wisely.",
        "author": "Karen Clark"
      },
      {
        "text": "You'll see it when you believe it.",
        "author": "Wayne Dyer"
      },
      {
        "text": "Today is the tomorrow we worried about yesterday.",
        "author": "William Shakespeare"
      },
      {
        "text": "It's easier to see the mistakes on someone else's paper.",
        "author": "Lao Tzu"
      },
      {
        "text": "Every man dies. Not every man really lives.",
        "author": "William Shakespeare"
      },
      {
        "text": "To lead people walk behind them.",
        "author": "Lao Tzu"
      },
      {
        "text": "Having nothing, nothing can he lose.",
        "author": "William Shakespeare"
      },
      {
        "text": "Trouble is only opportunity in work clothes.",
        "author": "Henry J. Kaiser"
      },
      {
        "text": "A rolling stone gathers no moss.",
        "author": "Publilius Syrus"
      }
];

let newQuote = document.getElementById('newQuote');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

newQuote.addEventListener('click', function(){
    let rand = Math.floor(Math.random()*45);
    let data = Object.values(quotes[rand]);
    quote.innerHTML= data[0];
    author.innerHTML= data[1];

})