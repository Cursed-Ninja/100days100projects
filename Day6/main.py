import turtle
import pandas
from footer import Footer
screen = turtle.Screen()
screen.title("Guess the States and UTs")

image = "SodaPDF-converted-blank-map-of-india (1) (1).gif"
screen.addshape(image)
pen = turtle.Turtle()
turtle.shape(image)

count = 0

states = pandas.read_csv("states.csv")
pen.hideturtle()
pen.penup()
footer = Footer()
guessed_state = []
while count < 36:
    answer_state = screen.textinput(
        title=f"Guess the state {count}/36", prompt="Enter the name").title()
    if answer_state == "Exit":
        break
    if answer_state in states["state"].tolist():
        row = states[states.state == answer_state]
        x_cor = row.x
        y_cor = row.y
        pen.goto(int(x_cor), int(y_cor))
        pen.write(f"{answer_state}", move=False,
                  align="left", font=("Arial", 8, "normal"))
        count += 1
        guessed_state.append(answer_state)

remaining_states = [state for state in states if state not in guessed_state]


pandas.DataFrame(remaining_states).to_csv("remaining_state.csv")
screen.exitonclick()
