
"use strict";

const TOTAL_LEVELS = 120;
const QUESTIONS_PER_LEVEL = 15;
const POINTS_PER_QUESTION = 10;
const STORAGE_KEY = "csQuizProgress_v2";

const questionBank = [
  {
    category: "Computer Basics",
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Control Processing User"
    ],
    answer: 0,
    explanation: "The CPU is the Central Processing Unit. It executes instructions and processes data."
  },
  {
    category: "Computer Basics",
    question: "Which device is mainly used to type text into a computer?",
    options: ["Monitor", "Keyboard", "Speaker", "Projector"],
    answer: 1,
    explanation: "A keyboard is an input device used to enter text and commands."
  },
  {
    category: "Computer Basics",
    question: "Which of these is an output device?",
    options: ["Mouse", "Scanner", "Monitor", "Microphone"],
    answer: 2,
    explanation: "A monitor displays information from the computer, so it is an output device."
  },
  {
    category: "Computer Basics",
    question: "What does RAM stand for?",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Run Application Mode",
      "Remote Active Memory"
    ],
    answer: 1,
    explanation: "RAM stands for Random Access Memory. It temporarily stores data that programs are using."
  },
  {
    category: "Computer Basics",
    question: "Which component is often called the computer's long-term storage?",
    options: ["RAM", "CPU", "SSD or hard drive", "Cache register"],
    answer: 2,
    explanation: "An SSD or hard drive stores files and applications even when the computer is turned off."
  },
  {
    category: "Computer Basics",
    question: "Which of these is an operating system?",
    options: ["Windows", "HTML", "Google Search", "USB"],
    answer: 0,
    explanation: "Windows is an operating system that manages hardware, software, files, and user interaction."
  },
  {
    category: "Computer Basics",
    question: "What is the main purpose of a computer mouse?",
    options: [
      "Print documents",
      "Point, click, and select items",
      "Store files permanently",
      "Cool the processor"
    ],
    answer: 1,
    explanation: "A mouse is a pointing input device used to move a pointer and interact with on-screen items."
  },
  {
    category: "Computer Basics",
    question: "What is hardware?",
    options: [
      "Computer programs only",
      "Physical parts of a computer",
      "Internet websites",
      "A programming language"
    ],
    answer: 1,
    explanation: "Hardware means the physical components, such as the keyboard, screen, and motherboard."
  },
  {
    category: "Computer Basics",
    question: "What is software?",
    options: [
      "The physical monitor",
      "Only computer cables",
      "Programs and instructions a computer runs",
      "The computer desk"
    ],
    answer: 2,
    explanation: "Software is the collection of programs and instructions that tell a computer what to do."
  },
  {
    category: "Computer Basics",
    question: "Which unit is commonly used to measure computer file size?",
    options: ["Meter", "Byte", "Liter", "Watt"],
    answer: 1,
    explanation: "Bytes and larger units such as kilobytes, megabytes, and gigabytes measure digital data."
  },
  {
    category: "Computer Basics",
    question: "What does USB commonly allow you to do?",
    options: [
      "Connect devices and transfer data",
      "Increase the room temperature",
      "Create electricity from nothing",
      "Replace all computer software"
    ],
    answer: 0,
    explanation: "USB is a standard for connecting devices and, depending on the device, transferring data or power."
  },
  {
    category: "Computer Basics",
    question: "Which component connects many internal computer parts?",
    options: ["Motherboard", "Mouse pad", "Web page", "Printer paper"],
    answer: 0,
    explanation: "The motherboard provides connections that allow major computer components to communicate."
  },
  {
    category: "Computer Basics",
    question: "What is a laptop?",
    options: [
      "A portable personal computer",
      "A type of printer ink",
      "A network cable",
      "A programming error"
    ],
    answer: 0,
    explanation: "A laptop is a portable computer with a built-in screen, keyboard, and battery."
  },
  {
    category: "Computer Basics",
    question: "Which device can capture a paper document as a digital image?",
    options: ["Speaker", "Scanner", "Router", "Headphone"],
    answer: 1,
    explanation: "A scanner converts paper documents or images into digital files."
  },
  {
    category: "Computer Basics",
    question: "What is a file?",
    options: [
      "A named collection of stored data",
      "A computer screen",
      "A type of keyboard key",
      "A network connection only"
    ],
    answer: 0,
    explanation: "A file is a named collection of information stored on a device."
  },
  {
    category: "Programming",
    question: "What is an algorithm?",
    options: [
      "A computer screen",
      "A step-by-step procedure for solving a problem",
      "A storage cable",
      "A type of battery"
    ],
    answer: 1,
    explanation: "An algorithm is a sequence of steps designed to solve a problem or complete a task."
  },
  {
    category: "Programming",
    question: "Which language is used to add interactivity to many websites?",
    options: ["JavaScript", "CSS only", "JPEG", "MP3"],
    answer: 0,
    explanation: "JavaScript can respond to clicks, update page content, validate forms, and much more."
  },
  {
    category: "Programming",
    question: "What is a variable in programming?",
    options: [
      "A named place to store a value",
      "A computer monitor",
      "A type of printer",
      "A website address only"
    ],
    answer: 0,
    explanation: "A variable is a named reference used to store or work with a value."
  },
  {
    category: "Programming",
    question: "Which symbol commonly ends a JavaScript statement?",
    options: ["?", ";", "@", "#"],
    answer: 1,
    explanation: "A semicolon can end a JavaScript statement, although JavaScript often inserts semicolons automatically."
  },
  {
    category: "Programming",
    question: "Which keyword declares a block-scoped variable that can be reassigned in JavaScript?",
    options: ["const", "let", "style", "select"],
    answer: 1,
    explanation: "Use let when the variable may need to be reassigned. const is used when the binding should not be reassigned."
  },
  {
    category: "Programming",
    question: "What does an if statement do?",
    options: [
      "Repeats code forever automatically",
      "Runs code when a condition is true",
      "Deletes every file",
      "Changes the computer's hardware"
    ],
    answer: 1,
    explanation: "An if statement checks a condition and runs its code block when the condition is true."
  },
  {
    category: "Programming",
    question: "What is a loop used for?",
    options: [
      "Repeating instructions",
      "Displaying only pictures",
      "Turning off the keyboard",
      "Renaming the operating system"
    ],
    answer: 0,
    explanation: "Loops repeat instructions while a condition is met or for each item in a collection."
  },
  {
    category: "Programming",
    question: "Which of these is a JavaScript data type?",
    options: ["Boolean", "Keyboard", "Monitor", "Router"],
    answer: 0,
    explanation: "Boolean is a data type that has two values: true and false."
  },
  {
    category: "Programming",
    question: "What does a function help you do?",
    options: [
      "Group reusable instructions",
      "Increase screen size physically",
      "Connect a power cable",
      "Clean a computer keyboard"
    ],
    answer: 0,
    explanation: "Functions group instructions so they can be called and reused when needed."
  },
  {
    category: "Programming",
    question: "What is debugging?",
    options: [
      "Finding and fixing errors in a program",
      "Painting a computer",
      "Downloading every file",
      "Increasing internet speed automatically"
    ],
    answer: 0,
    explanation: "Debugging is the process of identifying, investigating, and fixing program problems."
  },
  {
    category: "Programming",
    question: "What is an array commonly used for in JavaScript?",
    options: [
      "Storing a list of values",
      "Showing electricity usage",
      "Replacing the CPU",
      "Connecting to a monitor"
    ],
    answer: 0,
    explanation: "An array stores an ordered collection of values, such as a list of names."
  },
  {
    category: "Programming",
    question: "Which operator checks strict equality in JavaScript?",
    options: ["=", "===", "=>", "!="],
    answer: 1,
    explanation: "The === operator checks whether values are equal without converting their types."
  },
  {
    category: "Programming",
    question: "What is a syntax error?",
    options: [
      "A rule or structure mistake in code",
      "A broken computer chair",
      "A full battery",
      "A fast internet connection"
    ],
    answer: 0,
    explanation: "A syntax error happens when code breaks the language's grammar rules."
  },
  {
    category: "Programming",
    question: "What does return do inside a function?",
    options: [
      "Sends a value back and ends that function call",
      "Restarts the computer",
      "Creates a new keyboard",
      "Opens every website"
    ],
    answer: 0,
    explanation: "return can send a result back to the code that called the function and end that function execution."
  },
  {
    category: "Programming",
    question: "What is a comment in code?",
    options: [
      "Text intended to explain code to readers",
      "A required computer password",
      "A type of monitor",
      "A database table"
    ],
    answer: 0,
    explanation: "Comments help explain code and are not executed as normal program instructions."
  },
  {
    category: "Web Development",
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "High Transfer Machine Language",
      "Home Tool Markup Link",
      "Hyperlink Text Management Logic"
    ],
    answer: 0,
    explanation: "HTML stands for HyperText Markup Language. It structures content on web pages."
  },
  {
    category: "Web Development",
    question: "What is CSS mainly used for?",
    options: [
      "Styling web pages",
      "Storing computer files",
      "Running the CPU",
      "Sending emails only"
    ],
    answer: 0,
    explanation: "CSS controls how web pages look, including colors, spacing, layout, and fonts."
  },
  {
    category: "Web Development",
    question: "Which HTML tag creates a hyperlink?",
    options: ["<p>", "<a>", "<h1>", "<img>"],
    answer: 1,
    explanation: "The a element creates a hyperlink, usually with an href attribute."
  },
  {
    category: "Web Development",
    question: "Which HTML element displays an image?",
    options: ["<image>", "<picture-file>", "<img>", "<src>"],
    answer: 2,
    explanation: "The img element displays an image. Its src attribute points to the image file."
  },
  {
    category: "Web Development",
    question: "Which HTML tag is commonly used for the largest heading?",
    options: ["<h1>", "<head>", "<title>", "<biggest>"],
    answer: 0,
    explanation: "The h1 element represents the highest-level heading on a page."
  },
  {
    category: "Web Development",
    question: "What does CSS stand for?",
    options: [
      "Computer Style System",
      "Cascading Style Sheets",
      "Creative Software Setup",
      "Central Styling Source"
    ],
    answer: 1,
    explanation: "CSS stands for Cascading Style Sheets."
  },
  {
    category: "Web Development",
    question: "Which CSS property changes text color?",
    options: ["font-style", "background", "color", "text-size"],
    answer: 2,
    explanation: "The color property sets the foreground color of text."
  },
  {
    category: "Web Development",
    question: "Which CSS property changes the background color?",
    options: ["background-color", "font-family", "text-align", "border-style"],
    answer: 0,
    explanation: "The background-color property sets an element's background color."
  },
  {
    category: "Web Development",
    question: "What does a browser do?",
    options: [
      "Displays and interacts with web content",
      "Manufactures computer chips",
      "Replaces the operating system",
      "Charges every device"
    ],
    answer: 0,
    explanation: "A web browser loads and displays websites and lets users interact with them."
  },
  {
    category: "Web Development",
    question: "What does responsive web design aim to do?",
    options: [
      "Make pages work well across different screen sizes",
      "Make every page the same color",
      "Prevent all internet use",
      "Replace HTML with images"
    ],
    answer: 0,
    explanation: "Responsive design adapts layouts to different screens, including phones, tablets, and computers."
  },
  {
    category: "Web Development",
    question: "Which attribute provides alternative text for an HTML image?",
    options: ["href", "alt", "srcset-only", "target"],
    answer: 1,
    explanation: "The alt attribute provides alternative text that can help users when an image cannot be seen."
  },
  {
    category: "Web Development",
    question: "Which HTML element contains the main visible page content?",
    options: ["<main>", "<meta>", "<link>", "<script>"],
    answer: 0,
    explanation: "The main element represents the page's primary content."
  },
  {
    category: "Web Development",
    question: "What does the CSS margin property control?",
    options: [
      "Space outside an element's border",
      "The text language",
      "The image file type",
      "The website password"
    ],
    answer: 0,
    explanation: "Margin controls the space outside an element's border."
  },
  {
    category: "Web Development",
    question: "What is a URL?",
    options: [
      "An address used to locate a resource online",
      "A computer memory chip",
      "A type of font",
      "A programming loop"
    ],
    answer: 0,
    explanation: "A URL identifies the location of a resource, such as a web page."
  },
  {
    category: "Web Development",
    question: "Which HTML element is used to run or link JavaScript?",
    options: ["<script>", "<style>", "<footer>", "<strong>"],
    answer: 0,
    explanation: "The script element can contain JavaScript or reference an external JavaScript file."
  },
  {
    category: "Web Development",
    question: "What does the CSS padding property control?",
    options: [
      "Space between content and its border",
      "Space outside the browser window",
      "The number of HTML files",
      "The internet connection"
    ],
    answer: 0,
    explanation: "Padding creates space inside an element, between its content and border."
  },
  {
    category: "Internet",
    question: "What is the internet?",
    options: [
      "A global network of connected networks",
      "A single computer",
      "A word-processing program",
      "A type of printer"
    ],
    answer: 0,
    explanation: "The internet is a global system of interconnected computer networks."
  },
  {
    category: "Internet",
    question: "What does Wi-Fi allow devices to do?",
    options: [
      "Connect to a network wirelessly",
      "Print without ink",
      "Work without any power",
      "Double their storage automatically"
    ],
    answer: 0,
    explanation: "Wi-Fi lets compatible devices connect to a network using radio signals."
  },
  {
    category: "Internet",
    question: "What is a web server?",
    options: [
      "A system that provides web content or services",
      "A device used only for typing",
      "A screen brightness setting",
      "A type of image file"
    ],
    answer: 0,
    explanation: "A web server responds to requests for web pages, files, or other web resources."
  },
  {
    category: "Internet",
    question: "What does DNS help translate?",
    options: [
      "Domain names into IP addresses",
      "Pictures into keyboards",
      "Batteries into files",
      "CSS into HTML headings"
    ],
    answer: 0,
    explanation: "DNS helps computers find the IP address associated with a domain name."
  },
  {
    category: "Internet",
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "High Text Tracking Program",
      "Home Tool Transfer Process",
      "Hyperlink Terminal Text Package"
    ],
    answer: 0,
    explanation: "HTTP is the HyperText Transfer Protocol used for communication on the web."
  },
  {
    category: "Internet",
    question: "What does HTTPS add to HTTP?",
    options: [
      "Encryption and secure communication using TLS",
      "A larger monitor",
      "More keyboard buttons",
      "Unlimited storage"
    ],
    answer: 0,
    explanation: "HTTPS uses TLS to protect data exchanged between a browser and a server."
  },
  {
    category: "Internet",
    question: "What is an IP address used for?",
    options: [
      "Identifying an interface on an IP network",
      "Changing a screen's color",
      "Naming a computer's keyboard",
      "Storing images inside CSS"
    ],
    answer: 0,
    explanation: "IP addresses help identify network interfaces so data can be routed to the right destination."
  },
  {
    category: "Internet",
    question: "What is a browser cache?",
    options: [
      "Stored copies of resources that may speed up loading",
      "A computer virus",
      "A kind of monitor",
      "A programming language"
    ],
    answer: 0,
    explanation: "A browser cache stores copies of certain resources so they may load faster later."
  },
  {
    category: "Internet",
    question: "What is downloading?",
    options: [
      "Receiving data from another system",
      "Sending a file to a printer only",
      "Turning off a computer",
      "Deleting a web browser"
    ],
    answer: 0,
    explanation: "Downloading means receiving data from a remote system onto your device."
  },
  {
    category: "Internet",
    question: "What is uploading?",
    options: [
      "Sending data from your device to another system",
      "Changing the font size",
      "Switching off Wi-Fi",
      "Cleaning the monitor"
    ],
    answer: 0,
    explanation: "Uploading means sending data from your device to a server or another system."
  },
  {
    category: "Cybersecurity",
    question: "What is phishing?",
    options: [
      "A trick to steal information by pretending to be trustworthy",
      "A way to cool a CPU",
      "A programming language",
      "A file compression format"
    ],
    answer: 0,
    explanation: "Phishing uses deceptive messages or sites to trick people into revealing sensitive information."
  },
  {
    category: "Cybersecurity",
    question: "Which password is generally the strongest?",
    options: [
      "123456",
      "password",
      "A long, unique password or passphrase",
      "Your first name"
    ],
    answer: 2,
    explanation: "Long, unique passwords are harder to guess. A password manager can help create and store them."
  },
  {
    category: "Cybersecurity",
    question: "What is two-factor authentication?",
    options: [
      "Using two different kinds of proof to sign in",
      "Using two usernames on one website",
      "Changing the screen twice",
      "Installing two browsers"
    ],
    answer: 0,
    explanation: "Two-factor authentication requires two different types of verification to help protect an account."
  },
  {
    category: "Cybersecurity",
    question: "What is malware?",
    options: [
      "Software designed to cause harm or perform unwanted actions",
      "A computer desk",
      "A safe backup file",
      "A type of web heading"
    ],
    answer: 0,
    explanation: "Malware is malicious software, such as certain viruses, spyware, and ransomware."
  },
  {
    category: "Cybersecurity",
    question: "Why should you install software updates?",
    options: [
      "They can fix security issues and bugs",
      "They always make the screen larger",
      "They remove the need for passwords",
      "They make every file public"
    ],
    answer: 0,
    explanation: "Updates often patch security weaknesses, fix bugs, and improve compatibility."
  },
  {
    category: "Cybersecurity",
    question: "What is social engineering?",
    options: [
      "Manipulating people into revealing information or taking unsafe actions",
      "Building a computer table",
      "Writing only HTML headings",
      "Making a network cable"
    ],
    answer: 0,
    explanation: "Social engineering targets human trust or behavior to gain information or access."
  },
  {
    category: "Cybersecurity",
    question: "What is encryption?",
    options: [
      "Transforming information so it can only be read with the right key",
      "Deleting all computer files",
      "Making a monitor brighter",
      "Increasing a keyboard's speed"
    ],
    answer: 0,
    explanation: "Encryption transforms readable information into protected data that requires the correct key to decrypt."
  },
  {
    category: "Cybersecurity",
    question: "Why are backups useful?",
    options: [
      "They help recover data if the original is lost",
      "They stop all phishing messages",
      "They guarantee faster Wi-Fi",
      "They replace every software update"
    ],
    answer: 0,
    explanation: "Backups provide copies of important data that may be restored after loss or damage."
  },
  {
    category: "Cybersecurity",
    question: "What should you do with a suspicious email attachment?",
    options: [
      "Open it immediately",
      "Forward it to everyone",
      "Avoid opening it and verify the sender",
      "Send your password to the sender"
    ],
    answer: 2,
    explanation: "Unexpected attachments can be dangerous. Verify the message through a trusted channel before opening anything."
  },
  {
    category: "Cybersecurity",
    question: "What is a firewall designed to do?",
    options: [
      "Monitor and control network traffic according to rules",
      "Make computer speakers louder",
      "Edit photographs",
      "Write school essays"
    ],
    answer: 0,
    explanation: "A firewall applies security rules to network traffic entering or leaving a system."
  },
  {
    category: "Cybersecurity",
    question: "Why should you avoid reusing one password everywhere?",
    options: [
      "One stolen password could put multiple accounts at risk",
      "It makes the keyboard heavier",
      "It stops your browser from opening",
      "It uses too much screen space"
    ],
    answer: 0,
    explanation: "If one site is breached, attackers may try the same password on other accounts."
  },
  {
    category: "Data and Logic",
    question: "What is binary?",
    options: [
      "A number system using 0 and 1",
      "A language using only letters",
      "A type of monitor",
      "A network cable"
    ],
    answer: 0,
    explanation: "Binary is base 2 and uses the digits 0 and 1."
  },
  {
    category: "Data and Logic",
    question: "What is the decimal value of binary 10?",
    options: ["1", "2", "10", "3"],
    answer: 1,
    explanation: "Binary 10 equals decimal 2: one group of two and zero groups of one."
  },
  {
    category: "Data and Logic",
    question: "How many bits are in one byte?",
    options: ["2", "4", "8", "16"],
    answer: 2,
    explanation: "One byte contains eight bits."
  },
  {
    category: "Data and Logic",
    question: "What is a bit?",
    options: [
      "A binary digit",
      "A large hard drive",
      "A type of website",
      "A programming editor"
    ],
    answer: 0,
    explanation: "A bit is a binary digit that can represent 0 or 1."
  },
  {
    category: "Data and Logic",
    question: "In logic, what is the result of TRUE AND FALSE?",
    options: ["TRUE", "FALSE", "Both", "Neither"],
    answer: 1,
    explanation: "AND is true only when both inputs are true."
  },
  {
    category: "Data and Logic",
    question: "In logic, what is the result of TRUE OR FALSE?",
    options: ["TRUE", "FALSE", "Error", "Unknown every time"],
    answer: 0,
    explanation: "OR is true when at least one input is true."
  },
  {
    category: "Data and Logic",
    question: "What does NOT TRUE evaluate to in Boolean logic?",
    options: ["TRUE", "FALSE", "10", "NULL every time"],
    answer: 1,
    explanation: "NOT reverses a Boolean value, so NOT TRUE is FALSE."
  },
  {
    category: "Data and Logic",
    question: "What is a flowchart?",
    options: [
      "A diagram showing steps in a process",
      "A physical computer chip",
      "A type of password",
      "A web browser"
    ],
    answer: 0,
    explanation: "A flowchart uses symbols and arrows to show the steps and decisions in a process."
  },
  {
    category: "Data and Logic",
    question: "What is a database?",
    options: [
      "An organized collection of data",
      "A keyboard shortcut",
      "A screen resolution",
      "A type of computer fan"
    ],
    answer: 0,
    explanation: "A database organizes data so it can be stored, searched, updated, and managed."
  },
  {
    category: "Data and Logic",
    question: "What is a primary key in a database table?",
    options: [
      "A field that uniquely identifies each row",
      "A user's computer password",
      "The first letter of every word",
      "A type of monitor"
    ],
    answer: 0,
    explanation: "A primary key uniquely identifies each record in a table."
  },
  {
    category: "Data and Logic",
    question: "What does SQL commonly help people do?",
    options: [
      "Query and manage relational databases",
      "Design a computer mouse",
      "Replace all network hardware",
      "Edit audio only"
    ],
    answer: 0,
    explanation: "SQL is used to query and manage data in relational database systems."
  },
  {
    category: "Data and Logic",
    question: "What is data validation?",
    options: [
      "Checking that input meets expected rules",
      "Deleting every database",
      "Changing the monitor",
      "Turning source code into a picture"
    ],
    answer: 0,
    explanation: "Validation checks whether data follows expected rules before it is accepted or processed."
  },
  {
    category: "Data and Logic",
    question: "What does sorting data mean?",
    options: [
      "Arranging data in a chosen order",
      "Encrypting every file",
      "Removing the operating system",
      "Connecting a printer"
    ],
    answer: 0,
    explanation: "Sorting arranges data according to a rule, such as alphabetical or numerical order."
  },
  {
    category: "Data and Logic",
    question: "What is a spreadsheet commonly used for?",
    options: [
      "Organizing data and performing calculations",
      "Replacing a computer's CPU",
      "Connecting to Wi-Fi without hardware",
      "Designing physical keyboards"
    ],
    answer: 0,
    explanation: "Spreadsheets organize information into rows and columns and can perform calculations with formulas."
  },
  {
    category: "Data and Logic",
    question: "What is a variable's Boolean value?",
    options: [
      "A value that is true or false",
      "A value that must be a photograph",
      "A physical cable",
      "A type of computer screen"
    ],
    answer: 0,
    explanation: "Boolean values represent one of two logical states: true or false."
  }
];

