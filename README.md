# TypeScript cheatsheets and tips

---

[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)

A small collection of cheat sheets and tips I've gathered during my studies and work on various projects.
It includes all the main sections and subtopics of the TypeScript language.

## Contents

- [Installation](#installation)
- [Usage](#usage)

### Installation

1. Clone the repository:

```shell
git clone https://github.com/labattaria/typescript-cheatsheets.git
```

2. Install project dependencies:

```shell
cd typescript-cheatsheets
npm install
```

It will install all the necessary dependencies, including the **reflect-metadata** library, which is required for the decorators section (the last one).

### Usage

**We will need the following for the work:**

- Install Node.js if it is not already installed. Preferably the LTS version, which is recommended for everyone. It rarely causes any issues.
- Install TypeScript globally by simply running:

```shell
npm install -g typescript
```

- Additionally, install the ts-node package by running:

```shell
npm install -g ts-node
```

To start the compiler (TS => JS), run the following command:

```shell
tsc ${path to the file .ts}
```

To create a configuration template, run the following command:

```shell
tsc --init
```

To quickly view the results of the code (quickly compile a specific file), run the following command:

```shell
ts-node ${path to the file .ts}
```

But mostly, it's just ready-made code and helpful tips for each section and subtopic of the TypeScript language.
Each folder is a separate section of the language, and the files inside represent subtopics of that section. They contain ready-made snippet code solutions with brief descriptions.
Each folder contains a subfolder called 'tasks' — these are comprehensive exercises that combine multiple subtopics and techniques from the corresponding section.
