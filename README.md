# Javabuzz
My first javascript files

## What does it do?
- Prints the numbers from 1 to 100 in the console BUT:
    - If a number is divisible by 3 print "Java" instead
    - If a number is divisible by 5 print "Buzz" instead
    - If a number is divisible by 3 and 5 print "JavaBuzz" instead

## Learning Objectives covered
- Use Jasmine to Test-Drive Development
- Write FizzBuzz in JavaScript, fully test-driven
- Refactor the code so it's clean.

## Credits
[Walkthrough for jasmine TDD process for Javabuzz](https://github.com/makersacademy/course/blob/master/pills/javascript&JasminePill.md)

[Debugging and console.log loop example](https://github.com/makersacademy/skills-workshops/tree/master/javascript_fundamentals/following_the_flow_and_getting_visibility_in_javascript_es6)

## Interacting with this code:
1. Clone the repo 
2. cd into the directory
3. Open SpecRunner.html in a browser `open SpecRunner.html`
4. In the same browser window where your SpecRunner.html is loaded up, open your console (Google Chrome shortcut is cmd + option + i). 
  
  Because of the console.log loop, you will see the javabuzz outputs for numbers 1-100. 
  
  If you also want to check individual numbers, you can initialise an instance of `Javabuzz();`  in the console prompt:

   `var javabuzz = new Javabuzz();`  


   and then throw some numbers at it:

   ```
    >  javabuzz.says(3)
    <- "Java"

    >  javabuzz.says(5)
    <- "Buzz"

    >  javabuzz.says(15)
    <- "Javabuzz"

    >  javabuzz.says(1)
    <- 1
   ```

