module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const multiples_of_ten = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 10) {
        return ones[number];
    }

    if (number < 20) {
        return tens[number - 10];
    }

    if (number < 100) {
        return (
            multiples_of_ten[Math.floor(number / 10)] +
            (number % 10 !== 0 ? " " + ones[number % 10] : "")
        );
    }

    if (number < 1000) {
        return (
            ones[Math.floor(number / 100)] +
            " hundred" +
            (number % 100 !== 0 ? " " + toReadable(number % 100) : "")
        );
    }

    throw new Error(
        "Number is too large, the function only handles numbers up to 999."
    );
};
