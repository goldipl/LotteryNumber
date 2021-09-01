const btn = document.querySelector('.btn');
const div = document.querySelector('.lotteryText');
const span = document.querySelector('.lotteryNumber');

const prefixs = ["Wydaje mi się, że będzie to",
    "Mam wrażenie, że jest to",
    "Szczerze uważam, że jest to",
    "Na 100% twierdzę, że jest to",
    "Jestem pewien, że to"
];

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * 100);
    div.textContent =
        `${prefixs[Math.floor(Math.random() * prefixs.length)]}:`;
    span.textContent = `${indexName}`;

}

btn.addEventListener('click', nameGenerator)