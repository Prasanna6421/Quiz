const quizData={
    html:[
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Makeup Language",
            "Hyper Text Markup Language",
            "Hyper Transfer Markup Language",
            "Highlevel Text Machine Language"
        ],
        answer: 1
    },
    {
        question: "Which tag is used for inserting a line break?",
        options: [
            "br",
            "break",
            "lb",
            "newline"
        ],
        answer: 0
    },
    {
        question: "Which tag is used to create a hyperlink?",
        options: [
            "link",
            "a",
            "href",
            "hyper"
        ],
        answer: 1
    },
    {
        question: "Which tag is used for the largest heading?",
        options: [
            "head",
            "h1",
            "h6",
            "heading"
        ],
        answer: 1
    },
    {
        question: "Which attribute is used to provide an alternate text for an image?",
        options: [
            "title",
            "alt",
            "src",
            "text"
        ],
        answer: 1
    },
    {
        question: "Which tag is used to create an ordered list?",
        options: [
            "ul",
            "ol",
            "li",
            "list"
        ],
        answer: 1
    },
    {
        question: "Which tag is used to display a paragraph?",
        options: [
            "para",
            "p",
            "paragraph",
            "pg"
        ],
        answer: 1
    },
    {
        question: "Which attribute specifies the URL of a link?",
        options: [
            "href",
            "link",
            "url",
            "src"
        ],
        answer: 0
    },
    {
        question: "Which tag is used to display an image?",
        options: [
            "img",
            "image",
            "picture",
            "src"
        ],
        answer: 0
    },
    {
        question: "Which tag is used to define a table row?",
        options: [
            "tr",
            "td",
            "table",
            "row"
        ],
        answer: 0
    }
],


css:[
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        answer: 0
    },
    {
        question: "Which property is used to change text color?",
        options: [
            "font-color",
            "color",
            "text-color",
            "font-style"
        ],
        answer: 1
    },
    {
        question: "Which property is used to change the background color?",
        options: [
            "background-color",
            "bgcolor",
            "color",
            "background-style"
        ],
        answer: 0
    },
    {
        question: "Which property controls the spacing between lines of text?",
        options: [
            "line-height",
            "text-spacing",
            "letter-spacing",
            "line-spacing"
        ],
        answer: 0
    },
    {
        question: "Which property is used to change the font size?",
        options: [
            "font-size",
            "text-size",
            "size",
            "font-style"
        ],
        answer: 0
    },
    {
        question: "Which property is used to make text bold?",
        options: [
            "font-weight",
            "text-bold",
            "weight",
            "font-style"
        ],
        answer: 0
    },
    {
        question: "Which property is used to remove the underline from links?",
        options: [
            "text-decoration",
            "underline-style",
            "link-style",
            "text-style"
        ],
        answer: 0
    },
    {
        question: "Which property is used to align text?",
        options: [
            "text-align",
            "align",
            "font-align",
            "content-align"
        ],
        answer: 0
    },
    {
        question: "Which property controls the width of an element?",
        options: [
            "width",
            "element-width",
            "size",
            "max-width"
        ],
        answer: 0
    },
    {
        question: "Which property adds space inside an element?",
        options: [
            "padding",
            "margin",
            "spacing",
            "border-spacing"
        ],
        answer: 0
    }
],

 
js:[
    {
        question: "What does JS stand for?",
        options: [
            "Java Style",
            "JavaScript",
            "Just Script",
            "Jungle Script"
        ],
        answer: 1
    },
    {
        question: "Which keyword is used to declare a variable?",
        options: [
            "var",
            "variable",
            "let",
            "Both var and let"
        ],
        answer: 3
    },
    {
        question: "Which method is used to display a message in the console?",
        options: [
            "console.log",
            "print",
            "log.console",
            "echo"
        ],
        answer: 0
    },
    {
        question: "Which operator is used for strict equality comparison?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        answer: 2
    },
    {
        question: "Which function is used to convert a string to a number?",
        options: [
            "Number",
            "parseNumber",
            "toNumber",
            "convertNumber"
        ],
        answer: 0
    },
    {
        question: "Which method adds an element at the end of an array?",
        options: [
            "push",
            "pop",
            "shift",
            "unshift"
        ],
        answer: 0
    },
    {
        question: "Which loop is used to execute code while a condition is true?",
        options: [
            "for",
            "while",
            "do-while",
            "loop"
        ],
        answer: 1
    },
    {
        question: "Which symbol is used to start a single line comment?",
        options: [
            "//",
            "/*",
            "#",
            "--"
        ],
        answer: 0
    },
    {
        question: "Which method removes the last element from an array?",
        options: [
            "pop",
            "push",
            "shift",
            "unshift"
        ],
        answer: 0
    },
    {
        question: "Which keyword is used to define a constant variable?",
        options: [
            "var",
            "let",
            "const",
            "constant"
        ],
        answer: 2
    }
]
};


let currentQuiz =[];
let currentQuestion=0;
let score=0;


function startQuiz(topic){
    currentQuiz=quizData[topic];
    currentQuestion=0;
    score=0;
    showQuestion();
}

function showQuestion() {
  const questionData = currentQuiz[currentQuestion];
  const quizArea = document.getElementById("quiz-area");
  quizArea.innerHTML = `
    <h2>${questionData.question}</h2>
    ${questionData.options
      .map(
        (opt, index) =>
          `<div class="option" onclick="selectAnswer(${index})">${opt}</div>`
      )
      .join("")}
  `;
}

function selectAnswer(index){
    const questionData=currentQuiz[currentQuestion];
    if(index===questionData.answer){
        score++;
    }
    currentQuestion++;


    if(currentQuestion<currentQuiz.length){
        showQuestion();
    }
    else{
        showResult();
    }
}

function showResult(){
    const quizArea=document.getElementById("quiz-area");
    quizArea.innerHTML=`<h2>Your Score : ${score}/${currentQuiz.length}</h2>
    <button class="btn" onclick="restart()">Play Again</button>`;
}


function restart() {
  document.getElementById("quiz-area").innerHTML = `
    <h2>Select a Topic</h2>
    <button class="btn" onclick="startQuiz('html')">HTML</button>
    <button class="btn" onclick="startQuiz('css')">CSS</button>
    <button class="btn" onclick="startQuiz('js')">JavaScript</button>
  `;
}