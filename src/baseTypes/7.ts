/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  sunday = "sunday",
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
}

function isWeekend(day: string): boolean {
  if (day === Days.sunday || day === Days.saturday) {
    return true;
  }
  return false;
}

// ------------------------------------OR-------------------------
// enum Days {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }
// function isWeekend(day: Weekday): boolean {
//   return day === Weekday.Saturday || day === Weekday.Sunday;
// }
