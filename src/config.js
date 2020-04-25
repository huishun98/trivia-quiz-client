const APIendpoint = "https://circuit-breaker-quiz.herokuapp.com/";

const quiz = {
    user: "",
    questions: [
        {
            text: "Do you know what day is it today?",
            responses: [
                { text: "Of course!", type: ["TSGW"] },
                { text: "Of course, it's Friday everyday!", type: ["TCLG"] },
                { text: "No, I've totally lost track of time.", type: ["TSSW"] },
                { text: "Does it matter?", type: ["TRC"] }
            ]
        },
        {
            text: "What do you think of the term 'circuit breaker'?",
            responses: [
                {
                    text: "Very creative name! (No sarcasm intended)",
                    type: ["TSGW", "TSSW"]
                },
                { text: "Lockdown then say lockdown lah...", type: ["TWGA", "TPCB"] },
                { text: "I catch no ball/ I don't understand.", type: ["TCLG"] },
                { text: "So smart I cannot even.", type: ["TRC"] }
            ]
        },
        {
            text: "How is working from home/ home-based learning for you?",
            responses: [
                {
                    text: "What is that! I'm an essential worker.",
                    type: ["TRC", "TSGW"]
                },
                {
                    text:
                        "I'm an essential worker but I think I ought/ want to be home.",
                    type: ["TPCB"]
                },
                { text: "I'm so enjoying it.", type: ["TCLG"] },
                { text: "It's even more tiring.", type: ["TSSW"] }
            ]
        },
        {
            text: "What is your opinion on the timing of the circuit breaker?",
            responses: [
                { text: "Too late! Too slow!", type: ["TWGA"] },
                { text: "Just timely!", type: ["TSGW"] },
                {
                    text: "No need CB lah!",
                    type: ["TPCB"]
                },
                { text: "KNNBCCB", type: ["TRC"] }
            ]
        },
        {
            text: "Which scenario is the worst to you?",
            responses: [
                { text: "WIFI down", type: ["TCLG"] },
                {
                    text: "Ran out of toilet paper",
                    type: ["TPCB"]
                },
                { text: "Another extension in the circuit breaker", type: ["TWGA"] },
                { text: "Food delivery got lost", type: ["TSSW"] }
            ]
        },
        {
            text:
                "Which scene (from a movie/ series) does COVID-19 resemble the most to you?",
            responses: [
                {
                    text: "Thanos snapping his fingers in Avengers: Infinity War",
                    type: ["TPCB"]
                },
                { text: "The zombie apocalypse in Train to Busan", type: ["TRC"] },
                { text: "The political mess in Chernobyl", type: ["TWGA"] },
                { text: "I don't watch movies.", type: ["TSSW"] }
            ]
        },
        {
            text:
                "Which category of app did you download/ use the most during the circuit breaker?",
            responses: [
                { text: "Shopping app", type: ["TSSW"] },
                { text: "Government-related app", type: ["TSGW"] },
                {
                    text: "Gaming app",
                    type: ["TCLG"]
                },
                { text: "Social media app", type: ["TWGA"] }
            ]
        },
        {
            text: "What do you look forward to each day?",
            responses: [
                {
                    text: "The number of confirmed (and unlinked etc.) cases lor!",
                    type: ["TRC"]
                },
                {
                    text:
                        "I don't look forward to the next day nor the day after next and the day after.",
                    type: ["TPCB"]
                },
                {
                    text: "Knowing that tomorrow will be a better day :)",
                    type: ["TSGW", "TCLG"]
                },
                { text: "A better government.", type: ["TWGA"] }
            ]
        }
    ]
}

const information = {
    TWGA: {
        persona: "The Wise Gahmen Advisor",
        description:
            "You're not comfortable with how things are being done and you would have done it better.",
        notes: "Gahmen: Singlish spelling of government."
    },
    TSGW: {
        persona: "The Supportive Gung-ho Warrior",
        description:
            "You think the government is already doing their best and try your best to help in any way.",
        notes:
            "Gung-ho: Unthinkingly enthusiastic and eager, especially about taking part in fighting or warfare"
    },
    TPCB: {
        persona: "The Pek Chek Buddy",
        description:
            "You're frustrated by the current situation and a little upset that you can't help or do much about it.",
        notes:
            "Pek Chek: exasperated or frustrated (This feeling of helpless exasperation arises when one faces an urgent problem but is unable to solve it)"
    },
    TSSW: {
        persona: "The Solemn Silent Worker",
        description:
            "You're trying to stay positive and it's proving to be challenging.",
        notes: ""
    },
    TCLG: {
        persona: "The Calm Lepak Guru",
        description:
            "You're taking things in stride and are trying to keep your optimism.",
        notes: "Lepak: Relax or chill out by doing nothing."
    },
    TRC: {
        persona: "The Random Calefare",
        description:
            "You feel like you're in a simulation and you just happened to be part of it.",
        notes:
            "Calefare: a film extra, or an actor with a minor, non-speaking role."
    }
}

export { APIendpoint, quiz, information }