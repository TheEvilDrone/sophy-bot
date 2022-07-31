//conexão
import { data } from "./config/data";
import { connect } from "./connection";
import { getBotfunctions } from "./functions/botFunction";
import { isComand, searchComand } from "./functions/comand";
import path from 'path'
//exportando a inicialização do bot
export async function bot() {
    //conectando
    const socket = await connect()
    //socket monitorando evento de messagem recebida
    socket.ev.on('messages.upsert', async (msg) => {
        const [wMessage] = msg.messages

        const message = wMessage.message
        const botF = getBotfunctions(socket, wMessage)
        //barreiras

        //se message nao existe
        if (!message) {
            return
        }
        //se message nao tem o prefixo
        if (!isComand(message)) {
            return

        }
        //se o comando nao existe
        if (!searchComand(wMessage)) {
<<<<<<< HEAD
           
            return botF.reply(`comando não encontrado! para ver os comandos digite *${data.prefix}menu*`)
        }

=======
          return botF.reply(`comando não encontrado! para ver os comandos digite *${data.prefix}menu*`)
      }
    
>>>>>>> 4e05e2e46d430bee1ab50694116e0efce55c294c
        //sem barreiras, comandos seguem apartir daqui

    })
}