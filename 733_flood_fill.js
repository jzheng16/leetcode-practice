/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  // sounds like recursion..
  // base case is when we reach the edge? aka if i reaches 0 and j reaches 0 or i reaches images.length and y is 0 and i is 0 and j is images.length or both i and j are images.length?
  const originalColor = image[sr][sc];

	// Return early if color of the original matches the designated color?
	if (originalColor === color) return image;

  //image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2

  function fill(i, j) {
   
    if (
      j < 0 ||
      j >= image[0].length ||
      i < 0 ||
      i >= image.length ||
      image[i][j] !== originalColor
    ) {
      return;
    }

    
    image[i][j] = color;
   

    fill(i, j + 1);
    fill(i, j - 1);
    fill(i - 1, j);
    fill(i + 1, j);
  }

  fill(sr, sc);

  return image;
};

floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);
