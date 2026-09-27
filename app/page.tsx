"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, CSSProperties, ReactNode } from "react";
import { BarChart3, BookOpen, Brain, BriefcaseBusiness, CheckCircle2, ChevronRight, CircleHelp, Code2, Database, Download, Flame, Gauge, GraduationCap, LayoutDashboard, ListChecks, Menu, MessageSquareText, RefreshCcw, Search, Settings2, Sparkles, Target, Trophy, Upload, X } from "lucide-react";
import { aptitudeTopics, dsaProblems, interviewQuestions, phases, roadmapTasks, sqlProblems } from "@/lib/data";

type View = "overview"|"roadmap"|"dsa"|"sql"|"core"|"ai"|"projects"|"interview";

type ProgressState = Record<string, boolean>;

const STORAGE = "infosys-prep-progress-v1";
const START = new Date("2026-10-01T00:00:00+05:30");
const END = new Date("2027-09-30T23:59:59+05:30");

const nav: {id:View;label:string;icon:ReactNode;count?:number}[] = [
  {id:"overview",label:"Dashboard",icon:<LayoutDashboard size={18}/>},
  {id:"roadmap",label:"Roadmap",icon:<Target size={18}/>,count: roadmapTasks.length},
  {id:"dsa",label:"DSA Problem Bank",icon:<Code2 size={18}/>,count:dsaProblems.length},
  {id:"sql",label:"SQL Lab",icon:<Database size={18}/>,count:sqlProblems.length},
  {id:"core",label:"Core CS",icon:<BookOpen size={18}/>,count:57},
  {id:"ai",label:"AI / ML",icon:<Brain size={18}/>,count:23},
  {id:"projects",label:"Projects",icon:<BriefcaseBusiness size={18}/>,count:18},
  {id:"interview",label:"Interview Bank",icon:<MessageSquareText size={18}/>,count:interviewQuestions.length},
];

function cls(...x:(string|false|undefined)[]){return x.filter(Boolean).join(" ");}

