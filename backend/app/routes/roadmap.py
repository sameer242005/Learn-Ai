from fastapi import APIRouter

router = APIRouter(prefix="/roadmap", tags=["Roadmap"])

ROADMAP = {
    "Machine Learning": {
        "phases": [
            {
                "phase": 0,
                "title": "Prerequisites",
                "duration": "2–3 Weeks",
                "sections": [
                    {
                        "title": "Python for ML",
                        "explanation": (
                            "Before touching Machine Learning, you must be comfortable with Python. "
                            "This doesn’t mean memorizing syntax — it means thinking in Python."
                        ),
                        "topics": [
                            "Variables, loops, functions",
                            "Lists, tuples, dictionaries",
                            "OOP basics (class, object, __init__)",
                            "File handling",
                            "NumPy, Pandas, Matplotlib"
                        ],
                        "youtube": [
                            {
                                "title": "Python Full Course – CodeWithHarry",
                                "url": "https://youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME"
                            },
                            {
                                "title": "Python – freeCodeCamp",
                                "url": "https://youtu.be/rfscVS0vtbw"
                            }
                        ],
                        "task": "Write Python code to load a CSV and plot a graph."
                    },
                    {
                        "title": "Math for ML",
                        "explanation": (
                            "You don’t need a PhD in math. "
                            "You only need intuition: how numbers move and why models learn."
                        ),
                        "topics": [
                            "Vectors and matrices",
                            "Mean, variance, probability",
                            "Derivatives & gradient descent intuition"
                        ],
                        "youtube": [
                            {
                                "title": "StatQuest – Linear Algebra",
                                "url": "https://youtube.com/playlist?list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm"
                            },
                            {
                                "title": "3Blue1Brown – Calculus",
                                "url": "https://youtu.be/WUvTyaaNkzM"
                            }
                        ],
                        "task": "Explain gradient descent in your own words."
                    }
                ]
            },
            {
                "phase": 1,
                "title": "Data Analysis & Preprocessing",
                "duration": "2 Weeks",
                "sections": [
                    {
                        "title": "Data Cleaning",
                        "explanation": (
                            "Most ML work is NOT algorithms. "
                            "It’s cleaning messy, real-world data."
                        ),
                        "topics": [
                            "Missing values",
                            "Outliers",
                            "Encoding",
                            "Feature scaling"
                        ],
                        "youtube": [
                            {
                                "title": "Krish Naik – Data Preprocessing",
                                "url": "https://youtube.com/playlist?list=PLKnIA16_RmvY5eP91BGPa0vXUYmIdtfPQ"
                            }
                        ],
                        "task": "Clean a dataset and visualize insights."
                    }
                ]
            }
        ]
    }
}

@router.get("/overview")
def get_overview(skill: str):
    if skill not in ROADMAP:
        return {"error": "Skill not found"}
    return {
        "skill": skill,
        "phases": [
            {
                "phase": p["phase"],
                "title": p["title"],
                "duration": p["duration"]
            }
            for p in ROADMAP[skill]["phases"]
        ]
    }

@router.get("/phase")
def get_phase(skill: str, phase: int):
    for p in ROADMAP.get(skill, {}).get("phases", []):
        if p["phase"] == phase:
            return p
    return {"error": "Phase not found"}
