array_from_exercise = ["a", 10, "b", "hello", 122, 15]

def find_numbers_letters_max(arr):
    letters = []
    numbers = []
    
    for e in arr:
        if isinstance(e, str):
            letters.append(e)
        elif isinstance(e, int):
            numbers.append(e)
    
    largest_in_numbers = max(numbers)
    
    return letters, numbers, largest_in_numbers



letters, numbers, largest_number = find_numbers_letters_max(array_from_exercise)

print("letters:", letters)
print("numbers:", numbers)
print("Largest number:", largest_number)