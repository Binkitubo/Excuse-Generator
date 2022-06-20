/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [
    "giraffe",
    "bird",
    "monkey",
    "dog",
    "police officer",
    "teacher"
  ];
  let action = ["broke my", "bit my", "ate my", "stole my", "took my"];
  let possesion = ["homework", "lunch", "phone", "car", "clothes"];
  let where = [
    "in my house",
    "at school",
    "in the street",
    "in the theater",
    "at work"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let posIndx = Math.floor(Math.random() * possesion.length);
  let wheIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    possesion[posIndx] +
    " " +
    where[wheIndx]
  );
};
