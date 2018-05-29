a = int(input())
b = int(input())

def love8(a, b):
  if a==8 or b==8 or a+b==8 or b-a==8 or a-b==8:
    print('True')
  else:
    print("false")
    
love8(a,b)
