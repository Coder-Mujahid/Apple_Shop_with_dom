function btn1() {
    swal("successfully added!", "The product has been successfully added to your cart !", "success")
    const total_price = document.getElementById('total_price')
    const total_priceparse = parseFloat(total_price.innerText)

    const price1 = document.getElementById('price1')
    const priceparse = parseFloat(price1.innerText)

    const Model1=document.getElementById('Model1')
    const phnname = Model1.innerText;

    const img1=document.getElementById('img1').src

    total_price.innerText = priceparse + total_priceparse

    const cartlist = document.getElementById('list')
    const li = document.createElement('li')
    li.innerHTML = `
   <div id="card" class="w-full flex gap-5 items-center  shadow-md shadow-black p-2 bg-slate-300 rounded mb-2">
   <aside>
       <img class="w-16" src="${img1}" alt="image">
   </aside>
   <h2 class="text-lg font-semibold text-black capitalize"> ${phnname}</h2>
   <h2 class="card-title ">Price $ <span class="text-red-500">${priceparse}</span></h2>
    </div>
   `
   cartlist.appendChild(li)
   
}


function btn2() {
    swal("successfully added!", "The product has been successfully added to your cart !", "success")
    const total_price = document.getElementById('total_price')
    const total_priceparse = parseFloat(total_price.innerText)

    const price2 = document.getElementById('price2')
    const priceparse = parseFloat(price2.innerText)

    const Model2=document.getElementById('Model2')
    const phnname = Model2.innerText;

    const img2=document.getElementById('img2').src

    total_price.innerText = priceparse + total_priceparse

    const cartlist = document.getElementById('list')
    const li = document.createElement('li')
    li.innerHTML = `
   <div id="card" class="w-full flex gap-5 items-center  shadow-md shadow-black p-2 bg-slate-300 rounded mb-2">
   <aside>
       <img class="w-16" src="${img2}" alt="image">
   </aside>
   <h2 class="text-lg font-semibold text-black capitalize"> ${phnname}</h2>
   <h2 class="card-title ">Price $ <span class="text-red-500">${priceparse}</span></h2>
    </div>
   `
   cartlist.appendChild(li)
   
}


function btn3() {
    swal("successfully added!", "The product has been successfully added to your cart !", "success")
    const total_price = document.getElementById('total_price')
    const total_priceparse = parseFloat(total_price.innerText)

    const price3 = document.getElementById('price3')
    const priceparse = parseFloat(price3.innerText)

    const Model3=document.getElementById('Model3')
    const phnname = Model3.innerText;

    const img3=document.getElementById('img3').src

    total_price.innerText = priceparse + total_priceparse

    const cartlist = document.getElementById('list')
    const li = document.createElement('li')
    li.innerHTML = `
   <div id="card" class="w-full flex gap-5 items-center shadow-md shadow-black p-2 bg-slate-300 rounded mb-2">
   <aside>
       <img class="w-16" src="${img3}" alt="image">
   </aside>
   <h2 class="text-lg font-semibold text-black capitalize"> ${phnname}</h2>
   <h2 class="card-title ">Price $ <span class="text-red-500">${priceparse}</span></h2>
    </div>
   `
   cartlist.appendChild(li)
   
}



function btn4() {
    swal("successfully added!", "The product has been successfully added to your cart !", "success")
    const total_price = document.getElementById('total_price')
    const total_priceparse = parseFloat(total_price.innerText)

    const price4 = document.getElementById('price4')
    const priceparse = parseFloat(price4.innerText)

    const Model4=document.getElementById('Model4')
    const phnname = Model4.innerText;

    const img4=document.getElementById('img4').src

    total_price.innerText = priceparse + total_priceparse

    const cartlist = document.getElementById('list')
    const li = document.createElement('li')
    li.innerHTML = `
   <div id="card" class="w-full flex gap-5 items-center  shadow-md shadow-black p-2 bg-slate-300 rounded mb-2">
   <aside>
       <img class="w-16" src="${img4}" alt="image">
   </aside>
   <h2 class="text-lg font-semibold text-black capitalize"> ${phnname}</h2>
   <h2 class="card-title ">Price $ <span class="text-red-500">${priceparse}</span></h2>
    </div>
   `
   cartlist.appendChild(li)
   
}

function alarta(){
    swal("Order Complete!", "you have successfully purchase !", "success")
    const cartlist = document.getElementById('list')
    cartlist.innerHTML = ''

    const total_price = document.getElementById('total_price')
    total_price.innerText='00'
}