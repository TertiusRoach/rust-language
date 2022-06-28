// Topic: Strings
//
// Requirements:
// * Print out the name and favorite colors of people aged 10 and under
//
// Notes:
// * Use a struct for a persons age, name, and favorite color
struct Person {
    name: String,
    fav_color: String,
    age: i32,
}

fn print(data: &str) {
    println!("{:?}", data);
}

fn main() {
    // * The color and name should be stored as a String
    let people = vec![
        // * Create and store at least 3 people in a vector
        Person {
            name: String::from("George"),
            fav_color: String::from("Green"),
            age: 7,
        },
        Person {
            name: String::from("Anna"),
            fav_color: String::from("Pink"),
            age: 9,
        },
        Person {
            name: String::from("Katie"),
            fav_color: String::from("Blue"),
            age: 12,
        },
    ];

    // * Iterate through the vector using a for..in loop
    for person in people {
        // * Use an if expression to determine which person's info should be printed
        if person.age <= 10 {
            print(&person.name);
            print(&person.fav_color);
            // * The name and colors should be printed using a function
        }
    }
}
