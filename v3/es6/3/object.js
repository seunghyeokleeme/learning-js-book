const obj = {};
obj.color = "yellow";
obj["not an identifier"] = 3; // 3
obj["color"]; // "yellow"

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE]; // 8

const sam1 = {
  name: "Sam",
  age: 4
};

const sam2 = { name: "Sam", age: 4 }; // 한줄로 선언했습니다.

const sam3 = {
  name: "Sam",
  classification: {
    kingdom: "Anamalia",
    phylum: "Chordata",
    class: "Mamalia",
    order: "Carnivoria",
    family: "Felidae",
    subfamily: "Felinae",
    genus: "Felis",
    species: "catus"
  }
};
