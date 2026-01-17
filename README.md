# Solar Performance Map — Superpower Energy Case Study

## Overview

This project implements **The Performance Map**, a spatial–temporal observability system for solar plants.  
It visually overlays **time-series performance metrics (PR)** on top of the **physical layout of solar assets**, enabling operators to instantly identify underperforming zones and revenue leakages.

The system is designed with a **product-first mindset**, focusing on:
- Visual clarity
- Operational insight
- Scalability for real-world solar deployments

---

## Problem Statement

Solar plants generate massive amounts of time-series data, but raw numbers fail to answer the most important question:

> **Where exactly is revenue being lost?**

This project bridges that gap by combining:
- **Static spatial layout data** (physical position of panels)
- **Dynamic performance data** (Performance Ratio over time)

into a single, intuitive visual system.

---

## Key Features

### 1. Spatial Asset Mapping
- Renders the **actual physical layout** of solar assets
- Preserves row/column topology for intuitive diagnosis

### 2. Time-Series Performance Overlay
- Performance Ratio (PR) mapped to color gradients
- Supports temporal exploration via timestamp selection

### 3. Instant Anomaly Detection
- Row-wise failures → wiring / shading issues
- Cluster failures → soiling / inverter problems
- Temporal decay → maintenance signals

### 4. Zero-Domain Learning Curve
- No solar expertise required
- Visual-first insights for operators and founders alike

---

## Performance Encoding Logic

| PR Range | Status | Color |
|--------|------|------|
| ≥ 0.90 | Optimal | Green |
| 0.75 – 0.89 | Degraded | Yellow |
| < 0.75 | Critical | Red |

This encoding allows **at-a-glance understanding** of plant health.

---

## System Architecture

The system follows a **clean separation of concerns**:

- Data Layer → Time-series & spatial ingestion
- Processing Layer → Normalization & mapping
- Visualization Layer → Canvas-based rendering

This enables future extensions like:
- AI-based anomaly detection
- Automated insight agents
- Multi-plant scaling

---

## Tech Stack

- **Frontend:** React + HTML Canvas
- **Language:** JavaScript
- **Rendering:** Canvas (performance-optimized)
- **Data:** Static JS time-series (extensible to APIs)

---

## Why Canvas (and not DOM/SVG)?

- Handles thousands of assets efficiently
- Reduces reflow & repaint cost
- Industry-standard for spatial dashboards

---

## How to Run

```bash
npm install
npm start
