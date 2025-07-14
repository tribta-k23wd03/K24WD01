/**
 * ==============================
 * LESSON: Objects
 * ==============================
 *
 */

const person = {
  myName: "Donald Trump",
  myAge: 85,
  speech: function () {
    console.log("Say hello");
  },
};

// cách 1:
person.speech; // syntax của method speed
person.speech(); // "Say hello"

const employee: { id: number; myName: string; myAge?: number } = {
  id: 1,
  myName: "Donald Trump",
//   myAge: 85,
};