const $ = (id) => document.getElementById(id);

const elements = {
  homeScreen: $("homeScreen"),
  quizScreen: $("quizScreen"),
  resultScreen: $("resultScreen"),
  levelsGrid: $("levelsGrid"),
  totalScore: $("totalScore"),
  completedLevels: $("completedLevels"),
  accuracy: $("accuracy"),
  saveStatus: $("saveStatus"),
  levelLabel: $("levelLabel"),
  questionCounter: $("questionCounter"),
  progressBar: $("progressBar"),
  categoryLabel: $("categoryLabel"),
  questionText: $("questionText"),
  optionsList: $("optionsList"),
  feedback: $("feedback"),
  roundScore: $("roundScore"),
  answerHint: $("answerHint"),
  backButton: $("backButton"),
  resetButton: $("resetButton"),
  resultIcon: $("resultIcon"),
  resultTitle: $("resultTitle"),
  resultMessage: $("resultMessage"),
  resultCorrect: $("resultCorrect"),
  resultPoints: $("resultPoints"),
  resultPercent: $("resultPercent"),
  continueButton: $("continueButton"),
  homeButton: $("homeButton")
};

function freshState() {
  return {
    unlockedLevel: 1,
    completedLevels: [],
    totalScore: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    currentLevel: 1,
    questionIndex: 0,
    levelQuestions: [],
    currentScore: 0,
    correctCount: 0,
    selectedAnswer: null,
    checked: false,
    screen: "home"
  };
}

