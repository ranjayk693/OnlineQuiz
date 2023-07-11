let index = 0;

const questions = [
  {
    ques: "What is JavaScript?",
    a: " JavaScript is a scripting language used to make the website interactive",
    b: "JavaScript is an assembly language used to make the website interactive",
    c: " JavaScript is a compiled language used to make the website interactive",
    d: " None of the mentioned",
    ans: "a",
  },
  {
    ques: "Which of the following is correct about JavaScript?",
    a: "JavaScript is an Object-Based language",
    b: "JavaScript is Assembly-language",
    c: "JavaScript is an Object-Oriented language",
    d: "JavaScript is a High-level language",
    ans: "a",
  },
  {
    ques: "Arrays in JavaScript are defined by which of the following statements?",
    a: "It is an ordered list of values",
    b: "It is an ordered list of objects",
    c: "It is an ordered list of string",
    d: "It is an ordered list of functions",
    ans: "a",
  },
  {
    ques: "Which of the following is not javascript data types?",
    a: "Null type",
    b: "Undefined type",
    c: "Number type",
    d: "All of the mentioned",
    ans: "d",
  },
];

let toal_marks = questions.length;
let current_marks = 0;

//functoin to set the page
const setPaper = () => {
  //if there is no question present and question is finished then it will return .
  if (questions.length == 0 || index >= questions.length) {
    console.log("your toal marks obtained is:" + current_marks);
    document.getElementById(
      "msg"
    ).innerHTML = `your Marks is ${current_marks} out of ${toal_marks}`;
    return;
  }

  //putting question and options in page dynamically
  console.log("questin is" + questions[index].ques);
  document.getElementById("main-question").innerText = questions[index].ques;
  document.getElementById("option_a").innerText = questions[index].a;
  document.getElementById("option_b").innerHTML = questions[index].b;
  document.getElementById("option_c").innerHTML = questions[index].c;
  document.getElementById("option_d").innerHTML = questions[index].d;

  //calculating the marks
  let option = document.getElementsByName("select");
  for (let j = 0; j < option.length; j++) {
    if (option[j].checked) {
      if (option[j].value == questions[index].ans) {
        // console.log("correct option is : " + questions[index].ans);
        current_marks++;
        // console.log("marks is:" + current_marks);
      }
      option[j].checked = false;
    }
  }
  index++;
};

//when click on submit button, it will automatically call this function.
document.getElementById("next").addEventListener("click", setPaper);

//It is called once when the page is load one time
setPaper();
