
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
    btn.disabled=true; btn.textContent='Sending…';
    note.className='fnote'; note.textContent='Sending your message…';
    const data={name:form.name.value.trim(), email:form.email.value.trim(), message:form.message.value.trim(), _subject:'New message from your portfolio website'};
    try{
      const r=await fetch('https://formsubmit.co/ajax/hamzarajpoot0312615@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)});
      const j=await r.json().catch(()=>({}));
      if(r.ok && (j.success===true || j.success==='true')){
        note.className='fnote ok'; note.textContent='Message sent ✓ — it is already in Hamza’s inbox. He replies fast.';
        form.reset();
        btn.disabled=false; btn.textContent='Send message';
      } else {
        note.textContent='Opening the secure send page…';
        form.submit();
      }
    }catch(err){
      note.textContent='Opening the secure send page…';
      form.submit();
    }
    btn.disabled=false; btn.textContent='Send message';
  });
})();
const cv=document.getElementById('particles'),ctx=cv.getContext('2d');let W,H,ps=[];
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;ps=Array.from({length:55},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.4,s:Math.random()*.35+.08,o:Math.random()*.5+.15}));}
size();addEventListener('resize',size);
(function loop(){ctx.clearRect(0,0,W,H);ps.forEach(p=>{p.y-=p.s;if(p.y<-4){p.y=H+4;p.x=Math.random()*W}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fillStyle=`rgba(255,110,88,${p.o})`;ctx.fill();});requestAnimationFrame(loop);})();