let state = loadState();
let autoAdvanceTimer = null;
let questionRunId = 0;

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return freshState();

    const parsed = JSON.parse(saved);
    const initial = freshState();

    return {
      ...initial,
      ...parsed,
      unlockedLevel: Math.min(
        TOTAL_LEVELS,
        Math.max(1, Number(parsed.unlockedLevel) || 1)
      ),
      completedLevels: Array.isArray(parsed.completedLevels)
        ? parsed.completedLevels
        : []
    };
  } catch (error) {
    console.warn("Could not load saved progress:", error);
    return freshState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    elements.saveStatus.textContent = "✓ Progress saved";
  } catch (error) {
    elements.saveStatus.textContent = "Could not save progress";
    console.warn("Could not save progress:", error);
  }
}

function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function makeLevelQuestions(levelNumber) {
  // Every level contains 15 different questions.
  // Questions may appear again in other levels.
  const offset = (levelNumber - 1) % questionBank.length;
  const rotated = [
    ...questionBank.slice(offset),
    ...questionBank.slice(0, offset)
  ];

  return shuffle(rotated).slice(0, QUESTIONS_PER_LEVEL).map((q) => ({
    ...q,
    options: [...q.options]
  }));
}

function showScreen(screenName) {
  elements.homeScreen.classList.toggle("hidden", screenName !== "home");
  elements.quizScreen.classList.toggle("hidden", screenName !== "quiz");
  elements.resultScreen.classList.toggle("hidden", screenName !== "result");
  state.screen = screenName;
}

