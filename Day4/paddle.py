from turtle import Turtle


class Paddle(Turtle):

    def __init__(self, postion_x, postion_y) -> None:
        super().__init__()
        self.createPaddle((postion_x, postion_y))

    def createPaddle(self, positon):
        self.color("white")
        self.shape("square")
        self.penup()
        self.shapesize(stretch_wid=5, stretch_len=1)
        self.goto(positon)

    def moveUp(self):
        self.goto((self.xcor(), self.ycor() + 20))

    def moveDown(self):
        self.goto((self.xcor(), self.ycor() - 20))
