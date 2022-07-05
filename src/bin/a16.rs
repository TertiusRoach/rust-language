// Topic: Option

struct Student {
    // * Use a struct containing the student's name and locker assignment
    // * The locker assignment should use an Option<i32>
    name: String,
    locker: Option<i32>,
}

// * Print out the details of a student's locker assignment
// * Lockers use numbers and are optional for students
fn main() {
    let mary = Student {
        name: "Mary".to_owned(),
        locker: Some(3),
    };
    println!("Student: {:?}", mary.name);
    match mary.locker {
        Some(num) => println!("Locker number: {:?}", num),
        None => println!("No locker assigned"),
    }
}
