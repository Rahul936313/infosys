export type Task = {
  id: string; title: string; kind: string; topic: string; phase: number; month: string; priority?: "high"|"medium"|"low"; resource?: string;
};

export const phases = [
  { id: 1, name: "Foundation", months: "Oct–Nov 2026", color: "cyan", goal: "Coding fluency, Java, Arrays, Strings, Linked Lists, Stack/Queue, Binary Search" },
  { id: 2, name: "Core Interview", months: "Dec 2026–Jan 2027", color: "violet", goal: "Trees, Heap, SQL, OOP, DBMS" },
  { id: 3, name: "CS + Advanced DSA", months: "Feb–Mar 2027", color: "amber", goal: "Graphs, DP, OS, Computer Networks" },
  { id: 4, name: "Portfolio", months: "Apr–May 2027", color: "emerald", goal: "ML project, AI/RAG project, GitHub and deployment" },
  { id: 5, name: "Assessment", months: "Jun–Jul 2027", color: "rose", goal: "Aptitude, reasoning, verbal, SQL, coding and Infosys-style mocks" },
  { id: 6, name: "Interview Mode", months: "Aug–Sep 2027", color: "blue", goal: "Revision, mock interviews, HR, project defense, final polish" },
];

export const roadmapTasks: Task[] = [
  {id:"r01",title:"Arrays fundamentals: traversal, min/max, frequency",kind:"Study",topic:"Arrays",phase:1,month:"Oct 2026",priority:"high"},
  {id:"r02",title:"Prefix sums + range queries",kind:"Study",topic:"Arrays",phase:1,month:"Oct 2026",priority:"high"},
  {id:"r03",title:"Two pointers pattern",kind:"Study",topic:"Arrays",phase:1,month:"Oct 2026",priority:"high"},
  {id:"r04",title:"Sliding window pattern",kind:"Study",topic:"Arrays",phase:1,month:"Oct 2026",priority:"high"},
  {id:"r05",title:"Kadane's algorithm",kind:"Study",topic:"Arrays",phase:1,month:"Oct 2026",priority:"high"},
  {id:"r06",title:"Sorting + comparator basics in Java",kind:"Java",topic:"Java",phase:1,month:"Oct 2026",priority:"high"},
  {id:"r07",title:"HashMap + HashSet fluency",kind:"Java",topic:"Java",phase:1,month:"Nov 2026",priority:"high"},
  {id:"r08",title:"Strings, char arrays, StringBuilder",kind:"Study",topic:"Strings",phase:1,month:"Nov 2026",priority:"high"},
  {id:"r09",title:"Linked list operations + reverse",kind:"Study",topic:"Linked List",phase:1,month:"Nov 2026",priority:"high"},
  {id:"r10",title:"Stack + Queue + Deque",kind:"Study",topic:"Stack/Queue",phase:1,month:"Nov 2026",priority:"high"},
  {id:"r11",title:"Binary search templates",kind:"Study",topic:"Binary Search",phase:1,month:"Nov 2026",priority:"high"},
  {id:"r12",title:"Recursion + backtracking basics",kind:"Study",topic:"Recursion",phase:1,month:"Nov 2026",priority:"medium"},
  {id:"r13",title:"Trees: DFS traversals",kind:"Study",topic:"Trees",phase:2,month:"Dec 2026",priority:"high"},
  {id:"r14",title:"Trees: BFS + level order",kind:"Study",topic:"Trees",phase:2,month:"Dec 2026",priority:"high"},
  {id:"r15",title:"BST: search, insert, validate",kind:"Study",topic:"BST",phase:2,month:"Dec 2026",priority:"high"},
  {id:"r16",title:"Heap + PriorityQueue patterns",kind:"Study",topic:"Heap",phase:2,month:"Jan 2027",priority:"high"},
  {id:"r17",title:"SQL SELECT / WHERE / ORDER BY",kind:"SQL",topic:"SQL",phase:2,month:"Dec 2026",priority:"high"},
  {id:"r18",title:"SQL GROUP BY / HAVING / aggregates",kind:"SQL",topic:"SQL",phase:2,month:"Dec 2026",priority:"high"},
  {id:"r19",title:"SQL joins + subqueries",kind:"SQL",topic:"SQL",phase:2,month:"Dec 2026",priority:"high"},
  {id:"r20",title:"Window functions: RANK / ROW_NUMBER",kind:"SQL",topic:"SQL",phase:2,month:"Jan 2027",priority:"high"},
  {id:"r21",title:"OOP: 4 pillars + Java implementation",kind:"Core CS",topic:"OOP",phase:2,month:"Jan 2027",priority:"high"},
  {id:"r22",title:"Abstract class vs interface",kind:"Core CS",topic:"OOP",phase:2,month:"Jan 2027",priority:"high"},
  {id:"r23",title:"DBMS keys + normalization",kind:"Core CS",topic:"DBMS",phase:2,month:"Jan 2027",priority:"high"},
  {id:"r24",title:"ACID + transactions + indexing",kind:"Core CS",topic:"DBMS",phase:2,month:"Jan 2027",priority:"high"},
  {id:"r25",title:"Graphs: BFS / DFS / components",kind:"Study",topic:"Graphs",phase:3,month:"Feb 2027",priority:"high"},
  {id:"r26",title:"Dijkstra + shortest path",kind:"Study",topic:"Graphs",phase:3,month:"Feb 2027",priority:"high"},
  {id:"r27",title:"Topological sort + cycle detection",kind:"Study",topic:"Graphs",phase:3,month:"Feb 2027",priority:"high"},
  {id:"r28",title:"DP: 1D + memoization/tabulation",kind:"Study",topic:"DP",phase:3,month:"Mar 2027",priority:"high"},
  {id:"r29",title:"DP: knapsack + subset sum",kind:"Study",topic:"DP",phase:3,month:"Mar 2027",priority:"high"},
  {id:"r30",title:"DP: LCS + LIS",kind:"Study",topic:"DP",phase:3,month:"Mar 2027",priority:"high"},
  {id:"r31",title:"OS: process vs thread + scheduling",kind:"Core CS",topic:"OS",phase:3,month:"Feb 2027",priority:"high"},
  {id:"r32",title:"OS: deadlock + memory management",kind:"Core CS",topic:"OS",phase:3,month:"Feb 2027",priority:"high"},
  {id:"r33",title:"CN: OSI/TCP-IP + TCP vs UDP",kind:"Core CS",topic:"CN",phase:3,month:"Mar 2027",priority:"high"},
  {id:"r34",title:"CN: DNS, HTTP/HTTPS, routing basics",kind:"Core CS",topic:"CN",phase:3,month:"Mar 2027",priority:"high"},
  {id:"r35",title:"Build ML project v1: data + EDA",kind:"Project",topic:"ML Project",phase:4,month:"Apr 2027",priority:"high"},
  {id:"r36",title:"ML project: model comparison + evaluation",kind:"Project",topic:"ML Project",phase:4,month:"Apr 2027",priority:"high"},
  {id:"r37",title:"ML project: FastAPI + frontend",kind:"Project",topic:"ML Project",phase:4,month:"May 2027",priority:"high"},
  {id:"r38",title:"Build RAG project: ingestion + embeddings",kind:"Project",topic:"RAG Project",phase:4,month:"May 2027",priority:"high"},
  {id:"r39",title:"RAG: vector search + evaluation",kind:"Project",topic:"RAG Project",phase:4,month:"May 2027",priority:"high"},
  {id:"r40",title:"GitHub README + demo + deployment polish",kind:"Portfolio",topic:"GitHub",phase:4,month:"May 2027",priority:"medium"},
  {id:"r41",title:"Aptitude: percentages, ratio, averages",kind:"Aptitude",topic:"Quant",phase:5,month:"Jun 2027",priority:"high"},
  {id:"r42",title:"Aptitude: TSD, time/work, probability",kind:"Aptitude",topic:"Quant",phase:5,month:"Jun 2027",priority:"high"},
  {id:"r43",title:"Reasoning + seating/puzzles + syllogism",kind:"Aptitude",topic:"Reasoning",phase:5,month:"Jun 2027",priority:"high"},
  {id:"r44",title:"Verbal + RC + para jumbles",kind:"Aptitude",topic:"Verbal",phase:5,month:"Jun 2027",priority:"medium"},
  {id:"r45",title:"Infosys-style coding mock set 1",kind:"Mock",topic:"Mock",phase:5,month:"Jul 2027",priority:"high"},
  {id:"r46",title:"Infosys-style coding mock set 2",kind:"Mock",topic:"Mock",phase:5,month:"Jul 2027",priority:"high"},
  {id:"r47",title:"SQL + Core CS mock set",kind:"Mock",topic:"Mock",phase:5,month:"Jul 2027",priority:"high"},
  {id:"r48",title:"Timed full assessment simulation",kind:"Mock",topic:"Mock",phase:5,month:"Jul 2027",priority:"high"},
  {id:"r49",title:"Resume finalization + 60-second intro",kind:"Interview",topic:"HR",phase:6,month:"Aug 2027",priority:"high"},
  {id:"r50",title:"Project defense: ML architecture + tradeoffs",kind:"Interview",topic:"Project Interview",phase:6,month:"Aug 2027",priority:"high"},
  {id:"r51",title:"Project defense: RAG architecture + tradeoffs",kind:"Interview",topic:"Project Interview",phase:6,month:"Aug 2027",priority:"high"},
  {id:"r52",title:"20 mock interviews + feedback log",kind:"Interview",topic:"Mock Interviews",phase:6,month:"Aug–Sep 2027",priority:"high"},
  {id:"r53",title:"Final DSA revision: top 80",kind:"Revision",topic:"Revision",phase:6,month:"Sep 2027",priority:"high"},
  {id:"r54",title:"Final DBMS / OS / CN / OOP revision",kind:"Revision",topic:"Revision",phase:6,month:"Sep 2027",priority:"high"},
  {id:"r55",title:"HR answers: strengths, weakness, why Infosys",kind:"Interview",topic:"HR",phase:6,month:"Sep 2027",priority:"high"},
];

