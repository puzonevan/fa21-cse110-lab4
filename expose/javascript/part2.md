1. 3 
2. 150
3. 150
4. [50, 100, 150] -
5. Reference Error - i is a let variable and belongs only in the scope of the for loop and can't be printed outside of it
6. Reference Error - discountedPrice belongs only in the for loop scope and can't be printed outside of it 
7. 150 - 
8. [50, 100, 150] -
9. ReferenceError - i is a let variable and belongs only in the scope of the for loop and can't be printed outside of it
10. 3 - 
11. [ 50, 100, 150 ] - 
12. 
    1. student.name
    2. student['Grad Year']
    3. student.greeting()
    4. student['Favorite Teacher'].name
    5. student.courseLoad[0]

13. Arithmetic 
    1. 32 - integers map to string representation 
    2. 1 - unlike the last example where + was a concatenation, the - is now subtraction and performs arithmetic 
    3. 3 - null is mathematically equal to 0
    4. 3null - null is treated as a string 
    5. 4 - true is mathematically equal to 1
    6. 0 - false mathematically is equal to 0 and so is null 
    7. 3undefined - undefined is treated as a concatenated string 
    8. NaN - null becomes 0 mathematically, but undefined becomes NaN mathematically 
14. Comparison
    1. true - string becomes a number
    2. false - 2 is lexicographically larger than 1 in the '12' 
    3. true - loose equality and string is converted to number 
    4. false - strict equality checks data type 
    5. false - true is converted to 1 and still not equal to 2
    6. true - 2 is casted to boolean and any value greater than 0 casted to boolean will be true 
15. == vs. ====: Simply put, == is loose equality and does not check for data type. For example 1 == '1' is true because the string would just be converted to a number and the data type doesn't matter. === is strict equality and does check data type. The data type in the left must be the same as the right.

16. Check part2-question16.js

17. [2, 4, 6] - modify array is called with arguments [1, 2, 3] and doSomething the function. It then loops through each value in the array. in each iteration the callback function is being called which is the doSomething function. This function returns the current number in the array multiplied by 2. It then pushes that new value in a new array. The new array is returned after the for loop. 

18. 
19. 1 4 3 2 