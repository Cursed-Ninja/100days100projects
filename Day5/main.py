import time
from turtle import Screen
from footer import Footer
from player import Player
from car_manager import CarManager
from scoreboard import Scoreboard

screen = Screen()
screen.setup(width=600, height=600)
screen.tracer(0)
screen.listen()

player = Player()
car = CarManager()
score = Scoreboard()
screen.onkey(player.move, "Up")
game_is_on = True

footer = Footer()

while game_is_on:
    time.sleep(0.1)
    screen.update()
    if player.ycor() > 280:
        score.updateScore()
        car.resetCar()
        player.resetPlayer()

    car.createCar()

    car.moveCar()
    for Car in car.cars:
        if(Car.distance(player) < 23):
            game_is_on = False
            score.gameOver()


screen.exitonclick()
