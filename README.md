
\# \[StarPoint\]


\*\*Author:\*\* Eivind Cuate-Orea · \*\*Course:\*\* CMP 464/343 Product 1 · \*\*Last updated:\*\* 10/4/26

\---

\#\# 1\. About Me 

\*Who am I in the context of this problem? What roles am I playing (student, employee, parent, athlete, gamer…)?\*

I'm a college student studying Computer Science at Lehman College. I manage homework assignments, reading assignments, exams, personal interests, and independent learning. I want to make progress on these responsibilities without spending so much time planning that I lose the motivation to do them.

\*\*The last 3 times this happened:\*\*  
\*Real, recent moments. For each: when and where, what went wrong, what it cost, what you did.\*

1\. Deciding what to work on: I struggle to identify all the tasks I could work on and decide which ones deserve my attention first. 
2\. Gathering information: My assignments, deadlines, reading materials, and class information are scattered across Brightspace, syllabi, assignment pages, notes, and my calendar. Bringing everything together takes time and effort.
3\. When I feel overwhelmed by planning and don't know where to start, I can end up doomscrolling on TikTok or YouTube instead of studying. This leaves me frustrated and makes it harder to get back on track.

\*\*What it costs me:\*\*  
\*Be specific. How often, how much?\*

\- ⏱️ Time:I spend time collecting information and planning instead of completing assignments or studying.   
\- 💸 Money: Lost study time and inconsistent progress can have financial consequences if they affect my academic progress or extend the time I need to complete my degree. 
\- 🔋 Energy: Organizing everything takes mental effort before I even begin the actual work.
\- 🙂 Joy: I feel overwhelmed, frustrated, and disappointed when I lose time and struggle to make progress.

\---

\#\# 2\. Problem Statement

\*\*Gut check:\*\*

\> I need a simple \*\* way to organize my student tasks and decide what to work on next \*\* because \*\*scattered information and time-consuming planning leave me overwhelmed and frustrated.\*\*.

\*\*Five Whys:\*\*  
1\. Why do I struggle to start studying? Because I often have trouble deciding which task to work on first
2\. Why Why is it difficult to decide? Because I need to consider multiple assignments, deadlines, readings, and personal learning goals
3\. Why does that take so much effort? Because the information I need is spread across different platforms and documents. 
4\. Why can't I simply plan everything in advance? Because gathering and organizing that information manually takes time, and my whiteboard can become messy or difficult to       maintain 
5\. Why does this become a recurring problem? Because the system I currently use requires too much effort to maintain, leaving me overwhelmed before I start the work itself.

\*\*Problem statement:\*\*

\> \*\*When\*\* I wake up and think about my student responsibilities, including homework, reading assignments, exams, and personal learning goals,
\> \*\*I struggle to\*\* decide what to work on first, where to start, and when to complete each task, 
\> \*\*which costs me\*\* time, energy, and motivation. I sometimes end up doomscrolling on TikTok or YouTube instead of studying, which can negatively affect my academic progress and leave me frustrated with myself.
\> \*\*This happens because\*\* the information I need is scattered across Brightspace, syllabi, assignment pages, notes, and my calendar. I spend time gathering information and figuring out which chapter to read, which topic to study, and which task deserves my attention first. 
\> \*\*Right now I\*\* use a whiteboard and manually gather information from different sources to plan my work,\*\*but\*\* the whiteboard can become messy, and setting up and maintaining the plan can take so much time that I feel as though I've lost the day before making meaningful progress.
\*\*I'll know this is solved when:\*\* I can open StarPoint, see my tasks and upcoming deadlines in one place, decide what to work on next, and begin studying without spending excessive time organizing my day.


\---

\#\# 3\. Existing Solutions

| What I use or tried | What it does well | Why it falls short \*for me\* |  
|---|---|---|  
|Notion |Offers flexible pages, databases, templates, and customization.|Building and maintaining a system that fits my needs can become another task.|  
|MyStudyLife |Provides a student-focused way to organize classes, assignments, and schedules.|Its visual experience does not appeal to me, and I want a more motivating interface.|  
|Calendar|Makes it easy to view dates, appointments, and scheduled events.|t doesn't provide the task organization and study-planning workflow I want in one place.|
|Whiteboard|Gives me a visible, flexible space to write down and organize tasks.|It becomes messy, requires manual updates, and takes time to maintain|

