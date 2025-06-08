const quizData = [
  {
    "question": "Which band turned surf culture into pop culture with hits like 'Surfin\u2019 USA'?",
    "options": [
      "The Beatles",
      "The Rolling Stones",
      "The Beach Boys",
      "The Monkees"
    ],
    "answer": "The Beach Boys",
    "description": "In the 1960s, The Beach Boys helped define the sound of summer with surf-themed hits."
  },
  {
    "question": "Which song was written in just 10 minutes and became one of the best-selling singles ever?",
    "options": [
      "In the Summertime",
      "Summer Nights",
      "Summertime Blues",
      "Soak Up the Sun"
    ],
    "answer": "In the Summertime",
    "description": "Mungo Jerry\u2019s 'In the Summertime' (1970) became a timeless hit \u2014 written in only 10 minutes."
  },
  {
    "question": "Which 1969 hit was supposed to be in Woodstock: The Movie but still became a summer classic?",
    "options": [
      "Hot Fun in the Summertime",
      "Everyday People",
      "Let the Sunshine In",
      "Summer Breeze"
    ],
    "answer": "Hot Fun in the Summertime",
    "description": "Sly and the Family Stone\u2019s laid-back anthem was a surprise summer hit."
  },
  {
    "question": "Which artist built a brand around beachy escapism with songs like 'Margaritaville'?",
    "options": [
      "Bob Marley",
      "Jack Johnson",
      "Jimmy Buffett",
      "Sheryl Crow"
    ],
    "answer": "Jimmy Buffett",
    "description": "Buffett turned summer leisure into an empire with island-themed hits."
  },
  {
    "question": "Which classic aria from 1935 has been covered by Janis Joplin, Ella Fitzgerald, and Sublime?",
    "options": [
      "Summertime",
      "Endless Summer Nights",
      "Here Comes the Sun",
      "Summer Wind"
    ],
    "answer": "Summertime",
    "description": "Originally from Porgy and Bess, 'Summertime' has become a summer standard across genres."
  },
  {
    "question": "Which Bryan Adams song is more about passion than the actual year?",
    "options": [
      "Heaven",
      "Run to You",
      "Summer of \u201969",
      "Straight from the Heart"
    ],
    "answer": "Summer of \u201969",
    "description": "Despite the title, 'Summer of \u201969' is a metaphor for youth and passion, not the literal year."
  },
  {
    "question": "Which 1991 rap hit by DJ Jazzy Jeff & The Fresh Prince became a summer staple?",
    "options": [
      "Summertime",
      "Miami",
      "Parents Just Don\u2019t Understand",
      "Gettin\u2019 Jiggy Wit It"
    ],
    "answer": "Summertime",
    "description": "'Summertime' captured the laid-back feeling of the season with smooth beats and nostalgia."
  },
  {
    "question": "Which genre, led by Bob Marley, is a go-to for summer listening?",
    "options": [
      "Rock",
      "Jazz",
      "Reggae",
      "Country"
    ],
    "answer": "Reggae",
    "description": "Marley\u2019s easy rhythms and sunny themes made reggae a summer favorite."
  },
  {
    "question": "Which pop hit was written as a West Coast answer to 'Empire State of Mind'?",
    "options": [
      "California Gurls",
      "California Love",
      "Summer Girl",
      "Good 4 U"
    ],
    "answer": "California Gurls",
    "description": "Katy Perry\u2019s 2010 anthem brought beach-party vibes to pop radio."
  },
  {
    "question": "Which Don Henley song uses summer as a metaphor for fading youth?",
    "options": [
      "The End of the Innocence",
      "The Boys of Summer",
      "New York Minute",
      "Dirty Laundry"
    ],
    "answer": "The Boys of Summer",
    "description": "'The Boys of Summer' (1984) is a nostalgic reflection on time passing."
  },
  {
    "question": "Which Alice Cooper song became an end-of-school-year anthem?",
    "options": [
      "School\u2019s Out",
      "No More Mr. Nice Guy",
      "I\u2019m Eighteen",
      "Poison"
    ],
    "answer": "School\u2019s Out",
    "description": "'School\u2019s Out' was released just in time for summer break in 1972."
  },
  {
    "question": "Which moody Bananarama song gained U.S. fame after appearing in 'The Karate Kid'?",
    "options": [
      "Venus",
      "Cruel Summer",
      "I Heard a Rumour",
      "Robert De Niro\u2019s Waiting"
    ],
    "answer": "Cruel Summer",
    "description": "'Cruel Summer' was ironically released in early fall in the U.K."
  },
  {
    "question": "Which Katrina and the Waves hit was intended to be more moody than upbeat?",
    "options": [
      "Walking on Sunshine",
      "Sun Street",
      "Love Shine a Light",
      "Do You Want Crying"
    ],
    "answer": "Walking on Sunshine",
    "description": "Though full of joy, 'Walking on Sunshine' was almost a different kind of song."
  },
  {
    "question": "Which 2002 song marked Sheryl Crow\u2019s sunny comeback?",
    "options": [
      "Soak Up the Sun",
      "If It Makes You Happy",
      "All I Wanna Do",
      "Everyday Is a Winding Road"
    ],
    "answer": "Soak Up the Sun",
    "description": "This upbeat track brought Sheryl Crow back into summer playlists."
  },
  {
    "question": "Which 2012 Lana Del Rey hit combines summer with heartbreak?",
    "options": [
      "Summertime Sadness",
      "Blue Jeans",
      "Born to Die",
      "Ride"
    ],
    "answer": "Summertime Sadness",
    "description": "Lana Del Rey turned warm weather into melancholy in this haunting hit."
  },
  {
    "question": "Which punk band wrote a beach tribute to a real NYC location?",
    "options": [
      "Sex Pistols",
      "The Ramones",
      "Green Day",
      "The Clash"
    ],
    "answer": "The Ramones",
    "description": "'Rockaway Beach' was the Ramones\u2019 ode to a surf spot in Queens \u2014 and their biggest U.S. hit."
  },
  {
    "question": "Which Lindsey Buckingham song became a summer road trip favorite thanks to a movie?",
    "options": [
      "Holiday Road",
      "Trouble",
      "Go Insane",
      "Big Love"
    ],
    "answer": "Holiday Road",
    "description": "Though not a hit at first, 'Holiday Road' became iconic thanks to National Lampoon\u2019s Vacation."
  },
  {
    "question": "Which EDM song by Calvin Harris became a global summer anthem?",
    "options": [
      "Summer",
      "Feels",
      "This Is What You Came For",
      "One Kiss"
    ],
    "answer": "Summer",
    "description": "'Summer' (2014) dominated global charts with its danceable hook and seasonal title."
  },
  {
    "question": "What was unique about the creation of Richard Marx\u2019s 'Endless Summer Nights'?",
    "options": [
      "It was written on a beach",
      "It was based on a true story",
      "It was written in winter",
      "It was improvised in concert"
    ],
    "answer": "It was written in winter",
    "description": "Richard Marx wrote the song during a cold Chicago winter \u2014 dreaming of a romantic summer memory."
  }
];