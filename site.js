
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

// Portfolio AI Assistant: instant answers about services, prices and projects
(function(){
  var fab=document.getElementById('aiFab'), panel=document.getElementById('aiChat');
  if(!fab||!panel) return;
  var msgs=document.getElementById('aiMsgs'), form=document.getElementById('aiForm'),
      input=document.getElementById('aiText'), closeBtn=document.getElementById('aiClose'),
      chips=document.getElementById('aiChips');
  var WA='https://wa.me/923052353337?text=Hi%20Hamza%2C%20I%20want%20a%20website%20%2F%20AI%20agent%20for%20my%20business.';
  var greeted=false;
  function scrollEnd(){ msgs.scrollTop=msgs.scrollHeight; }
  function addMsg(html, who){
    var d=document.createElement('div');
    d.className='ai-msg '+who;
    if(who==='user'){ d.textContent=html; } else { d.innerHTML=html; }
    msgs.appendChild(d); scrollEnd(); return d;
  }
  function openChat(){
    panel.hidden=false; fab.setAttribute('aria-expanded','true');
    if(!greeted){ greeted=true;
      addMsg('Hi! 👋 I&rsquo;m Hamza&rsquo;s AI assistant. Ask me about <b>AI agents</b>, <b>websites</b>, <b>prices</b> or his <b>projects</b> &mdash; or tap a button below.','bot');
    }
    setTimeout(function(){ try{ input.focus(); }catch(e){} },80);
  }
  function closeChat(){ panel.hidden=true; fab.setAttribute('aria-expanded','false'); }
  fab.addEventListener('click',function(){ if(panel.hidden){ openChat(); } else { closeChat(); } });
  if(closeBtn) closeBtn.addEventListener('click',closeChat);
  document.querySelectorAll('.open-ai').forEach(function(b){ b.addEventListener('click',openChat); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape' && !panel.hidden) closeChat(); });
  var RULES=[
    [/whats ?app/, 'Hamza built a <b>WhatsApp Triage Bot</b> inside VisionDX Mega, his AI health platform: patients message their symptoms on WhatsApp and the bot triages them and guides them to the right care. <a href="/work/visiondx-mega">Read the case study</a>.<br><br>Want an agent connected to <b>your</b> WhatsApp? That starts at $120 &mdash; <a href="/services/ai-agents">see AI Agents</a>. Or talk to Hamza himself: <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp +92 305 2353337</a>.'],
    [/price|cost|how much|charge|fee|quote/, 'Here are the starting prices &mdash; every project gets a fixed quote in writing before it starts:<br>&bull; Business websites from <b>$80</b><br>&bull; AI agents from <b>$120</b><br>&bull; AI video ads from <b>$45</b><br>&bull; Web app / AI tool MVPs from <b>$95</b><br>Full packages: <a href="/pricing">Pricing page</a>.'],
    [/agent|chat ?bot/, 'An <b>AI agent</b> does more than chat: it answers your customers instantly, 24/7, captures enquiries, takes bookings and follows up &mdash; connected to your website and WhatsApp.<br>Packages: <b>$120 / $250 / $450</b>. <a href="/services/ai-agents">Details &amp; pricing</a> &mdash; and you are talking to one right now: I am Hamza&rsquo;s assistant, live on this page. 🙂'],
    [/website|web site/, 'Business websites start at <b>$80</b> (launch site), $120 for a full business website and $240 premium &mdash; most are live in 3&ndash;7 days, mobile-first, with a WhatsApp button and contact form built in. <a href="/services/business-websites">See business websites</a>.'],
    [/video|reel|tiktok|advert/, 'AI video ads start at <b>$45</b> &mdash; short-form ads for Reels, TikTok and Shorts, with script, captions and your brand colours. <a href="/services/ai-video-ads">See video ads</a> &middot; <a href="https://hamza-video-portfolio.vercel.app" target="_blank" rel="noopener">Watch his video portfolio</a>.'],
    [/web app|mvp|dashboard|ai tool/, 'Web app and AI tool MVPs start at <b>$95</b> &mdash; dashboards, booking systems, AI chat, vision and OCR features, with a working prototype in days, not months. <a href="/services/web-apps">See web apps</a>.'],
    [/start|order|hire|book|begin|get one/, 'Starting is simple:<br>1️⃣ Message Hamza on WhatsApp with your idea<br>2️⃣ Get a fixed quote in writing<br>3️⃣ He builds it and you review a live preview<br>4️⃣ Launch &mdash; you own everything<br><a href="'+WA+'" target="_blank" rel="noopener">Start on WhatsApp</a> or use the <a href="/contact">contact form</a>.'],
    [/project|portfolio|examples|built/, 'Hamza has <b>15 real projects live</b> &mdash; VisionDX Mega (AI health, Top 12 at Google AI Seekho 2026), AQUORA satellite water monitoring, a sign-language translator, AgriTwin built on NASA data, and Balloon Pop Deluxe on the Play Store. <a href="/work">See all projects</a>.'],
    [/game|balloon|play store|android/, '<b>Balloon Pop Deluxe</b> is Hamza&rsquo;s Android game &mdash; 200 stages across 20 zones plus 4 endless modes, built in Kotlin and published under DevTech Labs. Find it with his other builds on the <a href="/work">work page</a>.'],
    [/contact|email|phone|number|reach/, 'You can reach Hamza on <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp +92 305 2353337</a>, by email at hamzarajpoot0312615@gmail.com, or through the <a href="/contact">contact form</a> &mdash; he replies fast.'],
    [/who|about hamza/, 'Muhammad Hamza is a Computer Science student at IST Islamabad and founder of DevTech Labs. He builds websites, AI agents and apps &mdash; Top 12 finalist at Google AI Seekho 2026 and Top 10 at the GDG IST Innovators Challenge. <a href="/about">More about Hamza</a>.'],
    [/how long|delivery|timeline|how fast/, 'Most business websites take <b>3&ndash;7 days</b>. AI agents are usually live within a week. Bigger apps get an exact timeline in your written quote before anything starts.'],
    [/^(hi|hello|hey|salam|aoa)\b/, 'Hello! 👋 Ask me about <b>prices</b>, <b>AI agents</b>, <b>websites</b>, <b>video ads</b> or Hamza&rsquo;s <b>projects</b> &mdash; or tap a button below.'],
    [/thank|shukria/, 'You&rsquo;re welcome! If you like, I can show you <a href="/pricing">prices</a> &mdash; or connect you with Hamza on <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp</a>.']
  ];
  var FALLBACK='I can answer questions about <b>prices</b>, <b>AI agents</b>, <b>websites</b>, <b>video ads</b>, <b>projects</b> and <b>how to start</b>. Try one of those &mdash; or message Hamza directly on <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp</a> and he will help you personally.';
  function answer(q){
    var s=' '+q.toLowerCase()+' ';
    for(var i=0;i<RULES.length;i++){ if(RULES[i][0].test(s)) return RULES[i][1]; }
    return FALLBACK;
  }
  function respond(q){
    if(!q) return;
    addMsg(q,'user');
    var t=addMsg('Typing&hellip;','bot typing');
    setTimeout(function(){ t.classList.remove('typing'); t.innerHTML=answer(q); scrollEnd(); }, 550+Math.random()*400);
  }
  if(form) form.addEventListener('submit',function(e){ e.preventDefault(); var v=input.value.trim(); input.value=''; respond(v); });
  if(chips) chips.querySelectorAll('button').forEach(function(b){ b.addEventListener('click',function(){ respond(b.dataset.q||b.textContent); }); });
  window.openAiChat=openChat;
})();
