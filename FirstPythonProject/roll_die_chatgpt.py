import random

# Start the program
print("Welcome to the Die Roller")

while True:
    # Prompt to roll
    print("Press 1 to roll the die")
    choice = input().strip()

    # Decision: 1 pressed?
    if choice != "1":
        print("In order to roll the die, you must press 1")
        continue   # Go back to "Press 1 to roll the die"

    # Generate random number between 1 and 6 inclusive
    roll = random.randint(1, 6)
    print(f"You rolled a {roll}.")

    # Ask to play again
    while True:
        play_again = input(
            "Would you like to roll again?\nType Yes or No: "
        ).strip().lower()

        # Decision: Play Again?
        if play_again in ("yes", "y"):
            break      # Go back to rolling
        elif play_again in ("no", "n"):
            print("Thank you for playing")
            exit()     # End program
        else:
            print("Please type Yes or No.")