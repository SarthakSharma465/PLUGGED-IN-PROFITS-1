function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } 
    else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input == "What's Up?") {
        return "It’s going well, thank you. How are you doing?";
    } 
    else if (input == "How are you doing?") {
        return "It’s going great, thank you. How are you doing?";
    } 
    else if (input == "What's your name!") {
        return "I'm Alexis and you are?";
    } 
    else if (input == "What can I call you?") {
        return "I'm Alexis ";
    }
    else if (input == "Good morning!") {
        return "Good Morning! Have a wonderful day ahead.";
    }
    else if (input == "Good Afternoon!") {
        return "Good Afternoon!";
    } 
    else if (input == "Afternoon") {
        return "Good Afternoon!";
    }
    else if (input == "Heart gifted!") {
        return "Thank You!";
    }
    else {
        return "Try asking something else!";
    }

}