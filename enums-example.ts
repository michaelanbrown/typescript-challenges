//Enums allow you to define a set of named constants.
// The challenge is to create an enum for days of the week and write a function that returns the full name of a given day.

enum DaysOfWeek {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday',
  }
  
  function getDayFullName(day: DaysOfWeek): string {
    return day;
  }
  
  console.log(getDayFullName(DaysOfWeek.Sunday)); // Output: Sunday

// Make enums for months in a year

enum MonthsInAYear {
  One = 'January',
  Two = 'February',
  Three = 'March',
  Four = 'April',
  Five = 'May',
  Six = 'June',
  Seven = 'July',
  Eight = 'August',
  Nine = 'September',
  Ten = 'October',
  Eleven = 'November',
  Twelve = 'December'
}