const quizData = [
  {
    question: "Which beach is considered the birthplace of modern surfing?",
    options: ["Venice Beach", "Bondi Beach", "Waikiki Beach", "Myrtle Beach"],
    answer: "Waikiki Beach",
    description: "Waikiki Beach in Hawaii is where Olympic swimmer Duke Kahanamoku popularized surfing."
  },
  {
    question: "Which beach is famous for bodybuilders and street performers?",
    options: ["Venice Beach, CA", "Myrtle Beach, SC", "Clearwater Beach, FL", "Tybee Island, GA"],
    answer: "Venice Beach, CA",
    description: "Venice Beach is known for its boardwalk culture, street art, and Muscle Beach."
  },
  {
    question: "What unusual building can you visit at Myrtle Beach?",
    options: [
      "A floating lighthouse",
      "A mirror maze shaped like a crab",
      "A science center shaped like an upside-down building",
      "A giant sandcastle museum"
    ],
    answer: "A science center shaped like an upside-down building",
    description: "WonderWorks is an upside-down science and amusement center on Myrtle Beach's boardwalk."
  },
  {
    question: "Which Georgia beach is known for driftwood sculptures on the sand?",
    options: ["Tybee Island", "St. Simons Island", "Jekyll Island", "Cumberland Island"],
    answer: "Jekyll Island",
    description: "Driftwood Beach on Jekyll Island is famous for its twisted, sun-bleached trees."
  },
  {
    question: "Where can you see wild horses on the beach and explore shipwreck sites?",
    options: ["Myrtle Beach, SC", "Outer Banks, NC", "Clearwater Beach, FL", "Virginia Beach, VA"],
    answer: "Outer Banks, NC",
    description: "The Outer Banks are known for roaming wild horses and maritime history."
  },
  {
    question: "What East Coast beach has a 3-mile-long boardwalk with art and bike paths?",
    options: ["Virginia Beach", "Daytona Beach", "Ocean City, MD", "South Beach, Miami"],
    answer: "Virginia Beach",
    description: "Virginia Beach’s boardwalk is one of the longest on the East Coast, with biking and summer concerts."
  },
  {
    question: "Which beach hosts the East Coast Surfing Championships every year?",
    options: ["Myrtle Beach, SC", "Outer Banks, NC", "Virginia Beach, VA", "South Beach, FL"],
    answer: "Virginia Beach, VA",
    description: "Virginia Beach has hosted ECSC since 1963 — it’s the longest-running surf competition in the U.S."
  },
  {
    question: "Which Florida beach is known for soft, white sand and often tops “best beach” lists?",
    options: ["Daytona Beach", "Clearwater Beach", "Cocoa Beach", "St. Augustine Beach"],
    answer: "Clearwater Beach",
    description: "Clearwater Beach is famous for its powdery white sand and calm Gulf waters."
  },
  {
    question: "What beach in Georgia is home to the state's oldest lighthouse?",
    options: ["Jekyll Island", "Tybee Island", "Cumberland Island", "Sapelo Island"],
    answer: "Tybee Island",
    description: "Tybee Island’s lighthouse dates back to 1736 and is the tallest in Georgia."
  },
  {
    question: "Where can you legally drive your car on the beach?",
    options: ["Clearwater Beach", "South Beach", "Daytona Beach", "Ocean City, MD"],
    answer: "Daytona Beach",
    description: "Daytona Beach is one of the few beaches in the U.S. where driving on sand is allowed."
  },
  {
    question: "Which beach is near the oldest European-established city in the U.S.?",
    options: ["St. Augustine Beach", "Virginia Beach", "Tybee Island", "Venice Beach"],
    answer: "St. Augustine Beach",
    description: "St. Augustine Beach is close to the historic city of St. Augustine, founded in 1565."
  },
  {
    question: "Which beach is famous for pink sand caused by crushed coral and tiny sea creatures?",
    options: ["Clearwater Beach", "Glass Beach", "Horseshoe Bay Beach", "Waikiki Beach"],
    answer: "Horseshoe Bay Beach",
    description: "Horseshoe Bay in Bermuda has pink-tinted sand from coral and microscopic organisms."
  },
  {
    question: "Where can you see sea turtles basking on volcanic black sand?",
    options: ["Glass Beach, CA", "Wharariki Beach, NZ", "Clearwater Beach, FL", "Punaluʻu Beach, HI"],
    answer: "Punaluʻu Beach, HI",
    description: "Punaluʻu Beach on the Big Island of Hawaii is famous for black sand and turtles."
  },
  {
    question: "Which beach has sand that squeaks when you walk on it?",
    options: ["Waikiki Beach", "Wharariki Beach", "Outer Banks", "Venice Beach"],
    answer: "Wharariki Beach",
    description: "Wharariki Beach in New Zealand features “singing sand” due to its silica content."
  },
  {
    question: "Which California beach is covered in colorful sea glass instead of sand?",
    options: ["Venice Beach", "Huntington Beach", "Glass Beach", "Santa Monica Beach"],
    answer: "Glass Beach",
    description: "Glass Beach in Fort Bragg has sea glass formed from decades of tossed trash, polished by the ocean."
  },
  {
    question: "At which beach is eating or drinking restricted during daytime hours in summer?",
    options: ["Ocean City, MD", "Clearwater Beach, FL", "Tybee Island, GA", "Daytona Beach, FL"],
    answer: "Ocean City, MD",
    description: "Ocean City bans eating/drinking on the sand from 10am–5:30pm unless in designated food zones."
  },
  {
    question: "Who is known as the 'Father of Modern Surfing'?",
    options: ["Kelly Slater", "Duke Kahanamoku", "Laird Hamilton", "Jack LaLanne"],
    answer: "Duke Kahanamoku",
    description: "Duke Kahanamoku popularized surfing in the early 1900s and won five Olympic medals in swimming."
  },
  {
    question: "What natural feature creates the pink sand at Bermuda’s Horseshoe Bay?",
    options: ["Crushed coral", "Volcanic ash", "Seashell dust", "Foraminifera"],
    answer: "Foraminifera",
    description: "Tiny sea creatures called Foraminifera have reddish shells that mix with white sand to give the beach its pink hue."
  },
  {
    question: "What is illegal to take home from Punaluʻu Beach in Hawaii?",
    options: ["Lava rocks", "Coral", "Black sand", "Seaweed"],
    answer: "Black sand",
    description: "Punaluʻu Beach is protected—removing its distinctive volcanic black sand is illegal."
  },
  {
    question: "What marine animal is frequently seen sunbathing on Punaluʻu Beach?",
    options: ["Sea otters", "Sea lions", "Hawaiian monk seals", "Green sea turtles"],
    answer: "Green sea turtles",
    description: "Hawaiian green sea turtles (honu) often rest on the beach, but they’re protected—look, don’t touch!"
  },
  {
    question: "Why do some call the Outer Banks the 'Graveyard of the Atlantic'?",
    options: ["Ghost sightings", "Buried pirate treasure", "Numerous shipwrecks", "Haunted lighthouses"],
    answer: "Numerous shipwrecks",
    description: "More than 3,000 shipwrecks have occurred off the Outer Banks due to storms, war, and shifting sands."
  },
  {
    question: "Which California beach has purple sand after storms?",
    options: ["Pfeiffer Beach", "Glass Beach", "Huntington Beach", "Laguna Beach"],
    answer: "Pfeiffer Beach",
    description: "Storms wash manganese garnet down from cliffs, creating streaks of purple sand at Pfeiffer Beach."
  },
  {
    question: "Which island has a beach with red sand caused by iron-rich lava rock?",
    options: ["Maui", "Oahu", "Lanai", "Molokai"],
    answer: "Maui",
    description: "Kaihalulu Beach on Maui glows red due to iron-rich volcanic rock surrounding the cove."
  },
  {
    question: "Which historic Georgia island limits development to just 35% to preserve nature?",
    options: ["St. Simons Island", "Tybee Island", "Jekyll Island", "Sapelo Island"],
    answer: "Jekyll Island",
    description: "To protect its ecosystems, Jekyll Island allows only 35% of the land to be developed."
  },
  {
    question: "Where can you find a real sunken pirate city beneath the sea?",
    options: ["Nassau", "Port Royal", "Tortuga", "Cozumel"],
    answer: "Port Royal",
    description: "Port Royal, Jamaica sank in 1692 after an earthquake and tsunami — much of it still lies underwater."
  },
  {
    question: "What iconic Myrtle Beach attraction closed in 2006 but lives on in local memories?",
    options: ["The Pavilion Amusement Park", "WonderWorks", "SkyWheel", "Ripley’s Aquarium"],
    answer: "The Pavilion Amusement Park",
    description: "The Pavilion Amusement Park was a beloved Myrtle Beach destination with a carousel, arcade, and classic summer vibes until its closure in 2006."
  },
  {
    question: "Which legendary Virginia Beach hotel once hosted presidents and celebrities?",
    options: ["The Boardwalk Inn", "Cavalier Hotel", "Oceanfront Lodge", "Seaside Palace"],
    answer: "Cavalier Hotel",
    description: "The Cavalier Hotel, built in 1927, is a Virginia Beach landmark known for its glamorous history and famous guests, from presidents to rock stars."
  },
  {
    question: "What giant statue stands at the heart of Virginia Beach’s boardwalk?",
    options: ["Poseidon", "Neptune", "Zeus", "Triton"],
    answer: "Neptune",
    description: "The 34-foot bronze statue of King Neptune celebrates Virginia Beach’s coastal heritage and anchors the annual Neptune Festival."
  },
  {
    question: "What makes Clearwater Beach’s sand so soft and white?",
    options: ["Crushed coral", "Pulverized shells", "Quartz from the mountains", "Artificial sand replenishment"],
    answer: "Quartz from the mountains",
    description: "Clearwater’s sand is made of fine quartz particles washed down from the Appalachian Mountains over thousands of years."
  },

  {
    question: "What makes Tybee Island’s lighthouse especially notable?",
    options: [
      "It’s the tallest wooden structure in the U.S.",
      "It’s built on a coral reef",
      "It’s Georgia’s oldest and tallest lighthouse",
      "It was destroyed in the Civil War"
    ],
    answer: "It’s Georgia’s oldest and tallest lighthouse",
    description: "Dating back to 1736, the Tybee Island Light Station is one of the most intact historic lighthouses in the country—and you can still climb it today!"
  },

  {
    question: "On what beach have some beachgoers reported finding small fragments of pottery or colonial era relics?",
    options: ["Myrtle Beach", "Ocean City Beach", "Venice Beach", "St. Augustine Beaches"],
    answer: "St. Augustine Beaches",
    description: "Clearwater’s sand is made of fine quartz particles washed down from the Appalachian Mountains over thousands of years."
  },

  {
    question: "Which beach features a castle inspired by Moorish architecture and has open-air studios that were used for sculpting large animal statues?",
    options: ["Virginia Beach", "Clearwater Beach", "Wharariki Beach", "Huntington Beach State Park"],
    answer: "Huntington Beach State Park",
    description: "Atalaya Castle is situated on Huntington Beach State Park across from Brookgreen Gardens. It was the winter home of philanthropist Archer Huntington and sculptor Anna Hyatt Huntington in the 1930s. Today, the castle hosts an annual juried art festival, drawing creators from across the Southeast for a weekend of beachside creativity. This photo shows an open-air sculptural courtyard at Brookgreen Gardens and features a long reflecting pool framed by white brick archways, symmetrical plantings, and a central bronze statue. The open-air design, with its palm trees and rhythmic arches, echoes the architectural details of nearby Atalaya Castle — both created by the Huntingtons in the 1930s. ",
    descriptionImage: "images/brookgreen.jpg"
  },

  {
    question: "True or False - The water in waves travels very far across the ocean until they hit shallow water and break.",
    options: ["True", "False"],
    answer: "False",
    description: "In most ocean waves, water doesn’t travel far — the energy does. As waves roll in, water molecules move in circular orbits, rising and falling but mostly staying in place. It’s the wave energy that travels across the sea until it hits shallow water — then the wave slows, builds height, and breaks."
  },

  {
    question: "What are tide clocks based on?",
    options: [
      "Changes in ocean currents that cause tides",
      "Seasonal shifts in temperature and weather",
      "The position of the moon in its orbit",
      "The time of year and lunar phases"
    ],
    answer: "The position of the moon in its orbit",
    description: "Tide clocks follow the moon’s gravitational pull, which causes tides on a 12 hour and 25 minute cycle as the moon returns to the same position overhead."
  }
];