import Lobby
import Player
import random as rand

class Multiplayer():
    lobbies = {}

    def __init__(self):
        pass

    def createNewLobby(self, newPlayer):
        lobby = Lobby(newPlayer)
        lobby.code = self.generateLobbyCode()
        self.lobbies[lobby.code] = lobby

    def joinLobby(self, newPlayer, keycode):
        if not self.lobbies[keycode]:
            return 

    def generateLobbyCode(self):
        
        code = "0"
        while self.lobbies[code]:
            code = str(rand.randint(10) * (10 ** 1) 
            + rand.randint(10) * (10 ** 2) 
            + rand.randint(10) * (10 ** 3)
            + rand.randint(10) * (10 ** 4)
            + rand.randint(10) * (10 ** 5)
            + rand.randint(10) * (10 ** 6)) 

        return code
