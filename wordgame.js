// --- 1. THEMES ----------------------------------------------------------
// Each theme has a label + words array.
// Each word: 4 chunks (visual pieces, not strict syllables).

const THEMES = {
  plants: {
    label: "Plants & Flowers",
    words: [
      {
        id: "waterlily",
        label: "Waterlily",
        chunks: [
          { id: "waterlily-0", wordId: "waterlily", index: 0, text: "wa" },
          { id: "waterlily-1", wordId: "waterlily", index: 1, text: "ter" },
          { id: "waterlily-2", wordId: "waterlily", index: 2, text: "li" },
          { id: "waterlily-3", wordId: "waterlily", index: 3, text: "ly" }
        ]
      },
      {
        id: "tomatoes",
        label: "Tomatoes",
        chunks: [
          { id: "tomatoes-0", wordId: "tomatoes", index: 0, text: "to" },
          { id: "tomatoes-1", wordId: "tomatoes", index: 1, text: "m" },
          { id: "tomatoes-2", wordId: "tomatoes", index: 2, text: "ato" },
          { id: "tomatoes-3", wordId: "tomatoes", index: 3, text: "es" }
        ]
      },
      {
        id: "blackberry",
        label: "Blackberry",
        chunks: [
          { id: "blackberry-0", wordId: "blackberry", index: 0, text: "black" },
          { id: "blackberry-1", wordId: "blackberry", index: 1, text: "ber" },
          { id: "blackberry-2", wordId: "blackberry", index: 2, text: "r" },
          { id: "blackberry-3", wordId: "blackberry", index: 3, text: "y" }
        ]
      },
      {
        id: "hyacinth",
        label: "Hyacinth",
        chunks: [
          { id: "hyacinth-0", wordId: "hyacinth", index: 0, text: "hya" },
          { id: "hyacinth-1", wordId: "hyacinth", index: 1, text: "cin" },
          { id: "hyacinth-2", wordId: "hyacinth", index: 2, text: "t" },
          { id: "hyacinth-3", wordId: "hyacinth", index: 3, text: "h" }
        ]
      },
      {
        id: "coneflower",
        label: "Coneflower",
        chunks: [
          { id: "coneflower-0", wordId: "coneflower", index: 0, text: "cone" },
          { id: "coneflower-1", wordId: "coneflower", index: 1, text: "flo" },
          { id: "coneflower-2", wordId: "coneflower", index: 2, text: "w" },
          { id: "coneflower-3", wordId: "coneflower", index: 3, text: "er" }
        ]
      },
      {
        id: "stjohnswort",
        label: "St. John’s wort",
        chunks: [
          { id: "stjohnswort-0", wordId: "stjohnswort", index: 0, text: "St" },
          { id: "stjohnswort-1", wordId: "stjohnswort", index: 1, text: "Johns" },
          { id: "stjohnswort-2", wordId: "stjohnswort", index: 2, text: "wor" },
          { id: "stjohnswort-3", wordId: "stjohnswort", index: 3, text: "t" }
        ]
      },
      {
        id: "marigold",
        label: "Marigold",
        chunks: [
          { id: "marigold-0", wordId: "marigold", index: 0, text: "ma" },
          { id: "marigold-1", wordId: "marigold", index: 1, text: "ri" },
          { id: "marigold-2", wordId: "marigold", index: 2, text: "go" },
          { id: "marigold-3", wordId: "marigold", index: 3, text: "ld" }
        ]
      },
      {
        id: "gladiolus",
        label: "Gladiolus",
        chunks: [
          { id: "gladiolus-0", wordId: "gladiolus", index: 0, text: "gla" },
          { id: "gladiolus-1", wordId: "gladiolus", index: 1, text: "di" },
          { id: "gladiolus-2", wordId: "gladiolus", index: 2, text: "o" },
          { id: "gladiolus-3", wordId: "gladiolus", index: 3, text: "lus" }
        ]
      },
      {
        id: "dahlias",
        label: "Dahlias",
        chunks: [
          { id: "dahlias-0", wordId: "dahlias", index: 0, text: "dah" },
          { id: "dahlias-1", wordId: "dahlias", index: 1, text: "li" },
          { id: "dahlias-2", wordId: "dahlias", index: 2, text: "a" },
          { id: "dahlias-3", wordId: "dahlias", index: 3, text: "s" }
        ]
      },
      {
        id: "hydrangeas",
        label: "Hydrangeas",
        chunks: [
          { id: "hydrangeas-0", wordId: "hydrangeas", index: 0, text: "hy" },
          { id: "hydrangeas-1", wordId: "hydrangeas", index: 1, text: "dran" },
          { id: "hydrangeas-2", wordId: "hydrangeas", index: 2, text: "ge" },
          { id: "hydrangeas-3", wordId: "hydrangeas", index: 3, text: "as" }
        ]
      },
      {
        id: "oregano",
        label: "Oregano",
        chunks: [
          { id: "oregano-0", wordId: "oregano", index: 0, text: "ore" },
          { id: "oregano-1", wordId: "oregano", index: 1, text: "ga" },
          { id: "oregano-2", wordId: "oregano", index: 2, text: "n" },
          { id: "oregano-3", wordId: "oregano", index: 3, text: "o" }
        ]
      },
      {
        id: "cilantro",
        label: "Cilantro",
        chunks: [
          { id: "cilantro-0", wordId: "cilantro", index: 0, text: "ci" },
          { id: "cilantro-1", wordId: "cilantro", index: 1, text: "lan" },
          { id: "cilantro-2", wordId: "cilantro", index: 2, text: "tr" },
          { id: "cilantro-3", wordId: "cilantro", index: 3, text: "o" }
        ]
      },
      {
        id: "lemon",
        label: "Lemon",
        chunks: [
          { id: "lemon-0", wordId: "lemon", index: 0, text: "le" },
          { id: "lemon-1", wordId: "lemon", index: 1, text: "m" },
          { id: "lemon-2", wordId: "lemon", index: 2, text: "o" },
          { id: "lemon-3", wordId: "lemon", index: 3, text: "n" }
        ]
      }
    ]
  },

  roadtrip: {
    label: "Roadtrip",
    words: [
      {
        id: "newjerseyturnpike",
        label: "NewJerseyTurnPike",
        chunks: [
          { id: "newjersey-0", wordId: "newjersey", index: 0, text: "newjer" },
          { id: "newjersey-1", wordId: "newjersey", index: 1, text: "seytu" },
          { id: "newjersey-2", wordId: "newjersey", index: 2, text: "urnp" },
          { id: "newjersey-3", wordId: "newjersey", index: 3, text: "ike" }
        ]
      },
      {
        id: "georgia",
        label: "Georgia",
        chunks: [
          { id: "georgia-0", wordId: "georgia", index: 0, text: "geo" },
          { id: "georgia-1", wordId: "georgia", index: 1, text: "rgia" },
          { id: "georgia-2", wordId: "georgia", index: 2, text: "pea" },
          { id: "georgia-3", wordId: "georgia", index: 3, text: "ches" }
        ]
      },
      {
        id: "cadillac",
        label: "Cadillac",
        chunks: [
          { id: "cadillac-0", wordId: "cadillac", index: 0, text: "ca" },
          { id: "cadillac-1", wordId: "cadillac", index: 1, text: "di" },
          { id: "cadillac-2", wordId: "cadillac", index: 2, text: "ll" },
          { id: "cadillac-3", wordId: "cadillac", index: 3, text: "ac" }
        ]
      },
      {
        id: "graffiti",
        label: "Graffiti",
        chunks: [
          { id: "graffiti-0", wordId: "graffiti", index: 0, text: "gr" },
          { id: "graffiti-1", wordId: "graffiti", index: 1, text: "af" },
          { id: "graffiti-2", wordId: "graffiti", index: 2, text: "fi" },
          { id: "graffiti-3", wordId: "graffiti", index: 3, text: "ti" }
        ]
      },
      {
        id: "statueofliberty",
        label: "Statue of Liberty",
        chunks: [
          { id: "statueofliberty-0", wordId: "statueofliberty", index: 0, text: "stat" },
          { id: "statueofliberty-1", wordId: "statueofliberty", index: 1, text: "ueo" },
          { id: "statueofliberty-2", wordId: "statueofliberty", index: 2, text: "fliber" },
          { id: "statueofliberty-3", wordId: "statueofliberty", index: 3, text: "ty" }
        ]
      },
      {
        id: "santacruz",
        label: "SantaCruz",
        chunks: [
          { id: "santacruz-0", wordId: "santacruz", index: 0, text: "san" },
          { id: "santacruz-1", wordId: "santacruz", index: 1, text: "tac" },
          { id: "santacruz-2", wordId: "santacruz", index: 2, text: "cr" },
          { id: "santacruz-3", wordId: "santacruz", index: 3, text: "uz" }
        ]
      },
      {
        id: "california",
        label: "California",
        chunks: [
          { id: "california-0", wordId: "california", index: 0, text: "cal" },
          { id: "california-1", wordId: "california", index: 1, text: "if" },
          { id: "california-2", wordId: "california", index: 2, text: "orn" },
          { id: "california-3", wordId: "california", index: 3, text: "ia" }
        ]
      },
      {
        id: "highwaylines",
        label: "HighwayLines",
        chunks: [
          { id: "highway-0", wordId: "highway", index: 0, text: "hig" },
          { id: "highway-1", wordId: "highway", index: 1, text: "hw" },
          { id: "highway-2", wordId: "highway", index: 2, text: "ayli" },
          { id: "highway-3", wordId: "highway", index: 3, text: "nes" }
        ]
      },
      {
        id: "northdakotaplains",
        label: "NorthDakotaPlains",
        chunks: [
          { id: "northdakota-0", wordId: "northdakota", index: 0, text: "nor" },
          { id: "northdakota-1", wordId: "northdakota", index: 1, text: "thdak" },
          { id: "northdakota-2", wordId: "northdakota", index: 2, text: "otapl" },
          { id: "northdakota-3", wordId: "northdakota", index: 3, text: "ains" }
        ]
      },
      {
        id: "southdakotabadlands",
        label: "SouthDakotaBadLands",
        chunks: [
          { id: "southdakota-0", wordId: "southdakota", index: 0, text: "sou" },
          { id: "southdakota-1", wordId: "southdakota", index: 1, text: "thdako" },
          { id: "southdakota-2", wordId: "southdakota", index: 2, text: "tabadla" },
          { id: "southdakota-3", wordId: "southdakota", index: 3, text: "nds" }
        ]
      },
      {
        id: "PacificCoast",
        label: "PacificCoast",
        chunks: [
          { id: "newmexico-0", wordId: "newmexico", index: 0, text: "pac" },
          { id: "newmexico-1", wordId: "newmexico", index: 1, text: "ific" },
          { id: "newmexico-2", wordId: "newmexico", index: 2, text: "co" },
          { id: "newmexico-3", wordId: "newmexico", index: 3, text: "ast" }
        ]
      },
      {
        id: "thecarolinas",
        label: "TheCarolinas",
        chunks: [
          { id: "carolina-0", wordId: "carolina", index: 0, text: "theca" },
          { id: "carolina-1", wordId: "carolina", index: 1, text: "roli" },
          { id: "carolina-2", wordId: "carolina", index: 2, text: "an" },
          { id: "carolina-3", wordId: "carolina", index: 3, text: "as" }
        ]
      },
      {
        id: "redwood",
        label: "Redwood",
        chunks: [
          { id: "redwood-0", wordId: "redwood", index: 0, text: "re" },
          { id: "redwood-1", wordId: "redwood", index: 1, text: "dwo" },
          { id: "redwood-2", wordId: "redwood", index: 2, text: "odfo" },
          { id: "redwood-3", wordId: "redwood", index: 3, text: "rest" }
        ]
      },
      {
        id: "route",
        label: "Route",
        chunks: [
          { id: "route-0", wordId: "route", index: 0, text: "sta" },
          { id: "route-1", wordId: "route", index: 1, text: "te" },
          { id: "route-2", wordId: "route", index: 2, text: "rou" },
          { id: "route-3", wordId: "route", index: 3, text: "tes" }
        ]
      },
      {
        id: "easternseaboard",
        label: "EasternSeaboard",
        chunks: [
          { id: "ocean-0", wordId: "ocean", index: 0, text: "easter" },
          { id: "ocean-1", wordId: "ocean", index: 1, text: "nse" },
          { id: "ocean-2", wordId: "ocean", index: 2, text: "abo" },
          { id: "ocean-3", wordId: "ocean", index: 3, text: "ard" }
        ]
      },
      {
        id: "mountainswitchbacks",
        label: "MountainSwitchBacks",
        chunks: [
          { id: "mountains-0", wordId: "mountains", index: 0, text: "mount" },
          { id: "mountains-1", wordId: "mountains", index: 1, text: "ainswi" },
          { id: "mountains-2", wordId: "mountains", index: 2, text: "itchba" },
          { id: "mountains-3", wordId: "mountains", index: 3, text: "cks" }
        ]
      },
      {
        id: "lakeviews",
        label: "LakeViews",
        chunks: [
          { id: "lakes-0", wordId: "lakes", index: 0, text: "lak" },
          { id: "lakes-1", wordId: "lakes", index: 1, text: "ev" },
          { id: "lakes-2", wordId: "lakes", index: 2, text: "ie" },
          { id: "lakes-3", wordId: "lakes", index: 3, text: "ws" }
        ]
      },
      {
        id: "riverbridges",
        label: "RiverBridges",
        chunks: [
          { id: "rivers-0", wordId: "rivers", index: 0, text: "riv" },
          { id: "rivers-1", wordId: "rivers", index: 1, text: "erb" },
          { id: "rivers-2", wordId: "rivers", index: 2, text: "rid" },
          { id: "rivers-3", wordId: "rivers", index: 3, text: "ges" }
        ]
      },
      {
        id: "roofrackCarrier",
        label: "RoofRackCarrier",
        chunks: [
          { id: "drive-0", wordId: "drive", index: 0, text: "roo" },
          { id: "drive-1", wordId: "drive", index: 1, text: "ofrac" },
          { id: "drive-2", wordId: "drive", index: 2, text: "kcar" },
          { id: "drive-3", wordId: "drive", index: 3, text: "rier" }
        ]
      },
      {
        id: "chicagowind",
        label: "ChicagoWind",
        chunks: [
          { id: "chicago-0", wordId: "chicago", index: 0, text: "chic" },
          { id: "chicago-1", wordId: "chicago", index: 1, text: "cag" },
          { id: "chicago-2", wordId: "chicago", index: 2, text: "ow" },
          { id: "chicago-3", wordId: "chicago", index: 3, text: "ind" }
        ]
      },
      {
        id: "atlantaskyline",
        label: "AtlantaSkyline",
        chunks: [
          { id: "atlanta-0", wordId: "atlanta", index: 0, text: "atla" },
          { id: "atlanta-1", wordId: "atlanta", index: 1, text: "antas" },
          { id: "atlanta-2", wordId: "atlanta", index: 2, text: "kyl" },
          { id: "atlanta-3", wordId: "atlanta", index: 3, text: "ine" }
        ]
      },
      {
        id: "newyorkcitylights",
        label: "NewYorkCityLights",
        chunks: [
          { id: "newyork-0", wordId: "newyork", index: 0, text: "newy" },
          { id: "newyork-1", wordId: "newyork", index: 1, text: "orkci" },
          { id: "newyork-2", wordId: "newyork", index: 2, text: "tyl" },
          { id: "newyork-3", wordId: "newyork", index: 3, text: "ights" }
        ]
      },
      {
        id: "losangeles",
        label: "LosAngeles",
        chunks: [
          { id: "losangeles-0", wordId: "losangeles", index: 0, text: "lo" },
          { id: "losangeles-1", wordId: "losangeles", index: 1, text: "san" },
          { id: "losangeles-2", wordId: "losangeles", index: 2, text: "gel" },
          { id: "losangeles-3", wordId: "losangeles", index: 3, text: "es" }
        ]
      },
      {
        id: "phoenixsun",
        label: "PhoenixSun",
        chunks: [
          { id: "phoenix-0", wordId: "phoenix", index: 0, text: "pho" },
          { id: "phoenix-1", wordId: "phoenix", index: 1, text: "eni" },
          { id: "phoenix-2", wordId: "phoenix", index: 2, text: "xs" },
          { id: "phoenix-3", wordId: "phoenix", index: 3, text: "un" }
        ]
      },
    
      {
        id: "detroitcity",
        label: "DetroitCity",
        chunks: [
          { id: "detroit-0", wordId: "detroit", index: 0, text: "detr" },
          { id: "detroit-1", wordId: "detroit", index: 1, text: "oi" },
          { id: "detroit-2", wordId: "detroit", index: 2, text: "tc" },
          { id: "detroit-3", wordId: "detroit", index: 3, text: "ity" }
        ]
      },
    
      {
        id: "gasstations",
        label: "GasStations",
        chunks: [
          { id: "gasstation-0", wordId: "gasstation", index: 0, text: "ga" },
          { id: "gasstation-1", wordId: "gasstation", index: 1, text: "st" },
          { id: "gasstation-2", wordId: "gasstation", index: 2, text: "ati" },
          { id: "gasstation-3", wordId: "gasstation", index: 3, text: "ons" }
        ]
      },
      {
        id: "playlists",
        label: "Play List",
        chunks: [
          { id: "playlist-0", wordId: "playlist", index: 0, text: "pl" },
          { id: "playlist-1", wordId: "playlist", index: 1, text: "ay" },
          { id: "playlist-2", wordId: "playlist", index: 2, text: "lis" },
          { id: "playlist-3", wordId: "playlist", index: 3, text: "ts" }
        ]
      },
    
     
      {
        id: "roadsidemotels",
        label: "RoadsideMotels",
        chunks: [
          { id: "roadside-0", wordId: "roadside", index: 0, text: "roa" },
          { id: "roadside-1", wordId: "roadside", index: 1, text: "dsid" },
          { id: "roadside-2", wordId: "roadside", index: 2, text: "edmo" },
          { id: "roadside-3", wordId: "roadside", index: 3, text: "tels" }
        ]
      },
      {
        id: "reststopbreak",
        label: "RestStopBreak",
        chunks: [
          { id: "motel-0", wordId: "motel", index: 0, text: "res" },
          { id: "motel-1", wordId: "motel", index: 1, text: "tst" },
          { id: "motel-2", wordId: "motel", index: 2, text: "topb" },
          { id: "motel-3", wordId: "motel", index: 3, text: "reak" }
        ]
      },
      {
        id: "roadatlas",
        label: "RoadAtlas",
        chunks: [
          { id: "atlas-0", wordId: "atlas", index: 0, text: "ro" },
          { id: "atlas-1", wordId: "atlas", index: 1, text: "ad" },
          { id: "atlas-2", wordId: "atlas", index: 2, text: "at" },
          { id: "atlas-3", wordId: "atlas", index: 3, text: "las" }
        ]
      },
      {
        id: "billboards",
        label: "Billboards",
        chunks: [
          { id: "billboard-0", wordId: "billboard", index: 0, text: "bi" },
          { id: "billboard-1", wordId: "billboard", index: 1, text: "llb" },
          { id: "billboard-2", wordId: "billboard", index: 2, text: "oar" },
          { id: "billboard-3", wordId: "billboard", index: 3, text: "ds" }
        ]
      }
    ]
  },

  burgers: {
    label: "Burgers",
    words: [
      // fill with burger words later (same structure)
    ]
  }
};