export default function Home(){
  const [view,setView] = useState<View>("overview");
  const [progress,setProgress] = useState<ProgressState>({});
  const [loaded,setLoaded] = useState(false);
  const [sidebar,setSidebar] = useState(true);
  const [query,setQuery] = useState("");
  const [phaseFilter,setPhaseFilter] = useState<number | "all">("all");

  useEffect(()=>{
    try { const saved = localStorage.getItem(STORAGE); if(saved) setProgress(JSON.parse(saved)); } catch {}
    setLoaded(true);
  },[]);
  useEffect(()=>{ if(loaded) localStorage.setItem(STORAGE, JSON.stringify(progress)); },[progress,loaded]);

  const toggle = (id:string)=>setProgress(p=>({...p,[id]:!p[id]}));
  const setMany = (ids:string[], value:boolean)=>setProgress(p=>{const n={...p}; ids.forEach(id=>n[id]=value); return n;});
  const reset = ()=>{ if(confirm("Reset all progress? This cannot be undone.")) setProgress({}); };

  const totalTracked = roadmapTasks.length + dsaProblems.length + sqlProblems.length + interviewQuestions.length;
  const doneTracked = [...roadmapTasks.map(x=>x.id),...dsaProblems.map(x=>x.id),...sqlProblems.map(x=>x.id),...interviewQuestions.map(x=>x.id)].filter(id=>progress[id]).length;
  const progressPct = Math.round(doneTracked/totalTracked*100);
  const phaseStats = phases.map(p=>{const ids=roadmapTasks.filter(t=>t.phase===p.id).map(t=>t.id);const done=ids.filter(id=>progress[id]).length;return {...p,done,total:ids.length,pct:ids.length?Math.round(done/ids.length*100):0};});

  const daysLeft = Math.max(0, Math.ceil((END.getTime()-new Date().getTime())/86400000));
  const daysInto = Math.min(365, Math.max(0, Math.ceil((new Date().getTime()-START.getTime())/86400000)));
  const timelinePct = Math.min(100, Math.max(0, Math.round(daysInto/365*100)));

  const searchMatch=(s:string)=>s.toLowerCase().includes(query.toLowerCase().trim());

  const nextPhase = phaseStats.find(p=>p.pct<100) ?? phaseStats[phaseStats.length-1];

  return <div className="app-shell">
    <aside className={cls("sidebar",!sidebar&&"sidebar-collapsed")}>
      <div className="brand"><div className="brand-mark"><Sparkles size={18}/></div>{sidebar&&<div><div className="brand-title">Prep OS</div><div className="brand-sub">Infosys 2027</div></div>}</div>
      <div className="side-label">WORKSPACE</div>
      <nav>{nav.map(n=><button key={n.id} className={cls("nav-item",view===n.id&&"active")} onClick={()=>setView(n.id)} title={n.label}><span className="nav-icon">{n.icon}</span>{sidebar&&<><span>{n.label}</span>{n.count!==undefined&&<span className="nav-count">{n.count}</span>}</>}</button>)}</nav>
      <div className="sidebar-bottom">
        {sidebar && <div className="goal-card"><div className="goal-icon"><Trophy size={16}/></div><div><b>Goal</b><span>Infosys 2027</span></div></div>}
        <button className="nav-item" onClick={()=>setView("overview")}><Settings2 size={18}/>{sidebar&&<span>Settings</span>}</button>
      </div>
    </aside>

    <main className="main">
      <header className="topbar">
        <div className="top-left"><button className="icon-btn" onClick={()=>setSidebar(s=>!s)}><Menu size={19}/></button><div><div className="eyebrow">PLACEMENT COMMAND CENTER</div><div className="page-title">{nav.find(n=>n.id===view)?.label ?? "Dashboard"}</div></div></div>
        <div className="top-actions"><div className="searchbox"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search problems, tasks, questions..."/></div><button className="outline-btn" onClick={()=>downloadProgress(progress)}><Download size={16}/>Export</button><label className="outline-btn upload-btn"><Upload size={16}/>Import<input type="file" accept="application/json" onChange={e=>importProgress(e,setProgress)}/></label></div>
      </header>

      {view==="overview" ? <Dashboard progress={progress} toggle={toggle} setView={setView} progressPct={progressPct} doneTracked={doneTracked} totalTracked={totalTracked} daysLeft={daysLeft} timelinePct={timelinePct} phaseStats={phaseStats} nextPhase={nextPhase} reset={reset}/> : null}
      {view==="roadmap" ? <Roadmap progress={progress} toggle={toggle} phaseFilter={phaseFilter} setPhaseFilter={setPhaseFilter} searchMatch={searchMatch} setMany={setMany}/> : null}
      {view==="dsa" ? <ProblemBank title="DSA Problem Bank" subtitle="Your core coding queue — solve, review, and re-solve weak patterns." items={dsaProblems} progress={progress} toggle={toggle} query={query} filterLabel="Topic"/> : null}
      {view==="sql" ? <ProblemBank title="SQL Lab" subtitle="Interview-focused SQL drills from basic aggregation to window functions." items={sqlProblems} progress={progress} toggle={toggle} query={query} filterLabel="Level"/> : null}
      {view==="core" ? <CoreCS progress={progress} toggle={toggle} query={query}/> : null}
      {view==="ai" ? <AIView progress={progress} toggle={toggle} query={query}/> : null}
      {view==="projects" ? <ProjectView progress={progress} toggle={toggle} query={query}/> : null}
      {view==="interview" ? <InterviewBank progress={progress} toggle={toggle} query={query}/> : null}
    </main>
  </div>
}

