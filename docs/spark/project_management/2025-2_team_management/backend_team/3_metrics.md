---
title: Spark Team Metrics Explanation
sidebar_position: 5
---

# Spark Team Performance Metrics Analysis

### 1. Committed vs Completed
**Equation 1:**
```
CvC = (Completed / Committed) × 100
```

Where:
- **CvC** = Committed vs Completed ratio (percentage)  
- **Completed** = Work items that meet Definition of Done  
- **Committed** = Work items planned at sprint start  

The "Committed vs Completed" metric is a performance indicator that measures team predictability. It compares the amount of work the team committed to deliver at the beginning of a cycle with the work actually completed by the end of that period. For an item to be considered "completed," it must meet all Definition of Done (DoD) criteria, ensuring expected quality delivery.

**Implementation**: Implementation begins with clear policy definition, primarily the Definition of Done (DoD). A snapshot of committed work is recorded at each cycle start using tools like GitHub Projects. At cycle end, completed items are counted. Data is analyzed in comparative bar charts and discussed in Sprint Review and Retrospective meetings.

**Benefits**: This metric significantly improves project predictability, generating stakeholder confidence in timelines and plans. Teams learn to calibrate commitments with actual capacity, resulting in more accurate planning and reduced spillover, decreasing stress and rework while reinforcing quality culture.

### 2. Cycle Time / Lead Time  
**Equation 2:**
```
Cycle_Time = End_Date - Start_Date
Lead_Time = Delivery_Date - Creation_Date
```

Where:
- **Cycle_Time** = Time needed to complete work (days)  
- **Lead_Time** = Total time from creation to delivery (days)  
- **Start_Date** = Development start date  
- **End_Date** = Completion date  
- **Creation_Date** = Issue creation date  
- **Delivery_Date** = Customer delivery date  

Cycle Time measures the time needed to complete a work item from development start to finish. Lead Time measures total time from demand creation to customer delivery. While Cycle Time shows execution efficiency, Lead Time shows customer experience regarding wait time.

**Implementation**: Implementation uses management tools like GitHub Projects or Jira. Each issue records opening, development start, and completion dates. Data is presented in scatter plots or period averages, allowing trend and bottleneck visualization. Teams regularly review results in retrospectives, investigating items significantly above average.

**Benefits**: Adopting Cycle Time/Lead Time metrics brings direct productivity and predictability improvements. Teams identify workflow bottlenecks, enabling targeted adjustments like test automation or improved communication. Reduced Lead Time increases stakeholder satisfaction through faster feature delivery, while reduced Cycle Time contributes to leaner, more sustainable flow.

### 3. Team Velocity Acceleration
**Equation 3:**
```
TVA = ((Current_Velocity - Previous_Velocity) / Previous_Velocity) × 100
```

Where:
- **TVA** = Team Velocity Acceleration (percentage)  
- **Current_Velocity** = Current iteration velocity  
- **Previous_Velocity** = Previous iteration velocity  

Team Velocity Acceleration measures the percentage variation in team delivery speed between consecutive iterations. It shows whether the team is increasing delivery capacity (accelerating), maintaining stability, or reducing productivity (decelerating). Velocity corresponds to work completed in a cycle, typically measured in Story Points meeting Definition of Done.

**Implementation**: Implementation begins with velocity measurement unit definition (Story Points or completed items) and DoD standardization. Each iteration calculates velocity and compares with previous iteration to obtain percentage acceleration. Results are analyzed in line or bar charts showing both velocity evolution and percentage variation between cycles.

**Benefits**: This metric brings significant project improvements through team evolution visibility. Stakeholders can identify whether teams are gaining momentum or facing productivity-reducing obstacles. It contributes to predictability and more realistic planning, as acceleration history helps project future capacity while encouraging continuous efficiency analysis.

### 4. Reuse of Artifacts
**Equation 4:**
```
RA = (Reused_Artifacts / Total_Artifacts) × 100
```

Where:
- **RA** = Reuse of Artifacts (percentage)  
- **Reused_Artifacts** = Number of reused components/assets  
- **Total_Artifacts** = Total number of components used  

The "Reuse of Artifacts" metric measures the percentage of digital assets (code, UI components, documentation, or scripts) reused in new projects. It answers: "Are we building on what's already done, or reinventing the wheel for each new work?" The main objective is transforming completed work into valuable assets applicable in multiple contexts, saving time and resources while elevating quality and consistency.

**Implementation**: Implementation begins with identifying and cataloging reusable assets. A knowledge management policy encourages teams to document and make artifacts available in accessible repositories. Measurement can be performed through component counting, automated code analysis, or time mapping comparing creation time versus adaptation time of existing artifacts.

**Benefits**: Adopting "Reuse of Artifacts" metrics generates significant improvements and profound project impact. The main benefit is development acceleration, as teams deliver value faster by not recreating solutions for already-solved problems. This increases productivity, reduces Lead Time, and improves quality through tested and validated artifacts reuse.

### 5. Schedule Performance Index (SPI) & Cost Performance Index (CPI)
**Equation 5:**
```
SPI = Earned_Value / Planned_Value
CPI = Earned_Value / Actual_Cost
```

Where:
- **SPI** = Schedule Performance Index  
- **CPI** = Cost Performance Index  
- **Earned_Value** = Planned value of work actually performed  
- **Planned_Value** = Planned value of work scheduled  
- **Actual_Cost** = Actual cost incurred  

SPI and CPI are classic Earned Value Management indicators measuring project adherence to planning in terms of schedule and budget. SPI compares completed work with scheduled work, indicating if the project is ahead, behind, or on schedule. CPI compares completed work value with actual cost, showing if the project is spending more, less, or exactly as planned.

**Implementation**: Implementation starts with baseline schedule and budget definition. Each defined period collects Earned Value, Planned Value, and Actual Cost data. Values < 1 indicate below-plan performance, = 1 indicates on-plan, and > 1 indicates superior performance. Visualization uses trend charts showing SPI and CPI evolution over time, reviewed in PMO forums or Steering Committee meetings.

**Benefits**: These metrics bring direct gains in predictability and control. Management teams identify schedule and cost deviations early, acting before critical impact occurs. Stakeholders gain confidence in presented plans through objective indicator-based analysis, while teams improve estimation, planning, and resource allocation capabilities over time.

### 6. Defect Detection
**Equation 6:**
```
DD = (Defects_Found_Early / Total_Defects) × 100
```

Where:
- **DD** = Defect Detection rate (percentage)  
- **Defects_Found_Early** = Defects found in development/testing phases  
- **Total_Defects** = Total defects found (including production)  

Defect Detection measures the team's ability to identify defects early in the development cycle. It evaluates not just defect quantity but mainly when they're detected—ideally as early as possible, during internal development and testing phases, before reaching customers. The metric answers: "Are we detecting problems early when correction cost is lower?"

**Implementation**: Implementation begins with clear defect definition and categorization of detection timing (development, code review, internal testing, staging, or production). Data collection uses tools like GitHub Issues, recording defect origin, severity, and correction status. Charts show defect percentages found in each phase and production escape trends over iterations.

**Benefits**: Adopting Defect Detection metrics brings direct quality and reliability gains. Early defect detection significantly reduces correction cost and effort, avoiding rework in advanced stages or production failures. Teams gain greater visibility into prevention mechanism effectiveness, strengthening shift-left testing culture and increasing stakeholder confidence in delivered products.

