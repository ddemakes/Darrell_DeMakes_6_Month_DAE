# Welcome Message
print("Welcome to Roll A Die!  You are going to have the time of your life")

# Ask User to enter 1 to roll die
userRollResponseString = input( "Press 1 to roll the die: " )

# Converting user Roll Response that was a string
userRollResponseInt = int(userRollResponseString)
   
   
while userRollResponseInt != 1:
    userRollResponseString = input( "Please remember to Press 1 to roll the die: " )
    userRollResponseInt = int(userRollResponseString)
    
print ( "The user pressed 1")    
    





# print( userRollResponse )
