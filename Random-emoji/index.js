const btnE1 = document.getElementById("btn");
const emojiNameE1 = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=7ec76e3786596975a6b5dab41cc1f0c7610e14e1")

    data = await response.json();

    for (let i=0; i<1500;i++){
        emoji.push({
            emojiname: data[i].character,
            emojicode: data[i].unicodeName,
        });
    }

}

getEmoji();


btnE1.addEventListener("click", ()=>{
   const randomNum =Math.floor(Math.random()*emoji.length); 
   btnE1.innerText = emoji[randomNum].emojiname;
   emojiNameE1.innerText = emoji[randomNum].emojicode;

});