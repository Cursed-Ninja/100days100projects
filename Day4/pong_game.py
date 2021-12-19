from turtle import Screen, Turtle
import turtle
from paddle import Paddle
from ball import Ball
from scoreboard import Scoreboard
import time
from footer import Footer

screen = Screen()


screen.bgcolor("black")
screen.setup(width=1000, height=800)
screen.title("Pong")
screen.tracer(0)


rpaddle = Paddle(450, 0)
lpaddle = Paddle(-450, 0)
ball = Ball()

score = Scoreboard()

partition = Turtle()
partition.hideturtle()
turtle.shape("square")
partition.color("white")
partition.pensize(7)
partition.setheading(270)
partition.penup()
partition.goto((0, 400))

screen.listen()
screen.onkeypress(rpaddle.moveUp, "Up")
screen.onkeypress(rpaddle.moveDown, "Down")
screen.onkeypress(lpaddle.moveUp, "w")
screen.onkeypress(lpaddle.moveDown, "s")

for i in range(1, 22):
    if (i % 2) == 0:
        partition.penup()
    else:
        partition.pendown()

    partition.forward(40)

partition.penup()

partition.goto(-500, 300)

partition.setheading(0)

for i in range(1, 41):
    if (i % 2) == 0:
        partition.penup()
    else:
        partition.pendown()

    partition.forward(40)

footer = Footer()

game_is_on = True

while game_is_on:
    time.sleep(0.02)
    screen.update()
    ball.move()
    score.updateScoreboard()
    if ball.ycor() > 380 or ball.ycor() < -380:
        ball.bounce_y()

    if ball.distance(rpaddle) < 50 and ball.xcor() > 420 and ball.xcor() < 450 and int(ball.heading()) == 0 or ball.xcor() < -420 and ball.distance(lpaddle) < 50 and int(ball.heading()) == 180 and ball.xcor() > -450:
        ball.bounce_x()

    if ball.xcor() > 480:
        ball.resetBall()
        score.lpoint()

    if ball.xcor() < -480:
        ball.resetBall()
        score.rpoint()


screen.exitonclick()
