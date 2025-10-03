---
title: Management Metrics
sidebar-position: 3
---

# Management Metrics for Andes Project

Each *issue* has a weight defined by its difficulty, and this weight directly impacts the calculation of metrics.  

**Weights by difficulty:**
1. **High** → 3 points  
2. **Medium** → 2 points  
3. **Low** → 1 point  

---

## 1 - Number of issues resolved per sprint
- **Goal:** Evaluate the team's productivity in each sprint.  
- **How to measure:**  
  - Count the total number of issues completed in the sprint, considering the sum of difficulty weights.  
- **Example:** If the team completes 5 issues (2 high, 2 medium, and 1 low), the score will be:  
  (2×3) + (2×2) + (1×1) = **11 points**.  
- **Importance:** Helps monitor the team’s delivery capacity over time.

---

## 2 - Predictability (committed vs. delivered)
- **Goal:** Check the team’s consistency in delivering what was planned for the sprint.  
- **How to measure:**  
  - (Completed points ÷ Planned points) × 100.  
- **Example:** 30 points planned, 25 delivered → 83% predictability.  
- **Importance:** Helps improve estimation and trust in deliveries.

---

## 3 – Rework rate
- **Goal:** Measure how many delivered issues need to be reopened or corrected after review or deployment.  
- **How to measure:**  
  - Formula: (Number of reopened issues ÷ Total issues completed in the sprint) × 100.  
  - Also track the severity of defects found.  
- **Example:** 20 issues completed, 3 reopened → (3 ÷ 20) × 100 = **15% rework**.  
- **Importance:** Helps identify quality problems in development and in the review process.  

---

## 4 - Daily stand-up engagement
- **Goal:** Evaluate the team’s participation in daily meetings.  
- **How to measure:**  
  - Attendance rate: (Present participants ÷ Expected total) × 100.  
  - Update quality: qualitative analysis (if updates provide clarity, blockers, and progress).  
- **Example:** 8 team members, 7 attend daily → 87.5% attendance.  
- **Importance:** Higher participation indicates better alignment and collaboration within the team.  

---

## 5 - Team satisfaction
- **Goal:** Measure team members’ well-being and motivation.  
- **How to measure:** Quick surveys at the end of each sprint (*Sprint Health Check*), using a 1-to-5 scale.  
- **Example questions:**  
  - Am I satisfied with how the team works?  
  - Do I feel my contributions are valued?  
- **Indicator:** Average of the given scores. Example: an average of 4.2 indicates a good satisfaction level.  
- **Importance:** Satisfied teams tend to be more productive and collaborative.  
