document.addEventListener("DOMContentLoaded", init);

let pages = [];

function init(numbersLotto) {


    document.getElementById("digits").value;
    document.getElementById("btnSend").addEventListener("click", settingData);

    document.getElementById("btnBack").addEventListener("click", clear);



    pages = document.getElementById(".page")

    document.querySelector("#digits").value =
        document.querySelector("#digits").defaultValue;



    function settingData() {
        let url = "http://davidst.edumedia.ca/mad9014/nums.php";
        let formData = new FormData();
        
        formData.append("digits", document.getElementById("digits").value);
        formData.append("max", document.getElementById("max").value);

        let customOptions = {
            mode: "cors",
            method: "POST",
            body: formData
        };

        console.log(numbersLotto);


        let req = new Request(url, customOptions);

        fetch(req)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Sorry!");
                }

            })
            .then(function (response) {
                console.log(response.numbers);

                let numberArray = response.numbers;
                console.log(numberArray);

                let ul = document.querySelector(".num_list");
                let docFrag = new DocumentFragment(); //jervin helped
                numberArray.forEach(function (item) {
                    let li = document.createElement("li");
                    li.textContent = item;
                    ul.appendChild(li);

                })

                let numberList = document.getElementById("list");

                numberList.classList.remove("inactive");
                numberList.classList.add("active");

                ul.appendChild(docFrag);
            })
            .catch(function (error) {
                console.log("ERROR: ", error.message);
            });
        
    }
}

function clear() {
    let ul = document.querySelector(".num_list");

    ul.innerHTML = "";

    document.querySelector("#digits").value = document.querySelector("#digits").value.defaultValue;

    document.querySelector("#max").value = document.querySelector("#max").value.defaultValue;
    
    let numberList = document.getElementById("list");

    numberList.classList.remove("active");
    numberList.classList.add("inactive");
    
}
