def divisors(num):
    divisors = []
    for i in range(1, num + 1):
        if num % i == 0:
            divisors.append(i)
    return divisors 

def run():
    num = input("Ingresa un número:")
    assert num.isnumeric(), "Debes introducir un número"
    # alternative to try-execpt-finally - raise
    print(divisors(int(num)))

if __name__ == '__main__':
    run()