function updateStats() {
  elements.totalScore.textContent = state.totalScore;
  elements.completedLevels.textContent =
    `${state.completedLevels.length}/${TOTAL_LEVELS}`;

  const accuracy = state.totalAnswered
    ? Math.round((state.totalCorrect / state.totalAnswered) * 100)
    : 0;

  elements.accuracy.textContent = `${accuracy}%`;
}

function renderLevels() {
  elements.levelsGrid.innerHTML = "";

  for (let level = 1; level <= TOTAL_LEVELS; level++) {
    const completed = state.completedLevels.includes(level);
    const unlocked = level <= state.unlockedLevel;

    const button = document.createElement("button");
    button.className = `level-card${completed ? " completed" : ""}`;
    button.disabled = !unlocked;
    button.innerHTML = `
      <span class="level-number">${completed ? "✓ " : ""}Level ${level}</span>
      <span class="level-status">${
        completed ? "Completed" : unlocked ? "15 questions" : "🔒 Locked"
      }</span>
    `;

    button.addEventListener("click", () => startLevel(level));
    elements.levelsGrid.appendChild(button);
  }

  updateStats();
}

function startLevel(levelNumber) {
  if (levelNumber > state.unlockedLevel) return;

  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }

  questionRunId++;

  state.currentLevel = levelNumber;
  state.questionIndex = 0;
  state.levelQuestions = makeLevelQuestions(levelNumber);
  state.currentScore = 0;
  state.correctCount = 0;
  state.selectedAnswer = null;
  state.checked = false;
  state.screen = "quiz";

  saveState();
  showScreen("quiz");
  renderQuestion();
}

