### Thinkful Recursion Drills
Create a Github repo called DSA-Recursion. Save all this work in the repo and submit the repo via the submission box at the end of this lesson.

Use recursion to solve the following problems. These problems can also be solved non-recursively; you'll be tempted to use tools that you already understand more deeply, but you must solve each one using recursion. For the first part of these exercises, without using any code, you are expected to identify the followings:

What is the input to the program
What is the output of the program
What is the input to each recursive calls
What is the output of each recursive calls
Start each problems by understanding the problem and coming up with some sample input and output. In some of the drills we have provided a sample input and output for your convenience.

### Counting Sheep
Write a recursive function that counts how many sheep jumps over the fence. Your program should take a number as an input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jump over the fence" until no more sheep are left.

Input: 3
Output:
3 - Another sheep jump over the fence
2 - Another sheep jump over the fence
1 - Another sheep jump over the fence

### Array Double
Write a function that takes an array as input which contains an unknown set of numbers, and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. For example,

Input: [1, 2, 3]
Output: [2, 4, 6]

### Reverse String
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

### nth Triangular Number
Calculates the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

                          *
            *           *    *
*     |   *   *  |   *    *    *  |

 1st       2nd          3rd             nth?

### String Splitter
Split a string based upon a separator (similar to String.prototype.split).

### Binary Representation
Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

### Factorial
Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120

### Fibonacci
Write a recursive function that prints the fibonacci sequence of a given number. The fibonnaci sequence a series of numbers in which each number is the sum of the two preceding numbers. For example the 7th fibonacci number in a fibonaci sequence is 13. The sequence looks as follows: 1 1 2 3 5 8 13.

### Anagrams
An anagram is any word or phrase that exactly reproduces the letters in another order. Write a function that creates an anagram (listing all the rearrangements of a word) of a given word. For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, and non-words like tsae.

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given east, use e as a prefix and you would place e in front of all six permutations of ast — ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. Continue this way until you find all the anagrams for east. There should be 24 of them.

### Animal Hierarchy
Step through the code and find the input to the program, input to each recursive calls, output of each recursive calls and the output of the program. The purpose of this exercise is not for you to copy paste the code and find out the output but rather step through each line, analyze each step to understand how recursion works.

const animalHierarchy = [
    {id: 'Animals', parent: null},
    {id: 'Mammals', parent: 'Animals'},
    {id: 'Dogs', parent:'Mammals' },
    {id: 'Cats', parent:'Mammals' },
    {id: 'Golden Retriever', parent: 'Dogs'},
    {id: 'Husky', parent:'Dogs' },
    {id: 'Bengal', parent:'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}
console.log(traverse(animalHierarchy, null));
### Organization Chart
Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy.

Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes

### Iterative version
Solve all the questions above iteratively.
