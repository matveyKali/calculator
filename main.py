# Simple Calculator

def add(a, b):
    """Return sum of a and b."""
    return a + b


def subtract(a, b):
    """Return difference of a and b (a - b)."""
    return a - b


def multiply(a, b):
    """Return product of a and b."""
    return a * b


def divide(a, b):
    """Return quotient of a and b (a / b). Raises ValueError if b is zero."""
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b


def calculator():
    """Interactive calculator: prompt for first number, operator, second number."""
    print("Simple Calculator")
    print("Supported operators: +, -, *, /")
    while True:
        try:
            line = input("\nEnter expression (e.g., 5 + 3) or 'quit' to exit: ").strip()
            if line.lower() == 'quit':
                break
            # Parse
            parts = line.split()
            if len(parts) != 3:
                print("Invalid format. Use: <num> <operator> <num>")
                continue
            a_str, op, b_str = parts
            a = float(a_str)
            b = float(b_str)
            if op not in ('+', '-', '*', '/'):
                print(f"Unsupported operator '{op}'. Use one of: +, -, *, /")
                continue
            result = None
            if op == '+':
                result = add(a, b)
            elif op == '-':
                result = subtract(a, b)
            elif op == '*':
                result = multiply(a, b)
            elif op == '/':
                result = divide(a, b)
            print(f"Result: {result}")
        except ValueError as e:
            print(f"Error: {e}")
        except Exception as e:
            print(f"Unexpected error: {e}")
        # Optional: allow continuing after error
        # input("Press Enter to continue...")


if __name__ == "__main__":
    calculator()

