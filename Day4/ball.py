from turtle import Turtle


class Ball(Turtle):
    def __init__(self) -> None:
        super().__init__()
        self.createBall()
        self.x_move = 10
        self.y_move = 10
        self.move_speed = 0.01

    def createBall(self):
        self.shape("circle")
        self.color("white")
        self.penup()

    def move(self):
        new_x = self.xcor() + self.x_move
        new_y = self.ycor() + self.y_move
        self.goto(new_x, new_y)

    def bounce_y(self):
        self.y_move *= -1

    def bounce_x(self):
        self.setheading((int(self.heading())+180) % 360)
        self.x_move *= -1
        self.move_speed *= 1.1

    def resetBall(self):
        self.goto((0, 0))
        self.x_move *= -1
        self.setheading((int(self.heading())+180) % 360)
        self.move_speed = 0.01