function resumeSavedQuiz() {
  if (
    state.screen === "quiz" &&
    state.currentLevel <= state.unlockedLevel &&
    Array.isArray(state.levelQuestions) &&
    state.levelQuestions.length === QUESTIONS_PER_LEVEL &&
    state.questionIndex >= 0 &&
    state.questionIndex < QUESTIONS_PER_LEVEL
  ) {
    showScreen("quiz");
    renderQuestion();
    return true;
  }

  return false;
}

function renderQuestion() {
  const question = state.levelQuestions[state.questionIndex];
  if (!question) {
    finishLevel();
    return;
  }

  elements.levelLabel.textContent =
    `Level ${state.currentLevel} / ${TOTAL_LEVELS}`;
  elements.questionCounter.textContent =
    `Question ${state.questionIndex + 1} / ${QUESTIONS_PER_LEVEL}`;
  elements.progressBar.style.width =
    `${((state.questionIndex + 1) / QUESTIONS_PER_LEVEL) * 100}%`;

  elements.categoryLabel.textContent = question.category;
  elements.questionText.textContent = question.question;
  elements.roundScore.textContent = `Level score: ${state.currentScore}`;
  elements.answerHint.textContent = state.checked
    ? "Moving to the next question..."
    : "Choose one answer to continue";

  elements.optionsList.innerHTML = "";
  elements.feedback.className = "feedback hidden";
  elements.feedback.textContent = "";

  const letters = ["A", "B", "C", "D"];

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = letters[index] || "?";

    const optionText = document.createElement("span");
    optionText.textContent = option;

    button.append(letter, optionText);

    if (state.checked) {
      button.disabled = true;

      if (index === question.answer) {
        button.classList.add("correct");
      }

      if (
        index === state.selectedAnswer &&
        state.selectedAnswer !== question.answer
      ) {
        button.classList.add("wrong");
      }
    }

    button.addEventListener("click", () => {
      // Ignore extra clicks after an answer has been checked.
      if (state.checked) return;

      state.selectedAnswer = index;
      checkAnswer();
    });

    elements.optionsList.appendChild(button);
  });

  if (state.checked) {
    const correct = state.selectedAnswer === question.answer;
    elements.feedback.classList.remove("hidden");
    elements.feedback.classList.add(correct ? "good" : "bad");

    const heading = correct ? "✓ Correct!" : "✗ Not quite.";
    const answerText = question.options[question.answer];

    elements.feedback.textContent =
      `${heading} Correct answer: ${answerText}. ${question.explanation}`;
  }

  updateStats();
}

