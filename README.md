
\# \[StarPoint\]


\*\*Author:\*\* Eivind Cuate-Orea · \*\*Course:\*\* CMP 464/343 Product 1 · \*\*Last updated:\*\* 10/4/26

\---

\#\# 1\. About Me 

\*Who am I in the context of this problem? What roles am I playing (student, employee, parent, athlete, gamer…)?\*

A Student

\*\*The last 3 times this happened:\*\*  
\*Real, recent moments. For each: when and where, what went wrong, what it cost, what you did.\*

1\. Struggling to identify things I could work on & decide what to do first and when to do it   
2\. Pulling information is Scattered , Making Plans itself is Exhausting  
3\. Lack of structure creates a cycle of overwhelm → doomscrolling → frustration

\*\*What it costs me:\*\*  
\*Be specific. How often, how much?\*

\- ⏱️ Time: Cost me Alot of Time    
\- 💸 Money: Cost me Alot of Money   
\- 🔋 Energy: Cost me Alot of Energy  
\- 🙂 Joy: Cost me A lot of Joy

\---

\#\# 2\. Problem Statement

\*\*Gut check:\*\*

\> I need \*\*a way to structure my task\*\* because \*\*without it I get Overwhelm and Frustrated\*\*.

\*\*Five Whys:\*\*  
1\. Why?  
2\. Why?  
3\. Why?  
4\. Why?  
5\. Why?

\*\*Problem statement:\*\*

\> \*\*When\*\* I wake up and think about my student tasks—homework assignments, reading assignments, and personal interests,  
\> \*\*I struggle to\*\* decide what to do first and where to start.,  
\> \*\*which costs me\*\* lost time, plus energy and motivation. I end up doomscrolling on TikTok or YouTube instead of studying, which affects my grades, reduces my energy, and leaves me frustrated and mad at myself.  
\> \*\*This happens because\*\* My information is scattered in different places, including Brightspace, syllabus, assignment pages, notes, my calendar.  I spend a lot of time thinking about what chapter to read, what topic to study, and what I should do first, and I end up overwhelmed.  
\> \*\*Right now I\*\* use my whiteboard as a task reminder and try to plan everything out using the information from my different places, \*\*but\*\* The whiteboard gets messy, takes time to set up, and planning everything out can take so long that I feel like I lost the day.

\*\*I'll know this is solved when:\*\* I can start my day knowing what student task I need to do and when I need to do it, stay on track, and spend less time figuring out where to start.


\---

\#\# 3\. Existing Solutions

| What I use or tried | What it does well | Why it falls short \*for me\* |  
|---|---|---|  
|Notion |It has Features that help you build whatever you want|It Complicated |  
|MyStudyLife |Easy to use  | UI/visual experience is bad|  
|Calendar| It simple | Does not provide enough of the functionality to what I want|

\*\*The gap:\*\* \*In one sentence, what's still missing for me?\*

I don't want managing the planner to become another task that consumes the time and energy I’m trying to protect.

\---

\#\# 4\. Features & Benefits

\*Every feature should move me toward my "solved when" line.\*

| Feature (what it does) | Benefit (how my life gets better) | MVP or Later? |  
|---|---|---|  
|Automatically gather Info |Reduces the amount of information you have to gather|CORE|  
|Organize information | helps you avoid getting overwhelmed deciding what to do first.|CORE|  
| Templates \+ easy customization|quickly adjust the automatically organized planner | MVP|  
| Goal-focused agent| personal growth goals to your tasks| LATER|  
| Reminders|Keeps you on track| MVP|

\*\*MVP (2–3 features):\*\* \*The skateboard: the smallest version I'd actually use.\*  
\- Templates \+ easy customization  
\- Reminders

\*\*Later:\*\*  
\- Goal-focused agent

\*\*Not doing:\*\* \*Things I'm deliberately leaving out.\*  
\- Goal-focused agent

\---

\#\# 5\. Tech Stack

\#\#\# Front end  
\- \*\*Surface:\*\* Website  
\- \*\*Tools:\*\* Next.js, HTML, CSS, JavaScript,  
\- \*\*Why:\*\* \*I usually experience this problem on my PC and iPhone, so a website lets me access my planner from either device. I already know HTML, CSS, while Next.js gives me an opportunity to learn a new web framework & JavaScript give me the opportunity to learn how to make my website move.

\#\#\# Back end  
| Piece | Choice | Why |  
|---|---|---|  
| Server / API | Node.js| I want to learn Node.js and use it to handle requests between my website and the database.|  
| Data storage |PostgreSQL | I need to store my classes , assignments, reading , deadlines, reminders , and planner information |  
| Outside services (optional) |PDF processing service |My MVP will allow me to upload a syllabus PDF, so I may need a service or library to extract information from it. |  
| Hosting / deploy | GitHub Education hosting option — TBD|I have access to hosting benefits through GitHub Education, and I want to use a student-friendly option to deploy my project. |

\#\#\# Architecture sketch

\`\`\`mermaid  
flowchart LR  
  U\["Me"\] \--\> FE\["Front end: Next.js"\]  
  FE \--\> API\["Back end / API: Node.js\]  
  API \--\> DB\[("Data: PostgreSQL")\]  
\`\`\`

\---

\#\# 6\. Open Questions

\*What am I still unsure about? What do I need to figure out or test first?\*

How will I automatically gather information from different sources?  
I know I want to start with manual entry and syllabus PDF uploads, but I still need to figure out how to extract and organize information from the PDF.

