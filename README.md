# Javabuzz
My first javascript files

## What does it do?
- If a number is divisible by 3 print "Java" instead
- If a number is divisible by 5 print "Buzz" instead
- If a number is divisible by 3 and 5 print "JavaBuzz" instead

## Learning Objectives covered
- Use Jasmine to Test-Drive Development
- Write FizzBuzz in JavaScript, fully test-driven
- Refactor the code so it's clean.

## Credits
https://github.com/makersacademy/course/blob/master/pills/javascript&JasminePill.md 

## Interacting with this code:
1. Clone the repo 
2. cd into the directory
3. Open SpecRunner.html in a browser `open SpecRunner.html`
4. In the same browser window where your SpecRunner.html is loaded up, open your console (Google Chrome shortcut is cmd + option + i) and at the prompt intitialise an instance of `Javabuzz();` :

```
var javabuzz = new Javabuzz();
```
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

