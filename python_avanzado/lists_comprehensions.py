def run():
    # squares = []
    # sfor i in range(1, 101):
      # s  if i % 3 != 0:
        # s    squares.append(i**2)

    squares = [i**2 for i in range(1, 101) if i % 3 != 0]
    
    print(squares)

if __name__ == '__main__':
    run()
