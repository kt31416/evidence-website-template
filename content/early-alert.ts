import type { SiteConfig } from './types'

export const config: SiteConfig = {
  title: "Early Alert: Evidence for the UC Davis Committee",
  framing: "Prepared for the Committee to Develop an Early Alert Program, convened by Provost Mary Croughan, February 2026. Covers what the research says about each design decision the committee faces for the Fall 2026 pilot.",
  notebooklmUrl: "PLACEHOLDER — paste your NotebookLM share link here",
  cards: [
    {
      id: "problem",
      title: "What Problem Are We Solving?",
      icon: "AlertTriangle",
      summary: "DFW rates in gateway courses are the primary equity lever at UC Davis. First-generation, Pell-eligible, and underrepresented students fail at disproportionately high rates — and most of this attrition is concentrated in the first year.",
      subcards: [
        {
          title: "DFW Rates in Gateway Courses",
          body: "D grades, Failures, and Withdrawals in Chemistry, Biology, and Math are the main mechanism through which UC Davis loses first-generation and underrepresented students. These courses function as gatekeepers to STEM majors and professional paths — failure here closes off entire trajectories."
        },
        {
          title: "The Equity Gap",
          body: "First-generation students fail gateway courses at roughly twice the rate of continuing-generation students. The disparity persists even after controlling for preparation — suggesting that institutional factors, not student ability, drive much of the gap. Early alert is an equity intervention as much as an academic one."
        },
        {
          title: "First Year Is the Critical Window",
          body: "Research consistently shows that attrition risk is highest in the first year, and that early-term performance — first exam, first few weeks — is a strong predictor of end-of-term outcomes. Interventions after Week 7 show diminishing returns. The window to act is narrow."
        },
        {
          title: "Why Now at UC Davis",
          body: "The Lagattuta pilot (4 years, Department of Psychology) demonstrated near-100% pass rates using proactive outreach to flagged students. The model has been replicated by at least one other faculty member (Munakata). The committee is charged with testing whether it generalizes across courses, disciplines, and faculty with varying levels of buy-in."
        }
      ]
    },
    {
      id: "model",
      title: "The Lagattuta Model",
      icon: "Layers",
      summary: "The Lagattuta model is not a single intervention — it is a bundle of six components, each with independent scientific support. Understanding the components separately matters because not all can be implemented at once, and some have stronger evidence than others.",
      subcards: [
        {
          title: "Trigger: D/F on First Major Exam",
          body: "Using early exam performance (Weeks 2–5) as the trigger is consistent across the literature — actionable and early enough that 5+ weeks remain to change trajectory. The trigger must come early enough to matter. If the first exam is Week 7, the assessment calendar needs redesigning before launch."
        },
        {
          title: "Personal Outreach from a Known Person",
          body: "Messages from a named faculty member or consistent TA consistently outperform automated system alerts. The relationship matters. Even a brief personal note carries more weight than an institutional notification — but only if it reads like a personal note, not like a system-generated message with a name attached."
        },
        {
          title: "Growth-Mindset Framing",
          body: "Messages must normalize struggle ('this exam is hard for many students'), communicate belief in the student ('I think you can turn this around'), and request one concrete action. Muenks et al. (2024) found that mixed growth/fixed mindset messages produce worse outcomes than no message at all — templates must be reviewed before deployment."
        },
        {
          title: "Continued Contact, Not One Touch",
          body: "Stepped outreach outperforms single-touch across the literature. A working protocol: personal email → follow-up within 5 days for non-responders → advisor contact for persistent non-responders. One message is a gesture, not an intervention. Non-responders need escalation."
        },
        {
          title: "Real Resources, Confirmed Available",
          body: "Telling a student they are struggling and having no tutoring appointments available for three weeks is worse than not alerting them. Tutoring capacity, advising availability, and office hours must be confirmed before alerts go out — not after. This is the most commonly skipped step."
        },
        {
          title: "Removing Help-Seeking Barriers",
          body: "First-generation students are least likely to self-advocate. Offering to contact support on the student's behalf — rather than asking them to reach out — removes a documented barrier. Imundo et al. (2025) found many students are unaware an early alert system exists or are uncertain how to respond; plain-language messages with a single action reduce this friction."
        }
      ]
    },
    {
      id: "evidence",
      title: "What the Research Shows",
      icon: "BookOpen",
      summary: "The peer-reviewed evidence supports each component of the Lagattuta model. Effect sizes are modest (0.1–0.3 SD in the strongest studies) but consistent — and concentrated among the students most at risk.",
      subcards: [
        {
          title: "Does Early Alert Work? The Causal Evidence",
          body: "Yes — when connected to personal human follow-up. A 2024 quasi-experimental study (Research in Higher Education, doi: 10.1007/s11162-024-09795-6) found positive causal effects on course grades when alerts triggered meaningful personal intervention. Automated alerts alone show weak or null effects. The alert is not the intervention; it is the trigger for one."
        },
        {
          title: "Faculty Personal Contact Has Lasting Effects",
          body: "Carrcell & Kurlaender (2023), conducted at UC Davis, found that personal faculty feedback in one course produced increased persistence, credit accumulation, and higher graduation rates — effects lasting well beyond the original course. Described as 'a light-touch intervention with lasting impact.' This is the peer-reviewed literature's closest test of the Lagattuta model's core mechanism."
        },
        {
          title: "Intrusive Advising Improves STEM Retention",
          body: "Proactive, advisor-initiated contact with at-risk students improved STEM retention, especially for first-generation students (2025, Journal of Education and Research in Practice). The study distinguished intrusive advising (advisor-initiated) from developmental advising (student-initiated), finding the former more effective for high-risk populations — consistent with the model's logic."
        },
        {
          title: "Growth Mindset Amplifies Effects — But Context Matters",
          body: "Yeager et al. (2019, Nature, n=12,000+) found growth mindset interventions improved grades — but only in schools where the broader environment supported struggle and improvement. Canning et al. (2019, Science Advances) found STEM faculty who believe ability is fixed have larger racial achievement gaps (p=0.011), affecting the 15,000+ students in their courses."
        },
        {
          title: "LMS Data + Advisor Outreach: RCT Evidence",
          body: "Rust & Motz (2025) ran a randomized controlled trial testing LMS-based analytics combined with proactive advisor outreach — one of the few causal studies of technology-triggered advising. They found positive effects on student outcomes. The mechanism is human follow-up; LMS data is the trigger, not the intervention."
        },
        {
          title: "What the Evidence Can't Promise",
          body: "Most studies are single-institution, before/after designs. Effect sizes are modest. Studies showing the strongest effects involve motivated volunteer faculty — effects may not generalize to faculty with lower investment. The Fall 2026 pilot is the scientific test of whether the model works at UC Davis. Design it to generate honest evidence, not to confirm a hypothesis."
        }
      ]
    },
    {
      id: "decisions",
      title: "Key Design Decisions",
      icon: "Sliders",
      summary: "Six decisions will determine whether the Fall 2026 pilot generates real evidence and real impact. Each has a research-grounded answer — and a common mistake worth naming explicitly.",
      subcards: [
        {
          title: "When to Trigger",
          body: "Weeks 2–5, on first major exam performance. Map the assessment calendar for every pilot course before launch. If the first exam is Week 7, the trigger comes too late — redesign the calendar or find an earlier signal (quiz performance, LMS engagement data). Do not launch without confirming the trigger is early enough."
        },
        {
          title: "Who Sends the Message",
          body: "Faculty email — not a system notification. Subject line matters: 'Quick note from Prof. [name]' outperforms 'Early Alert Notification.' Corwin et al. (2026) found that at-promise students are already saturated with institutional email and filter formal-sounding messages. Even a personal faculty email can get filtered if it uses institutional language, formal salutations, or is longer than a few sentences."
        },
        {
          title: "What the Message Says",
          body: "Short, personal, from a named person, referencing the course specifically, with one concrete action requested. Provide 2–3 templates — faculty should personalize, not compose from scratch. Have templates reviewed for mixed mindset signals before deployment. A message that implies ability is fixed while intending to be supportive can harm the students it intends to help (Muenks et al., 2024)."
        },
        {
          title: "What Happens After the Alert",
          body: "The alert is not the intervention — what happens next is. Use a stepped protocol: personal email → follow-up for non-responders within 5 days → advisor contact for persistent non-responders. Close the loop with faculty: when a student improves, tell the instructor. Faculty who never hear what happened stop participating."
        },
        {
          title: "Scope: How Many Courses",
          body: "Five courses with strong follow-through outperform fifteen with thin coverage. Advisor capacity is the binding constraint — do not launch in more courses than the support infrastructure can serve. Measure success by response rates and DFW outcomes, not by the number of alerts submitted."
        },
        {
          title: "Which Faculty to Start With",
          body: "Genuinely willing volunteers who understand the equity stakes — not the most available or most senior. Canning et al. (2019) found faculty who believe ability is fixed have larger racial achievement gaps. Piloting with faculty who communicate growth beliefs is not optional — it is likely the difference between outreach that helps and outreach that harms."
        }
      ]
    },
    {
      id: "guidance",
      title: "What To Do / What Not To Do",
      icon: "CheckCircle",
      summary: "Evidence-based guidance for the Fall 2026 pilot. The 'what not to do' list matters as much as the checklist — several common implementation choices actively undermine outcomes for the students the program is trying to help.",
      subcards: [
        {
          title: "Before a Single Alert Goes Out",
          body: "Map assessment calendars and confirm early triggers exist. Verify tutoring, advising, and office hours capacity for the expected volume of flagged students. Write and review 2–3 message templates with growth-mindset framing. Show faculty their own disaggregated DFW data — faculty who see that first-gen students fail at twice the rate in their own course are more motivated than faculty given abstract equity arguments."
        },
        {
          title: "Faculty Selection and Training",
          body: "Start with willing volunteers who understand the equity stakes. Train on communication, not just process — role-play the outreach conversation. Assign TAs consistently (same TA to same students all quarter). Select or train for growth mindset beliefs, not just willingness to participate. Do not include faculty who frame the program as surveillance or who are visibly skeptical."
        },
        {
          title: "During the Pilot",
          body: "Track weekly: response rates by course, faculty, and student demographic. If first-gen students respond at half the rate of continuing-gen students, the framing or channel is wrong — adjust mid-pilot. Follow up with non-responders within 5 days. Close the feedback loop with faculty after each wave of outreach."
        },
        {
          title: "Evaluation",
          body: "Define metrics before launch: DFW rate (vs. historical baseline), response rates, appointment completion rates, student experience survey. Disaggregate everything by first-gen status, race/ethnicity, and gender — aggregate results can look fine while equity gaps persist or widen. Document faculty time cost honestly in minutes per flagged student; this number determines scalability."
        },
        {
          title: "What Not To Do",
          body: "Don't use automated or system-generated messages. Don't write outreach that reads like institutional communications. Don't alert students without confirmed resources. Don't launch in more courses than infrastructure can support. Don't measure success by alert submission rates. Don't send templates with mixed mindset language. Don't assume aggregate results are good enough — check disaggregated outcomes before the Provost report."
        }
      ]
    }
  ]
}
