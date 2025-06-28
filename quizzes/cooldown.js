const quizData = [
  {
    question: "How were popsicles first invented?",
    options: [
      "In a lab test of frozen fruit",
      "Accidentally by a child",
      "As a military survival snack",
      "By a famous chef"
    ],
    answer: "Accidentally by a child",
    description: "In 1905, 11-year-old Frank Epperson left a soda cup with a stirring stick outside overnight. It froze, creating the first popsicle!"
  },
  {
    question: "What do electric fans actually do?",
    options: [
      "Lower the room temperature",
      "Absorb heat",
      "Create a wind-chill effect",
      "Increase humidity"
    ],
    answer: "Create a wind-chill effect",
    description: "Fans don’t cool the air — they move it across your skin, helping sweat evaporate and making you feel cooler."
  },
  {
    question: "How does sweat help your body cool down?",
    options: [
      "It absorbs heat",
      "It reflects sunlight",
      "Evaporation removes heat",
      "It blocks UV rays"
    ],
    answer: "Evaporation removes heat",
    description: "Sweat evaporates from your skin, carrying heat away and keeping your body temperature down."
  },
  {
    question: "What are cooling centers used for during heat waves?",
    options: [
      "To store food",
      "To provide shade",
      "To cool down pets",
      "To give people a place with A/C"
    ],
    answer: "To give people a place with A/C",
    description: "Cities open cooling centers — like libraries or schools — so people without air conditioning can stay safe during extreme heat."
  },
  {
    question: "Can you get sunburned on a cloudy day?",
    options: ["No", "Yes", "Only in winter", "Only in high altitudes"],
    answer: "Yes",
    description: "Up to 80% of UV rays still get through clouds, so sunscreen is important even when it's not sunny."
  },
  {
    question: "What does SPF in sunscreen stand for?",
    options: ["Sun Protection Formula", "Sun Preventing Factor", "Sunburn Protection Frequency", "Sun Protection Factor"],
    answer: "Sun Protection Factor",
    description: "SPF is a measure of how well sunscreen protects against UVB rays, not how many minutes you’re safe in the sun."
  },
  {
    question: "What’s the difference between UVA and UVB rays?",
    options: [
      "UVA causes sunburn, UVB causes cancer",
      "UVA ages skin, UVB burns it",
      "UVA is harmless, UVB is harmful",
      "UVA affects eyes, UVB affects skin"
    ],
    answer: "UVA ages skin, UVB burns it",
    description: "UVA rays cause wrinkles and skin aging, while UVB rays are the main cause of sunburns."
  },
  {
    question: "What kind of clothing helps reflect heat on hot days?",
    options: ["Dark colors", "Light colors", "Synthetic fabrics", "Wool"],
    answer: "Light colors",
    description: "Light colors reflect sunlight, keeping you cooler, while dark clothing absorbs more heat."
  },
  {
    question: "How long have people used Aloe Vera for cooling relief?",
    options: ["About 100 years", "Since the 1800s", "Around 1,000 years", "Over 6,000 years"],
    answer: "Over 6,000 years",
    description: "Aloe Vera was used by ancient Egyptians, who called it the 'plant of immortality' — especially valued for sunburns."
  },
  {
    question: "What does sweat evaporation do to body temperature?",
    options: ["Raises it", "Lowers it", "Makes no difference", "Only affects heart rate"],
    answer: "Lowers it",
    description: "When sweat evaporates, it removes heat from your body — a key way to cool down in hot weather."
  },


  {
    question: "What quirky name did popsicles originally have?",
    options: ["Pop’s Treats", "Icy Lollies", "Epsicles", "Frost Wands"],
    answer: "Epsicles",
    description: "Frank Epperson, who invented the popsicle, first called them 'Epsicles' — a combo of his last name and the word 'icicle'. His kids later helped rename them 'Popsicles'."
  },
  {
    question: "Why do ceiling fans have a switch to reverse direction?",
    options: [
      "To change blade speed",
      "To reduce noise",
      "To adjust airflow for seasons",
      "To save electricity"
    ],
    answer: "To adjust airflow for seasons",
    description: "In summer, fans should spin counterclockwise to push cool air down. In winter, clockwise movement helps circulate warm air trapped near the ceiling."
  },
  {
    question: "How much can a person sweat in extreme heat?",
    options: ["Half a liter per day", "1.5 liters per hour", "2 gallons a day", "500 milliliters per hour"],
    answer: "1.5 liters per hour",
    description: "In hot conditions, the average person can sweat up to 1.5 liters per hour — that’s more than a large water bottle and a clear sign to stay hydrated."
  },
  {
    question: "What actually causes body odor?",
    options: ["The type of sweat", "Your body temperature", "Bacteria on your skin", "Sun exposure"],
    answer: "Bacteria on your skin",
    description: "Sweat itself is mostly odorless. Body odor happens when bacteria on your skin break down sweat and release smelly compounds."
  },
  {
    question: "Where was the hottest temperature ever recorded?",
    options: ["Sahara Desert", "Phoenix, AZ", "Death Valley, CA", "Kuwait City"],
    answer: "Death Valley, CA",
    description: "In 1913, Furnace Creek in Death Valley hit 134°F (56.7°C). It reached 130°F again in 2020 and 2021, making it one of the hottest places on Earth."
  },
  {
    question: "What did ancient Egyptians believe about Aloe Vera?",
    options: ["It cured headaches", "It repelled insects", "It had protective powers", "It grew only in sacred places"],
    answer: "It had protective powers",
    description: "Ancient Egyptians called aloe vera the 'plant of immortality' and used it in burial rituals, believing it offered healing and protection."
  },
  {
    question: "Why is hot pavement dangerous?",
    options: [
      "It absorbs water",
      "It creates glare",
      "It can burn skin quickly",
      "It causes concrete cracks"
    ],
    answer: "It can burn skin quickly",
    description: "Surfaces like asphalt can reach 140–160°F, even when the air is much cooler — hot enough to burn bare feet or paws in seconds."
  },
  {
    question: "How did ancient Persian wind catchers help cool homes?",
    options: [
      "By blocking the sun",
      "By funneling breezes inside",
      "By storing cold air",
      "By trapping moisture"
    ],
    answer: "By funneling breezes inside",
    description: "Tall wind catchers, or badgirs, captured desert breezes and directed them into homes, while pushing out warm air — a natural ventilation system."
  },
  {
    question: "How did arched foundations help cool Charleston homes?",
options: [
  "They let air circulate underneath",
  "They stored cool water",
  "They trapped sunlight",
  "They shaded the porch"
],
answer: "They let air circulate underneath",
description: "Arched foundations allowed air to flow beneath the home, cooling the floors above—part of a passive design strategy for Southern summers."
  },
  {
    question: "What are transom windows used for?",
    options: [
      "Letting in sunlight",
      "Improving curb appeal",
      "Releasing heat",
      "Blocking wind"
    ],
    answer: "Releasing heat",
    description: "Transom windows, placed above doors, helped hot air escape while encouraging air flow throughout a home — part of older passive cooling designs."
  },
  {
    question: "How does heat affect the brain?",
    options: [
      "It makes you think faster",
      "It enhances memory",
      "It reduces focus and decision-making",
      "It boosts creativity"
    ],
    answer: "It reduces focus and decision-making",
    description: "High temperatures divert blood flow away from the brain and toward the skin, impairing memory, concentration, and overall mental clarity."
  },
  {
    question: "How did Charleston’s 'sideways homes' help residents stay cool in the summer?",
    options: [
      "They used white roofs to reflect sunlight",
      "They had deep basements for cool air storage",
      "They were built with porches (piazzas) running along the side to catch breezes",
      "They had water channels running under the floors"
    ],
    answer: "They were built with porches (piazzas) running along the side to catch breezes",
    description: "Charleston homes were often built with the narrow side facing the street and long shaded porches—called piazzas—running along the length of the house. These porches caught sea breezes and offered shaded outdoor space in the Southern heat. Bonus: the design also reduced street frontage, which helped lower property taxes!"
  }

];
