const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'goku.aternos.me', 
        port: 52134,       
        username: 'Aternos_KeepAlive'
    });

    bot.on('spawn', () => {
        console.log('البوت دخل سيرفر آترنوس بنجاح!');
        
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
            
            const yaw = Math.random() * Math.PI * 2;
            const pitch = (Math.random() - 0.5) * Math.PI;
            bot.look(yaw, pitch);
            
            console.log('قام البوت بحركة عشوائية لمنع الـ AFK.');
        }, 30000); 
    });

    bot.on('end', () => {
        console.log('فصل البوت، سيعيد المحاولة بعد 60 ثانية...');
        setTimeout(createBot, 60000); 
    });

    bot.on('error', (err) => console.log('خطأ:', err));
}

createBot();

