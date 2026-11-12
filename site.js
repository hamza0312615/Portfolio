
// Filters: cards are static HTML, JS only shows/hides (works even if JS partially fails)
document.querySelectorAll('.fbtn').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.fbtn').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');
  const f=b.dataset.f;
  document.querySelectorAll('#grid .card').forEach(c=>{
    const show = f==='all' || (f==='live' ? c.dataset.live==='1' : c.dataset.cat===f);
    c.classList.toggle('hide',!show);
  });
}));
// 3D tilt on cards + gentle hero parallax (fine pointers only, respects reduced motion)
const finePointer = matchMedia('(pointer:fine)').matches;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if(finePointer && !reducedMotion){
  document.querySelectorAll('#grid .card').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`translateY(-6px) rotateY(${x*7}deg) rotateX(${-y*7}deg)`;
    });
    card.addEventListener('pointerleave',()=>{card.style.transform='';});
  });
  const pw=document.querySelector('.portrait-wrap');
  const hero=document.querySelector('.hero');
  if(pw&&hero){
    hero.addEventListener('pointermove',e=>{
      const x=e.clientX/innerWidth-.5, y=e.clientY/innerHeight-.5;
      pw.style.transform=`translate(${x*14}px,${y*10}px) rotateY(${x*6}deg)`;
    });
    hero.addEventListener('pointerleave',()=>{pw.style.transform='';});
  }
}
const roles=["business websites","AI agents","web apps & dashboards","AI video ads","AI health systems","Play Store games"];
let ri=0;const roleEl=document.getElementById('role');
setInterval(()=>{ri=(ri+1)%roles.length;roleEl.textContent=roles[ri];},2400);

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.num').forEach(el=>{
  const target=+el.dataset.count;let cur=0;const step=Math.max(1,Math.ceil(target/40));
  const t=setInterval(()=>{cur+=step;if(cur>=target){cur=target;clearInterval(t)}el.textContent=cur;},45);
});
// AI agent terminal: re-types its build log like a live coding agent (static log stays if JS is off)
(function(){
  const body=document.getElementById('termBody');
  if(!body) return;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce) return;
  const lines=body.innerHTML.split('\n');
  let started=false;
  function typeAll(){
    body.innerHTML='';
    let li=0;
    function nextLine(){
      if(li>=lines.length){
        body.insertAdjacentHTML('beforeend','<span class="tcursor"></span>');
        setTimeout(()=>{ if(body.isConnected) typeAll(); }, 14000);
        return;
      }
      const line=lines[li++];
      const span=document.createElement('span');
      body.appendChild(span);
      const tmp=document.createElement('div'); tmp.innerHTML=line;
      const text=tmp.textContent;
      let ci=0;
      const speed = line.includes('$ agent') ? 34 : 7;
      const t=setInterval(()=>{
        span.textContent=text.slice(0,++ci);
        if(ci>=text.length){
          clearInterval(t);
          span.innerHTML=line;
          body.insertAdjacentHTML('beforeend','\n');
          setTimeout(nextLine, line.includes('$ agent')?500:260);
        }
      }, speed);
    }
    nextLine();
  }
  const io2=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting && !started){ started=true; typeAll(); io2.disconnect(); }
  }),{threshold:.25});
  io2.observe(body);
})();
// Returned from FormSubmit after a successful send?
(function(){
  if(!/[?&]sent=1/.test(location.search)) return;
  const note=document.getElementById('fnote');
  if(note){ note.className='fnote ok'; note.textContent='Message sent ✓ — it is already in Hamza’s inbox. He replies fast.'; }
})();
// Contact form: send straight to Hamza's inbox via FormSubmit AJAX (no mail app)
(function(){
  const form=document.getElementById('cform');
  if(!form) return;
  const note=document.getElementById('fnote');
  const btn=document.getElementById('sendBtn');
  form.addEventListener('submit', async e=>{
    e.preventDefault();
    if(btn){ btn.disabled=true; btn.textContent='Sending…'; }
    note.className='fnote'; note.textContent='Sending your message…';
    const data={name:form.name.value.trim(), email:form.email.value.trim(), message:form.message.value.trim(), _subject:'New message from your portfolio website'};
    try{
      const r=await fetch('https://formsubmit.co/ajax/hamzarajpoot0312615@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)});
      const j=await r.json().catch(()=>({}));
      if(r.ok && (j.success===true || j.success==='true')){
        note.className='fnote ok'; note.textContent='Message sent ✓ — it is already in Hamza’s inbox. He replies fast.';
        form.reset();
        if(btn){ btn.disabled=false; btn.textContent='Send message'; }
      } else {
        note.textContent='Opening the secure send page…';
        form.submit();
      }
    }catch(err){
      note.textContent='Opening the secure send page…';
      form.submit();
    }
    if(btn){ btn.disabled=false; btn.textContent='Send message'; }
  });
})();
const cv=document.getElementById('particles'),ctx=cv.getContext('2d');let W,H,ps=[];
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;ps=Array.from({length:55},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.4,s:Math.random()*.35+.08,o:Math.random()*.5+.15}));}
size();addEventListener('resize',size);
(function loop(){ctx.clearRect(0,0,W,H);ps.forEach(p=>{p.y-=p.s;if(p.y<-4){p.y=H+4;p.x=Math.random()*W}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fillStyle=`rgba(255,110,88,${p.o})`;ctx.fill();});requestAnimationFrame(loop);})();

