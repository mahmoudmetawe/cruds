let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let creat = document.getElementById('creat');

//get total-------------------------------------
function gettotal(){
    if(price.value !=''){
        let result = (+price.value + +taxes.value + +ads.value)- +discount.value;
        total.innerHTML=result;
        total.style.background = 'green';
    }
    else{
        total.innerHTML = '';
        total.style.background = 'red';
    }
}

//creat product ------------------------------------
//save product -------------------------------------
let datapro;
if(localStorage.creatpro != null){
    datapro = JSON.parse(localStorage.creatpro)
}else{
    datapro = [];
}


creat.onclick = function(){
    let newData = {
        title: title.value,
        price : price.value,
        taxes : taxes.value,
        ads : ads.value,
        discount : discount.value,
        total : total.innerHTML,
        count : count.value,
        category : category.value,
    }
    datapro.push(newData);
    localStorage.setItem('creatpro' , JSON.stringify(datapro));
    cleardata();
    showdata()
}


//clear data input ------------------------------------------
function cleardata(){
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";
    count.value = "";
    category.value = "";
}

//read product -------------------------------------------
function showdata(){
let table = '';
for (let i=0; i < datapro.length; i++){
    table += `
                    <tr>
                        <td>${i}</td>
                        <td>${datapro[i].title}</td>
                        <td>${datapro[i].price}</td>
                        <td>${datapro[i].taxes}</td>
                        <td>${datapro[i].ads}</td>
                        <td>${datapro[i].discount}</td>
                        <td>${datapro[i].total}</td>
                        <td>${datapro[i].category}</td>
                        <td><button id="update">update</button></td>
                        <td><button onclick = "deldata(${i})" id="delete">delete</button></td>
                    </tr>
    `;
}
document.getElementById('tbody').innerHTML = table;
let deleteall = document.getElementById("deleteall")
if(datapro.length>0){
    deleteall.innerHTML = `
    <button onclick = "deleteAll()" class = "Dall">Delete All</button>
    `
}else{
    deleteall.innerHTML  = '';
}

}
showdata();


//delete product ------------------------------------------------------

function deldata(i){

    datapro.splice(i,1);
    localStorage.creatpro = JSON.stringify(datapro);
    showdata();
    

}
function deleteAll(){
    localStorage.clear()
    datapro.splice(0)
    showdata()
}


