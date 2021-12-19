from turtle import Turtle
POSITONS = [(0,0), (-5,0), (-10, 0), (-15,0), (-20,0), (-25,0)]
class Snake:
    def __init__(self) -> None:
        self.snake_segments = []            
        self.createSnake()
        self.head = self.snake_segments[0]

    def createSnake(self):
        for position in POSITONS:
            self.addSegment(position)

    def addSegment(self, position):
        snake = Turtle()
        snake.shape("square")
        snake.color("white")
        snake.penup()
        snake.goto(position)
        snake.shapesize(stretch_len=0.5, stretch_wid=0.5)
        self.snake_segments.append(snake)

    def move(self):
        for i in range(len(self.snake_segments)-1, 0, -1):
            self.snake_segments[i].goto(self.snake_segments[i-1].pos())
        self.head.forward(10)

    def up(self):
        if round(self.head.heading()) != 270:
            self.head.setheading(90)

    def down(self):
        if round(self.head.heading()) != 90:
            self.head.setheading(270)

    def left(self):
        if round(self.head.heading()) != 0:
            self.head.setheading(180)

    def right(self):
        if round(self.head.heading()) != 180:
            self.head.setheading(0)
    
    def extend(self):
        self.addSegment(self.snake_segments[-1].position())

    def reset(self):
        for segment in self.snake_segments:
            segment.goto((1000,1000))
        self.snake_segments.clear()
        self.createSnake()
        self.head = self.snake_segments[0]