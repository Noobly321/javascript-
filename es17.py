a=float(input("Total cost?"))
print()
b=float(input('Money given?'))
print()
c=b-a
print('Change:',c)
def dollars(x):
    do=0
    while x>.99:
      x-=1
      do+=1
    print(do)
    f=c-do
    q=0
    while x>.24:
      x-=.25
      q+=1
    print(q)
    di=0
    while x>.09:
      x-=.1
      di+=1
    print(di)
    n=0
    while x>.04:
      x-=.05
      n+=1
    print(n)
    p=0
    while x>.009:
      x-=.01
      p+=1
    print(p)
dollars(c)
