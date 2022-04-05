// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>
<div>
<h5>Manikandank</h5>
</div>`;

const person ={ fname:"mani", lname:"kandan"
};

document.getElementById("demo").innerHTML = person.fname +"" +person.lname;