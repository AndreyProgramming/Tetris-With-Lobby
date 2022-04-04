
class Lobby():
    players = []
    lobby_code = 0
    max_players = 2

    def __init__(self, playerHost):
        self.host = playerHost
        self.players.add(playerHost)  

    def addPlayer(self, opponent):
        if len(self.players) == 2:
            return 

        self.players.append(opponent)
        self.startGame()

    def startGame(self):
        pass



