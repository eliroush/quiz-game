const quizData = [
  {
    "question": "What happens during the summer solstice in the Northern Hemisphere?",
    "options": [
      "It's the shortest day of the year",
      "It's the longest day of the year",
      "The Earth is closest to the sun",
      "The moon is full for 24 hours"
    ],
    "answer": "It's the longest day of the year",
    "description": "The summer solstice occurs around June 20\u201321 and marks the longest day and shortest night of the year in the Northern Hemisphere."
  },
  {
    "question": "What phenomenon occurs in places like Alaska and Norway during the solstice?",
    "options": [
      "Midnight Eclipse",
      "24 Hours of Darkness",
      "Midnight Sun",
      "Sunspots"
    ],
    "answer": "Midnight Sun",
    "description": "During the solstice, parts of the Arctic Circle experience continuous daylight \u2014 a phenomenon known as the Midnight Sun."
  },
  {
    "question": "What does the word 'solstice' mean?",
    "options": [
      "Sun stops moving",
      "Sun rises twice",
      "Sun stands still",
      "Summer shines"
    ],
    "answer": "Sun stands still",
    "description": "Derived from Latin, 'solstice' means 'sun stands still,' referring to how the sun appears to pause in its path across the sky."
  },
  {
    "question": "Which famous structure was built to align with the solstice sun?",
    "options": [
      "The Eiffel Tower",
      "Stonehenge",
      "The Colosseum",
      "The Great Wall"
    ],
    "answer": "Stonehenge",
    "description": "Stonehenge in England was designed to align with the sunrise on the summer solstice."
  },
  {
    "question": "Which three stars form the Summer Triangle?",
    "options": [
      "Orion, Polaris, Sirius",
      "Vega, Deneb, Altair",
      "Betelgeuse, Antares, Arcturus",
      "Rigel, Capella, Spica"
    ],
    "answer": "Vega, Deneb, Altair",
    "description": "The Summer Triangle is a prominent star pattern visible during summer, made up of Vega, Deneb, and Altair."
  },
  {
    "question": "Which constellation is most visible in the southern summer sky?",
    "options": [
      "Orion",
      "Leo",
      "Scorpius",
      "Ursa Major"
    ],
    "answer": "Scorpius",
    "description": "Scorpius is one of the most prominent constellations seen in the southern sky during summer."
  },
  {
    "question": "When is Earth actually closest to the sun?",
    "options": [
      "During the summer solstice",
      "In December",
      "In January",
      "In July"
    ],
    "answer": "In January",
    "description": "Earth reaches its closest point to the sun (perihelion) in early January \u2014 not during summer."
  },
  {
    "question": "What meteor shower peaks every August?",
    "options": [
      "Leonids",
      "Perseids",
      "Geminids",
      "Draconids"
    ],
    "answer": "Perseids",
    "description": "The Perseids peak in mid-August and are one of the most reliable and spectacular meteor showers of the year."
  },
  {
    "question": "What are noctilucent clouds?",
    "options": [
      "Bright stars",
      "Northern lights",
      "Clouds that glow after sunset",
      "Dust clouds from meteors"
    ],
    "answer": "Clouds that glow after sunset",
    "description": "Noctilucent clouds are high-altitude clouds that glow blue or silver after sunset during summer months."
  },
  {
    "question": "Why do fireflies flash in summer?",
    "options": [
      "To stay cool",
      "To scare predators",
      "To communicate and attract mates",
      "To find food"
    ],
    "answer": "To communicate and attract mates",
    "description": "Fireflies use bioluminescence to flash signals that help them attract mates \u2014 especially visible on warm summer nights."
  },
  {
    "question": "Why isn't the longest day of the year also the hottest?",
    "options": [
        "The sun is weaker in June",
        "There’s a seasonal delay in warming",
        "Nights are longer in summer",
        "The Earth tilts away from the sun"
    ],
    "answer": "There’s a seasonal delay in warming",
    "description": "Even though the summer solstice has the longest daylight, land and oceans take time to warm up—this lag is called seasonal delay."
},
{
    "question": "Which Alaskan town experiences over two months of daylight during summer?",
    "options": ["Anchorage", "Juneau", "Fairbanks", "Utqiaġvik"],
    "answer": "Utqiaġvik",
    "description": "Utqiaġvik (formerly Barrow) is above the Arctic Circle and experiences continuous daylight for over two months each summer."
},
{
    "question": "What does the Summer Triangle signal to ancient skywatchers?",
    "options": [
        "The end of harvest season",
        "The arrival of colder nights",
        "The start of warm nights and stargazing",
        "A warning of meteor storms"
    ],
    "answer": "The start of warm nights and stargazing",
    "description": "The Summer Triangle’s rise in the east at dusk signaled the arrival of warmer nights and a new stargazing season."
},
{
    "question": "What planet is often called the 'Evening Star' or 'Morning Star'?",
    "options": ["Mars", "Jupiter", "Venus", "Saturn"],
    "answer": "Venus",
    "description": "Venus is the third-brightest object in the sky and is known as the 'Evening Star' or 'Morning Star' depending on when it appears."
},
{
    "question": "Why do fireflies glow?",
    "options": [
        "To scare predators",
        "To signal distress",
        "To find food",
        "To attract mates"
    ],
    "answer": "To attract mates",
    "description": "Fireflies use bioluminescent flashes to attract mates, and each species has its own flash pattern."
},
{
    "question": "What is the enzyme in fireflies that scientists use in research?",
    "options": ["Chlorophyll", "Hemoglobin", "Luciferase", "Biolightin"],
    "answer": "Luciferase",
    "description": "Luciferase is the enzyme that helps fireflies glow and is used in labs to study gene expression and cell activity."
},
{
    "question": "Why do some cultures build monuments like Stonehenge aligned with solstices?",
    "options": [
        "To scare off invaders",
        "To worship rain gods",
        "To track seasons and hold rituals",
        "To measure earthquakes"
    ],
    "answer": "To track seasons and hold rituals",
    "description": "Solstice alignments in structures like Stonehenge were used to mark seasons and host ceremonies tied to the sun’s power."
},
{
  question: "What causes the Strawberry Moon to get its name?",
  options: [
    "It appears red like a strawberry",
    "It marks strawberry harvest season",
    "It's only seen from strawberry farms",
    "It's shaped like a berry"
  ],
  answer: "It marks strawberry harvest season",
  description: "June’s full moon is called the Strawberry Moon in many Native American and European traditions, as it coincides with the strawberry harvest."
},
{
  question: "Why does the Milky Way appear especially bright in summer?",
  options: [
    "The Earth is closer to the galaxy's edge",
    "Fewer clouds form at night",
    "We face the galactic center",
    "It's brighter due to meteor showers"
  ],
  answer: "We face the galactic center",
  description: "In summer, we’re looking toward the dense galactic core in the constellations Sagittarius and Scorpius — giving us the brightest view of the Milky Way."
},
{
  question: "What helped sailors navigate long before GPS?",
  options: [
    "Cloud shapes",
    "Seaweed clusters",
    "The North Star",
    "Whale migration"
  ],
  answer: "The North Star",
  description: "The North Star (Polaris) stays nearly fixed in the night sky and has guided Northern Hemisphere travelers for centuries."
}

];