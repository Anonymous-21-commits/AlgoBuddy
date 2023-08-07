const { Telegraf } = require("telegraf");
const axios = require('axios');

const bot = new Telegraf("6047256465:AAHSxs_32BzXVuRvBEnSvfvRDfSbraaCLN4");


/*
how to get the secreet bot token
-> Open Telegram -> BotFather
-> to read instructions /start and enter
-> to create a new bot /newbot and enter
-> specify name without command slash 
-> choose a username for your bot. It must end in `bot`.for example: TetrisBot or tetris_bot.
-> bot url is created

*/
bot.start((ctx) => ctx.reply("Welcome to algobuddy "));

// Function to fetch and reply with code from a given URL
async function replyWithAlgorithmCode(ctx, url) {
  try {
    const response = await axios.get(url);
    const reply = response.data.toString();
    const formatted = "```javascript\n" + reply + "\n```";
    ctx.replyWithMarkdownV2(formatted);
  } catch (error) {
    console.error("Error fetching code:", error);
    ctx.reply("An error occurred while fetching the code.");
  }
}


bot.command('dnf',(ctx)=>{
  const dnfURL='https://raw.githubusercontent.com/Anonymous-21-commits/AlgoRepo/master/DNF.java';
  replyWithAlgorithmCode(ctx,dnfURL);
});
bot.command('bs',(ctx)=>{
  const bsURL='https://raw.githubusercontent.com/Anonymous-21-commits/AlgoRepo/master/BinarySearch.java';
  replyWithAlgorithmCode(ctx,bsURL);
});
bot.command('dfs',(ctx)=>{
  const dfsURL='https://raw.githubusercontent.com/Anonymous-21-commits/AlgoRepo/master/DFS.java';
  replyWithAlgorithmCode(ctx,dfsURL);
});
bot.command('sliding',(ctx)=>{
  const slidingURL='https://raw.githubusercontent.com/Anonymous-21-commits/AlgoRepo/master/Sliding.java';
  replyWithAlgorithmCode(ctx,slidingURL);
});
bot.command('gcd',(ctx)=>{
  const gcdURL='https://raw.githubusercontent.com/Anonymous-21-commits/AlgoRepo/master/gcd.java';
  replyWithAlgorithmCode(ctx,gcdURL);
});
bot.command('seive',(ctx)=>{
  const seiveURL='https://raw.githubusercontent.com/Anonymous-21-commits/AlgoRepo/master/Seive.java';
  replyWithAlgorithmCode(ctx,seiveURL);
});
bot.command('dj',(ctx)=>{
  const djURL='https://raw.githubusercontent.com/Anonymous-21-commits/AlgoRepo/master/Dijsktra.java';
  replyWithAlgorithmCode(ctx,djURL);
});
bot.command('bfs',(ctx)=>{
  const bfsURL='https://raw.githubusercontent.com/Anonymous-21-commits/AlgoRepo/master/BFS.java';
  replyWithAlgorithmCode(ctx,bfsURL);
});
bot.launch();