// --- 2. STATE -----------------------------------------------------------

const tilePoolEl = document.getElementById("tile-pool");
const rowsContainerEl = document.getElementById("rows-container");
const messageEl = document.getElementById("message");
const resetBtn = document.getElementById("reset-btn");
const nextBatchBtn = document.getElementById("next-batch-btn");
const currentThemeLabelEl = document.getElementById("current-theme-label");
const themeButtons = document.querySelectorAll(".theme-btn");
const viewWordsBtn = document.getElementById("view-words-btn");
const modalBackdrop = document.getElementById("word-modal");
const modalTitleEl = document.getElementById("modal-title");
const modalListEl = document.getElementById("word-list");
const closeModalBtn = document.getElementById("close-modal-btn");

const BATCH_SIZE = 4;
let currentThemeKey = "plants";
let allWords = [];
let activeWords = [];
let batchStartIndex = 0;
let rows = [];              // rows[rowIndex][slotIndex] = tileId or null
let tileLookup = {};
let selectedTileId = null;
let completedWords = new Set();

// --- 3. UTILS -----------------------------------------------------------

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function clearElement(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

// --- 4. THEME HANDLING --------------------------------------------------

function setTheme(themeKey) {
  const theme = THEMES[themeKey];
  if (!theme || !theme.words.length) {
    allWords = [];
    activeWords = [];
    clearElement(tilePoolEl);
    clearElement(rowsContainerEl);
    messageEl.textContent = "This theme doesn’t have words yet. Add some in wordgame.js.";
    currentThemeLabelEl.textContent = theme ? theme.label : "";
    nextBatchBtn.disabled = true;
    return;
  }

  currentThemeKey = themeKey;
  allWords = theme.words;
  batchStartIndex = 0;
  nextBatchBtn.disabled = allWords.length <= BATCH_SIZE;
  loadBatch(batchStartIndex);
}

themeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    themeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const key = btn.dataset.theme;
    setTheme(key);
  });
});

