var toDoList = ["learn java", "learn javascript", "learn flutter"];

var users = [{
        username: "tanush",
        password: "9652534488",
    },
    {
        username: "giri",
        password: "9652534477",
    },
];

function signIn() {
    name = prompt("What is your user name");
    pass = prompt("Enter your password");
    for (let index = 0; index < users.length; index++) {
        // toDoList[index] = toDoList[index] + "!"
        // console.log(toDoList[index]);
        if (name === users[index].username && pass == users[index].password) {
            alert("welconme");
            return null;
        } else if (index === users.length - 1) {
            alert("NO");
        }
    }
}

for (let index = 0; index < toDoList.length; index++) {
    toDoList[index] = toDoList[index] + "!";
    console.log(toDoList[index]);
}

var counter = 0;

while (counter < 10) {
    console.log(counter);
    counter++;

}

var counter2 = 0;
do {
    console.log(counter2)
    counter2++
} while (counter2 < 10);


toDoList.forEach(function(i) {
    i = "#" + i;
    console.log(i);


})