const quizData = [
  {
    question: "Which plant changes color based on soil pH?",
    options: ["Dahlia", "Hydrangea", "Mint", "Marigold"],
    answer: "Hydrangea",
    description: "Acidic soil (low PH) makes Hydrangea flowers blue, while alkaline (low PH) makes the flowers pink. (You can add crushed eggshells or coffee grounds to slightly tweak your soil's PH and nudge the the blooms to pink or blue ",
    descriptionImage: "images/Hydrangea.jpg"
  },

  {
    question: "Which of these plants is shown in the photo?",
    options: ["Basil", "Mint", "Rosemary", "Oregano"],
    answer: "Mint",
    image: "images/mint.jpg",
    description: "Mint is a fast-growing, aromatic herb known for its refreshing flavor and cooling sensation. It has bright green leaves with a slightly serrated edge and is commonly used in teas, desserts, savory dishes, and drinks like mojitos. There are many varieties, including spearmint and peppermint, each with slightly different flavor profiles.The mint featured here is spearmint. Mint is also valued for its digestive and soothing properties."
  },

  {
    question: "Which plant is actually two herbs in one?",
    options: ["Mint", "Cilantro", "Oregano", "Coleus"],
    answer: "Cilantro",
    description: "The leaves are cilantro, and once the plant bolts and goes to seed, the seeds become coriander—used in spice blends worldwide.",
    descriptionImage: "images/Cilantro.jpg"
  },
  {
    question: "What makes mint feel cool on your tongue?",
    options: ["Acid", "Chlorophyll", "Menthol", "Starch"],
    answer: "Menthol",
    description: "Mint contains menthol, which activates cold-sensitive receptors in the skin and mouth, creating the sensation of coolness without changing temperature.",
    descriptionImage: "images/mint.jpg"
  },

    {
    question: "What describes the phenomenon that occurs when plants respond to music or grow toward rhythmic vibrations?",
    options: ["Plant Vibration", "Chlorophyll", "Phonotropism", "Frequency Matching"],
    answer: "Phonotropism",
    description: "While “Plants Can Hear You Chew” is a playful exaggeration, it’s rooted in something real: plants are more aware of their surroundings than we often give them credit for. Some even respond to music, or grow toward rhythmic vibrations in a phenomenon called phonotropism.",
  },

  {
    question: "Which bug acts as a garden ally by eating aphids and thereby naturally protecting the plants?",
    options: ["Ants", "Ladybugs", "Bees", "Worms"],
    answer: "Ladybugs",
    description: "Ladybugs are garden allies. They're attracted to flowers that offer pollen and environments with aphids - their favorite food.  They're drawn to pollen-rich blooms to use the pollen as a food source for energy when aphids are scarce. If aphidds are present on a plant, ladybugs will come for the feast.",
  },

  {
    question: "This flower’s Latin name Scabiosa comes from the word “scabies” and was historically used to treat skin conditions like scabies.",
    options: ["Purple Pincushion Flowers", "Cone Flowers", "Cilantro","Oregano"],
    answer: "Purple Pincushion Flowers",
    description: "Today Purple Pincushion flowers are all about the blooms. Not only are they beautiful in arrangements, but they last a surprisingly long time in a vase—plus, bees and butterflies love them while they’re in the ground.",
    descriptionImage: "images/Purplepincushion.jpg"
  },
  {
    question: "True or false - Plants can bloom longer with regular deadheading - or removing dead blooms.",
    options: ["True", "False"],
    answer: "True",
    description: "Deadheading is the process of removing spent or faded flowers from a plant. This encourages the plant to focus its energy on producing new blooms rather than forming seeds. Regular deadheading can extend the flowering period, improve the plant’s appearance, and promote healthier growth."
  },
  {
    question: "True or false - The flower blossoms of Lemon Trees are edible.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "This plant loves sun, is self-pollinating, highly cold-sensitive, its roots can easily rot without a good drainage system and thrives in root-binding tighter spaces.",
    options: ["Pygmy Palm Tree", "Hydrangea", "Lemon Trees", "Mint"],
    answer: "Lemon Trees",
    description: "Lemon tree petals are indeed edible and can be used in small amounts for culinary or aromatic purposes. They come from the blossoms of the Citrus limon tree and have a delicate citrusy aroma with slightly bitter but fragrant notes.",
    descriptionImage: "images/Lemontree.jpg"
  },
  {
    question: "True or false - Pollinators don’t like messy gardens.",
    options: ["True", "False"],
    answer: "False",
    description: "Pollinators love a little wildness in the garden. Letting herbs flower or planting nectar-rich blooms nearby can boost pollination for everything.",
  },
  {
    question: "This fruit, while referred to as a “berry” is technically an “aggregate fruit” and not a berry. It grows on biennial canes, is self-rooting and has natural medicinal properties.",
    options: ["Lemons", "Blackberries", "Strawberries","Tomatoes"],
    answer: "Blackberries",
    description: "Botanically, they’re an “aggregate fruit,” made up of multiple tiny drupelets—each with its own seed. A cane grows one year (primocane), fruits the next (floricane), then dies back—while new canes start the cycle again. Blackberry leaves and roots have been used in traditional herbal medicine for sore throats and digestive issues.",
    descriptionImage: "images/Blackberry.jpg"
  },
  {
    question: "The process a plant uses to self-root and form a new plant by touching its tip to the ground is called:",
    options: ["Tip Rooting", "Tip Layering", "Plant Multiplication", "Self-Rooting"],
    answer: "Tip Layering",
    description: "Tip layering is a simple plant propagation method where the tip of a low-growing stem is bent down and buried in soil while still attached to the parent plant. After a few weeks, roots form at the buried tip. Once rooted, the new plant can be cut from the parent and transplanted.",
  },
  {
    question: "This tough and thorny plant was historically used in Europe for natural fencing to deter animals and even humans.",
    options: ["Cone Flowers", "Pygmy Palm Tree", "Gladiolus", "Blackberries"],
    answer: "Blackberries",
    descriptionImage: "images/Blackberry.jpg",
    description: "In Europe, dense blackberry thickets were historically planted to deter animals and even people—they’re that tough and thorny."
  },
  {
    question: "This flower’s Latin name is Echinacea purpurea and has been used by indigenous peoples and herbalists to support immune health.",
    options: ["Hydrangea", "Cone Flowers", "Oregano", "Coleus"],
    answer: "Cone Flowers",
    descriptionImage: "images/Coneflowerred.jpg",
    description: "Coneflowers are hardy, daisy-like flowers with spiky centers and drooping petals, often purple or pink. Native to North America, they attract pollinators and bloom from summer to fall. They’re also known for their traditional medicinal uses."
  },
  {
    question: "This plant not only attracts bees and butterflies, but also parasitic wasps, which help keep harmful insects in check.",
    options: ["Cone Flowers", "Mint", "Oregano", "Gladiolus"],
    answer: "Cone Flowers",
    descriptionImage: "images/whiteconeflower.jpg",
  },
  {
    question: "This plant is surprisingly part of the mint family, has over 900 species, is highly drought tolerant, pest-resistant and blooms better in lean soil without too much fertilizer.",
    options: ["Hydrangeas", "Purple Pincushions", "Coneflowers", "Purple Wood Sage"],
    answer: "Purple Wood Sage",
    descriptionImage: "images/purplewoodsage.jpg",
    description: "Purple Wood Sage is a hardy perennial with soft purple flower spikes and textured green leaves. It grows in partial shade and attracts bees and butterflies. Though called “sage,” it’s not aromatic or culinary, but valued for its ornamental beauty and wildlife support."
  },
  {
    question: "This family includes mint, oregano and basil and explains its square stems and fragrant leaves.",
    options: ["Lamiacea", "Rubus fruticosus", "Thiophene", "Hemerocallis"],
    answer: "Lamiacea",
    description: "Lamiaceae, also known as the mint family, includes aromatic herbs like mint, basil, sage, and lavender. Plants in this family often have square stems, paired leaves, and small two-lipped flowers, and are known for attracting pollinators."
  },
  {
    question: "This plant’s flowers are designed for hummingbirds.",
    options: ["Coneflowers","Purple Wood Sage", "Cilantro", "Lilies"],
    answer: "Purple Wood Sage",
    descriptionImage: "images/purplewoodsage.jpg",
    description: "Purple Wood Sage produces tubular purple flowers rich in nectar, making it especially attractive to hummingbirds. Its shape and color are ideal for these birds, who help pollinate the plant as they feed."
  },
  {
    question: "The word used to define the behavior where plants adjust their growth patterns when touched or brushed against regularly is:",
    options: ["Spathiphyllum", "Hemerocallis", "Thigmomorphogenesis", "Phonotropism"],
    answer: "Thigmomorphogenesis",
    description: "Thigmomorphogenesis is a plant’s response to touch or mechanical stress, like wind or being brushed. It causes the plant to grow shorter or sturdier, helping it adapt to its environment."
  },
  {
    question: "This flower which is a key part of Dia de los Muertos and in many cultures symbolizes protection, is also edible.",
    options: ["Marigolds", "Coneflowers", "Dahlias", "Gladiolus"],
    answer: "Marigolds",
    descriptionImage: "images/Marigold.jpg",
    description: "Marigolds are vibrant flowers often planted to repel pests in gardens. In many cultures, especially in Latin America and South Asia, they symbolize protection and are used in rituals to honor the dead and ward off negative energy."
  },
  {
    question: "True or false - Marigolds bloom almost non-stop from spring until frost.",
    options: ["True", "False"],
    answer: "True",
    descriptionImage: "images/Marigold.jpg",
    description: "Marigolds are bright, hardy flowers known for their pest-repelling properties. Their strong scent helps protect nearby plants, making them a popular companion in vegetable gardens. With regular deadheading or removing spent blooms, they will continue to bloom well into the fall."
  },
  {
    question: "True or false - The best time of day to water plants is early evening.",
    options: ["True", "False"],
    answer: "False",
    description: "The best time to water plants is early in the morning, when temperatures are cooler and winds are calm. This allows water to soak into the soil before it evaporates and gives plants the moisture they need to face the heat of the day."
  },
  {
    question: "This plant is technically in the mint family, can be easily propagated in water, is highly cold-sensitive, and the vibrancy of its colors depends on light.",
    options: ["Hydrangea", "Coleus", "Oregano", "Echinacea"],
    answer: "Coleus",
    descriptionImage: "images/Coleus.jpg",
    description: "Coleus is a vibrant ornamental plant known for its striking, multicolored foliage. Grown primarily for its leaves rather than its flowers, coleus thrives in both sun and shade, depending on the variety. It’s easy to grow and adds bold color to gardens, containers, and borders."
  },
 
  {
    question: "True or false - A single teaspoon of healthy soil can contain billions of microorganisms.",
    options: ["True", "False"],
    answer: "True",
    description:"Soil is more than just dirt—it’s a living ecosystem. Healthy soil is rich with microorganisms like bacteria, fungi, protozoa, and nematodes. These tiny life forms help break down organic matter, making nutrients available to plants. They also improve soil structure, help retain moisture, and even protect roots from disease. A thriving microbial community is essential for strong, resilient plant growth."
  },

  {
    question: "True or false - It's better to water plants with natural rainwater than tap water",
    options: ["True", "False"],
    answer: "True",
    description: "Watering with rainwater is often preferred for plants because it’s free of salts, chlorine, and chemicals found in tap water. It’s softer and more in tune with what plants naturally receive. Tap water can be fine for most plants, but over time, minerals and additives like fluoride or chlorine can build up in soil, potentially affecting sensitive species. Letting tap water sit out overnight helps some chemicals dissipate."
  },

  {
    question: "This plant's blooms shift color depending on the soil's PH. Acidic soil (Low PH) make it's flowers blue while alkaline soil (high PH) make it’s petals pink.",
    options: ["Coleus", "Gardenia", "Hydrangeas", "Gladiolus"],
    answer: "Hydrangeas",
    descriptionImage: "images/Hydrangea.jpg",
    description: "Hydrangeas are known for their unique ability to change flower color based on soil pH. In acidic soil (pH below 6), they often bloom blue, while in alkaline soil (pH above 7), the flowers shift to pink or purple. This color change happens because the pH affects how aluminum is absorbed by the plant. Adjusting soil pH allows gardeners to influence bloom colors naturally."
  },

  {
    question: "This plant who's Latin name is Origanum Vulgare is a natural antibacterial and is part of the mint family",
    options: ["Coleus", "Cilantro", "Lemon Tree", "Oregano"],
    answer: "Oregano",
    descriptionImage: "images/Oregano.jpg",
    description: "Oregano is a hardy, aromatic herb from the mint family known for its strong flavor and natural pest-repelling properties. It thrives in sunny spots with well-draining soil and is often used fresh or dried in cooking."
    
  },

  {
    question: " This plant named for water from the Greek word hydro (water) and angeion (vessel) has petals that absorb and reflect moisture, and was once used as a rain gauge to signal upcoming rain or humidity changes.",
    options: ["Hydrangea", "Coleus", "Coneflowers", "Lilies"],
    answer: "Hydrangea",
    descriptionImage: "images/Hydrangea.jpg",
    description: "Hydrangeas get their name from Greek words meaning “water vessel,” and they were once used as natural rain gauges—their thirsty blooms give a quick visual cue for moisture in the air or soil."
  },

  
];