// --- 5. INITIAL SETUP ---------------------------------------------------

function buildTileLookup() {
  tileLookup = {};
  activeWords.forEach(word => {
    word.chunks.forEach(chunk => {
      tileLookup[chunk.id] = chunk;
    });
  });
}

function renderTiles() {
  clearElement(tilePoolEl);
  const allChunks = activeWords.flatMap(word => word.chunks);
  const shuffled = shuffle(allChunks);

  shuffled.forEach(chunk => {
    const btn = document.createElement("button");
    btn.className = "tile";
    btn.textContent = chunk.text;
    btn.dataset.tileId = chunk.id;
    btn.addEventListener("click", () => onTileClick(btn));
    tilePoolEl.appendChild(btn);
  });
}

function renderRows() {
  clearElement(rowsContainerEl);
  rows = activeWords.map(() => Array(4).fill(null));
  completedWords.clear();

  activeWords.forEach((word, rowIndex) => {
    const rowEl = document.createElement("div");
    rowEl.className = "row";
    rowEl.dataset.rowIndex = rowIndex;

    const slotsEl = document.createElement("div");
    slotsEl.className = "slots";

    for (let i = 0; i < 4; i++) {
      const slotEl = document.createElement("div");
      slotEl.className = "slot";
      slotEl.dataset.rowIndex = rowIndex;
      slotEl.dataset.slotIndex = i;
      slotEl.textContent = "Place tile";
      slotEl.addEventListener("click", () => onSlotClick(slotEl));
      slotsEl.appendChild(slotEl);
    }

    rowEl.appendChild(slotsEl);
    rowsContainerEl.appendChild(rowEl);
  });
}

