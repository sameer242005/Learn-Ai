// src/data/phaseContent.js

export const phaseContent = {
  0: {
    title: "Phase 0: Introduction & Mindset Setup",
    quote: {
      text: "If I had an hour to solve a problem, I’d spend 55 minutes defining it and 5 minutes solving it.",
      author: "Albert Einstein",
    },
    intro: `Before diving into math and code, let’s build the right foundation:\nmindset, expectations, tools, and a crystal-clear map of the journey.\n\nReal success in Machine Learning starts here.`,

    sections: [
      {
        id: "0.1",
        title: "Why Machine Learning?",
        content: `Machine Learning is about learning patterns from data to make decisions or predictions.\n\nIt powers real-world systems like:`,
        bullets: [
          "Netflix recommendations 🎬",
          "Self-driving cars 🚗",
          "Medical diagnosis 🏥",
          "Fraud detection 💳",
          "Chatbots like me 🤖",
        ],
        note: `Real-world impact matters more than theory alone.\nWe will learn ML by doing, not by memorizing formulas.`,
      },
      {
        id: "0.2",
        title: "Prerequisites Checklist",
        table: [
          {
            skill: "Python",
            requirement: "Variables, loops, functions, lists, dicts, import, basic OOP",
            resources: [
              {
                name: "Python for Everybody (Coursera)",
                link: "https://www.youtube.com/playlist?list=PLlRFEj9H3Oj7Bp8-DfGpfAfDBiblRfl5p",
              },
            ],
          },
          {
            skill: "Math",
            requirement: "Algebra, stats (mean/std). Calculus & Linear Algebra → learned in context.",
            resources: [
              {
                name: "Essence of Calculus – 3Blue1Brown",
                link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
              },
              {
                name: "Essence of Linear Algebra – 3Blue1Brown",
                link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_abr",
              },
            ],
          },
          {
            skill: "Git & GitHub",
            requirement: "git clone, commit, push, pull",
            resources: [
              {
                name: "Git Crash Course – freeCodeCamp",
                link: "https://youtu.be/RGOj5yH7evk",
              },
            ],
          },
          {
            skill: "Jupyter & VS Code",
            requirement: "Run .ipynb, write .py files",
            resources: [
              {
                name: "Jupyter Tutorial – Corey Schafer",
                link: "https://youtu.be/HW29067qVWk",
              },
            ],
          },
        ],
        warning: `Don’t wait to be “100% ready”.\nStart now and fill gaps as needed.\nLearning is iterative.`,
      },
      {
        id: "0.3",
        title: "Your 6-Phase Roadmap (Detailed)",
        phases: [
          { phase: 1, focus: "Prerequisites & Data Intuition", duration: "2–3 weeks", outcome: "Clean & explore real datasets confidently" },
          { phase: 2, focus: "Data Cleaning & Preprocessing", duration: "1–2 weeks", outcome: "Production-ready data pipelines" },
          { phase: 3, focus: "Core ML Algorithms", duration: "3–4 weeks", outcome: "Understand models, not just fit/predict" },
          { phase: 4, focus: "ML Libraries & Pipelines", duration: "1–2 weeks", outcome: "Scalable, reproducible ML workflows" },
          { phase: 5, focus: "Capstone Projects", duration: "3–4 weeks", outcome: "Strong portfolio with GitHub & deployments" },
          { phase: 6, focus: "Deep Learning & Interview Prep", duration: "4–6 weeks", outcome: "ML/Data Scientist interview ready" },
        ],
      },
      {
        id: "0.4",
        title: "Tools Setup (Do This NOW!)",
        steps: [
          { text: "Install Anaconda", link: "https://www.anaconda.com/download" },
          { text: "Install VS Code + Python Extension", link: "https://code.visualstudio.com/" },
          { text: "Create GitHub repo: ml-journey-2026", link: "https://github.com" },
          { text: "Sign up on Kaggle", link: "https://www.kaggle.com" },
        ],
        taskCode: `import numpy as np
import pandas as pd

print("✅ NumPy & Pandas imported!")
print("NumPy version:", np.__version__)
print("Pandas version:", pd.__version__)

df = pd.read_csv("https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv")
print("\\n✅ Titanic dataset shape:", df.shape)
print(df.head(3))`,
        successMessage: "If no errors → you’re ready! 🎉",
      },
      {
        id: "0.5",
        title: "Mindset & Habits for Success",
        habits: [
          { habit: "Code every day (even 30 mins)", reason: "Builds muscle memory" },
          { habit: "Explain concepts aloud", reason: "Feynman Technique → reveals gaps" },
          { habit: "Break problems into tiny steps", reason: "Avoid overwhelm" },
          { habit: "Embrace productive struggle", reason: "Learning happens outside comfort zone" },
          { habit: "Build in public", reason: "Accountability + job opportunities" },
        ],
        mindset: "“I haven’t learned this yet.” — not “I’m bad at this.”",
      },
      {
        id: "0.6",
        title: "YouTube Recommendations (Best Intro)",
        videos: [
          {
            title: "What is Machine Learning? — Google Cloud Tech",
            link: "https://youtu.be/f_uwJgXfPkA",
            note: "6 min, clear intuition, no math",
          },
          {
            title: "How to Start a Career in ML — Andrew Ng",
            link: "https://youtu.be/-xuaYj3R1cg",
            note: "10 min, mindset + roadmap",
          },
        ],
      },
    ],

    quiz: {
      title: "Phase 0 Quiz (Self-Check)",
      questions: [
        { q: "Which Python library is used for numerical computing?", options: ["matplotlib", "pandas", "numpy", "scikit-learn"], answer: "numpy" },
        { q: "True or False: You need a PhD in math to start ML.", answer: "False" },
        { q: "What does EDA stand for?", options: ["Exploratory Data Analysis", "Extra Data Aggregation", "Experimental Deep Algorithm", "Enhanced Decision Automation"], answer: "Exploratory Data Analysis" },
        { q: "Which tool lets you version-control your code?", options: ["Jupyter", "Pandas", "Git", "Anaconda"], answer: "Git" },
        { q: "What’s the first step in any ML project?", options: ["Train a neural network", "Understand the problem & data", "Tune hyperparameters", "Deploy the model"], answer: "Understand the problem & data" },
      ],
    },

    checklist: [
      "Install Anaconda + VS Code",
      "Create GitHub repo: ml-journey-2026",
      "Run the Titanic test code successfully",
      "Watch both YouTube videos",
      "Take & review the Phase 0 quiz",
    ],

    completionMessage: `🎉 You’ve just completed Phase 0!\n\nThis setup is more important than jumping into algorithms — most learners skip it and get stuck later.\n\nYou didn’t. You're ahead of 90% already.`,
  },

  // —————————————————————————————————————————————————————
  // PHASE 1: Data Cleaning & Preprocessing
  // —————————————————————————————————————————————————————
  1: {
    title: "Phase 1: Data Cleaning & Preprocessing",
    intro: `Real-world data is messy: missing values, outliers, inconsistent formats.\n\nA great ML engineer spends 80% of time here — because garbage in = garbage out.`,

    sections: [
      {
        id: "1.1",
        title: "Why Preprocessing Matters",
        bullets: [
          "Models can’t handle missing values (NaN)",
          "Outliers can ruin regression models",
          "Text categories must be encoded for models",
          "Features on different scales bias distance-based models (e.g., kNN, SVM)",
        ],
        note: `Example: If Age is in years (0–100) and Income is in ₹ (0–1,000,000), Income will dominate — unless scaled!`,
      },
      {
        id: "1.2",
        title: "Core Techniques",
        table: [
          {
            technique: "Missing Values",
            methods: ["Drop rows/columns", "Mean/median/mode imputation", "Predictive imputation (KNN, RF)"],
          },
          {
            technique: "Outliers",
            methods: ["IQR method", "Z-score", "Visualization (boxplot, scatter)"],
          },
          {
            technique: "Encoding",
            methods: ["One-Hot (for nominal)", "Label/Ordinal (for ordered)", "Target encoding (advanced)"],
          },
          {
            technique: "Scaling",
            methods: ["StandardScaler (z = (x-μ)/σ)", "MinMaxScaler (0 to 1)", "RobustScaler (IQR-based)"],
          },
        ],
      },
      {
        id: "1.3",
        title: "Hands-On: Clean Titanic Dataset",
        taskCode: `import pandas as pd

# Load
df = pd.read_csv("https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv")

# Handle missing: Age (median), Embarked (mode)
df["Age"].fillna(df["Age"].median(), inplace=True)
df["Embarked"].fillna(df["Embarked"].mode()[0], inplace=True)

# Encode: Sex → 0/1, Embarked → One-Hot
df = pd.get_dummies(df, columns=["Embarked"], drop_first=True)
df["Sex"] = df["Sex"].map({"male": 0, "female": 1})`,
        successMessage: "✅ Clean, numeric, ready-for-modeling dataset!",
      },
    ],

    quiz: {
      title: "Phase 1 Quiz",
      questions: [
        { q: "When should you use One-Hot vs Label Encoding?", answer: "One-Hot for unordered categories (e.g., color), Label for ordered (e.g., small/medium/large)." },
        { q: "Why scale features?", answer: "To prevent features with large magnitudes from dominating distance-based models." },
        { q: "What’s wrong with dropping all rows with missing values?", answer: "You lose data — especially problematic if missingness is systematic (e.g., income not reported by high-earners)." },
      ],
    },

    checklist: [
      "Load a raw dataset (e.g., House Prices from Kaggle)",
      "Identify & handle missing values",
      "Detect & treat outliers",
      "Encode categorical variables",
      "Scale numerical features",
    ],

    completionMessage: `🧹 You can now turn raw, messy data into a clean, analysis-ready format.\n\nThis is a superpower — most beginners never master it.`,
  },

  // —————————————————————————————————————————————————————
  // PHASE 2: Core ML Algorithms
  // —————————————————————————————————————————————————————
  2: {
    title: "Phase 2: Core Machine Learning Algorithms",
    intro: `Now we go beyond .fit() and .predict() — understand **how** models learn.\n\nIntuition > equations. We’ll build simple versions from scratch (NumPy), then use scikit-learn.`,

    sections: [
      {
        id: "2.1",
        title: "Supervised Learning",
        bullets: [
          "🎯 **Regression**: Predict continuous values (e.g., price)",
          "✅ **Classification**: Predict categories (e.g., spam/not spam)",
        ],
      },
      {
        id: "2.2",
        title: "Key Algorithms (Intuition First)",
        table: [
          {
            algo: "Linear Regression",
            idea: "Fit a line: y = mx + c. Minimize squared errors.",
            when: "Predicting continuous values (house price, temp)",
            caution: "Assumes linear relationship",
          },
          {
            algo: "Logistic Regression",
            idea: "Sigmoid curve → outputs probability (0 to 1)",
            when: "Binary classification (spam, survived?)",
            caution: "Still linear decision boundary",
          },
          {
            algo: "Decision Tree",
            idea: "Ask yes/no questions to split data (e.g., 'Age > 30?')",
            when: "Interpretable models, mixed data types",
            caution: "Overfits easily",
          },
          {
            algo: "Random Forest",
            idea: "Average many decision trees trained on random subsets",
            when: "High accuracy, robust to overfitting",
            caution: "Less interpretable",
          },
          {
            algo: "SVM",
            idea: "Find best hyperplane separating classes with max margin",
            when: "Small/medium datasets, clear margin of separation",
            caution: "Slow on large datasets",
          },
        ],
      },
      {
        id: "2.3",
        title: "From Scratch: Linear Regression (NumPy)",
        taskCode: `import numpy as np

def linear_regression_fit(X, y):
    # Add bias term
    X = np.c_[np.ones(X.shape[0]), X]
    # Closed-form: w = (X^T X)^-1 X^T y
    w = np.linalg.inv(X.T @ X) @ X.T @ y
    return w

# Use: w = linear_regression_fit(X_train, y_train)
# Predict: y_pred = X_test @ w[1:] + w[0]`,
        successMessage: "You just implemented the math behind scikit-learn’s LinearRegression!",
      },
    ],

    quiz: {
      title: "Phase 2 Quiz",
      questions: [
        { q: "Why is logistic regression for classification, not regression?", answer: "It uses sigmoid to output probabilities (0–1), not continuous values." },
        { q: "How does Random Forest reduce overfitting vs single Tree?", answer: "Averaging many trees reduces variance; randomness in data/features decorrelates trees." },
        { q: "What does the 'C' parameter in LogisticRegression control?", answer: "Inverse of regularization strength. Small C = strong regularization." },
      ],
    },

    checklist: [
      "Implement linear regression from scratch (NumPy)",
      "Train & compare LogisticRegression, DecisionTree, RandomForest on Titanic",
      "Plot decision boundaries for 2D datasets",
      "Interpret feature importances (trees) and coefficients (linear models)",
    ],

    completionMessage: `🧠 You now understand what’s under the hood — not just API calls.\n\nThis lets you debug models, choose wisely, and explain decisions.`,
  },

  // —————————————————————————————————————————————————————
  // PHASE 3: ML Libraries & Pipelines
  // —————————————————————————————————————————————————————
  3: {
    title: "Phase 3: ML Libraries & Pipelines",
    intro: `Scripts break. Pipelines scale.\n\nLearn scikit-learn’s Pipeline, ColumnTransformer, and tuning tools to build robust, reusable workflows.`,

    sections: [
      {
        id: "3.1",
        title: "Why Pipelines?",
        bullets: [
          "Prevent data leakage (e.g., scaling before train/test split)",
          "Reproduce results across environments",
          "Simplify deployment (one object to save/load)",
          "Avoid spaghetti code",
        ],
      },
      {
        id: "3.2",
        title: "Build a Full Pipeline",
        taskCode: `from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Define transforms
numeric_features = ["Age", "Fare"]
categorical_features = ["Sex", "Embarked"]

preprocessor = ColumnTransformer(
    transformers=[
        ("num", StandardScaler(), numeric_features),
        ("cat", OneHotEncoder(drop="first"), categorical_features)
    ])

# Full pipeline
pipe = Pipeline(steps=[
    ("preprocessor", preprocessor),
    ("classifier", RandomForestClassifier())
])

# Use
X_train, X_test, y_train, y_test = train_test_split(X, y)
pipe.fit(X_train, y_train)
print("Score:", pipe.score(X_test, y_test))`,
        successMessage: "✅ End-to-end pipeline: preprocessing + modeling in one object.",
      },
      {
        id: "3.3",
        title: "Hyperparameter Tuning",
        bullets: [
          "`GridSearchCV`: Exhaustive search over parameter grid",
          "`RandomizedSearchCV`: Faster, samples random combos",
          "`cross_val_score`: Estimate generalization performance",
        ],
        taskCode: `from sklearn.model_selection import GridSearchCV

param_grid = {
    "classifier__n_estimators": [50, 100],
    "classifier__max_depth": [3, 5, None]
}

search = GridSearchCV(pipe, param_grid, cv=5)
search.fit(X_train, y_train)
print("Best params:", search.best_params_)
print("Best score:", search.best_score_)`,
      },
    ],

    quiz: {
      title: "Phase 3 Quiz",
      questions: [
        { q: "What is data leakage? Give an example.", answer: "Using test data info during training (e.g., scaling using full dataset mean/std)." },
        { q: "Why use Pipeline instead of separate fit/transform steps?", answer: "Ensures same transforms applied to train/test; prevents leakage; simplifies code." },
        { q: "When to use RandomizedSearchCV over GridSearchCV?", answer: "When search space is large — faster, often finds near-optimal params." },
      ],
    },

    checklist: [
      "Build a Pipeline for a classification task",
      "Add ColumnTransformer for mixed data types",
      "Tune hyperparameters with GridSearchCV",
      "Save pipeline with joblib & reload it",
    ],

    completionMessage: `🧰 You can now build production-grade ML workflows — not just one-off scripts.\n\nThis is what companies expect.`,
  },

  // —————————————————————————————————————————————————————
  // PHASE 4: Capstone Projects
  // —————————————————————————————————————————————————————
  4: {
    title: "Phase 4: Capstone Projects",
    intro: `Projects turn knowledge into proof.\n\nNo certificate matters more than a GitHub repo with clean code, README, and live demo.`,

    sections: [
      {
        id: "4.1",
        title: "Project Guidelines",
        bullets: [
          "✅ Solve a real problem (not just `sklearn.datasets`)",
          "✅ Clean data from scratch",
          "✅ Use pipelines & proper validation",
          "✅ Visualize results & interpret model",
          "✅ Write a README.md: problem, approach, results, learnings",
          "✅ Deploy (Streamlit/Gradio optional but impressive)",
        ],
      },
      {
        id: "4.2",
        title: "Project Ideas",
        table: [
          {
            name: "🏠 House Price Prediction",
            data: "Kaggle: House Prices",
            type: "Regression",
            skills: "EDA, feature engineering, regularization (Ridge/Lasso)",
          },
          {
            name: "📧 Spam Classifier",
            data: "SMS Spam Collection (Kaggle)",
            type: "NLP + Classification",
            skills: "Text preprocessing, TF-IDF, LogisticRegression/Naive Bayes",
          },
          {
            name: "🛒 Customer Segmentation",
            data: "Mall Customer Data (Kaggle)",
            type: "Unsupervised (Clustering)",
            skills: "PCA, K-Means, silhouette score, profiling clusters",
          },
        ],
      },
      {
        id: "4.3",
        title: "README Template",
        taskCode: `# House Price Prediction

## 🎯 Problem
Predict sale price of houses in Ames, Iowa.

## 🛠️ Approach
- Cleaned missing values (imputed basement/lot features)
- Engineered 'TotalSF' = 1stFlrSF + 2ndFlrSF
- Used Ridge Regression (L2 regularization)
- Pipeline + GridSearchCV

## 📈 Results
- CV RMSE: 0.12 (log scale)
- Top features: OverallQual, GrLivArea, GarageCars

## 🚀 Try it
[Streamlit Demo](https://...)`,
      },
    ],

    quiz: {
      title: "Phase 4 Quiz",
      questions: [
        { q: "Why is feature engineering often more impactful than model choice?", answer: "Better features capture true signal; no model can learn from bad/noisy features." },
        { q: "What should your README include?", answer: "Problem, approach, results, how to run, key learnings." },
        { q: "Why use log(price) for house price regression?", answer: "Price is right-skewed; log makes it ~normal, improves RMSE." },
      ],
    },

    checklist: [
      "Complete 2 projects end-to-end",
      "GitHub repos with clean code, requirements.txt, README.md",
      "Kaggle kernels or blog posts explaining your work",
      "1 project deployed (e.g., Streamlit share link)",
    ],

    completionMessage: `🏆 You now have a portfolio that proves your skills — not just claims.\n\nThis is your ticket to interviews.`,
  },

  // —————————————————————————————————————————————————————
  // PHASE 5: Deep Learning
  // —————————————————————————————————————————————————————
  5: {
    title: "Phase 5: Deep Learning",
    intro: `Neural networks power modern AI — but start simple.\n\nWe’ll build intuition first (perceptron → backprop → CNN), then code with TensorFlow/Keras.`,

    sections: [
      {
        id: "5.1",
        title: "Neural Network Intuition",
        bullets: [
          "🧠 **Perceptron**: Weighted sum + activation (e.g., ReLU)",
          "🔁 **Backpropagation**: Chain rule to update weights (gradient descent)",
          "🎯 **Loss Function**: MSE (regression), Cross-Entropy (classification)",
          "⚙️ **Optimizer**: SGD, Adam (adaptive learning rates)",
        ],
        note: `Think of a NN as a LEGO set: layers stack to capture complex patterns.`,
      },
      {
        id: "5.2",
        title: "Key Architectures",
        table: [
          {
            type: "ANN (Dense)",
            use: "Tabular data (when trees plateau)",
            tip: "Normalize inputs! Use ReLU, avoid sigmoid in hidden layers",
          },
          {
            type: "CNN",
            use: "Images, 1D signals (audio, time series)",
            tip: "Conv layers detect local patterns (edges → textures → parts)",
          },
          {
            type: "RNN/LSTM",
            use: "Sequences (text, time series)",
            tip: "LSTM handles long-term dependencies better than RNN",
          },
        ],
      },
      {
        id: "5.3",
        title: "Hands-On: MNIST Digit Classifier",
        taskCode: `import tensorflow as tf
from tensorflow.keras import layers, models

# Load
data = tf.keras.datasets.mnist.load_data()
(x_train, y_train), (x_test, y_test) = data
x_train, x_test = x_train / 255.0, x_test / 255.0

# Build CNN
model = models.Sequential([
    layers.Conv2D(32, (3,3), activation="relu", input_shape=(28,28,1)),
    layers.MaxPooling2D((2,2)),
    layers.Flatten(),
    layers.Dense(64, activation="relu"),
    layers.Dense(10, activation="softmax")
])

model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])
model.fit(x_train, y_train, epochs=5)
print("Test acc:", model.evaluate(x_test, y_test)[1])`,
        successMessage: "✅ You just trained a CNN that recognizes handwritten digits!",
      },
    ],

    quiz: {
      title: "Phase 5 Quiz",
      questions: [
        { q: "Why ReLU over sigmoid?", answer: "ReLU avoids vanishing gradients; faster training." },
        { q: "What does MaxPooling do?", answer: "Downsamples feature maps, retains strongest features, reduces overfitting/compute." },
        { q: "Why softmax for final layer in classification?", answer: "Outputs probability distribution over classes (sums to 1)." },
      ],
    },

    checklist: [
      "Train ANN on a tabular dataset (e.g., Titanic)",
      "Build CNN for MNIST or CIFAR-10",
      "Experiment with dropout & batch normalization",
      "Visualize filters/activations (optional but fun)",
    ],

    completionMessage: `🧠 You’ve stepped into modern AI — and understand the fundamentals.\n\nNow you can learn Transformers, LLMs, and more with confidence.`,
  },

  // —————————————————————————————————————————————————————
  // PHASE 6: Interview Preparation
  // —————————————————————————————————————————————————————
  6: {
    title: "Phase 6: Interview Preparation",
    intro: `Knowledge ≠ communication.\n\nThis phase turns you into someone who can explain ML clearly, calmly, and convincingly.`,

    sections: [
      {
        id: "6.1",
        title: "Top Theory Concepts",
        bullets: [
          "📉 **Bias-Variance Tradeoff**: High bias = underfitting; high variance = overfitting",
          "⚖️ **Precision vs Recall**: Precision = % correct positives; Recall = % found positives",
          "📊 **Cross-Validation**: k-fold > train/test split for small data",
          "📐 **Regularization**: L1 (Lasso → sparse), L2 (Ridge → small weights)",
          "🔄 **Gradient Descent**: Batch, mini-batch, stochastic",
        ],
      },
      {
        id: "6.2",
        title: "How to Explain Like a Pro",
        table: [
          {
            concept: "Random Forest",
            simple: "Imagine 100 people vote on a decision. Each sees slightly different info. Final decision = majority vote. Less likely to be wrong than one person.",
          },
          {
            concept: "p-value",
            simple: "If the effect was random, how surprising is our result? <5% → probably not random.",
          },
          {
            concept: "Neural Network",
            simple: "A web of simple calculators. Each takes inputs, multiplies by importance (weights), adds them up, and says 'yes/no/maybe' (activation). Layers build complexity.",
          },
        ],
      },
      {
        id: "6.3",
        title: "Practice Questions",
        bullets: [
          "“How would you handle imbalanced data?”",
          "“When would you use SVM over Random Forest?”",
          "“Explain how backpropagation works.”",
          "“How do you detect overfitting?”",
          "“Walk me through your last project.”",
        ],
        task: `Record yourself answering 3 questions in <2 mins each. Watch & improve.`,
      },
    ],

    quiz: {
      title: "Phase 6 Quiz",
      questions: [
        { q: "What’s the difference between bagging and boosting?", answer: "Bagging (e.g., RF): parallel trees, reduce variance. Boosting (e.g., XGBoost): sequential trees, reduce bias." },
        { q: "Why is accuracy misleading for imbalanced data?", answer: "Model can predict majority class always and get high accuracy, but fail on minority class." },
        { q: "What is the vanishing gradient problem?", answer: "In deep nets, gradients become tiny during backprop → early layers don’t learn. Solved by ReLU, skip connections (ResNet)." },
      ],
    },

    checklist: [
      "Explain 5 algorithms to a non-technical friend",
      "Do 3 mock interviews (record or with peer)",
      "Write STAR stories for your projects",
      "Solve 20 ML theory questions (interview guides)",
    ],

    completionMessage: `🎯 You’re not just ready — you’re confident.\n\nGo get that ML/Data Scientist role. You’ve earned it.`,
  },
};