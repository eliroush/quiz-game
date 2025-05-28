
  const quizData = [
    {
        question: "Which amphibian is the unofficial mascot of Columbia, SC?",
        options: ["Sally the Salamander", "Gary the Gecko", "Freddy the Frog", "Tina the Toad"],
        answer: "Sally the Salamander",
        description: "Sally the Salamander became Columbia’s unofficial mascot after a rare species sighting in the Congaree Swamp inspired the idea.",
        descriptionImage: "images/sally.jpg",
      },

      {
        question: "The Blue Marlin Restaurant resides at this historical landmark:",
        options: ["The Seaboard Airline Railway Station", "The Original Columbia Post Office", "The Southern Bell Telephone Exchange", "The Gervais Street Trolley Hub"],
        answer: "The Seaboard Airline Railway Station",
        description: "The Blue Marlin is housed in the former Seaboard Railway Passenger Depot, blending Southern hospitality with a nod to historic Columbia transportation."
      },

      {
        question: "The Columbia Museum of Art building was once a ———?",
        options: ["Train Station", "Hotel", "Courthouse", "Department Store"],
        answer: "Department Store",
        description: "The Columbia Museum of Art occupies a former department store, creatively repurposing retail space into a center for culture and creativity.",
        descriptionImage: "images/colfineart.jpg",
      },

      {
        question: "What part of the George Washington statue on the State House Grounds was damaged during Union shelling and has never been repaired?",
        options: ["His Boots", "His Sword", "His Cane", "His Coat"],
        answer: "His Cane",
        description: "During Union shelling in 1865, George Washington’s statue was struck, breaking off the cane—left that way ever since as a historical marker.",
        descriptionImage: "images/statehouse.jpg",
      },

      {
        question: "True or False – When the building that is now the Sheraton Hotel was first built it was the tallest building in South Carolina and one of the tallest in the Southeast.",
        options: ["True", "False"],
        answer: "True",
        description: "The Palmetto Building, now the Sheraton Hotel, was a groundbreaking structure for its time, holding the title of tallest in the state.",
        descriptionImage: "images/sheraton.jpg",
      },

      {
        question: "The Sheraton Hotel in downtown Columbia was previously what?",
        options: ["A Bank", "A School", "A City Hall", "A Train Station"],
        answer: "A Bank",
        description: "Before becoming a hotel, the Palmetto Building housed a bank—a detail preserved in its ornate architectural features.",
        descriptionImage: "images/sheraton.jpg",
      },

      {
        question: "The Whiskey Bar Bourbon is located how many blocks from the State House and is located in what was once a former ———?",
        options: ["Two blocks – a theater", "One block – a courthouse", "One block – a dry goods store", "Three blocks – a hat shop"],
        answer: "One block – a dry goods store",
        description: "Today’s Bourbon Bar sits just a block from the State House in a building that once sold textiles and goods in the 1800s.",
        descriptionImage: "images/bourbon.jpg",
      },

      {
        question: "The Arcade building in downtown Columbia was the city’s first what?",
        options: ["Parking garage", "Indoor shopping center", "Apartment complex", "Movie theater"],
        answer: "Indoor shopping center",
        description: "The Arcade was Columbia’s first enclosed shopping center—an elegant structure that still houses shops and businesses today.",
        descriptionImage: "images/arcade.jpg",
      },

      {
        question: "In the 1970s, the Arcade building hosted “Down Under Columbia,” a collection of bars and restaurants meant to rival a similar feature in what other southeastern city?",
        options: ["Charleston, SC", "Savannah, GA", "Atlanta, GA", "Raleigh, NC"],
        answer: "Atlanta, GA",
        description: "Down Under Columbia aimed to mimic Atlanta’s underground nightlife district with restaurants and bars tucked beneath the street level.",
        descriptionImage: "images/arcade.jpg",
      },
      
      {
        question: "The Congaree Park protects the largest what in the southeastern United States?",
        options: ["Cypress swamp forest", "Intact expanse of old-growth bottomland hardwood forest", "Southern pine preserve", "Coastal salt marsh"],
        answer: "Intact expanse of old-growth bottomland hardwood forest",
        description: "Congaree National Park is home to the largest intact old-growth bottomland hardwood forest in the Southeast, featuring towering trees, diverse wildlife, and rich floodplain ecosystems.",
        descriptionImage: "images/congaree.jpg",
      },

      {
        question: "Some loblolly pines in the Congaree are the tallest in the Southeast and can grow over:",
        options: ["160 ft tall", "80 ft tall", "200 ft tall", "120 ft tall"],
        answer: "160 ft tall",
        description: "Loblolly pines in Congaree National Park can reach heights over 160 feet—some of the tallest trees in the eastern U.S.",
        descriptionImage: "images/congaree.jpg",
      },

      {
        question: "What unique feature occurs in the Congaree that nourishes the soil and helps maintain biodiversity?",
        options: ["Wildfire cycles", "Frequent droughts", "Seasonal hurricanes", "Flooding"],
        answer: "Flooding",
        description: "Seasonal flooding spreads nutrient-rich sediment across the floodplain, making Congaree one of the most biologically diverse forests in North America.",
        descriptionImage: "images/congaree.jpg",
      },

      {
        question: "During the Civil War, one of the buildings on USC’s Horseshoe served as a:",
        options: ["State Capitol", "Confederate Hospital", "Armory", "Library"],
        answer: "Confederate Hospital",
        description: "During the Civil War, USC’s campus was repurposed for military use. A building on the Horseshoe became a Confederate hospital to care for wounded soldiers.",
        descriptionImage: "images/usc.jpg",
      },

      {
        question: "USC’s Thomas Cooper Library holds an extensive collection of letters, manuscripts, and personal items from this American author:",
        options: ["Mark Twain", "Hemingway", "Walt Whitman", "Edgar Allan Poe"],
        answer: "Hemingway",
        description: "The library houses a rare Hemingway collection including letters, signed first editions, and personal items—one of the largest university-held collections of its kind.",
        descriptionImage: "images/usc.jpg",
      },

      {
        question: "USC’s mascot was chosen to reflect the spirit of this Revolutionary War hero:",
        options: ["Francis Marion", "Nathanael Greene", "Thomas Sumter", "Andrew Pickens"],
        answer: "Thomas Sumter",
        description: "Thomas Sumter, known as the “Fighting Gamecock” for his tenacity in battle, inspired USC’s mascot and fighting spirit.",
        descriptionImage: "images/usc.jpg",
      },

      {
        question: "The South Carolina State Museum was built in what year and originally operated as what?",
        options: ["1885, a courthouse", "1901, a granary", "1894, the first completely electric textile mill in the world", "1912, a cotton gin"],
        answer: "1894, the first completely electric textile mill in the world",
        description: "The museum is housed in a historic mill built in 1894. At the time, it was the world’s first fully electric textile mill—an innovation in industrial history."
      },

      {
        question: "The historic telescope in the museum’s observatory is what kind of telescope?",
        options: ["Newtonian reflector", "Schmidt-Cassegrain telescope", "Alvan Clark refracting telescope", "Hubble replica"],
        answer: "Alvan Clark refracting telescope",
        description: "The observatory at the South Carolina State Museum features an Alvan Clark refractor—crafted by one of the most respected 19th-century telescope makers."
      }
  // Add more questions here...
];