function checkAnswer() {
  if (state.selectedAnswer === null || state.checked) return;

  const question = state.levelQuestions[state.questionIndex];
  if (!question) return;

  state.checked = true;
  state.totalAnswered += 1;

  if (state.selectedAnswer === question.answer) {
    state.currentScore += POINTS_PER_QUESTION;
    state.totalScore += POINTS_PER_QUESTION;
    state.correctCount += 1;
    state.totalCorrect += 1;
  }

  saveState();
  renderQuestion();

  // Automatically move forward after briefly showing the answer.
  const thisRun = questionRunId;

  autoAdvanceTimer = setTimeout(() => {
    if (thisRun !== questionRunId) return;

    autoAdvanceTimer = null;

    if (state.questionIndex < QUESTIONS_PER_LEVEL - 1) {
      state.questionIndex += 1;
      state.selectedAnswer = null;
      state.checked = false;
      saveState();
      renderQuestion();
    } else {
      finishLevel();
    }
  }, 1200);
}

function finishLevel() {
  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }

  const level = state.currentLevel;
  const wasCompleted = state.completedLevels.includes(level);

  if (!wasCompleted) {
    state.completedLevels.push(level);
    state.completedLevels.sort((a, b) => a - b);
  }

  state.unlockedLevel = Math.min(
    TOTAL_LEVELS,
    Math.max(state.unlockedLevel, level + 1)
  );

  const percentage = Math.round(
    (state.correctCount / QUESTIONS_PER_LEVEL) * 100
  );

  elements.resultIcon.textContent =
    percentage >= 80 ? "🏆" : percentage >= 50 ? "🎉" : "💻";

  elements.resultTitle.textContent =
    percentage >= 80 ? "Excellent work!" :
    percentage >= 50 ? "Level completed!" :
    "Keep practicing!";

  elements.resultMessage.textContent =
    `You answered ${state.correctCount} out of ${QUESTIONS_PER_LEVEL} questions correctly.`;

  elements.resultCorrect.textContent =
    `${state.correctCount}/${QUESTIONS_PER_LEVEL}`;
  elements.resultPoints.textContent = state.currentScore;
  elements.resultPercent.textContent = `${percentage}%`;

  if (level >= TOTAL_LEVELS) {
    elements.continueButton.textContent = "Play level 120 again";
  } else {
    elements.continueButton.textContent = `Continue to Level ${level + 1}`;
  }

  saveState();
  renderLevels();
  showScreen("result");
}

function showHome() {
  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }

  questionRunId++;
  saveState();
  showScreen("home");
  renderLevels();
}

elements.backButton.addEventListener("click", showHome);

elements.homeButton.addEventListener("click", showHome);

elements.continueButton.addEventListener("click", () => {
  const nextLevel = Math.min(TOTAL_LEVELS, state.currentLevel + 1);
  startLevel(nextLevel);
});

elements.resetButton.addEventListener("click", () => {
  const confirmed = window.confirm(
    "Are you sure you want to reset all points and level progress?"
  );

  if (!confirmed) return;

  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }

  questionRunId++;
  state = freshState();

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Could not remove saved progress:", error);
  }

  saveState();
  showScreen("home");
  renderLevels();
});

function initializeGame() {
  renderLevels();

  if (!resumeSavedQuiz()) {
    showScreen("home");
  }

  updateStats();
}

initializeGame();
