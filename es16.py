from datetime import datetime as dt
from datetime import timedelta
import time
import replit

while True:
  current = dt.now() - timedelta(hours=6)
  print(str(24-current.day) + " days")
  print(str(23-current.hour) + " hours")
  print(str(59-current.minute) + " minutes")
  print(str(60-current.second) + " seconds")
  time.sleep(1)
  replit.clear()
