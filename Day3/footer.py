from turtle import Turtle


class Footer(Turtle):
    def __init__(self) -> None:
        super().__init__()
        self.hideturtle()
        self.color("white")
        self.penup()

    def writeFooter(self):
        self.goto((-230, -280))
        self.write("#100days100projects", move=False,
                   align="center", font=("Courier New", 8, 'bold'))
        self.goto((0, -280))
        self.write("Made by Shivam Mahajan", move=False,
                   align="center", font=("Courier New", 8, 'bold'))
        self.goto((260, -280))
        self.write("Day 3", move=False, align="center",
                   font=("Courier New", 8, 'bold'))