function Dashboard({progress,toggle,setView,progressPct,doneTracked,totalTracked,daysLeft,timelinePct,phaseStats,nextPhase,reset}:{progress:ProgressState;toggle:(id:string)=>void;setView:(v:View)=>void;progressPct:number;doneTracked:number;totalTracked:number;daysLeft:number;timelinePct:number;phaseStats:any[];nextPhase:any;reset:()=>void}){
  const todayTasks = roadmapTasks.slice(0,6);
  return <div className="content">
    <section className="hero-grid">
      <div className="hero-card">
        <div className="hero-kicker"><Flame size={15}/> ONE YEAR. ONE SYSTEM.</div>
        <h1>Build the profile that gets you<br/><span>interview-ready.</span></h1>
        <p>DSA + SQL + Core CS + AI/ML + projects + interview practice. Every checkbox rolls into your overall progress.</p>
        <div className="hero-actions"><button className="primary-btn" onClick={()=>setView("roadmap")}>Continue roadmap <ChevronRight size={16}/></button><button className="ghost-btn" onClick={()=>setView("dsa")}>Open DSA bank</button></div>
      </div>
      <div className="score-card"><div className="score-label">OVERALL TRACKER</div><div className="score-ring" style={{"--p":`${progressPct*3.6}deg`} as CSSProperties}><div><strong>{progressPct}%</strong><span>complete</span></div></div><div className="score-meta"><span>{doneTracked} done</span><span>•</span><span>{totalTracked-doneTracked} left</span></div></div>
    </section>

    <section className="stat-grid">
      <Stat icon={<Gauge size={18}/>} label="Days remaining" value={daysLeft.toString()} meta="to 30 Sep 2027"/>
      <Stat icon={<Code2 size={18}/>} label="DSA bank" value={`${dsaProblems.filter(x=>progress[x.id]).length}/${dsaProblems.length}`} meta="solve + review"/>
      <Stat icon={<Database size={18}/>} label="SQL lab" value={`${sqlProblems.filter(x=>progress[x.id]).length}/${sqlProblems.length}`} meta="write, don't memorize"/>
      <Stat icon={<MessageSquareText size={18}/>} label="Interview bank" value={`${interviewQuestions.filter(x=>progress[x.id]).length}/${interviewQuestions.length}`} meta="prepare + practice"/>
    </section>

    <section className="section-head"><div><div className="eyebrow">EXECUTION MAP</div><h2>6-phase placement plan</h2></div><button className="text-btn" onClick={()=>setView("roadmap")}>View full roadmap <ChevronRight size={15}/></button></section>
    <div className="phase-grid">{phaseStats.map(p=><button className="phase-card" key={p.id} onClick={()=>setView("roadmap")}><div className="phase-top"><span className={`phase-dot ${p.color}`}></span><span>Phase {p.id}</span><span className="phase-pct">{p.pct}%</span></div><h3>{p.name}</h3><div className="muted">{p.months}</div><p>{p.goal}</p><div className="progress-track"><div style={{width:`${p.pct}%`}}/></div><div className="phase-footer"><span>{p.done}/{p.total} roadmap tasks</span><span>{p.pct===100?"Complete":"In progress"}</span></div></button>)}</div>

    <section className="two-col">
      <div className="panel"><div className="panel-head"><div><div className="eyebrow">THIS MONTH</div><h3>October → Arrays & Strings</h3></div><span className="pill cyan">Foundation</span></div>{todayTasks.map(t=><ChecklistRow key={t.id} item={t} checked={!!progress[t.id]} onToggle={()=>toggle(t.id)}/>)}</div>
      <div className="panel"><div className="panel-head"><div><div className="eyebrow">TIMELINE</div><h3>Oct 2026 → Sep 2027</h3></div><span className="percent-badge">{timelinePct}%</span></div><div className="timeline"><div className="timeline-line"><div style={{width:`${timelinePct}%`}}/></div><div className="timeline-labels"><span>Oct 2026</span><span>Mar 2027</span><span>Sep 2027</span></div></div><div className="next-box"><div className="next-icon"><Target size={17}/></div><div><span className="muted">NEXT UNFINISHED PHASE</span><strong>{nextPhase.name}</strong><span>{nextPhase.months} · {nextPhase.goal}</span></div></div><button className="reset-btn" onClick={reset}><RefreshCcw size={14}/>Reset all progress</button></div>
    </section>
  </div>
}

