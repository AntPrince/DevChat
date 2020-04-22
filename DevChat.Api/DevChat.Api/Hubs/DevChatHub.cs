using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevChat.Api.Hubs
{
    public class DevChatHub : Hub
    {
        public async Task SendMessage(string message)
        {
            Console.WriteLine("API接收到消息 :【" + message + "】,并回复【" + message+"?】");
            await Clients.All.SendAsync("receiveMessage",message+"吗?");
        }
    }
}
