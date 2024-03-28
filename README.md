# Web Lab 18 (CEITI)

Repositories with solved tasks.

## Tasks
  
1. User enters numbers separated by spaces. Determine how many different numbers are in it.

2. Given a text. Determine how many different words are contained in this text. A word is a sequence of non-space characters appearing consecutively; words are separated by one or more spaces or end-of-line characters.

3. Given a dictionary consisting of word pairs. Each word is a synonym to its paired word. All words in the dictionary are different. For a word from the dictionary, recorded in the last line, determine its synonym.

4. 1. Create an object `city1` (`let city1 = {}`), specify its properties: `name` (the name of the city, string) with the value "CityN" and `population` (the population of the city, number) with the value of 10 million.
      
   2. Create an object `city2` using the notation `{name: "CityM", population: 1e6}`.
   
   3. Create methods `getName()` for objects `city1` and `city2`, which will return the corresponding city names.
   
   4. Create the method `exportStr()` for each of the objects. This method should return information about the city in the format "name=CityN\npopulation=10000000\n". For the second city, the string will contain its own values. Note: you can access each property through a for/in loop, but do not return object methods.