function Stat({icon,label,value,meta}:{icon:ReactNode;label:string;value:string;meta:string}){return <div className="stat-card"><div className="stat-icon">{icon}</div><div><span>{label}</span><strong>{value}</strong><small>{meta}</small></div></div>}

function ChecklistRow({item,checked,onToggle}:{item: any;checked:boolean;onToggle:()=>void}){return <button className={cls("check-row",checked&&"done")} onClick={onToggle}><span className="check-box">{checked&&<CheckCircle2 size={18}/>}</span><span className="check-copy"><b>{item.title}</b><small>{item.topic} · {item.kind}</small></span><span className={cls("priority-dot",item.priority||"medium")}/></button>}

function Roadmap({progress,toggle,phaseFilter,setPhaseFilter,searchMatch,setMany}:{progress:ProgressState;toggle:(id:string)=>void;phaseFilter:number|"all";setPhaseFilter:(p:number|"all")=>void;searchMatch:(s:string)=>boolean;setMany:(ids:string[],v:boolean)=>void}){
  const filtered = roadmapTasks.filter(t=>(phaseFilter==="all"||t.phase===phaseFilter)&&searchMatch(`${t.title} ${t.topic} ${t.kind} ${t.month}`));
  return <div className="content"><div className="page-intro"><div><div className="eyebrow">ROADMAP</div><h1>Execute the plan, one checkbox at a time.</h1><p>Each task is intentionally small enough to finish and big enough to matter.</p></div><div className="mini-kpi"><strong>{roadmapTasks.filter(x=>progress[x.id]).length}/{roadmapTasks.length}</strong><span>roadmap tasks</span></div></div><div className="filter-row"><div className="segmented">{["all",1,2,3,4,5,6].map(p=><button key={String(p)} className={phaseFilter===p?"selected":""} onClick={()=>setPhaseFilter(p as any)}>{p==="all"?"All":`P${p}`}</button>)}</div><button className="outline-btn" onClick={()=>setMany(filtered.map(t=>t.id),true)}>Mark visible done</button></div><div className="roadmap-list">{filtered.map(t=><ChecklistRow key={t.id} item={t} checked={!!progress[t.id]} onToggle={()=>toggle(t.id)}/>)}</div></div>
}

function ProblemBank({title,subtitle,items,progress,toggle,query,filterLabel}:{title:string;subtitle:string;items:any[];progress:ProgressState;toggle:(id:string)=>void;query:string;filterLabel:string}){
  const topics = Array.from(new Set(items.map(x=>x.topic||x.difficulty))).slice(0,30);
  const [filter,setFilter]=useState("All");
  const visible=items.filter(i=>(filter==="All"||(i.topic||i.difficulty)===filter)&&(`${i.title} ${i.topic||""} ${i.difficulty||""}`.toLowerCase().includes(query.toLowerCase())));
  const done=items.filter(i=>progress[i.id]).length;
  return <div className="content"><div className="page-intro"><div><div className="eyebrow">PRACTICE BANK</div><h1>{title}</h1><p>{subtitle}</p></div><div className="mini-kpi"><strong>{done}/{items.length}</strong><span>completed</span></div></div><div className="filter-row"><div className="select-wrap"><span>{filterLabel}</span><select value={filter} onChange={e=>setFilter(e.target.value)}><option>All</option>{topics.map(x=><option key={x}>{x}</option>)}</select></div><div className="legend"><span className="easy">Easy</span><span className="medium">Medium</span><span className="hard">Hard</span></div></div><div className="problem-table"><div className="table-head"><span>#</span><span>Problem</span><span>{filterLabel}</span><span>Level</span><span>Status</span></div>{visible.map((p,i)=><button key={p.id} className={cls("problem-row",progress[p.id]&&"done")} onClick={()=>toggle(p.id)}><span className="num">{String(i+1).padStart(2,"0")}</span><div className="problem-name"><b>{p.title}</b>{p.platform&&<small>{p.platform}</small>}</div><span className="topic-chip">{p.topic||"SQL"}</span><span className={cls("difficulty",(p.difficulty||"Medium").toLowerCase())}>{p.difficulty||"Core"}</span><span className="status-box">{progress[p.id]?<CheckCircle2 size={18}/>:<span/>}</span></button>)}</div></div>
}

