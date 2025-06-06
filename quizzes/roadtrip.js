const quizData = [
  {
    question: "Which U.S. city claims the world’s largest ball of twine made by one person?",
    options: ["Darwin, Minnesota", "Cawker City, Kansas", "Mitchell, South Dakota", "High Point, North Carolina"],
    answer: "Cawker City, Kansas",
    description: "Cawker City’s twine ball was started by one person and now weighs over 9 tons!"
  },
  {
    question: "What is Carhenge in Nebraska made out of?",
    options: ["Concrete slabs", "Old tires", "Vintage cars", "Train wheels"],
    answer: "Vintage cars",
    description: "Carhenge is a quirky replica of Stonehenge made from stacked, spray-painted cars."
  },
  {
    question: "Which odd attraction is older than the Statue of Liberty?",
    options: ["Cadillac Ranch", "Lucy the Elephant", "Corn Palace", "Mystery Spot"],
    answer: "Lucy the Elephant",
    description: "Built in 1881 in New Jersey, Lucy the Elephant predates both the Statue of Liberty and Eiffel Tower."
  },
  {
    question: "Where can you visit a giant peanut, duck, shoe, and rocking chair?",
    options: ["Only in Georgia", "Roadside America across several states", "In a theme park", "Along Route 1"],
    answer: "Roadside America across several states",
    description: "From Georgia to Missouri, giant objects dot the highways for curious travelers to find."
  },
  {
    question: "What are you encouraged to do at Cadillac Ranch in Texas?",
    options: ["Climb the cars", "Take a selfie", "Graffiti the cars", "Race around them"],
    answer: "Graffiti the cars",
    description: "It’s part of the art! Visitors bring spray paint to decorate the half-buried Cadillacs."
  },
  {
    question: "Which California attraction appears to defy gravity?",
    options: ["Mystery Spot", "Carhenge", "Enchanted Highway", "Shoe Tree"],
    answer: "Mystery Spot",
    description: "At the Mystery Spot in Santa Cruz, strange tilts and illusions make gravity seem off-balance."
  },
  {
    question: "What is the Enchanted Highway known for?",
    options: ["Magic shows", "Historic motels", "Giant metal sculptures", "Flash mobs"],
    answer: "Giant metal sculptures",
    description: "Located in North Dakota, it features huge roadside artworks like a 110-foot pheasant!"
  },
  {
    question: "Which structure is covered in murals made from real corn?",
    options: ["Corn Castle", "Kernel Hall", "The Corn Palace", "Maize Mansion"],
    answer: "The Corn Palace",
    description: "In South Dakota, the Corn Palace uses thousands of ears of corn to create murals that change annually."
  },
  {
    question: "How did Wall Drug in South Dakota become famous?",
    options: ["Giant billboards", "Giving away burgers", "Free ice water", "Its jackalope petting zoo"],
    answer: "Free ice water",
    description: "In the 1930s, it advertised free water to travelers — now it's a massive roadside attraction."
  },
  {
    question: "Which roadside attraction once cooked 365 chickens at once?",
    options: ["The World’s Largest Frying Pan", "Corn Palace Grill", "The Chicken Dome", "Giant Grill of Texas"],
    answer: "The World’s Largest Frying Pan",
    description: "Located in North Carolina, it’s 15 feet wide and was used during a poultry festival!"
  },
  {
    question: "Where can you drive through a living redwood tree?",
    options: ["Oregon", "Yosemite", "Santa Cruz", "Northern California"],
    answer: "Northern California",
    description: "The Chandelier Tree is a living redwood with a tunnel carved through it — and you can drive right through!"
  },
  {
    question: "How many beer cans cover the Beer Can House in Houston?",
    options: ["Over 1,000", "5,000", "25,000", "50,000+"],
    answer: "50,000+",
    description: "It’s now a folk art museum — the whole house is decorated with flattened cans."
  },
  {
    question: "What’s the mystery behind shoe trees across the U.S.?",
    options: ["They ward off spirits", "They symbolize travelers’ luck", "No one really knows", "They were part of a TV show"],
    answer: "No one really knows",
    description: "Shoe trees are full of shoes tossed into the branches — no one’s sure how or why the tradition started!"
  },
  {
    question: "What town is home to a giant chest of drawers with socks sticking out?",
    options: ["Darwin, MN", "High Point, NC", "Alliance, NE", "Austin, TX"],
    answer: "High Point, NC",
    description: "As a furniture hub, High Point built this 38-foot-tall dresser to celebrate its manufacturing roots."
  },
  {
    question: "Which roadside attraction was built as a romantic gift?",
    options: ["Cadillac Ranch", "Corn Palace", "Blue Whale of Catoosa", "Mystery Spot"],
    answer: "Blue Whale of Catoosa",
    description: "This big blue whale off Route 66 was a gift from a husband to his wife in the 1970s."
  },
  {
    question: "What famous road was decommissioned in 1985 but can still mostly be driven?",
    options: ["U.S. Route 1", "Route 66", "I-90", "Route 20"],
    answer: "Route 66",
    description: "Though it’s no longer officially part of the highway system, you can still follow most of Route 66."
  },
  {
    question: "What’s the longest drivable road in the U.S.?",
    options: ["Route 66", "Route 1", "Route 101", "Route 20"],
    answer: "Route 20",
    description: "It stretches from Boston, MA to Newport, OR — over 3,000 miles coast to coast!"
  },
  {
    question: "Where was the first purpose-built gas station in the U.S.?",
    options: ["Detroit", "Pittsburgh", "Chicago", "New York"],
    answer: "Pittsburgh",
    description: "Before that, people bought gasoline from pharmacies or general stores."
  },
  {
    question: "What car made road trips popular for everyday Americans?",
    options: ["Chevy Impala", "Ford Mustang", "Ford Model T", "Buick Skylark"],
    answer: "Ford Model T",
    description: "In the 1910s, the affordable Model T made it possible for families to hit the road."
  },
  {
    question: "Why does the phrase 'Are we there yet?' feel true?",
    options: ["Because of boredom", "Because the brain stretches time on new routes", "Because kids have no patience", "Because it’s scientifically proven"],
    answer: "Because the brain stretches time on new routes",
    description: "Psychologically, unfamiliar routes feel longer — so the trip *there* always feels slower than the return."
  },
  {
    question: "What were early diners converted from?",
    options: ["Old buses", "Tents", "Train cars", "Horse trailers"],
    answer: "Train cars",
    description: "Old railcars were easy to convert into diners and move to roadside locations."
  },
  {
    question: "Where can you sleep in a concrete teepee?",
    options: ["Nevada desert", "Route 66 motels", "Utah canyonlands", "Mount Rushmore area"],
    answer: "Route 66 motels",
    description: "Several kitschy motels along Route 66 offer teepee-shaped rooms — a fun photo op for roadtrippers."
  }
];