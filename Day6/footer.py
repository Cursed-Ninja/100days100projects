from turtle import Turtle


class Footer(Turtle):
    def __init__(self) -> None:
        super().__init__()
        self.hideturtle()
        self.penup()
        self.writeFooter()

    def writeFooter(self):
        self.goto((-300, -313))
        self.write("#100days100projects", move=False,
                   align="center", font=("Courier New", 8, 'bold'))
        self.goto((0, -313))
        self.write("Made by Shivam Mahajan", move=False,
                   align="center", font=("Courier New", 8, 'bold'))
        self.goto((320, -313))
        self.write("Day 6", move=False, align="center",
                   font=("Courier New", 8, 'bold'))
