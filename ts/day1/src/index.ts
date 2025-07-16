/**
 * ==============================
 * LESSON: Nullable
 * ==============================
 */
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  console.log("name is null or undefined");
  // if (name) {
  //   console.log(name.toUpperCase());
  // } else {
  //   console.log("name is null");
  // }
}

greet(null);
greet(undefined);

// EXCERCISE: Nullable

interface UserProfile {
  id: number;
  name: string;
  email: string | null;
  phone?: string;
}

function printUserInfo(user: UserProfile) {
  console.log(`User ID: ${user.id}`);
  console.log(`User name: ${user.name}`);

  const msg = user.email !== null ? user.email : "Email not provided";
  console.log(`User email: ${msg}`);


  console.log(`User phone: ${user.phone !== undefined ? user.phone : "Phone not provided"}`);
}

const user1: UserProfile = {
  id: 1,
  name: "Jason",
  email: "jason@gmail.com",
  phone: "0123456789",
};
const user2: UserProfile = {
  id: 2,
  name: "Michael",
  email: null,
};
const user3: UserProfile = {
  id: 3,
  name: "Potter",
  email: "potter@gmail.com",
};

printUserInfo(user1);
printUserInfo(user2);
printUserInfo(user3);
