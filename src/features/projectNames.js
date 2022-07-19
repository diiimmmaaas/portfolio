import socialImg from "../assets/image/social.png";
import todolImg from "../assets/image/todo.png";
import learnByCardsImg from "../assets/image/learn-by-cards.jpg";
import calculatorImg from "../assets/image/calculator.jpg";

const social = {
    backgroundImage: `url(${socialImg})`,
};
const todo = {
    backgroundImage: `url(${todolImg})`,
};
const learnByCards = {
    backgroundImage: `url(${learnByCardsImg})`,
};
const calculator = {
    backgroundImage: `url(${calculatorImg})`,
};

export const projectsNames = [
    {url: "https://diiimmmaaas.github.io/Todolist/", projectStyle: todo, title: "Todolist", description: "Application - a note that allows you to add, delete, edit and change various tasks. " +
            "The application allows you to mark the status of your tasks, such as 'ongoing', 'deferred', 'completed', etc. " +
            "The application allows you to attach long texts to your tasks, a useful feature when you need to write down a lot of information about a task."},
    {url: "https://diiimmmaaas.github.io/learn-by-cards/", projectStyle: learnByCards, title: "Learn by cards", description: "The application, which implements the concept of learning by cards, allows you to create, " +
            "modify, delete decks of cards for personal or public use. " +
            "The cards have a question to which the user must give the correct answer and then evaluate their knowledge on a 5-point scale. " +
            "The application has a pseudo-random function, which will offer the user cards with the lowest score more often."},
    {url: "https://diiimmmaaas.github.io/calculator/", projectStyle: calculator, title: "Calculator", description: "A typical calculator. A program designed to perform simple computational operations: addition, subtraction, multiplication and division, etc."},
    {url: "https://diiimmmaaas.github.io/Social_network/", projectStyle: social, title: "Social Network", description: "A user social network that provides access to elementary " +
            "functions, such as updating and displaying the user's status and profile, " +
            "adding other users as friends, registering and logging in, sending messages, " +
            "and others. The application is extensible."},
]