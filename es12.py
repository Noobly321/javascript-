
a = input("Enter your email:")
if '@' not in a:
  print("Error: no @ symbol Try again")
elif "." not in a:
  print("Error: no period Try again")
else:
  print("Email is valid")
