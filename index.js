const quotes = [
    {
        quote: "나는 생각한다 고로 나는 존재한다",
        author: "르네 데카르트",
    },
    {
        quote: "내 사전에 불가능이란 단어는 없다",
        author: "나폴레옹",
    },
    {
        quote: "너 자신을 알라.",
        author: "미상",
    },
    {
        quote: "엉터리로 배운 사람은 아무것도 모르는 사람보다 더 어리석다.",
        author: "벤저민 프랭클린",
    },
    {
        quote: "지식은 사랑이자, 빛이자, 통찰력이다.",
        author: "헬렌 켈러",
    },
    {
        quote: "상상력은 지식보다 훨씬 중요하다.",
        author: "알버트 아인슈타인",
    },
];

const quoteTag = document.getElementById('quote');
const todayQuote = quotes[new Date().getDate()%quotes.length];
quoteTag.innerText = `${todayQuote.quote}\r\n - ${todayQuote.author}`;