function resetGame() {
  selectedTileId = null;
  messageEl.textContent = "";
  buildTileLookup();
  renderRows();
  renderTiles();
  updateWinMessage();
}

// --- 6. INTERACTION -----------------------------------------------------

function onTileClick(tileBtn) {
  const tileId = tileBtn.dataset.tileId;

  // If tile is in the pool, selecting/deselecting
  if (tileBtn.parentElement === tilePoolEl) {
    if (selectedTileId === tileId) {
      selectedTileId = null;
      tileBtn.classList.remove("selected");
    } else {
      clearSelectedTileHighlight();
      selectedTileId = tileId;
      tileBtn.classList.add("selected");
    }
  } else {
    // Tile is in a slot: send it back to pool
    const slotEl = tileBtn.parentElement;
    const rowIndex = Number(slotEl.dataset.rowIndex);
    const slotIndex = Number(slotEl.dataset.slotIndex);

    rows[rowIndex][slotIndex] = null;
    slotEl.textContent = "Place tile";
    slotEl.classList.remove("filled");

    const wordId = tileLookup[tileId].wordId;
    completedWords.delete(wordId);
    const rowEl = slotEl.closest(".row");
    rowEl.classList.remove("completed");

    tilePoolEl.appendChild(tileBtn);
    tileBtn.classList.remove("selected");
    selectedTileId = null;

    updateWinMessage();
  }
}

