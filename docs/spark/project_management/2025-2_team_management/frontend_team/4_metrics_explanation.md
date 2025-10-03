---
title: Frontend Management Metrics Explanation
sidebar-position: 4
---

# Article Analysis: A Learning Curve Explanatory Theory for Team Learning Valuation
The article proposes using learning curve theory to measure and monetize the learning of teams in software development. We start from the idea that the more a team practices, the more efficient it becomes; thus, it will require less time and cost to resolve obstacles.

## The Log-Linear Learning Curve
Equation 1:
```
y = ax^(-b)
```

y = Accumulated average cost (in work hours) per unit produced.  

x = Accumulated number of units produced.  

a = Cost (in work hours) to produce the first unit.  

b = Learning rate (or elasticity).  

We can use this as a basis to predict project costs. "y" could represent the average time to resolve a problem, "x" the number of similar problems already solved. The team is learning if "b > 0".

## Modeling Productivity Improvement
### Rate of Improvement in Resolution Time
Equation 2:
```
P(p) = -dT/dp
```

T(p) = Proportion of the average resolution time that can still be reduced after solving "p" problems.  

P(p) = Rate of reduction in resolution time. It is the negative derivative of "T(p)", indicating productivity improvement with each new problem "p" solved.  

It measures the speed at which the team is improving. If "P(p)" is high, the team is learning and becoming more productive quickly.

### Rate of Knowledge Creation
Equation 3:
```
Q(p) = -du/dp
```

u(p) = Team knowledge after solving p problems.  

Q(p) = Rate of knowledge creation. It measures how fast the team acquires new knowledge.  

Here we formalize the idea of problem-solving as knowledge acquisition. The article postulates that this rate is directly connected to the team’s human capital (HC).

### Link Between Knowledge and Productivity
Equation 4:
```
P(p) = cQ(p)
```

c = Proportionality coefficient (c > 0).  

Here we have a direct causal relationship: productivity improvement (P(p)) is directly proportional to the rate of knowledge creation (Q(p)). In other words, the team becomes faster because it is learning.

### Lotka-Volterra "Predator-Prey" Model
The interaction between productivity improvement (P(p)) and remaining resolution time (T(p)) is modeled as a "predator-prey" system.  

- Prey = T(p) (the time left to be reduced). It is the “food” for improvement.  
- Predator = P(p) (the improvement rate). It “consumes” the time to be reduced in order to grow.  

```
dQ/dp = (a-bP)Q
```

a = Intrinsic growth rate of knowledge (predator).  
b = Coefficient measuring the negative effect of improvement (P) on knowledge growth (Q).  

The knowledge creation rate (dQ/dp) grows but is limited by the improvement already achieved. The faster improvement happens (P), the harder it becomes to generate new knowledge (diminishing marginal gains).

```
dT/dp = (-d+CQ)
```

Which simplifies to:
```
dT/dp = -P(p)T(p)
```

d = Natural decay rate of time to be reduced (prey).  
c = Coefficient measuring the positive impact of knowledge (Q) on reducing time (T).  

The time to be reduced (T) decreases, and this reduction is accelerated by the amount of knowledge (Q) the team possesses. More knowledge leads to faster task-time reduction.

## Conclusion: Final Connection with the Learning Curve
Equation 6:
```
P(p) = KT(p)^(k)
```

This equation expresses the relationship between the rate of improvement P(p) and the potential for improvement T(p), where k is a parameter reflecting learning efficiency. By solving the system of differential equations, the article demonstrates that the solution leads back to the log-linear learning curve form (y = ax⁻ᵇ).  

The key conclusion is that the parameter b (the learning rate) in the classic formula is not just a number but a direct indicator of the team’s HC. Fluctuations in b between different teams can be interpreted as differences in their capacities, knowledge, skills, and experience.

## Example of Application
Team with 4 people, 12-week project, using agile methodologies and related practices.  

Initial data:  

<div align="center">
  First sprint: 40 hours for 5 features -> PDR (project delivery rate) = 8 hours/feature
</div>

| Sprint | Accumulated Features | PDR | Predicted PDR (b = 0.25) |
| :---: | :---: | :---: | :---: |
| 1 | 5  | 8.0 | 8.0 |
| 2 | 10 | 6.8 | 6.7 |
| 3 | 15 | 6.2 | 6.1 |
| 4 | 20 | 5.8 | 5.7 |
