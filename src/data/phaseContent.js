export const phaseContent = {
  0: {
    title: "Phase 0: Introduction & Mindset Setup + Roadmap Overview",
    quote: {
      text:
        "If I had an hour to solve a problem, I’d spend 55 minutes defining it and 5 minutes solving it.",
      author: "Albert Einstein",
    },

    intro: `
Before diving into math and code, let’s build the right foundation:
mindset, expectations, tools, and a crystal-clear map of the journey.

Real success in Machine Learning starts here.
    `,

    sections: [
      {
        id: "0.1",
        title: "Why Machine Learning?",
        content: `
Machine Learning is about learning patterns from data to make
decisions or predictions.

It powers real-world systems like:
        `,
        bullets: [
          "Netflix recommendations 🎬",
          "Self-driving cars 🚗",
          "Medical diagnosis 🏥",
          "Fraud detection 💳",
          "Chatbots like me 🤖",
        ],
        note: `
Real-world impact matters more than theory alone.
We will learn ML by doing, not by memorizing formulas.
        `,
      },

      {
        id: "0.2",
        title: "Prerequisites Checklist (What You Actually Need to Start)",
        table: [
          {
            skill: "Python",
            requirement:
              "Variables, loops, functions, lists, dicts, import, basic OOP",
            resources: [
              {
                name: "Python for Everybody (Coursera)",
                link: "https://www.coursera.org/specializations/python",
              },
            ],
          },
          {
            skill: "Math",
            requirement:
              "Algebra basics, statistics (mean, median, std). Calculus & Linear Algebra learned in context.",
            resources: [
              {
                name: "Essence of Calculus – 3Blue1Brown",
                link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6",
              },
              {
                name: "Essence of Linear Algebra – 3Blue1Brown",
                link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6",
              },
            ],
          },
          {
            skill: "Git & GitHub",
            requirement: "git clone, commit, push, pull",
            resources: [
              {
                name: "Git & GitHub Crash Course – freeCodeCamp",
                link: "https://youtu.be/RGOj5yH7evk",
              },
            ],
          },
          {
            skill: "Jupyter & VS Code",
            requirement: "Run notebooks, write .py files",
            resources: [
              {
                name: "Jupyter Tutorial – Corey Schafer",
                link: "https://youtu.be/HW29067qVWk",
              },
            ],
          },
        ],
        warning: `
Don’t wait to be “100% ready”.
Start now and fill gaps as needed.
Learning is iterative.
        `,
      },

      {
        id: "0.3",
        title: "Your 6-Phase Roadmap (Detailed)",
        phases: [
          {
            phase: 1,
            focus: "Prerequisites & Data Intuition",
            duration: "2–3 weeks",
            outcome: "Clean & explore real datasets confidently",
          },
          {
            phase: 2,
            focus: "Data Cleaning & Preprocessing",
            duration: "1–2 weeks",
            outcome: "Production-ready data pipelines",
          },
          {
            phase: 3,
            focus: "Core ML Algorithms",
            duration: "3–4 weeks",
            outcome: "Understand models, not just fit/predict",
          },
          {
            phase: 4,
            focus: "ML Libraries & Pipelines",
            duration: "1–2 weeks",
            outcome: "Scalable, reproducible ML workflows",
          },
          {
            phase: 5,
            focus: "Capstone Projects",
            duration: "3–4 weeks",
            outcome: "Strong portfolio with GitHub & deployments",
          },
          {
            phase: 6,
            focus: "Deep Learning & Interview Prep",
            duration: "4–6 weeks",
            outcome: "ML/Data Scientist interview ready",
          },
        ],
      },

      {
        id: "0.4",
        title: "Tools Setup (Do This NOW!)",
        steps: [
          {
            text: "Install Anaconda",
            link: "https://www.anaconda.com/download",
          },
          {
            text: "Install VS Code + Python Extension",
            link: "https://code.visualstudio.com/",
          },
          {
            text: "Create GitHub account & repo: ml-journey-2026",
            link: "https://github.com",
          },
          {
            text: "Create Kaggle account",
            link: "https://www.kaggle.com",
          },
        ],
        taskCode: `
import numpy as np
import pandas as pd

print("NumPy version:", np.__version__)
print("Pandas version:", pd.__version__)

df = pd.read_csv(
  "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
)

print("Dataset shape:", df.shape)
print(df.head(3))
        `,
        successMessage:
          "If this runs without error, you are ready to proceed 🎉",
      },

      {
        id: "0.5",
        title: "Mindset & Habits for Success",
        habits: [
          {
            habit: "Code every day (even 30 mins)",
            reason: "Builds muscle memory",
          },
          {
            habit: "Explain concepts aloud",
            reason: "Feynman technique reveals gaps",
          },
          {
            habit: "Break problems into small steps",
            reason: "Avoids overwhelm",
          },
          {
            habit: "Embrace productive struggle",
            reason: "Learning happens outside comfort zone",
          },
          {
            habit: "Build in public",
            reason: "Accountability + opportunities",
          },
        ],
        mindset:
          "I haven’t learned this yet — not ‘I’m bad at this’.",
      },

      {
        id: "0.6",
        title: "YouTube Recommendations (Best Intro)",
        videos: [
          {
            title: "What is Machine Learning? – Google Cloud Tech",
            link: "https://youtu.be/ukzFI9rgwfU",
            note: "Clear intuition, no math",
          },
          {
            title: "How to Start a Career in ML – Andrew Ng",
            link: "https://youtu.be/1vsmaEfbnoI",
          },
        ],
      },
    ],

    quiz: {
      title: "Phase 0 Quiz (Self-Check)",
      questions: [
        {
          q: "Which Python library is used for numerical computing?",
          options: ["matplotlib", "pandas", "numpy", "scikit-learn"],
          answer: "numpy",
        },
        {
          q: "True or False: You need a PhD in math to start ML.",
          answer: "False",
        },
        {
          q: "What does EDA stand for?",
          options: [
            "Exploratory Data Analysis",
            "Extra Data Aggregation",
            "Experimental Deep Algorithm",
            "Enhanced Decision Automation",
          ],
          answer: "Exploratory Data Analysis",
        },
        {
          q: "Which tool is used for version control?",
          options: ["Jupyter", "Pandas", "Git", "Anaconda"],
          answer: "Git",
        },
        {
          q: "First step in any ML project?",
          options: [
            "Train a neural network",
            "Understand the problem & data",
            "Tune hyperparameters",
            "Deploy the model",
          ],
          answer: "Understand the problem & data",
        },
      ],
    },

    checklist: [
      "Install Anaconda + VS Code",
      "Create GitHub repo: ml-journey-2026",
      "Run Titanic test code",
      "Watch recommended videos",
      "Complete Phase 0 quiz",
    ],

    completionMessage: `
🎉 You’ve completed Phase 0!

This phase matters more than jumping into algorithms.
Most learners skip it — you didn’t.
    `,
  },
};
