// Topic: Working with an enum
//
// Program requirements:
// * Prints the name of a color to the terminal
//
// Notes:
// * Use an enum with color names as variants
enum Color {
    Red,
    Yellow,
    Blue,
}
// * Use a function to print the color name
// * The function must use the enum as a parameter
fn print_color(my_color: Color) {
    // * Use a match expression to determine which color
    match my_color {
        Color::Red => println!("Red"),
        Color::Yellow => println!("Yellow"),
        Color::Blue => println!("Blue"),
    }
}

//   name to print

fn main() {
    print_color(Color::Blue);
}