function onSlotClick(slotEl) {
  const rowIndex = Number(slotEl.dataset.rowIndex);
  const slotIndex = Number(slotEl.dataset.slotIndex);

  if (!selectedTileId) return;

  const existingTileId = rows[rowIndex][slotIndex];
  if (existingTileId) {
    const existingTileBtn = findTileButton(existingTileId);
    if (existingTileBtn) {
      tilePoolEl.appendChild(existingTileBtn);
      existingTileBtn.classList.remove("selected");
    }
  }

  const tileBtn = findTileButton(selectedTileId);
  if (!tileBtn) return;

  rows[rowIndex][slotIndex] = selectedTileId;
  slotEl.textContent = "";
  slotEl.appendChild(tileBtn);
  slotEl.classList.add("filled");

  selectedTileId = null;
  tileBtn.classList.remove("selected");

  checkRow(rowIndex);
}

function findTileButton(tileId) {
  return document.querySelector(`.tile[data-tile-id="${tileId}"]`);
}

function clearSelectedTileHighlight() {
  document.querySelectorAll(".tile.selected").forEach(btn => {
    btn.classList.remove("selected");
  });
}

function openModal() {
  if (!allWords.length) return;
  modalTitleEl.textContent = `${THEMES[currentThemeKey].label} — full list`;
  clearElement(modalListEl);
  allWords.forEach(word => {
    const li = document.createElement("li");
    li.textContent = word.label || word.id;
    modalListEl.appendChild(li);
  });
  modalBackdrop.classList.add("show");
}