function CoreCS({progress,toggle,query}:{progress:ProgressState;toggle:(id:string)=>void;query:string}){
  const topics = [
    {name:"OOP",items:interviewQuestions.filter(x=>x.category==="OOP")},{name:"DBMS",items:interviewQuestions.filter(x=>x.category==="DBMS")},{name:"Operating Systems",items:interviewQuestions.filter(x=>x.category==="OS")},{name:"Computer Networks",items:interviewQuestions.filter(x=>x.category==="CN")},
  ];
  return <div className="content"><div className="page-intro"><div><div className="eyebrow">CORE CS</div><h1>Know the fundamentals well enough to explain them.</h1><p>Focus on interview-level clarity: definition → example → trade-off → project connection.</p></div></div><div className="topic-cards">{topics.map(t=><div className="topic-panel" key={t.name}><div className="topic-title"><h3>{t.name}</h3><span>{t.items.filter(i=>progress[i.id]).length}/{t.items.length}</span></div>{t.items.filter(i=>i.title.toLowerCase().includes(query.toLowerCase())).map(q=><ChecklistRow key={q.id} item={{title:q.title,topic:t.name,kind:"Interview Q"}} checked={!!progress[q.id]} onToggle={()=>toggle(q.id)}/>)}</div>)}</div></div>
}

function AIView({progress,toggle,query}:{progress:ProgressState;toggle:(id:string)=>void;query:string}){
  const items=interviewQuestions.filter(x=>x.category==="AI/ML").filter(x=>x.title.toLowerCase().includes(query.toLowerCase()));
  const concepts=["AI vs ML","Supervised vs unsupervised","Regression","Classification","Tree models","Random Forest","XGBoost","K-Means","PCA","Overfitting","Cross-validation","Precision / Recall / F1","Gradient descent","Neural networks","CNN","Transformers","LLMs","Embeddings","RAG","Vector DB","Fine-tuning vs RAG","Hallucination control","Model evaluation"];
  return <div className="content"><div className="page-intro"><div><div className="eyebrow">AI / DATA SCIENCE</div><h1>Use your existing advantage intelligently.</h1><p>Don't restart from zero. Refresh fundamentals, then turn them into explainable project decisions.</p></div></div><div className="ai-grid"><div className="panel"><div className="panel-head"><div><div className="eyebrow">CONCEPT CHECKLIST</div><h3>23 concepts</h3></div></div><div className="concept-grid">{concepts.map((c,i)=><button key={c} className={cls("concept-chip",progress[`concept-${i}`]&&"done")} onClick={()=>toggle(`concept-${i}`)}><span>{progress[`concept-${i}`]?<CheckCircle2 size={15}/>:<span className="empty-dot"/>}</span>{c}</button>)}</div></div><div className="panel"><div className="panel-head"><div><div className="eyebrow">INTERVIEW READY</div><h3>AI/ML questions</h3></div></div>{items.map(q=><ChecklistRow key={q.id} item={{title:q.title,topic:"AI/ML",kind:"Interview Q"}} checked={!!progress[q.id]} onToggle={()=>toggle(q.id)}/>)}</div></div></div>
}

