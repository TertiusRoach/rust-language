enum Direction {
    Left,
    Right,
    Up,
}
fn main() {
    let go = Direction::Right;
    match go {
        Direction::Left => println!("Go left"),
        Direction::Right => println!("Go right"),
        Direction::Up => println!("Go up"),
    }
}
