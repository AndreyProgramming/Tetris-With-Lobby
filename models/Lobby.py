
class Lobby():
    players = []
    lobby_code = 0

    def __init__(self, playerHost):
        self.host = playerHost
        self.players.add(playerHost)  
        pass

