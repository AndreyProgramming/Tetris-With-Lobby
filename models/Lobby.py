import asyncio
import websockets
 
class Lobby():
    players = []
    lobby_code = 0
    max_players = 2

    def __init__(self, playerHost):
        self.host = playerHost
        self.players.append(playerHost)  

    def addPlayer(self, opponent):
        if len(self.players) == 2:
            return 

        self.players.append(opponent)
        self.startGame()

    async def handler(websocket, path):
        data = await websocket.recv()
        reply = f"Data recieved as:  {data}!"
        await websocket.send(reply)
        
    def startGame(self):
        start_server = websockets.serve(self.handler, "localhost", 8000)
        asyncio.get_event_loop().run_until_complete(start_server)        
        asyncio.get_event_loop().run_forever()

        


        

        
        
        
        



