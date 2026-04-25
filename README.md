# Salesforce Full-Stack Account Management Project

This repository demonstrates a complete Salesforce implementation, combining a modern User Interface (LWC) with high-volume backend processing (Batch Apex).

## 🛠️ Project Components

### 1. Frontend: Account Manager (LWC)
* **Custom Search & CRUD:** A dynamic interface for searching, viewing, and editing Account records.
* **Component Design:** Built using Salesforce Lightning Design System (SLDS) for a native look and feel.
* **User Experience:** Implemented loading spinners and modal pop-ups for seamless data interaction.

### 2. Backend: Account Cleanup (Batch Apex)
* **Large Data Volume (LDV):** Developed `AccountCleanupBatch` to demonstrate processing millions of records efficiently.
* **Automation:** Automatically archives accounts inactive for over 90 days, showcasing data maintenance best practices.
* **Architecture:** Utilizes `Database.QueryLocator` to stay within Salesforce governor limits.

## 📂 Folder Structure
Following the **Salesforce DX (SFDX)** standard:
* `force-app/main/default/lwc/` - UI Components
* `force-app/main/default/classes/` - Apex Logic & Batch Processing