// Portfolio AI Assistant v2: real-AI answers (Gemini via /api/chat) with an instant
// built-in brain as fallback, plus the Business Enquiry Agent quote flow.
(function(){
  var fab=document.getElementById('aiFab'), panel=document.getElementById('aiChat');
  if(!fab||!panel) return;
  var msgs=document.getElementById('aiMsgs'), form=document.getElementById('aiForm'),
      input=document.getElementById('aiText'), closeBtn=document.getElementById('aiClose'),
      chips=document.getElementById('aiChips'), modeEl=document.getElementById('aiMode');
  var WA='https://wa.me/923052353337?text=Hi%20Hamza%2C%20I%20want%20a%20website%20%2F%20AI%20agent%20for%20my%20business.';
  var greeted=false, history=[], flow=null, aiLive=false;
  function scrollEnd(){ msgs.scrollTop=msgs.scrollHeight; }
  function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function fmt(s){
    var t=esc(s);
    t=t.replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>');
    t=t.replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>');
    t=t.replace(/\n/g,'<br>');
    return t;
  }
  function addMsg(html, who, raw){
    var d=document.createElement('div');
    d.className='ai-msg '+who;
    if(raw){ d.textContent=html; } else { d.innerHTML=html; }
    msgs.appendChild(d); scrollEnd(); return d;
  }
  function openChat(){
    panel.hidden=false; fab.setAttribute('aria-expanded','true');
    if(!greeted){ greeted=true;
      addMsg('Hi! 👋 I&rsquo;m Hamza&rsquo;s AI assistant. Ask me about <b>AI agents</b>, <b>websites</b>, <b>prices</b> or his <b>projects</b> &mdash; or tap <b>📋 Get a quote</b> and my Business Enquiry Agent will take your details step by step.','bot');
    }
    setTimeout(function(){ try{ input.focus(); }catch(e){} },80);
  }
  function closeChat(){ panel.hidden=true; fab.setAttribute('aria-expanded','false'); }
  fab.addEventListener('click',function(){ if(panel.hidden){ openChat(); } else { closeChat(); } });
  if(closeBtn) closeBtn.addEventListener('click',closeChat);
  document.addEventListener('keydown',function(e){ if(e.key==='Escape' && !panel.hidden) closeChat(); });

  var RULES=[
    [/whats ?app/, 'Hamza built a <b>WhatsApp Triage Bot</b> inside VisionDX Mega, his AI health platform: patients message their symptoms on WhatsApp and the bot triages them and guides them to the right care. <a href="/work/visiondx-mega">Read the case study</a>.<br><br>Want an agent connected to <b>your</b> WhatsApp? That starts at $120 &mdash; <a href="/services/ai-agents">see AI Agents</a>. Or talk to Hamza himself: <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp +92 305 2353337</a>.'],
    [/price|cost|how much|charge|fee|quote/, 'Here are the starting prices &mdash; every project gets a fixed quote in writing before it starts:<br>&bull; Business websites from <b>$80</b><br>&bull; AI agents from <b>$120</b><br>&bull; AI video ads from <b>$45</b><br>&bull; Web app / AI tool MVPs from <b>$95</b><br>Full packages: <a href="/pricing">Pricing page</a>. Or tap <b>📋 Get a quote</b> above and I will take your enquiry properly.'],
    [/agent|chat ?bot/, 'An <b>AI agent</b> does more than chat: it answers your customers instantly, 24/7, captures enquiries, takes bookings and follows up &mdash; connected to your website and WhatsApp.<br>Packages: <b>$120 / $250 / $450</b>. Hamza has <b>15 agents</b> showcased here: <a href="/agents">see all 15 agents</a> &mdash; and you are talking to one right now. 🙂'],
    [/website|web site/, 'Business websites start at <b>$80</b> (launch site), $120 for a full business website and $240 premium &mdash; most are live in 3&ndash;7 days, mobile-first, with a WhatsApp button and contact form built in. <a href="/services/business-websites">See business websites</a>.'],
    [/video|reel|tiktok|advert/, 'AI video ads start at <b>$45</b> &mdash; short-form ads for Reels, TikTok and Shorts, with script, captions and your brand colours. <a href="/services/ai-video-ads">See video ads</a> &middot; <a href="https://hamza-video-portfolio.vercel.app" target="_blank" rel="noopener">Watch his video portfolio</a>.'],
    [/web app|mvp|dashboard|ai tool/, 'Web app and AI tool MVPs start at <b>$95</b> &mdash; dashboards, booking systems, AI chat, vision and OCR features, with a working prototype in days, not months. <a href="/services/web-apps">See web apps</a>.'],
    [/start|order|hire|book|begin|get one/, 'Starting is simple:<br>1️⃣ Message Hamza on WhatsApp with your idea<br>2️⃣ Get a fixed quote in writing<br>3️⃣ He builds it and you review a live preview<br>4️⃣ Launch &mdash; you own everything<br><a href="'+WA+'" target="_blank" rel="noopener">Start on WhatsApp</a>, use the <a href="/contact">contact form</a> &mdash; or tap <b>📋 Get a quote</b> and I will take your enquiry now.'],
    [/project|portfolio|examples|built/, 'Hamza has <b>15 real projects live</b> &mdash; VisionDX Mega (AI health, Top 12 at Google AI Seekho 2026), AQUORA satellite water monitoring, a sign-language translator, AgriTwin built on NASA data, and Balloon Pop Deluxe on the Play Store. <a href="/work">See all projects</a> &middot; <a href="/agents">See his 15 agents</a>.'],
    [/game|balloon|play store|android/, '<b>Balloon Pop Deluxe</b> is Hamza&rsquo;s Android game &mdash; 200 stages across 20 zones plus 4 endless modes, built in Kotlin and published under DevTech Labs. Find it with his other builds on the <a href="/work">work page</a>.'],
    [/contact|email|phone|number|reach/, 'You can reach Hamza on <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp +92 305 2353337</a>, by email at hamzarajpoot0312615@gmail.com, or through the <a href="/contact">contact form</a> &mdash; he replies fast.'],
    [/who|about hamza/, 'Muhammad Hamza is a Computer Science student at IST Islamabad and founder of DevTech Labs. He builds websites, AI agents and apps &mdash; Top 12 finalist at Google AI Seekho 2026 and Top 10 at the GDG IST Innovators Challenge. <a href="/about">More about Hamza</a>.'],
    [/how long|delivery|timeline|how fast/, 'Most business websites take <b>3&ndash;7 days</b>. AI agents are usually live within a week. Bigger apps get an exact timeline in your written quote before anything starts.'],
    [/^(hi|hello|hey|salam|aoa)\b/, 'Hello! 👋 Ask me about <b>prices</b>, <b>AI agents</b>, <b>websites</b>, <b>video ads</b> or Hamza&rsquo;s <b>projects</b> &mdash; or tap <b>📋 Get a quote</b>.'],
    [/thank|shukria/, 'You&rsquo;re welcome! If you like, I can show you <a href="/pricing">prices</a> &mdash; or connect you with Hamza on <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp</a>.']
  ];
  var FALLBACK='I can answer questions about <b>prices</b>, <b>AI agents</b>, <b>websites</b>, <b>video ads</b>, <b>projects</b> and <b>how to start</b>. Try one of those &mdash; or message Hamza directly on <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp</a> and he will help you personally.';
  function ruleAnswer(q){
    var s=' '+q.toLowerCase()+' ';
    for(var i=0;i<RULES.length;i++){ if(RULES[i][0].test(s)) return RULES[i][1]; }
    return FALLBACK;
  }
  function askAI(q){
    var ctrl=('AbortController' in window)?new AbortController():null;
    var to=ctrl?setTimeout(function(){ ctrl.abort(); },12000):null;
    return fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},signal:ctrl?ctrl.signal:undefined,body:JSON.stringify({message:q,history:history})})
      .then(function(r){ if(to)clearTimeout(to); if(!r.ok) throw new Error('api'); return r.json(); })
      .then(function(j){
        if(!j||!j.reply) throw new Error('empty');
        history.push({role:'user',text:q}); history.push({role:'model',text:j.reply});
        if(history.length>12) history=history.slice(-12);
        if(!aiLive){ aiLive=true; if(modeEl) modeEl.textContent=' · Real-AI mode: ON ✓'; }
        return fmt(j.reply);
      })
      .catch(function(){ if(to)clearTimeout(to); return null; });
  }
  function aiRespond(q){
    var t=addMsg('Typing&hellip;','bot typing');
    askAI(q).then(function(ai){
      t.classList.remove('typing');
      t.innerHTML = ai || ruleAnswer(q);
      scrollEnd();
    });
  }

  // ---- Business Enquiry Agent: guided quote flow ----
  var STEPS=[
    {key:'service', prompt:'Perfect &mdash; let&rsquo;s build your enquiry. <b>What do you need?</b> Tap one:', options:['Website','AI agent','Video ad','Web app / AI tool','Not sure yet']},
    {key:'business', prompt:'What kind of <b>business</b> is it? (e.g. restaurant, clinic, school, shop, services&hellip;)'},
    {key:'name', prompt:'And your <b>name</b>?'},
    {key:'contact', prompt:'Last one: the best way for Hamza to reach you &mdash; a <b>WhatsApp number</b> or an <b>email</b>?'}
  ];
  var PRICES={'Website':'from $80','AI agent':'from $120','Video ad':'from $45','Web app / AI tool':'from $95','Not sure yet':'Hamza will advise the best fit and price'};
  function renderOpts(list){
    var box=document.createElement('div'); box.className='ai-opts';
    list.forEach(function(label){
      var b=document.createElement('button'); b.type='button'; b.textContent=label;
      b.addEventListener('click',function(){ box.remove(); addMsg(label,'user',true); flowNext(label); });
      box.appendChild(b);
    });
    msgs.appendChild(box); scrollEnd();
  }
  function askStep(){
    var st=STEPS[flow.i];
    addMsg(st.prompt,'bot');
    if(st.options) renderOpts(st.options);
  }
  function startFlow(){
    if(flow) return;
    flow={i:0,data:{}};
    addMsg('📋 <b>Business Enquiry Agent</b> &mdash; 4 quick questions, then your enquiry goes straight to Hamza. Type <b>cancel</b> anytime to stop.','bot');
    askStep();
  }
  function flowNext(text){
    if(/^cancel$/i.test(text.trim())){ flow=null; addMsg('No problem &mdash; enquiry cancelled. Ask me anything else, or tap 📋 Get a quote when you are ready.','bot'); return; }
    var st=STEPS[flow.i];
    flow.data[st.key]=text;
    flow.i++;
    if(flow.i<STEPS.length){ askStep(); return; }
    var d=flow.data; flow=null;
    var summary='New enquiry from your portfolio website:\n• Need: '+d.service+'\n• Business: '+d.business+'\n• Name: '+d.name+'\n• Contact: '+d.contact;
    var link='https://wa.me/923052353337?text='+encodeURIComponent(summary);
    addMsg('✅ <b>Your enquiry is ready:</b><br>&bull; Need: <b>'+esc(d.service)+'</b> ('+PRICES[d.service]+')<br>&bull; Business: '+esc(d.business)+'<br>&bull; Name: '+esc(d.name)+'<br>&bull; Contact: '+esc(d.contact)+'<br><br><a href="'+link+'" target="_blank" rel="noopener"><b>📲 Send this enquiry to Hamza on WhatsApp</b></a><br>He replies personally with a fixed quote in writing &mdash; no pressure, no hidden fees.','bot');
  }

  document.querySelectorAll('.open-ai').forEach(function(b){
    b.addEventListener('click',function(){ openChat(); if(b.dataset.start==='quote'){ setTimeout(startFlow,250); } });
  });
  if(form) form.addEventListener('submit',function(e){
    e.preventDefault();
    var v=input.value.trim(); if(!v) return;
    input.value=''; addMsg(v,'user',true);
    if(flow){ flowNext(v); } else { aiRespond(v); }
  });
  if(chips) chips.querySelectorAll('button').forEach(function(b){
    b.addEventListener('click',function(){
      if(b.dataset.flow==='quote'){ startFlow(); return; }
      var q=b.dataset.q||b.textContent;
      addMsg(q,'user',true);
      if(flow){ flowNext(q); } else { aiRespond(q); }
    });
  });
  window.openAiChat=openChat;
  var mAsk=/[?&]ask=(1|quote)/.exec(location.search);
  if(mAsk){ openChat(); if(mAsk[1]==='quote'){ setTimeout(startFlow,400); } }
})();