const dsaSeed = [
  ["Arrays","Two Sum"],["Arrays","Best Time to Buy and Sell Stock"],["Arrays","Maximum Subarray"],["Arrays","Contains Duplicate"],["Arrays","Move Zeroes"],["Arrays","Majority Element"],["Arrays","Missing Number"],["Arrays","Merge Sorted Array"],["Arrays","Remove Duplicates from Sorted Array"],["Arrays","Product of Array Except Self"],["Arrays","Subarray Sum Equals K"],["Arrays","Best Time to Buy and Sell Stock II"],["Arrays","Rotate Array"],["Arrays","Merge Intervals"],["Arrays","Find Pivot Index"],["Arrays","Maximum Product Subarray"],
  ["Strings","Valid Palindrome"],["Strings","Valid Anagram"],["Strings","First Unique Character in a String"],["Strings","Longest Common Prefix"],["Strings","Reverse Words in a String"],["Strings","Longest Substring Without Repeating Characters"],["Strings","Group Anagrams"],["Strings","Longest Palindromic Substring"],["Strings","String Compression"],["Strings","Is Subsequence"],
  ["Two Pointer","Two Sum II"],["Two Pointer","3Sum"],["Two Pointer","Container With Most Water"],["Two Pointer","Valid Palindrome"],["Two Pointer","Remove Duplicates from Sorted Array"],["Two Pointer","Squares of a Sorted Array"],
  ["Sliding Window","Longest Substring Without Repeating Characters"],["Sliding Window","Minimum Size Subarray Sum"],["Sliding Window","Longest Repeating Character Replacement"],["Sliding Window","Permutation in String"],["Sliding Window","Maximum Average Subarray I"],["Sliding Window","Fruit Into Baskets"],["Sliding Window","Minimum Window Substring"],
  ["Hashing","Two Sum"],["Hashing","Contains Duplicate"],["Hashing","Group Anagrams"],["Hashing","Top K Frequent Elements"],["Hashing","Longest Consecutive Sequence"],["Hashing","Happy Number"],["Hashing","Intersection of Two Arrays"],
  ["Bit Manipulation","Single Number"],["Bit Manipulation","Number of 1 Bits"],["Bit Manipulation","Counting Bits"],["Bit Manipulation","Reverse Bits"],["Bit Manipulation","Missing Number"],["Bit Manipulation","Power of Two"],
  ["Binary Search","Binary Search"],["Binary Search","Search Insert Position"],["Binary Search","First and Last Position"],["Binary Search","Search in Rotated Sorted Array"],["Binary Search","Find Minimum in Rotated Sorted Array"],["Binary Search","Peak Index in a Mountain Array"],["Binary Search","Koko Eating Bananas"],
  ["Linked List","Reverse Linked List"],["Linked List","Middle of the Linked List"],["Linked List","Linked List Cycle"],["Linked List","Merge Two Sorted Lists"],["Linked List","Remove Nth Node From End"],["Linked List","Intersection of Two Linked Lists"],["Linked List","Palindrome Linked List"],["Linked List","Add Two Numbers"],
  ["Stack/Queue","Valid Parentheses"],["Stack/Queue","Min Stack"],["Stack/Queue","Evaluate Reverse Polish Notation"],["Stack/Queue","Daily Temperatures"],["Stack/Queue","Next Greater Element I"],["Stack/Queue","Implement Queue using Stacks"],["Stack/Queue","Largest Rectangle in Histogram"],
  ["Heap","Kth Largest Element in an Array"],["Heap","Top K Frequent Elements"],["Heap","K Closest Points to Origin"],["Heap","Merge K Sorted Lists"],["Heap","Find Median from Data Stream"],["Heap","Last Stone Weight"],
  ["Trees","Maximum Depth of Binary Tree"],["Trees","Invert Binary Tree"],["Trees","Same Tree"],["Trees","Symmetric Tree"],["Trees","Binary Tree Level Order Traversal"],["Trees","Diameter of Binary Tree"],["Trees","Balanced Binary Tree"],["Trees","Lowest Common Ancestor of a Binary Tree"],["Trees","Binary Tree Right Side View"],
  ["BST","Search in a Binary Search Tree"],["BST","Validate Binary Search Tree"],["BST","Insert into a Binary Search Tree"],["BST","Lowest Common Ancestor of a BST"],["BST","Kth Smallest Element in a BST"],
  ["Graphs","Find if Path Exists in Graph"],["Graphs","Number of Islands"],["Graphs","Clone Graph"],["Graphs","Flood Fill"],["Graphs","Rotting Oranges"],["Graphs","Course Schedule"],["Graphs","Course Schedule II"],["Graphs","Number of Connected Components"],["Graphs","Network Delay Time"],["Graphs","Pacific Atlantic Water Flow"],["Graphs","Word Ladder"],
  ["DP","Climbing Stairs"],["DP","House Robber"],["DP","House Robber II"],["DP","Coin Change"],["DP","Partition Equal Subset Sum"],["DP","0/1 Knapsack"],["DP","Target Sum"],["DP","Unique Paths"],["DP","Minimum Path Sum"],["DP","Longest Common Subsequence"],["DP","Longest Increasing Subsequence"],["DP","Word Break"],
  ["Recursion/Backtracking","Subsets"],["Recursion/Backtracking","Permutations"],["Recursion/Backtracking","Combination Sum"],["Recursion/Backtracking","Letter Combinations of a Phone Number"],["Recursion/Backtracking","N-Queens"],["Recursion/Backtracking","Generate Parentheses"]
] as const;

