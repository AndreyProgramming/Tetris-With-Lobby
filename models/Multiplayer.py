from models.Lobby import *
from models.Player import *
import random as rand

class Multiplayer():
    lobbies = {}

    def __init__(self):
        pass

    def createNewLobby(self, newPlayer):
        lobby = Lobby(newPlayer)
        lobby.code = self.generateLobbyCode()
        self.lobbies[lobby.code] = lobby
        return lobby.code

    def joinLobby(self, newPlayer, keycode):
        if not self.lobbies[keycode]:
            return 
        
        lobby = self.lobbies[keycode]
        lobby.addPlayer(newPlayer)

    def generateLobbyCode(self):
        
        code = str(
                rand.randint(0, 10) * (10 ** 1) 
                + rand.randint(0, 10) * (10 ** 2) 
                + rand.randint(0, 10) * (10 ** 3)
                + rand.randint(0, 10) * (10 ** 4)
                + rand.randint(0, 10) * (10 ** 5)
                + rand.randint(0, 10) * (10 ** 6)
            ) 
        while code in self.lobbies:
            code = str(
                rand.randint(0, 10) * (10 ** 1) 
                + rand.randint(0, 10) * (10 ** 2) 
                + rand.randint(0, 10) * (10 ** 3)
                + rand.randint(0, 10) * (10 ** 4)
                + rand.randint(0, 10) * (10 ** 5)
                + rand.randint(0, 10) * (10 ** 6)
            ) 

        return code