function ProjectView({progress,toggle,query}:{progress:ProgressState;toggle:(id:string)=>void;query:string}){
  const tasks = roadmapTasks.filter(x=>["ML Project","RAG Project","GitHub"].includes(x.topic)||x.kind==="Project"||x.kind==="Portfolio").filter(x=>`${x.title} ${x.topic}`.toLowerCase().includes(query.toLowerCase()));
  const projectQuestions=interviewQuestions.filter(x=>x.category==="Projects");
  const all=[...tasks.map(t=>({id:t.id,title:t.title,topic:t.topic,kind:t.kind})),...projectQuestions.map(q=>({id:q.id,title:q.title,topic:"Project interview",kind:"Question"}))];
  return <div className="content"><div className="page-intro"><div><div className="eyebrow">PORTFOLIO</div><h1>Two serious projects. Zero hand-wavy explanations.</h1><p>Project 1: production-style ML application. Project 2: RAG / GenAI system. Both deployed, documented and interview-defensible.</p></div></div><div className="project-cards"><div className="project-card blue"><span>PROJECT 01</span><h2>ML / Data Science</h2><p>Dataset → EDA → feature engineering → model comparison → evaluation → FastAPI → frontend → deployment.</p><div className="project-bar"><span style={{width:`${Math.round(tasks.filter(t=>t.topic==="ML Project").filter(x=>progress[x.id]).length/3*100)}%`}}/></div></div><div className="project-card purple"><span>PROJECT 02</span><h2>RAG AI Assistant</h2><p>Documents → chunking → embeddings → vector search → retrieval → LLM → evaluation.</p><div className="project-bar"><span style={{width:`${Math.round(tasks.filter(t=>t.topic==="RAG Project").filter(x=>progress[x.id]).length/2*100)}%`}}/></div></div></div><div className="panel"><div className="panel-head"><div><div className="eyebrow">BUILD + DEFEND</div><h3>Project execution queue</h3></div></div>{all.map(x=><ChecklistRow key={x.id} item={x} checked={!!progress[x.id]} onToggle={()=>toggle(x.id)}/>)}</div></div>
}

function InterviewBank({progress,toggle,query}:{progress:ProgressState;toggle:(id:string)=>void;query:string}){
  const cats=Array.from(new Set(interviewQuestions.map(x=>x.category)));
  const [cat,setCat]=useState("All");
  const visible=interviewQuestions.filter(q=>(cat==="All"||q.category===cat)&&q.title.toLowerCase().includes(query.toLowerCase()));
  return <div className="content"><div className="page-intro"><div><div className="eyebrow">INTERVIEW BANK</div><h1>Questions to answer out loud.</h1><p>Check a question only after you can answer it clearly without reading notes.</p></div><div className="mini-kpi"><strong>{interviewQuestions.filter(q=>progress[q.id]).length}/{interviewQuestions.length}</strong><span>prepared</span></div></div><div className="filter-row"><div className="segmented">{["All",...cats].map(c=><button key={c} className={cat===c?"selected":""} onClick={()=>setCat(c)}>{c}</button>)}</div></div><div className="interview-list">{visible.map(q=><button key={q.id} className={cls("interview-row",progress[q.id]&&"done")} onClick={()=>toggle(q.id)}><span className="q-dot">{progress[q.id]?<CheckCircle2 size={17}/>:<CircleHelp size={17}/>}</span><span className="q-copy"><b>{q.title}</b><small>{q.category}</small></span><ChevronRight size={16} className="row-arrow"/></button>)}</div></div>
}

function downloadProgress(progress:ProgressState){
  const blob=new Blob([JSON.stringify({exportedAt:new Date().toISOString(),progress},null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download="infosys-prep-progress.json"; a.click(); URL.revokeObjectURL(url);
}

function importProgress(e:ChangeEvent<HTMLInputElement>,setProgress:(p:ProgressState)=>void){
  const f=e.target.files?.[0]; if(!f) return; const r=new FileReader(); r.onload=()=>{try{const d=JSON.parse(String(r.result));setProgress(d.progress||{});}catch{alert("Invalid progress file.")}}; r.readAsText(f);
}