function closeModal() {
  modalBackdrop.classList.remove("show");
}

// --- 7. BATCH HANDLING --------------------------------------------------

function loadBatch(startIndex) {
  batchStartIndex = startIndex;
  activeWords = allWords.slice(batchStartIndex, batchStartIndex + BATCH_SIZE);

  const start = batchStartIndex + 1;
  const end = Math.min(batchStartIndex + BATCH_SIZE, allWords.length);
  currentThemeLabelEl.textContent = `${THEMES[currentThemeKey].label} — words ${start}-${end} of ${allWords.length}`;

  nextBatchBtn.disabled = allWords.length <= BATCH_SIZE || end === allWords.length;
  resetGame();
}

function goToNextBatch() {
  const nextStart = batchStartIndex + BATCH_SIZE;
  if (nextStart >= allWords.length) {
    // wrap back to first set
    loadBatch(0);
  } else {
    loadBatch(nextStart);
  }
}

// --- 7. WORD CHECKING ---------------------------------------------------

function checkRow(rowIndex) {
  const row = rows[rowIndex];
  if (row.some(id => id === null)) return;

  const firstTile = tileLookup[row[0]];
  const targetWordId = firstTile.wordId;

  const allSameWord = row.every(tileId => {
    return tileLookup[tileId].wordId === targetWordId;
  });

  if (!allSameWord) {
    messageEl.textContent = "That row doesn't form a correct word. Try rearranging!";
    return;
  }

  const inCorrectOrder = row.every((tileId, pos) => {
    return tileLookup[tileId].index === pos;
  });

  if (!inCorrectOrder) {
    messageEl.textContent = "All pieces are from the same word but in the wrong order.";
    return;
  }

  handleCorrectWord(rowIndex, targetWordId);
}

function handleCorrectWord(rowIndex, wordId) {
  const rowEl = rowsContainerEl.querySelector(`.row[data-row-index="${rowIndex}"]`);
  if (rowEl) {
    rowEl.classList.add("completed");
  }
  completedWords.add(wordId);
  messageEl.textContent = "Nice! You completed a word.";
  updateWinMessage();
}

function updateWinMessage() {
  if (!activeWords.length) return;
  if (completedWords.size === activeWords.length) {
    const hasAnotherBatch = batchStartIndex + BATCH_SIZE < allWords.length;
    messageEl.textContent = hasAnotherBatch
      ? "Great! Tap Next 4 Words for the next set."
      : "You completed all words in this theme! 🎉";
    nextBatchBtn.disabled = !hasAnotherBatch && allWords.length <= BATCH_SIZE;
  } else if (completedWords.size === 0) {
    messageEl.textContent = "";
  }
}

// --- 8. START -----------------------------------------------------------

resetBtn.addEventListener("click", resetGame);
nextBatchBtn.addEventListener("click", goToNextBatch);
viewWordsBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});

// initialize with default theme
setTheme("plants");
