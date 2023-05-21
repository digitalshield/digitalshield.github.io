let all_questions = [
    {
        "question": "You may start treatment on a victim when",
        "options": [
            "The victim is unconscious",
            "The victim is a small child with no guardian present",
            "You ask permission and the victim consents to treatment",
            "All of the above."
        ],
        "correct_answer": "All of the above."
    },
    {
        "question": "You may stop treatment on a victim when",
        "options": [
            "Medical help takes over",
            "The victim vomits",
            "The victim’s heart stops beating",
            "All of the above."
        ],
        "correct_answer": "Medical help takes over"
    },
    {
        "question": "What do you do first when responding to an unwitnessed, unconscious child?",
        "options": [
            "Do a foreign body check",
            "Assess the environment for hazards",
            "Activate EMS",
            "Open the airway."
        ],
        "correct_answer": "Assess the environment for hazards"
    },
    {
        "question": "If a wound continues to bleed through a dressing bandage, you should",
        "options": [
            "Remove the dressing and apply a clean one",
            "Lower the bleeding part further if possible",
            "Apply another dressing on top of the old one",
            "Both A and B."
        ],
        "correct_answer": "Apply another dressing on top of the old one"
    },
    {
        "question": "A secondary assessment involves",
        "options": [
            "Assessing and recording vital signs",
            "Carrying out a thorough head-to-toe examination of the victim.",
            "Recording the relevant history.",
            "All of the above"
        ],
        "correct_answer": "All of the above"
    },
    {
        "question": "Signs and symptoms of hypothermia are",
        "options": [
            "Shivering; very active; shock",
            "Shivering; loss of muscle coordination; confusion",
            "Sweating profusely; red skin; unconsciousness",
            "Blood loss; nausea; dryness"
        ],
        "correct_answer": "Shivering; loss of muscle coordination; confusion"
    }
];

var reference_data = `When assisting someone who is suffering from a first aid emergency, a first aider may assist the
victim if they have first identified themselves, asked for and received the victim’s permission for
treatment, or the victim is unconscious. A first aider may also assist a child if no parents or
guardians are present; however, if there is a parent or guardian present, then permission must
be obtained.
Once a first aider has initiated first aid treatment, they are not to abandon the victim.
Accordingly, they must remain with the victim and may only stop treatment if medical
assistance is administered by another trained professional. A first aider may be justified in

ceasing treatment if there is a threat to that first aider’s life or they are too exhausted to
continue and there are no other alternative sources of help available.
When responding to an unconscious victim, regardless of age, there are several steps that must
be taken. First, the first aider must assess the area for hazards that could harm the first aider or
the victim. Secondly, the first aider must assess the victim’s level of consciousness. Third, if the
victim is unresponsive, the first aider should activate EMS. Fourth, the first aider should open
the victim’s airway before starting CPR.
To treat a wound that is bleeding the first aider should apply a clean sterile dressing to the
wound and apply pressure to that area. First aiders are no longer required to elevate the
affected area unless the wound is an arterial bleed. If the blood soaks through the dressing
apply additional dressing over the original dressing and continue to apply pressure. Do not
remove the original dressing as this may remove any clotting that has formed.
A secondary assessment is initiated once the primary first aid emergency has been treated. It is
a systematic search with three steps. First, the first aider will assess the victim’s vital signs and
record it in an effective manner. Next, the first aider will perform a head-to-toe examination to
look for other injuries. Finally, the first aider will attempt to obtain and record relevant medical
history of the victim.
Hypothermia is a condition that causes one’s body to lose heat faster than it can produce. The
primary signs and symptoms include, shivering, loss of muscle coordination, confusion, and
disorientation.`;

function loadQuiz() {
            let quizDiv = document.getElementById('quiz');
            all_questions.forEach((q, i) => {
                let questionDiv = document.createElement('div');
                questionDiv.innerHTML = `<h2>${q.question}</h2>`;
                q.options.forEach((option, j) => {
                    questionDiv.innerHTML += `<input type="radio" name="question${i}" value="${option}">${option}<br>`;
                });
                quizDiv.appendChild(questionDiv);
            });
        }

function submitQuiz() {
            let score = 0;
            all_questions.forEach((q, i) => {
                let selected = document.querySelector(`input[name="question${i}"]:checked`).value;
                if (selected === q.correct_answer) {
                    score++;
                }
            });
            document.getElementById('result').innerText = `Your score: ${score}/${all_questions.length}`;
            document.getElementById('feedback').innerText = 'Thank you for taking the quiz!';
            document.getElementById('myModal').style.display = 'block';
        }

if (process.env.NODE_ENV !== 'production') {
    // Load environment variables from the .env file in development mode
    require('dotenv').config();
}

const API_KEY = process.env.API_KEY;

async function queryGPT3(prompt) {
    const data = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('An error occurred:', error);
        // Handle the error appropriately
        // You can inspect the error object for more details
        throw error; // Re-throw the error or handle it gracefully
    }
}


queryGPT3('Translate the following English text to French: "what a wonderful day!"')
    .then(response => console.log(response))
    .catch(error => console.error(error));

loadQuiz();
