/**
 * Array with objects of questions, answers and fun facts.
 */
 const QUESTIONS = [
    {
        question: 'How many parrot species are there in the world? ',
        answers: [
            { text: '27', correct: false },
            { text: '350', correct: true },
            { text: '522', correct: false },
            { text: '103', correct: false }
        ],
        fun_facts: [
            { text: 'Well done! There are indeed 350 species of us around. Fun fact: The collective of parrots is called a pandemonium. I wonder why, we are so quiet!', correct_selected: true },
            { text: 'That\'s incorrect. There are actually 350 species of us around. Fun fact: The collective of parrots is called a pandemonium. I wonder why, we are so quiet!', correct_selected: false }
        ]
    },
    {
        question: 'Which parrot owns the record for most known words?',
        answers: [
            { text: 'Mango the Sun Conure, 568 words', correct: false },
            { text: 'Alex the African Grey, 112 words', correct: false },
            { text: 'Puck the Budgie, 1728 words', correct: true },
            { text: 'Blu the Spix\'s Macaw, 1234 words', correct: false }
        ],
        fun_facts: [
            { text: 'Smart birdy! My brain is the size of an M&M, just imagine Puck\'s...', correct_selected: true },
            { text: 'It\'s hard to believe but that budgie knew 1728 words! My brain is the size of an M&M, just imagine Puck\'s...', correct_selected: false }
        ]
    },
    {
        question: 'How many toes does a parrot have?',
        answers: [
            { text: 'Three - Two facing forward, one facing backward', correct: false },
            { text: 'Four - Two facing forward, Two facing backward', correct: true },
            { text: 'Five - Three facing forward, two facing backward', correct: false },
            { text: 'Three - One facing forward, two facing backward', correct: false }
        ],
        fun_facts: [
            { text: 'You were paying attention when I waved at you, well done! Sometimes I also use those little toes as fingers.', correct_selected: true },
            { text: 'Come on! I just waved at you... I guess you weren\'t counting my toes...  Sometimes I also use those little toes as fingers.', correct_selected: false }
        ]
    },
    {
        question: 'Bud, an African Grey, appeared on the news for;',
        answers: [
            { text: 'Helping to solve a murder case by repeating the victim\'s last words', correct: true },
            { text: 'Stealing a reporter\'s microphone during live news', correct: false },
            { text: 'Helping to repopulate the species in it\'s natural environment', correct: false },
            { text: 'Doing a TikTok dance with his owner', correct: false }
        ],
        fun_facts: [
            { text: 'Yes, justice served! I am sorry he had to witness that though. African Greys are one of the most intelligent animals in the world!', correct_selected: true },
            { text: 'Bud actually served some justice. I am sorry he had to witness that though. African Greys are one of the most intelligent animals in the world!', correct_selected: false }
        ]
    },
    {
        question: 'What is the main difference between old world (Africa and Asia) vs new world (South America) parrots?',
        answers: [
            { text: 'Old world parrots have been domesticated first, therefore, they are more likely to learn how to speak like humans', correct: false },
            { text: 'Old world parrots body produces dust to keep their feathers clean whereas new world parrots produces oil', correct: true },
            { text: 'New world parrots are less colorful than old world parrots', correct: false },
            { text: 'New world parrots are more friendly towards humans than old world parrots', correct: false }
        ],
        fun_facts: [
            { text: 'That\'s right! If you are looking for an allergy-friendly parrot, look for a South American parrot!', correct_selected: true },
            { text: 'We are actually oily compared to our dusty Asian and African cousins. If you are looking for an allergy-friendly pet, look for a South American parrot!', correct_selected: false }
        ]
    },
    {
        question: 'What\'s unusual about the Owl parrot of New Zealand?',
        answers: [
            { text: 'It produces oil to keep it\'s feathers clean', correct: false },
            { text: 'One male can have 10 or more partners', correct: false },
            { text: 'It is able to remember more than 100 words', correct: false },
            { text: 'It is unable to fly so it uses it\'s claws to climb trees', correct: true }
        ],
        fun_facts: [
            { text: 'Yep, those must be some big claws! At least they can glide down from the trees.', correct_selected: true },
            { text: 'They are actually climbing parrots! At least they can glide down from the trees.', correct_selected: false }
        ]
    },
    {
        question: 'What\'s the most common behavior of parrots during mating season?',
        answers: [
            { text: 'They become more playful and friendly', correct: false },
            { text: 'They start digging holes to create nests', correct: false },
            { text: 'They become more aggressive and territorial', correct: true },
            { text: 'They preen more often to keep their feathers pretty for their partners', correct: false }
        ],
        fun_facts: [
            { text: 'You are right, I am just looking for a nest or a mate though, give me a break!', correct_selected: true },
            { text: 'You are wrong, I get a bit angry but I am just looking for a nest or a mate, give me a break!', correct_selected: false }
        ]
    },
    {
        question: 'Why did Alex the African Grey parrot become famous?',
        answers: [
            { text: 'He was owned by Stevie Wonder', correct: false },
            { text: 'He was the subject of a 30 year long study that showed parrots don\'t only repeat words but can use them with context', correct: true },
            { text: 'He saved the life of his family by calling 911 during a break-in to their holiday house in the USA', correct: false },
            { text: 'He is in the Guinness Book of Records for being the oldest parrot, having died at the age of 101', correct: false }
        ],
        fun_facts: [
            { text: 'Spot on! He was so smart that he could create sentences to describe words he didn\'t know. On his birthday they gave him a cake to which he replied "Yummy Bread!". His last words to his owner were "You be good. I love you".', correct_selected: true },
            { text: 'Not quite! He was so smart that he could create sentences to describe words he didn\'t know. On his birthday they gave him a cake to which he replied "Yummy Bread!". His last words to his owner were "You be good. I love you".', correct_selected: false }
        ]
    },
    {
        question: 'A human bite has a force of around 150psi, an average dog of 250psi. The strongest bite of a parrot belongs to the Green Wing Macaw that can be between:',
        answers: [
            { text: '150psi-250psi', correct: false },
            { text: '200psi-350psi', correct: false },
            { text: '350-1000psi', correct: false },
            { text: '500-2000psi', correct: true }
        ],
        fun_facts: [
            { text: 'Yep, I am never getting close to a Macaw again! In comparison hyenas, lions, and tigers generate around 1000 psi.', correct_selected: true },
            { text: 'Shockingly, no. It\'s 500-2000! In comparison hyenas, lions, and tigers generate around 1000 psi.', correct_selected: false }
        ]
    },
    {
        question: 'What is one of the main differences between parrots and other birds?',
        answers: [
            { text: 'Parrots can talk like humans', correct: false },
            { text: 'Parrots can use one foot like a hand while balancing on the other', correct: true },
            { text: 'Parrots can befriend humans and become great pets', correct: false },
            { text: 'Parrots are domesticated', correct: false }
        ],
        fun_facts: [
            { text: 'That\'s right, I use my foot fingers and my hand toes for everything! Another difference is that we usually nest in holes, trunks and crevices instead of building a nest.', correct_selected: true },
            { text: 'Not quite. I use my foot fingers and my hand toes for everything! Another difference is that we usually nest in holes, trunks and crevices instead of building a nest.', correct_selected: false }
        ]
    }
];