import hashlib

puzzleID = 'BBSE_E01'
d = '0000'
x = 0

while True:
    result = puzzleID + str(x)
    result = result.encode()
    result = hashlib.sha256(result).hexdigest()
    if result[:4] == d:
        break
    x += 1

print('Found x' + str(x) + ' returns hash value ' + str(result))