export const dsaProblems = dsaSeed.map(([topic, title], i) => ({ id:`p${String(i+1).padStart(3,"0")}`, topic, title, platform:"LeetCode", difficulty: i % 9 === 0 ? "Hard" : i % 3 === 0 ? "Medium" : "Easy", slug:title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"") }));

export const sqlProblems = [
  "Second Highest Salary","Nth Highest Salary","Duplicate Emails","Employees Earning More Than Their Managers","Department Highest Salary","Top Three Salaries per Department","Customers Who Never Order","Combine Two Tables","Rising Temperature","Consecutive Numbers","Employees With No Manager","Delete Duplicate Emails","Average Selling Price","Managers With at Least 5 Direct Reports","Department Top Three Salaries","Running Total by Date","Rank Employees by Salary","Monthly Transaction Summary","Users Active for 3 Consecutive Days","7 Day Rolling Average","Customers with More than One Order","Latest Order per Customer","Products Never Ordered","Duplicate Rows by Key","Median Salary by Department"
].map((title,i)=>({id:`sql${i+1}`,topic:"SQL",title,difficulty:i%5===0?"Hard":i%2===0?"Medium":"Easy"}));

export const interviewQuestions = [
  ...[
    "Tell me about yourself.","Walk me through your resume.","Why Computer Science / AI & Data Science?","Why Infosys?","What do you know about Infosys?","Why should we hire you?","What are your strengths?","What is your weakness?","Where do you see yourself in 5 years?","Are you comfortable relocating?","Tell me about a conflict you faced.","Tell me about a failure and what you learned.","Tell me about a difficult project.","Are you comfortable learning new technologies?","Do you have any questions for us?"
  ].map((title,i)=>({id:`hr${i+1}`,category:"HR",title})),
  ...[
    "What is OOP?","Explain the four pillars of OOP.","Encapsulation vs abstraction.","Method overloading vs overriding.","Interface vs abstract class.","What is inheritance?","Why doesn't Java support multiple class inheritance?","What is a constructor?","this vs super.","What does static mean?","What does final mean?","Compile-time vs runtime polymorphism.","Class vs object.","Composition vs inheritance.","Access modifiers in Java."
  ].map((title,i)=>({id:`oop${i+1}`,category:"OOP",title})),
  ...[
    "DBMS vs RDBMS.","Explain primary, foreign, candidate and super keys.","What is normalization?","Explain 1NF, 2NF and 3NF.","What is BCNF?","What are functional dependencies?","Explain ACID properties.","What is a transaction?","What is an index?","Clustered vs non-clustered index.","DELETE vs TRUNCATE vs DROP.","What is a view?","What is a trigger?","What is a stored procedure?","SQL vs NoSQL."
  ].map((title,i)=>({id:`db${i+1}`,category:"DBMS",title})),
  ...[
    "Process vs thread.","What are process states?","What is context switching?","What is deadlock?","Four necessary conditions for deadlock.","Paging vs segmentation.","What is virtual memory?","What is a page fault?","What is thrashing?","Explain FCFS, SJF, Round Robin.","Semaphore vs mutex.","What is a race condition?","Kernel mode vs user mode.","What happens when a process is created?"
  ].map((title,i)=>({id:`os${i+1}`,category:"OS",title})),
  ...[
    "Explain OSI layers.","Explain TCP/IP model.","TCP vs UDP.","HTTP vs HTTPS.","What is DNS?","What is DHCP?","IP address vs MAC address.","Router vs switch vs hub.","What is ARP?","What happens when you type a URL?","What is TLS?","IPv4 vs IPv6.","What is a firewall?"
  ].map((title,i)=>({id:`cn${i+1}`,category:"CN",title})),
  ...[
    "AI vs ML.","ML vs Deep Learning.","Supervised vs unsupervised learning.","Classification vs regression.","What is overfitting?","What is underfitting?","Explain bias-variance tradeoff.","What is cross-validation?","Precision vs recall.","Why use F1 score?","Explain confusion matrix.","Linear vs logistic regression.","Decision tree vs random forest.","What is XGBoost?","What is K-Means?","What is PCA?","What is regularization?","What is gradient descent?","What is an embedding?","What is RAG?","What is a vector database?","Fine-tuning vs RAG.","What is an LLM?"
  ].map((title,i)=>({id:`ml${i+1}`,category:"AI/ML",title})),
  ...[
    "Explain your ML project's problem statement.","Why did you choose this dataset?","How did you handle missing values?","How did you handle categorical variables?","Why did you choose the model?","How did you evaluate the model?","How did you handle class imbalance?","How did you prevent overfitting?","Explain the end-to-end architecture.","How does the API connect to the frontend?","What happens when the prediction button is clicked?","How did you deploy it?","What was your biggest project challenge?","What would you improve with more time?","Explain your RAG pipeline end-to-end.","Why chunk documents?","How do embeddings work?","How do you reduce RAG hallucinations?"
  ].map((title,i)=>({id:`proj${i+1}`,category:"Projects",title}))
];

export const aptitudeTopics = [
  "Percentages","Profit & Loss","Ratio & Proportion","Averages","Time & Work","Time-Speed-Distance","Probability","Permutation & Combination","Number System","LCM / HCF","Ages","Mixtures","Simple Interest","Compound Interest","Data Interpretation","Coding-Decoding","Blood Relations","Directions","Series","Syllogism","Seating Arrangement","Puzzles","Statement & Conclusion","Data Sufficiency","Reading Comprehension","Sentence Completion","Para Jumbles","Grammar","Synonyms & Antonyms","Error Detection"
];
