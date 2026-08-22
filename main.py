def reverse_text(text):
    return text[::-1]

def count_words(text):
    return len(text.split())

if __name__ == "__main__":
    sample = "hello world"
    print("Reversed:", reverse_text(sample))
    print("Word count:", count_words(sample))
