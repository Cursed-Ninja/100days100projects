from turtle import Turtle



class Score(Turtle):
    def __init__(self) -> None:
        super().__init__()
        self.score = 0
        self.high_score = 0
        with open("high_score.txt") as file:
            self.high_score = int(file.read())
        self.printScore()
        self.color("white")
        self.hideturtle()
        

    def printScore(self):
        self.goto(x=0, y=250)
        self.clear()
        self.write(f"Score: {self.score} High Score: {self.high_score}", move=False,
                   align='center', font=('Arial', 18, 'normal'))

    def updateScore(self):
        self.score += 1
        self.printScore()

    def gameOver(self):
        self.goto(0, 0)
        self.write("Game Over.", move=False, align='center',
                   font=('Arial', 18, 'normal'))
        self.goto(0, -20)
        self.write("Press r to play again", move=False, align='center',
                   font=('Arial', 12, 'normal'))

    def reset(self):
        if self.score > self.high_score:
            self.high_score = self.score
        self.score = 0
        self.printScore()
        with open("high_score.txt", mode="w") as file:
            file.write(str(self.high_score))
        