\*\*The gap:\*\* \*In one sentence, what's still missing for me?\*

I need a visually appealing, low-effort student planner that brings my tasks and deadlines together and helps me decide what to work on next, without making planning another time-consuming responsibility.

\---

\#\# 4\. Features & Benefits

\*Every feature should move me toward my "solved when" line.\*

| Feature (what it does) | Benefit (how my life gets better) | MVP or Later? |  
|---|---|---|  
|Add tasks manually, including a task name and due date|Lets me capture assignments and responsibilities without switching between planning tools.|MVP|  
|View and organize tasks in one dashboard |Helps me see what needs attention and decide where to start.|MVP|  
|Mark tasks as complete and save them between visits|Makes my progress visible and prevents me from repeatedly rebuilding my task list.|MVP|  
|Templates and easy customization|Makes the planner easier to adapt to my classes and personal workflow.|Later|
|Upload a syllabus PDF and extract assignment information|Reduces the time spent manually gathering deadlines and assignments.|Later|
|Reminders and deadline notifications|Helps me remember upcoming deadlines and stay on track.|Later|
|Goal-focused AI agent|Could eventually connect my personal growth goals to manageable tasks and study activities.|Later|

\*\*MVP (2–3 features):\*\* \*The skateboard: the smallest version I'd actually use.\*  
\- Task entry: I can add a task with a name and optional due date
\- Task dashboard: I can see my tasks and distinguish completed tasks from unfinished tasks.
\- Task persistence: My tasks remain available after refreshing or reopening the browser.

\*\*Later:\*\*  
\- Syllabus PDF uploads and automatic assignment extraction.
\- Customizable templates for different classes and activities.
\- More advanced reminders and notifications.
\- Filtering and sorting by due date, course, or completion status.
\- An optional AI-powered goal and study-planning assistant.v
\-A database-backed version with access across devices.

\*\*Not doing:\*\* \*Things I'm deliberately leaving out.\*  
\- Direct integration with Brightspace or other learning-management systems.
\- Automatic collection of information from multiple external platforms.
\-User accounts, authentication, and cloud synchronization.
\-An AI agent that independently creates and manages my entire study plan.
\-A complete mobile application.

\-

\#\# 5\. Tech Stack

\#\#\# Front end  
\- \*\*Surface:\*\* Website  
\- \*\*Tools:\*\* HTML, CSS, Bootstrap, and JavaScript. 
\- \*\*Why:\*\* \*I primarily experience this problem while planning on my computer and checking information on my iPhone. A responsive website lets me access my planner from either device. HTML and CSS provide the structure and appearance, Bootstrap helps me build the interface more efficiently, and JavaScript provides interactive task management. Also in the future I also want to update this project to learn JavaScript and eventually gain experience with React and Next.js.

\#\#\# Back end  
| Piece | Choice | Why |  
|---|---|---|  
|Application logic|JavaScript in the browser for the MVP|Allows me to implement task creation, completion, and dashboard updates without requiring a server.|  
|Data storage for the MVP|Browser localStorage|Provides a simple way to save tasks between visits without setting up a database.|  
|Future server / API|Node.js, potentially using Next.js server features or a separate API|Could support server-side processing, integrations, and shared data if the project expands.|  
|Future database|PostgreSQL|Could store users, courses, assignments, deadlines, and planner information persistently on a server.|
|Future PDF processing|A JavaScript PDF-parsing library or another suitable service|Could extract text from uploaded syllabi to help identify assignments and due dates.|
|Hosting / deployment|To be determined| will choose a hosting provider compatible with my application and available student benefits. I will verify the deployment requirements before committing to a platform.|

\#\#\# Architecture sketch



\---

\#\# 6\. Open Questions

\*What am I still unsure about? What do I need to figure out or test first?\*
Syllabus extraction: How can I reliably extract assignment names and due dates from different syllabus PDF formats?

Task prioritization: What is the simplest way to help me decide what to work on first without overwhelming me with too many options?

Cross-device access: When should I move from browser storage to a database so my tasks can be accessed on both my computer and iPhone?

Reminders: Should reminders initially appear inside the dashboard, or should I eventually support browser notifications?

Deployment: Which hosting option best fits the current implementation and any available student benefits?

