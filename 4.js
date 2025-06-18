const puzzle = document.getElementById("puzzle");
const successMessage = document.getElementById("success-message");
const total = 9;

// Create and append puzzle pieces
let tiles = [];

for (let i = 0; i < total; i++) {
  const tile = document.createElement("div");
  tile.classList.add("puzzle-piece");

  const row = Math.floor(i / 3);
  const col = i % 3;

  tile.style.backgroundPosition = `-${col * 150}px -${row * 150}px`;
  tile.dataset.correct = i;
  tile.dataset.current = i;

  tile.addEventListener("click", () => handleClick(tile));
  tiles.push(tile);
}

// Shuffle tiles
tiles = shuffleArray(tiles);

// Re-assign current index after shuffle
tiles.forEach((tile, i) => {
  tile.dataset.current = i;
  puzzle.appendChild(tile);
});

// Shuffle function
function shuffleArray(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Tile click logic
let selectedTile = null;

function handleClick(tile) {
  if (!selectedTile) {
    selectedTile = tile;
    tile.style.outline = "2px solid hotpink";
  } else {
    swapTiles(selectedTile, tile);
    selectedTile.style.outline = "none";
    selectedTile = null;
    checkComplete();
  }
}

// Swap function
function swapTiles(tile1, tile2) {
  const tempBg = tile1.style.backgroundPosition;
  const tempCurrent = tile1.dataset.current;

  tile1.style.backgroundPosition = tile2.style.backgroundPosition;
  tile1.dataset.current = tile2.dataset.current;

  tile2.style.backgroundPosition = tempBg;
  tile2.dataset.current = tempCurrent;
}

// Check for completion
function checkComplete() {
  const allTiles = document.querySelectorAll(".puzzle-piece");
  const isComplete = Array.from(allTiles).every(
    (tile, i) => tile.dataset.correct === tile.dataset.current
  );
  if (isComplete) {
    successMessage.style.display = "block";
  }
}
