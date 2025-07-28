// khởi tạo 5 triệu data.

function geneateRandomCustomer() {
  const specificNames = [
    "John",
    "Lancelot",
    "Michael",
    "Arthur",
    "Washington",
    "Gabriel",
    "Alizabeth",
    "Bella",
    "Leonardo Da Vinci",
    "Abraham Lincoln",
    "Lucky Luke",
    "Edward",
  ];

  const professions = [
    "Software Engineer",
    "Data Scientist",
    "Game Developer",
    "DevOps Engineer",
    "CyberSecurity Specialist",
  ];

  const randomName =
    specificNames[Math.floor(Math.random() * specificNames.length)];
  const randomAge = Math.floor(Math.random() * 50) + 20;
  const randomAddress = "Address " + Math.floor(Math.random() * 1000);
  const randomEmail =
    randomName.toLowerCase().replace(/ /g, "") + "@vtc.edu.vn";
  const randomPhone =
    "+84" + "90" + (Math.floor(Math.random() * 10_000_000) + 10_000_000);
  const randomProfessions =
    professions[Math.floor(Math.random() * professions.length)];

  return {
    name: randomName,
    age: randomAge,
    address: randomAddress,
    email: randomEmail,
    phoneNumber: randomPhone,
    professions: randomProfessions,
  };
}
