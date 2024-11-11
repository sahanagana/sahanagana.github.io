---
layout: project
title: "GPongT: my first hackathon experience"
subtitle: winning best AI hack at HackTX 2024
date: 2024-11-06
---



This weekend I competed in my very first hackathon: Freetail Hacker's HackTX right here in Austin. I teamed up with two other people.
There were over 150 teams, and a ton of people, many from other universities or majors. It was really intimidating, but we ended up winning Best overall AI hack.

**The idea**

One of my teammates had an idea in the shower: build an existential bot! The gist of it was to leverage ChatGPT's code generation abilities to create some kind of a bot that could evolve over time. However, that was too vague, and we had to narrow it down somehow.

- A discord bot? Some sort of chat bot? That seemed too similar to ChatGPT itself.
- Some kind of app? Again, too vague.
- A game? Now we were getting somewhere.

The end decision was to take a simple game (we decided on pong) and allow it to change and evolve to keep the player engaged.

**The process**

The first thing we did was build the base pong game using Pygame. This was relatively simple, as examples were already out there on the internet.  
We also built a small script that utilized the ChatGPT API to send a test query, receive the response, and just print it out.   
After testing that it worked, we began refining what exactly we wanted the LLM to generate. What components of the game should it be able to change? What should it be barred from doing? How do we prevent bugs or incompatibilities in the code?  
Once we had all of that sorted out, we began fleshing out a pipeline. This was especially important as we needed to really map out the general flow of data from module to module, and it helped us plan the layout of our codebase.
(INSERT pipeline whiteboard picture here)

**Challenges**

There were a lot of hurdles to be overcome, especially with passing code from the GPT API into the game.
- **Passing data to the API**: We had to adjust the prompt to include the game's code. We also had to create a separate file containing global variables it could access and update, like the ball's speed and velocity.
- **Incorrect Code being generated**: We had to ensure that errors were being caught and would not break the game. For now, we caught it as an exception, but we had future plans to implement symbol checking.
- **Update code during runtime**: This was a really tricky problem, but we found a python library called `importlib` that allowed us to dynamically import files while the game was running.

**Having fun with it**

We had the idea to do a man on the street style demo video to show off our project.
In it, we went around interviewing other students and attendees, asking them to play our game and recording their reaction (with their consent). 

**End Result**

Ultimately we ended up with a pong game that updated each round with new, GPT-generated mechanics. We showed our final project off to judges and ended up claiming the title for "Best AI Hack".
This type of dynamic code updating will also be helpful in other fields, especially robotics, where it may be easier and more efficient to have robots generate and run instructions on the fly rather than have everything pre-programmed.  
You can view the codebase and our video at our [Devpost here](https://devpost.com/software/gpongt).

**My thoughts**

Overall, I didn't think I would enjoy this as much as I did. The 24 hours flew by as we were all engrossed in tackling the conceptual problems that our ideas brought forth (as well as trying to finish our own homework). I was lucky to have two amazing teammates that were just as committed to the project as I was, and we had a lot of meaningful discussions. I genuinely think it brought us closer as friends, too.

We signed up for another Hackathon next Tuesday. I think we've become fully addicted.

