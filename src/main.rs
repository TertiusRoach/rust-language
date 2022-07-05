struct Survey {
    q1: Option<i32>,
    q2: Option<bool>,
    q3: Option<String>,
}
fn main() {
    let response = Survey {
        q1: Some(12),
        q2: Some(true),
        q3: Some("A".to_owned()),
    };
    match response.q1 {
        Some(answer) => println!("q1: {:?}", answer),
        None => println!("q1: no response"),
    }
    match response.q2 {
        Some(answer) => println!("q2: {:?}", answer),
        None => println!("q2: no response"),
    }
    match response.q3 {
        Some(answer) => println!("q3: {:?}", answer),
        None => println!("q3: no response"),
    }
}
