---
title: Frontend Management Metrics
sidebar-position: 3
---

# Metrics
## Equation
```
PDR(n) = PDR₁ * n^(-b)
```

### Equation Parameters
| Parameter   | Meaning | Explanation |
|-------------|---------|-------------|
| PDR(n)      | Project Delivery Rate in "n" sprints | Represents the time (hours) the team takes to complete "n" tasks |
| PDR<sub>1</sub> | Initial Rate | Team’s starting point |
| n           | Number of accumulated tasks | Features or issues completed up to the measured moment |
| b           | Learning rate (between 0 and 1) | Index of the team’s knowledge development |

**Note:** PDR(n) indicates the level of productivity. A lower PDR implies higher productivity. Therefore, if PDR decreases over time, it means the team is learning and improving.

---

### Parameters Obtention
#### PDR₁ (Initial Rate)
* Collect the total hours worked (from all team members)  
* Count the number of completed issues or features  

**Note: This is measured in the first sprint!**  
PDR₁ = total hours worked / number of completed issues or features

#### n (Number of accumulated tasks)
* Count the number of closed issues  
* Only consider fully completed features  

n (sprint 1) = 5  
n (sprint 2) = 5 + 8 = 13  
n (sprint 3) = 13 + 7 = 20 ...

#### b (Learning Rate)
* Can only be calculated after collecting at least 4 sprints, using logarithmic transformation  

ln(PDR) = ln(PDR₁) - b × ln(n)

---

### Purpose of the Equation
In practical terms, the main objective is to project the evolution of knowledge retention as well as the improvement of the team’s productivity over a given period, turning a subjective perspective into empirical data.