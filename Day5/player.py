from turtle import Turtle

STARTING_POSITION = (0, -260)
MOVE_DISTANCE = 10
FINISH_LINE_Y = 280


class Player(Turtle):
    def __init__(self) -> None:
        super().__init__()
        self.player()

    def player(self):
        self.shape("turtle")
        self.penup()
        self.goto(STARTING_POSITION)
        self.setheading(90)

    def move(self):
        self.forward(10)

    def resetPlayer(self):
        self.goto(STARTING_POSITION)
