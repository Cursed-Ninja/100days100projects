from turtle import Turtle

FONT = ("Courier", 24, "normal")


class Scoreboard(Turtle):
    def __init__(self) -> None:
        super().__init__()
        self.current_level = 1
        self.penup()
        self.hideturtle()
        self.goto((-300, 260))
        self.score()

    def score(self):
        self.clear()
        self.write(f"Level: {self.current_level}",
                   move=False, align="left", font=FONT)

    def updateScore(self):
        self.current_level += 1
        self.score()

    def gameOver(self):
        self.goto((0, 0))
        self.write("Game Over.", move=False, align="center", font=FONT)
