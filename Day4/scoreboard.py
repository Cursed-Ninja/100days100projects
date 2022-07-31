from turtle import Turtle


class Scoreboard(Turtle):
    def __init__(self) -> None:
        super().__init__()
        self.color("white")
        self.penup()
        self.hideturtle()
        self.lscore = 0
        self.rscore = 0
        self.updateScoreboard()

    def updateScoreboard(self):
        self.clear()
        self.goto(-100, 300)
        self.write(self.lscore, align="center", font=("Courier", 80, "normal"))
        self.goto(100, 300)
        self.write(self.rscore, align="center", font=("Courier", 80, "normal"))

    def lpoint(self):
        self.lscore += 1

    def rpoint(self):
        self.rscore += 1
