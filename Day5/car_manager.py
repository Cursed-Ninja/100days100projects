from turtle import Turtle
import random
COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]
STARTING_MOVE_DISTANCE = 5
MOVE_INCREMENT = 5


class CarManager():
    def __init__(self) -> None:
        self.current_level = 1
        self.cars = []

    def createCar(self):
        if random.randint(1, 6) == 1:
            car = Turtle()
            car.shape("square")
            car.shapesize(stretch_len=2, stretch_wid=1)
            car.color(random.choice(COLORS))
            car.penup()
            car.goto((300, random.randint(-240, 260)))
            car.setheading(180)
            self.cars.append(car)

    def moveCar(self):
        for car in self.cars:
            car.forward(STARTING_MOVE_DISTANCE +
                        MOVE_INCREMENT*(self.current_level-1))

    def resetCar(self):
        for car in self.cars:
            car.hideturtle()
        self.current_level += 1
        self.cars = []
