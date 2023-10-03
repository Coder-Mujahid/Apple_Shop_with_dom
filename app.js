function btn1() {
    const total_price = document.getElementById('total_price')
    const total_priceparse = parseFloat(total_price.innerText)

    const price = document.getElementById('price')
    const priceparse = parseFloat(price.innerText)

    const Model1=document.getElementById('Model1')
    const phnname = Model1.innerText;

    total_price.innerText = priceparse + total_priceparse

    const cartlist = document.getElementById('list')
    const li = document.createElement('li')
    li.innerHTML = `
   <div id="card" class="w-full flex gap-5 items-center  border-2 border-black p-2 bg-slate-300 rounded mb-2">
   <aside>
       <img class="w-20" src="img/12pro-removebg-preview.png" alt="image">
   </aside>
   <h2 class="text-lg font-semibold text-black capitalize"> ${phnname}</h2>
   <h2 class="card-title ">Price $ <span class="text-red-500">${priceparse}</span></h2>
    </div>
   `
   cartlist.appendChild(li)
   

}