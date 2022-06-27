// Topic: Implementing functionality with the impl keyword
//
// Requirements:
// * Print the characteristics of a shipping box

//
// Notes:

// * Use an enum for the box color
enum Color {
    Brown,
    Red,
}

impl Color {
    fn print(&self) {
        match self {
            Color::Brown => println!("Brown"),
            Color::Red => println!("red"),
        }
    }
}
struct Dimensions {
    width: f64,
    height: f64,
    depth: f64,
}
impl Dimensions {
    fn print(&self) {
        println!("Width:{:?}", self.width);
        println!("Height: {:?}", self.height);
        println!("Depth: {:?}", self.depth);
    }
}
// * Use a struct to encapsulate the box characteristics
// * Must include dimensions, weight, and color
struct ShippingBox {
    color: Color,
    weight: f64,
    dimensions: Dimensions,
}

// * Implement functionality on the box struct to create a new box
impl ShippingBox {
    fn new(weight: f64, color: Color, dimensions: Dimensions) -> Self {
        Self {
            weight,
            color,
            dimensions,
        }
    }
    fn print(&self) {
        self.color.print();
        self.dimensions.print();
        println!("Weight: {:?}", self.weight);
    }
}

// * Implement functionality on the box struct to print the characteristics

fn main() {
    let small_dimensions = Dimensions {
        width: 1.0,
        height: 2.0,
        depth: 3.0,
    };
    let big_dimensions = Dimensions {
        width: 11.5,
        height: 22.75,
        depth: 5.0,
    };

    let small_box = ShippingBox::new(5.0, Color::Brown, small_dimensions);
    let big_box = ShippingBox::new(12.0, Color::Red, big_dimensions);

    small_box.print();
    big_box.print();
}
