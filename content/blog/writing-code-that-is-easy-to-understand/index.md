---
title: Writing code that is easy to understand
date: "2018-02-21T00:00:00.169Z"
description: We always think about the user when writing code. How should I design a particular functionality so that it is intuitive to the user that is using it?
featuredImage: ./featuredImage.jpg
tags: ["Programming"]
---

We always think about the user when writing code. How should I design a particular functionality so that it is intuitive to the user that is using it? We often forget one crucial user that, I would argue, spends just as much time on the software. Who is this you might ask? The developer.

A large part of my day is often spent reading and understanding code. Often too much mental capacity is exhausted on this task when it can be used to develop new features or brainstorm new ideas.

There are three simple things that we can be more mindful of when writing code that can ease the amount of mental capacity spent, both for our fellow developer and ourselves:

# Keep things simple, try not to over-engineer it
Sometimes the simplest way is the better way. If your code sacrifices readability and understanding, I would take a hard look at whether those sacrifices are necessary and worth the future mental capacity drain.

# Think long-term
When I design a particular functionality, I tend to take into consideration how easy it would be for me to expand on that particular functionality in the future. Another thing that we should take into considerations is: If I were to come back to this code in a year, how long would it take me to re-onboard and be productive again?

# Don’t comment for comment’s sake
Comment are useful only if they serve a purpose. If the code is self explanatory, don’t write a comment. Sometimes too many comments just clutters the code and no one ends up reading it anyways.