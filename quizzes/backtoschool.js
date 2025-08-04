const quizData = [
  {
    question: "Why are school buses yellow?",
    options: [
      "It’s the cheapest paint color",
      "Yellow is cheerful and uplifting",
      "Our brains notice yellow the fastest",
      "It was originally a fashion trend"
    ],
    answer: "Our brains notice yellow the fastest",
    description: "In 1939, a national conference chose National School Bus Glossy Yellow because it's highly visible—even in peripheral vision and low light. It's easier to spot in fog, rain, or early mornings, which helps keep kids safe. The color became an international symbol of school transportation safety."
  },
  {
    question: "How far can a standard No. 2 pencil draw before it runs out?",
    options: [
      "5 miles",
      "15 miles",
      "25 miles",
      "35 miles"
    ],
    answer: "35 miles",
    description: "A standard No. 2 pencil can write about 45,000 words—or draw a line approximately 35 miles long! Its core is a mix of graphite and clay, which transfers tiny flakes onto paper. Pencil numbers refer to hardness—No. 2 hits the sweet spot for smooth writing and legibility on test scanners."
  },
  {
    question: "What is the official name of the yellow color used on school buses?",
    options: [
      "Sunshine Yellow",
      "Safety Gold",
      "National School Bus Glossy Yellow",
      "Amber Alert Yellow"
    ],
    answer: "National School Bus Glossy Yellow",
    description: "In 1939, the color 'National School Bus Glossy Yellow' was standardized for school buses because of its high visibility—even in low light or peripheral vision. It remains a globally recognized safety color."
  },
  {
    question: "What does the number on a pencil (like No. 2) actually refer to?",
    options: [
      "The length of the pencil",
      "The amount of graphite",
      "The hardness of the graphite",
      "Its age"
    ],
    answer: "The hardness of the graphite",
    description: "Pencil numbers represent graphite hardness. No. 2 pencils balance darkness and smoothness, making them ideal for writing and test scanning. Lower numbers are softer and darker; higher numbers are harder and lighter."
  },
  {
    question: "Why did school traditionally begin in the fall in the U.S.?",
    options: [
      "Because it was when farming tasks slowed down",
      "To avoid teaching in the summer heat",
      "To match European school systems",
      "Because textbooks were only distributed in September"
    ],
    answer: "Because it was when farming tasks slowed down",
    description: "In rural communities during the 1800s, fall was a natural pause between planting and harvest, making it the ideal time for school."
  },
  {
    question: "What was a major reason urban schools originally stayed open in summer?",
    options: [
      "To match the rural school calendar",
      "Because summer heat improved student focus",
      "To keep kids off the streets while parents worked",
      "To allow teachers to take vacations in winter"
    ],
    answer: "To keep kids off the streets while parents worked",
    description: "Urban schools ran in the summer to give working families childcare support, though attendance often suffered in the heat."
  },
  {
    question: "Before backpacks, how did students in the 1800s–1950s commonly carry books?",
    options: [
      "In paper bags",
      "Tied with book straps",
      "In plastic totes",
      "In grocery sacks"
    ],
    answer: "Tied with book straps",
    description: "Students carried their books bound with a leather or canvas strap—lightweight but offering no protection from rain or snow."
  },
  {
    question: "What kind of bag did many middle-class students use from the 1920s–1960s?",
    options: [
      "Zippered backpacks",
      "Messenger bags",
      "Briefcase-style satchels",
      "Plastic totes"
    ],
    answer: "Briefcase-style satchels",
    description: "These school bags resembled business briefcases and were popular in urban settings before backpacks took over."
  },
  {
    question: "Who helped popularize the use of backpacks on college campuses in the 1970s?",
    options: [
      "Nike and Adidas",
      "Campers and scouts",
      "Jansport and Eastpak",
      "Military veterans"
    ],
    answer: "Jansport and Eastpak",
    description: "These outdoor gear companies reimagined rugged daypacks for student use, creating the modern school backpack."
  },
  {
    question: "Why were backpacks originally seen as unusual on college campuses?",
    options: [
      "They were too expensive for students",
      "They were only available in military colors",
      "They were bulky and hard to store",
      "They were associated with hikers and soldiers"
    ],
    answer: "They were associated with hikers and soldiers",
    description: "Before student-friendly designs emerged, backpacks were considered gear for hikers, not for carrying books to class."
  },
  {
    question: "How much of their body weight do middle school students often carry in backpacks?",
    options: ["5–10%", "10–15%", "15–20%", "25–30%"],
    answer: "15–20%",
    description: "Studies show that many students carry backpacks weighing 15–20% of their body weight—far more than the 10% limit doctors recommend."
  },
  {
    question: "Why did wheeled backpacks become briefly popular in the 2000s?",
    options: [
      "They were cheaper than regular backpacks",
      "They were endorsed by athletes",
      "They helped reduce back strain",
      "They came with built-in speakers"
    ],
    answer: "They helped reduce back strain",
    description: "Wheeled backpacks were introduced as a solution to overloaded backpacks causing posture problems, especially in younger students."
  },
  {
    question: "Why didn’t rolling backpacks replace traditional ones completely?",
    options: [
      "They weren’t durable enough",
      "Schools banned them",
      "They were awkward on stairs and teased",
      "They didn’t have enough storage space"
    ],
    answer: "They were awkward on stairs and teased",
    description: "Rolling backpacks remained popular in elementary school, but their clunkiness and the teasing that came with them kept them from catching on long-term."
  },
  {
    question: "What surprising education law did California pass in 1901?",
  options: [
    "All students must do homework daily",
    "Only public schools could assign homework",
    "Homework was banned for students under 15",
    "Students had to write essays instead of tests"
  ],
  answer: "Homework was banned for students under 15",
  description: "In 1901, California banned homework for young students, arguing it harmed physical and mental development."
},
  {
    question: "What broader movement influenced the early 1900s anti-homework push?",
    options: [
      "The Civil Rights Movement",
      "The child-saving movement",
      "The Prohibition Movement",
      "The suffrage movement"
    ],
    answer: "The child-saving movement",
    description: "The child-saving movement, which aimed to protect kids from labor, helped fuel the argument that homework was an unfair burden on developing minds."
  },
  {
    question: "Why did homework regain popularity in the 1950s?",
    options: [
      "A new law required it",
      "The rise of television created a distraction",
      "The Cold War and Space Race increased academic pressure",
      "Teachers had fewer classroom hours"
    ],
    answer: "The Cold War and Space Race increased academic pressure",
    description: "During the Cold War, the U.S. viewed rigorous academics—including homework—as essential to staying competitive globally."
  },
  {
    question: "How many instructional days does the average U.S. student attend per year?",
    options: ["150", "170", "180", "210"],
    answer: "180",
    description: "Most U.S. students attend about 180 school days per year, which is shorter than in many other countries like Japan and South Korea."
  },
  {
    question: "Which country averages the highest number of school days per year?",
    options: ["United States", "Germany", "Japan", "South Korea"],
    answer: "South Korea",
    description: "South Korea averages up to 230 school days per year, with a strong emphasis on academics and even Saturday classes."
  },
  {
    question: "Why was year-round school proposed as early as the 1840s in the U.S.?",
    options: [
      "To match farming schedules",
      "To improve learning outcomes with shorter, more frequent breaks",
      "Because of overcrowded classrooms",
      "To follow European models"
    ],
    answer: "To improve learning outcomes with shorter, more frequent breaks",
    description: "Educational reformers like Horace Mann believed year-round school would better support consistent learning—but the idea never became mainstream."
  },
  {
    question: "Why are school bells typically high-pitched between 2,000–4,000 Hz?",
    options: [
      "That’s the cheapest range to produce",
      "It mimics musical tones",
      "It’s the most alerting frequency for the human brain",
      "To prevent hearing damage"
    ],
    answer: "It’s the most alerting frequency for the human brain",
    description: "High-pitched tones in the 2,000–4,000 Hz range activate the brain’s alert system, making school bells neurologically hard to ignore."
  },
  {
    question: "Which part of the brain responds to the sharp sound of a school bell?",
    options: ["Frontal lobe", "Amygdala", "Cerebellum", "Hypothalamus"],
    answer: "Amygdala",
    description: "The amygdala is responsible for threat detection—and it’s instantly triggered by sharp, high-pitched frequencies like school bells."
  },
  {
    question: "Why have some schools replaced traditional bells with chimes or music?",
    options: [
      "To save electricity",
      "To signal breaks more clearly",
      "To reduce stress and create a calmer atmosphere",
      "Because students complained about the noise"
    ],
    answer: "To reduce stress and create a calmer atmosphere",
    description: "Some progressive schools have switched to softer cues like chimes or music, especially for younger students, to ease transitions without causing anxiety."
  },
  {
    question: "When was the world’s oldest continuously operating school founded?",
    options: ["597 AD", "1066 AD", "1215 AD", "1500 AD"],
    answer: "597 AD",
    description: "The King’s School in Canterbury, England was founded in 597 AD and is still in operation today, making it over 1,400 years old."
  },
  {
    question: "What is one reason the King’s School in Canterbury is historically significant?",
    options: [
      "It was the first school to admit girls",
      "It was part of the mission to educate clergy and convert Anglo-Saxons",
      "It invented the modern boarding school model",
      "It has never closed in 1,400 years"
    ],
    answer: "It was part of the mission to educate clergy and convert Anglo-Saxons",
    description: "The school was established as part of the Christian mission to educate clergy and spread literacy among the Anglo-Saxons."
  },
  {
    question: "Which famous playwright is believed to have attended The King’s School?",
    options: ["William Shakespeare", "Ben Jonson", "Christopher Marlowe", "John Milton"],
    answer: "Christopher Marlowe",
    description: "Christopher Marlowe, a contemporary of Shakespeare, is believed to have studied at The King’s School in the 1570s."
  },
  {
    question: "Why was yellow chosen as the original highlighter color?",
    options: [
      "It was the cheapest ink to produce",
      "It matched legal pad paper",
      "It didn't obscure text in black-and-white photocopies",
      "It was the most vibrant under candlelight"
    ],
    answer: "It didn't obscure text in black-and-white photocopies",
    description: "Yellow was chosen because it made text stand out while still remaining legible in black-and-white copies."
  },
  {
    question: "What makes highlighter ink appear to glow on the page?",
    options: [
      "Glossy paper finish",
      "Fluorescent compounds that emit visible light",
      "Natural sunlight reaction",
      "Special reflective particles"
    ],
    answer: "Fluorescent compounds that emit visible light",
    description: "Highlighter ink contains fluorescent dye that absorbs invisible UV light and re-emits it as visible light, making it appear to glow."
  },
  {
    question: "How does color impact memory, according to studies?",
    options: [
      "Blue enhances physical energy",
      "Yellow improves focus and alertness",
      "Red reduces retention but increases speed",
      "Green promotes relaxation but weakens recall"
    ],
    answer: "Yellow improves focus and alertness",
    description: "Yellow is associated with increased focus and mental clarity, which is why it's a popular color for highlighting key information."
  },
  {
    question: "What was the original purpose of the SAT when it was first introduced in 1926?",
    options: [
      "To test prep school students’ readiness for Ivy League colleges",
      "To measure a student’s GPA",
      "To identify gifted students beyond elite prep schools",
      "To evaluate knowledge of advanced math and grammar"
    ],
    answer: "To identify gifted students beyond elite prep schools",
    description: "The SAT was originally designed as a way to help elite colleges identify promising students from underrepresented or non-traditional backgrounds."
  },
  {
    question: "What was the SAT based on when it was first developed?",
    options: [
      "A military IQ test used in World War I",
      "European college entrance exams",
      "Harvard’s final exams",
      "A collection of prep school exit tests"
    ],
    answer: "A military IQ test used in World War I",
    description: "The SAT was modeled after the Army Alpha Test, an IQ-style multiple-choice test used to sort soldiers in World War I."
  },
  {
    question: "Which of the following is true about the SAT’s evolution?",
    options: [
      "It has always included a written essay",
      "Its format has remained unchanged since 1926",
      "It is now shorter and digital",
      "It has been banned in many U.S. states"
    ],
    answer: "It is now shorter and digital",
    description: "As of 2024, the SAT is fully digital and has been streamlined, with earlier versions including analogies, obscure vocab, and guessing penalties."
  },
  {
    question: "What does the word 'kindergarten' mean in German?",
    options: ["Early learning", "Children’s garden", "Tiny classroom", "Young mind"],
    answer: "Children’s garden",
    description: "Coined by Friedrich Fröbel, the word 'kindergarten' reflects his belief that children grow best in a nurturing, playful environment—like a garden."
  },
  {
    question: "Who introduced the concept of kindergarten, emphasizing learning through play and nature?",
    options: [
      "John Dewey",
      "Maria Montessori",
      "Friedrich Fröbel",
      "Horace Mann"
    ],
    answer: "Friedrich Fröbel",
    description: "Fröbel pioneered early childhood education by creating kindergarten and developing hands-on materials known as 'Fröbel Gifts.'"
  },
  {
    question: "What were 'Fröbel Gifts' designed to do?",
    options: [
      "Entertain children during recess",
      "Help students memorize multiplication tables",
      "Develop coordination and spatial reasoning through play",
      "Serve as rewards for good behavior"
    ],
    answer: "Develop coordination and spatial reasoning through play",
    description: "Fröbel’s educational toys—blocks, yarn balls, geometric shapes—were designed to support early brain development through creativity and hands-on learning."
  },
  {
    question: "Why did students originally give apples to teachers?",
    options: [
      "It was part of a fall harvest celebration",
      "Apples symbolized a student's good behavior",
      "They were a form of payment in rural communities",
      "Teachers requested them as snacks"
    ],
    answer: "They were a form of payment in rural communities",
    description: "In the 18th and 19th centuries, apples were commonly given to underpaid teachers as a gesture of gratitude—and sometimes as partial payment."
  },
  {
    question: "Which of the following helped make apples a popular gift for teachers?",
    options: [
      "They were cheap and grown only in spring",
      "They spoiled quickly but were symbolic",
      "They traveled well and were available in the fall",
      "They were rare and expensive, showing sacrifice"
    ],
    answer: "They traveled well and were available in the fall",
    description: "Apples were easy to store, transport, and gift—especially since the school year began during apple harvest season."
  },
  {
    question: "What symbolic meaning did apples come to represent in schools?",
    options: [
      "Discipline and obedience",
      "Knowledge and appreciation",
      "Magic and wisdom",
      "Silence and order"
    ],
    answer: "Knowledge and appreciation",
    description: "Apples evolved from practical gifts into symbols of intellectual nourishment, gratitude, and the value of learning."
  },
  {
    question: "Why was recess controversial in the 1800s?",
    options: [
      "Schools lacked outdoor space",
      "Educators believed play caused bad behavior",
      "Students refused to return after recess",
      "There weren’t enough teachers to supervise it"
    ],
    answer: "Educators believed play caused bad behavior",
    description: "Some reformers thought recess would lead to laziness, disorder, or moral decline among students."
  },
  {
    question: "Which educational reformer helped shift views on recess by promoting play as a form of learning?",
    options: [
      "Carl Brigham",
      "Friedrich Fröbel",
      "Horace Mann",
      "John Dewey"
    ],
    answer: "John Dewey",
    description: "John Dewey was a major advocate for learning through movement, exploration, and play—helping cement recess as a critical part of development."
  },
  {
    question: "What is one proven benefit of even a short recess during the school day?",
    options: [
      "Increased appetite",
      "Fewer school supplies needed",
      "Improved concentration and behavior",
      "Longer attention spans only in older students"
    ],
    answer: "Improved concentration and behavior",
    description: "Research shows even short breaks help reset the brain, reduce behavioral issues, and boost attention—especially in younger kids."
  },
  {
    question: "What inspired the first student lunchboxes?",
    options: [
      "Military mess kits from WWII",
      "Factory workers’ metal lunch pails",
      "Camping gear companies in the 1920s",
      "School cafeteria trays"
    ],
    answer: "Factory workers’ metal lunch pails",
    description: "In the 1800s, students began mimicking industrial workers by repurposing tin pails and biscuit tins to carry lunch to school."
  },
  {
    question: "Which character appeared on the first licensed lunchbox in 1950?",
    options: [
      "Superman",
      "Hopalong Cassidy",
      "Mickey Mouse",
      "Roy Rogers"
    ],
    answer: "Hopalong Cassidy",
    description: "The Hopalong Cassidy lunchbox sold over 600,000 units its first year—launching a massive lunchbox craze in the 1950s."
  },
  {
    question: "Why did metal lunchboxes fall out of favor in the 1980s?",
    options: [
      "Kids preferred paper bags",
      "TV characters were no longer popular",
      "They were considered unsafe and expensive",
      "Schools banned lunches altogether"
    ],
    answer: "They were considered unsafe and expensive",
    description: "Metal lunchboxes were phased out due to safety concerns, denting, and cost—replaced by lighter, cheaper plastic versions."
  },
  {
    question: "What rule could get female teachers fired in the 1800s?",
    options: [
      "Attending church too often",
      "Staying out past 8 p.m.",
      "Speaking to a student’s parent",
      "Writing in cursive"
    ],
    answer: "Staying out past 8 p.m.",
    description: "Teachers (especially women) were held to strict moral codes and could be fired for socializing or appearing in public with men."
  },
  {
    question: "What does the Latin root 'educare' mean?",
    options: [
      "To pour in knowledge",
      "To discipline",
      "To lead out or draw forth",
      "To raise children"
    ],
    answer: "To lead out or draw forth",
    description: "The word 'education' comes from 'educare'—a philosophy of drawing out a student’s potential, not just delivering facts."
  },
  {
    question: "What term describes the model of teaching where students passively receive information?",
    options: [
      "The Socratic method",
      "The experiential model",
      "The banking model",
      "The Freire framework"
    ],
    answer: "The banking model",
    description: "Coined by Paulo Freire, the 'banking model' treats students like empty accounts for depositing knowledge—something he opposed."
  }


];