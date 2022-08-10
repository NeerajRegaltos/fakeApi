let getBtn = document.getElementById("getBtn");
let postBtn = document.getElementById("postBtn");
let putBtn = document.getElementById("putBtn");
let deleteBtn = document.getElementById("deleteBtn");



getBtn.addEventListener("click", function () {
    console.log("GET REQUEST");
    console.log("=======================================================");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employee/5", true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("ERROR CAME in loading ");
        }
    }

    xhr.send();
});

postBtn.addEventListener("click", function () {
    console.log("POST REQUEST");
    console.log("=======================================================");

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);

    xhr.getResponseHeader("Content-type", "application/json");

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("ERROR CAME in loading ");
        }
    }
    params = '{"name":"Neeraj Kumar","salary":"25000","age":"23"}';
    xhr.send(params);
});

putBtn.addEventListener("click", function () {
    console.log("PUT REQUEST");
    console.log("=======================================================");

    let xhr = new XMLHttpRequest();

    xhr.open("PUT", "https://dummy.restapiexample.com/api/v1/update/1", true);

    xhr.getResponseHeader("Content-type", "application/json");

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("ERROR CAME in loading ");
        }
    }

    // params = '{"name":"Neeraj Kumar"}';
    xhr.send();
});


deleteBtn.addEventListener("click", function () {
    console.log("DELETE REQUEST");
    console.log("=======================================================");

    let xhr = new XMLHttpRequest();

    xhr.open("DELETE", "https://dummy.restapiexample.com/api/v1/delete/2", true);

    // xhr.getResponseHeader("Content-type", "application/json");

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("ERROR CAME in loading ");
        }
    }

    xhr.send();
});