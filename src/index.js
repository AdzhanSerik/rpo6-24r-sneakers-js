const products = [
    {
        id: 1,
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 40000,
        imgUrl: "../assets/products/sneaker-1.jpg"
    },
    {
        id: 2,
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 35000,
        imgUrl: "../assets/products/sneaker-2.jpg"
    },
    {
        id: 3,
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
    {
        id: 4,
        title: "dasdasdasduede",
        price: 52000,
        imgUrl: "../assets/products/sneaker-3.jpg"
    },
]

const cards = document.querySelector('.cards')

products.forEach((item) => {
    cards.insertAdjacentHTML('beforeend', `
                <div class="card border-1 border-gray-200 p-5 flex flex-col w-70 rounded-2xl gap-4">
                    <img class=" absolute" src="../assets/icons/like-disabled.svg" alt="">
                    <img class="w-70" src="${item.imgUrl}" alt="sneaker">
                    <p class="font-[500] text-xl">${item.title}</p>
                    <div class="flex items-center justify-between">
                        <div>
                            <span class="font-bold text-gray-300">ЦЕНА:</span>
                            <p class="font-bold">${item.price} тг.</p>
                        </div>
                        <img src="../assets/icons/add-product-disabled.svg" alt="">
                    </div>
                </div>

    `)
})

const cartBtn = document.querySelector('.cart-btn')
cartBtn.addEventListener('click', () => {
    document.querySelector('.cart-menu').classList.remove('right-[-100%]')
    document.querySelector('.cart-menu').classList.add('right-0')
})

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-menu')) {
        document.querySelector('.cart-menu').classList.remove('right-0')
        document.querySelector('.cart-menu').classList.add('right-[-100%]')
    }
})