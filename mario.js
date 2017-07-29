
printPyramid(3);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {

    var line = "#";

    for (var i = 1; i <= height; i++) {

      for (var j = height - i; j > 0; j--) {
        line = " " + line;
      }

      for (var k = i; k > 0; k--) {
        line += "#"
      }

      console.log(line);
      line = "#";
    }

}
