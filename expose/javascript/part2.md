1. 3 - var i can be accessed anywhere in the function 
2. 150 - var discountedPrice can be accessed anywhere in the function and doesn't belong only to the for loop 
3. 150 - finalPrice is var and can be accessed anywhere in the function 
4. [50, 100, 150] - There are no errors so the code functions normally where the for loop takes each value in prices and discounts them by 50%

5. Reference Error - i is a let variable and belongs only in the scope of the for loop and can't be printed outside of it
6. Reference Error - discountedPrice belongs only in the for loop scope and can't be printed outside of it 
7. 150 - finalPrice is declared as let and in the scope of the function and can thus be printed 
8. [50, 100, 150] - Each variable is accessed according to their scope and will return the same thing as #4 where the for loop takes each value in prices and discounts them by 50%

9. ReferenceError - i is a let variable and belongs only in the scope of the for loop and can't be printed outside of it
10. 3 - the length const never changed and thus gets printed out and the length of the array is 3
11. [ 50, 100, 150 ] - Same as #8 and #4 where no errors in accessing variables so the loop goes through each variable and discounts the price by 50%

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

18. Check part2-question18.js

19. 1 4 3 2 