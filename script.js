async function getData(){
    try {
        let datas = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method:"GET"
        })
        let output = await datas.json()
        output.map((val, ind)=>{
            displayData(val);
        })
    } catch (error) {
        console.log("error")
    }
}
getData();
let dataDiv = document.querySelector(".data-div");

function displayData(data){
    let a = document.createElement("div");
    a.innerHTML=`
    <div class="child">
    <h4>${data.title}</h4>
    <p>${data.body}</p>
        </div>`
    a.className="box";

    dataDiv.appendChild(a);
}