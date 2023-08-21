import CallbackChat from "./CallbackChat/CallbackChat";
import Collapse from "./Collapse/Collapse";
import Liker from "./Liker/Liker";

// Collapse
const task1 = document.querySelector('.task1');
const collapse = new Collapse(task1);
collapse.init();

// Callback Chat
const task2 = document.querySelector('.task2');
const callbackChat = new CallbackChat(task2);
callbackChat.init();

// Liker
const task3 = document.querySelector('.task3');
const liker = new Liker(task3);
liker.init();