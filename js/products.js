// Данные о товарах с реальными ценами и характеристиками
const products = {
    1: {
        id: 1,
        name: "Смартфон Samsung Galaxy A07 LTE 4/128GB Черный",
        brand: "Samsung",
        price: 7274,
        oldPrice: 10999,
        discount: 33,
        image: "https://cdn.mtscdn.ru/upload/images/fe-hu-4.png",
        images: [
            "https://cdn.mtscdn.ru/upload/images/fe-hu-4.png",
            "https://ir-3.ozone.ru/s3/multimedia-1-4/wc1000/7936803940.jpg",
            "https://ir-3.ozone.ru/s3/multimedia-1-7/wc1000/7936803943.jpg",
            "https://ir-3.ozone.ru/s3/multimedia-1-4/wc1000/7936803976.jpg"
        ],
        description: "Смартфон Samsung Galaxy A07 LTE с большим экраном и производительным процессором. Идеально подходит для повседневного использования, работы и развлечений.",
        characteristics: {
            "Экран": "6.5\" PLS, 1600x720, 60 Гц",
            "Процессор": "MediaTek Helio G85",
            "Оперативная память": "4 ГБ",
            "Встроенная память": "128 ГБ",
            "Камера основная": "50 Мп + 2 Мп",
            "Камера фронтальная": "5 Мп",
            "Батарея": "5000 мАч",
            "Операционная система": "Android 14",
            "Размеры": "168.0 x 78.0 x 9.1 мм",
            "Вес": "196 г"
        },
        rating: 4.8,
        reviewsCount: 10,
        category: "smartphone"
    },
    2: {
        id: 2,
        name: "Apple MacBook Air 13 (M1 2020 MGN63) 8 ГБ, 256 ГБ SSD (серый космос)",
        brand: "HUAWEI",
        price: 53349,
        oldPrice: 56000,
        discount: 37,
        image: "https://iceapple.ru/image/catalog/!Macbook15/img_0608.png",
        images: [
            "https://iceapple.ru/image/catalog/!Macbook15/img_0608.png",
            "https://ir-3.ozone.ru/s3/multimedia-d/wc1000/6896732773.jpg",
            "https://ir-3.ozone.ru/s3/multimedia-1-k/wc1000/6917661848.jpg",
            "https://ir-3.ozone.ru/s3/multimedia-z/wc1000/6896829527.jpg",
            "https://ir-3.ozone.ru/s3/multimedia-1-u/wc1000/6955574754.jpg"
        ],
        description: "Супер тонкий и легкий ноутбук MacBook Air усовершенствовался благодаря мощному чипу Apple M1. Работа центрального процессора ускорилась до 3,5 раз, а графического - до раз. Инновационная система Neural Engine повысила скорость машинного обучения до 9 раз. Новый ноутбук от Apple теперь дольше не нуждается в подзярадке, по сравнению с более ранними моделями. За счет отсутствия вентилятора он не издает шумы. Благодаря высокой производительности чипа M1 MacBook Air способен профессионально редактировать видео и фото, передавать игры со сложной графикой. 8-ядерный процессор в чипе работает быстрее до 3,5 раз, чем прошлые аналоги, а также грамотно распределяет функции между ядрами производительности и эффективности. При этом ядра эффективности потребляют энергию в 10 раз меньше, легко выполняя ежедневные задачи.",
        characteristics: {
        },
        rating: 4.8,
        reviewsCount: 18,
        category: "laptop"
    },
};

// Функция для получения товара по ID
function getProductById(id) {
    return products[id] || null;
}

// Функция для получения всех товаров
function getAllProducts() {
    return Object.values(products);
}

// Функция для получения товаров по категории
function getProductsByCategory(category) {
    return Object.values(products).filter(product => product.category === category);
}

