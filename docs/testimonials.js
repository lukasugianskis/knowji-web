const testimonials = [
  {
    name: "JJ",
    avatar: "https://i.pravatar.cc/100?img=12",
    text: "I STUDIED WITH KNOWJI AND GOT 100% ON MY SOCIAL STUDIES TEST?? YALL NEED TO USE THIS",
    time: "1d",
    likes: 132
  },
  {
    name: "isla",
    avatar: "https://i.pravatar.cc/100?img=5",
    text: "got 9 grade 9s with knowji 😊 no cap",
    time: "1d",
    likes: 512
  },
  {
    name: "edunsmore55",
    avatar: "https://i.pravatar.cc/100?img=32",
    text: "I love knowji I would cry if I couldn't use it fr",
    time: "1d",
    likes: 3101
  },
  {
    name: "Brit",
    avatar: "https://i.pravatar.cc/100?img=47",
    text: "after getting my GCSE results... knowji actually worked!! slay",
    time: "8d",
    likes: 99
  },
  {
    name: "Arjun",
    avatar: "https://i.pravatar.cc/100?img=18",
    text: "My highest GCSE subjects were the ones I used knowji for. FR its the only way I learn",
    time: "7d",
    likes: 33
  },
  {
    name: "Georgia",
    avatar: "https://i.pravatar.cc/100?img=25",
    text: "knowji SAVED my science grades, went from a 4–3 to 7–7 in weeks 😭😭",
    time: "1d",
    likes: 55
  },
  {
    name: "Melinoe",
    avatar: "https://i.pravatar.cc/100?img=39",
    text: "What a lifesaver lowkey",
    time: "1d",
    likes: 1
  },
  {
    name: "isla",
    avatar: "https://i.pravatar.cc/100?img=9",
    text: "I'm actually obsessed with knowji... I never enjoyed studying before",
    time: "8d",
    likes: 201
  },
  {
    name: "charlie.x",
    avatar: "https://i.pravatar.cc/100?img=14",
    text: "knowji is my roman empire. i think about it daily",
    time: "2d",
    likes: 420
  },
  {
    name: "maya",
    avatar: "https://i.pravatar.cc/100?img=21",
    text: "went from failing bio to actually understanding it?? knowji is that girl",
    time: "3d",
    likes: 87
  },
  {
    name: "alex_t",
    avatar: "https://i.pravatar.cc/100?img=28",
    text: "my parents finally stopped yelling at me about grades thanks to knowji 💀",
    time: "4d",
    likes: 156
  },
  {
    name: "soph",
    avatar: "https://i.pravatar.cc/100?img=33",
    text: "knowji is literally the only study app that doesn't make me want to nap",
    time: "5d",
    likes: 234
  },
  {
    name: "kai",
    avatar: "https://i.pravatar.cc/100?img=42",
    text: "bro knowji explained calculus better than my teacher in 10 mins",
    time: "6d",
    likes: 789
  },
  {
    name: "liv",
    avatar: "https://i.pravatar.cc/100?img=16",
    text: "ate my revision up with knowji and left no crumbs",
    time: "1d",
    likes: 321
  },
  {
    name: "zayn",
    avatar: "https://i.pravatar.cc/100?img=50",
    text: "if knowji was a person i'd marry it no joke",
    time: "2d",
    likes: 654
  },
  {
    name: "ella",
    avatar: "https://i.pravatar.cc/100?img=23",
    text: "my revision era is thriving bc of knowji",
    time: "3d",
    likes: 432
  },
  {
    name: "noah",
    avatar: "https://i.pravatar.cc/100?img=37",
    text: "knowji got me through finals without having a mental breakdown?? icon",
    time: "4d",
    likes: 198
  },
  {
    name: "chloe",
    avatar: "https://i.pravatar.cc/100?img=44",
    text: "the way knowji makes hard topics actually fun... it's giving genius",
    time: "5d",
    likes: 567
  },
  {
    name: "mason",
    avatar: "https://i.pravatar.cc/100?img=19",
    text: "knowji my grades actually improved fr",
    time: "6d",
    likes: 123
  },
  {
    name: "ava",
    avatar: "https://i.pravatar.cc/100?img=30",
    text: "i used to hate chemistry now i'm lowkey obsessed thanks to knowji",
    time: "7d",
    likes: 876
  },
];

const grid = document.getElementById("testimonialsGrid");

testimonials.forEach(t => {
  const card = document.createElement("div");
  card.className = "testimonial-card";

  card.innerHTML = `
    <div>
      <div class="card-top">
        <img class="avatar" src="${t.avatar}">
        <div class="username">${t.name}</div>
      </div>
      <div class="message">${t.text}</div>
    </div>
    <div class="card-bottom">
      <span>${t.time} · Reply</span>
      <span class="likes">❤️ ${t.likes}</span>
    </div>
  `;

  grid.appendChild(card);
});