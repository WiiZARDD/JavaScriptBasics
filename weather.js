/*
Deep in his mountainside meteorology lab, the mad scientist Kelvin has mastered weather prediction.
Recently, Kelvin began publishing his weather forecasts on his website. However, there’s a problem: All of his forecasts describe the temperature in Kelvin.
With our knowledge of JavaScript, let’s convert Kelvin to Celsius, and then to Fahrenheit.
For example, 283K converts to 10°C, which converts to 50°F.
Reference: https://i.imgur.com/9QpfwyG.png
*/

// -----------------------------------------------------------

const kelvin = 293;
const celsius = kelvin - 273;
console.log(celsius);
console.log('Calculated Fahrenheit: ' + (20 * (9/5) + 32));
const fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');

/*
Celsius: 20
Formula: Fahrenheit = Celsius * (9/5) + 32
-> calculate Fahrenheit

Fahrenheit = 20 * (9/5) + 32
*/

// -----------------------------------------------------------

/*
Final code should now look like this:

// 1. The forecast today is 293 Kelvin, and that value won’t change:
const kelvin = 293;
// 2. Converts kelvin to celsius by subtracting 273
const celsius = kelvin - 273;
// 3. Log celsius to console
console.log(celsius);
// 4. Calculate Fahrenheit
console.log('Calculated Fahrenheit: ' + (20 * (9/5) + 32));
// 5. Value of Fahrenheit stored inside of variable
const fahrenheit = Math.floor(celsius * (9/5) + 32);
// 6. Log the tempature converted to Fahrenheit
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');

Console output should read:

> 20
> Calculated Fahrenheit: 68
> The temperature is 68 degrees Fahrenheit.
*/
