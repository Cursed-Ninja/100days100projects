from turtle import Screen, xcor
import time
from snake import Snake
from food import Food
from scoreboard import Score
from footer import Footer

screen = Screen()
footer = Footer()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("Snake Game")
screen.tracer(0)
snake_segments = []


snake = Snake()
food = Food()
score = Score()
score.printScore()
screen.listen()
screen.onkey(snake.up, "Up")
screen.onkey(snake.down, "Down")
screen.onkey(snake.left, "Left")
screen.onkey(snake.right, "Right")
footer.writeFooter()
game_is_on = True
while game_is_on:

    screen.update()
    time.sleep(0.05)
    snake.move()

    if snake.head.distance(food) < 10:
        food.refresh()
        snake.extend()
        score.updateScore()
        score.printScore()

    if snake.head.xcor() > 290 or snake.head.xcor() < -290 or snake.head.ycor() > 290 or snake.head.ycor() < -290:
        game_is_on = False

    for segment in snake.snake_segments[1:]:
        if snake.head.distance(segment) < 5:
            game_is_on = False
            score.gameOver()
score.gameOver()
screen.exitonclick()
