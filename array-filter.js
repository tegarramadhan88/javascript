let peoples = [
  {
    name: "Andi",
    gender: "Male",
  },
  {
    name: "Siti",
    gender: "Female",
  },
  {
    name: "Cindy",
    gender: "Female",
  },
];

let Female = peoples.filter((peoples) => {
  return peoples.gender === "Female";
});

console.log(Female);
