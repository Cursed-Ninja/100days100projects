from turtle import Turtle


class Score(Turtle):
    def __init__(self) -> None:
        super().__init__()
        self.score = 0
        self.printScore()
        self.color("white")
        self.hideturtle()
        self.goto(x=0, y=250)

    def printScore(self):
        self.clear()
        self.write(f"Score: {self.score}", move=False,
                   align='center', font=('Arial', 18, 'normal'))

    def updateScore(self):
        self.score += 1

    def gameOver(self):
        self.goto(0, 0)
        self.write("Game Over.", move=False, align='center',
                   font=('Arial', 18, 'normal'))
