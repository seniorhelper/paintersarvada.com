/* Painting Arvada - Ramsey, your painting guide */
(function () {
  "use strict";
  var TEL = "+17209124676", DISP = "720-912-4676";

  /* ---------- Ramsey artwork: a retro hotline phone with a painter's cap ---------- */
  function ram(extra) {
    return '<svg class="' + (extra || '') + '" viewBox="0 0 260 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ramsey, the Bighorn Painting ram">' +
      '<defs><linearGradient id="rmCoat" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a1856a"/><stop offset="1" stop-color="#7d6450"/></linearGradient>' +
      '<linearGradient id="rmHorn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e4d4b4"/><stop offset="1" stop-color="#b59a73"/></linearGradient>' +
      '<linearGradient id="rmCap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#243039"/><stop offset="1" stop-color="#132a19"/></linearGradient></defs>' +
      /* paint can */
      '<path d="M16 216 h56 l-6 68 h-44z" fill="#dfe3e8" stroke="#b9bdc2" stroke-width="3"/>' +
      '<rect x="14" y="208" width="60" height="11" rx="4" fill="#b9bdc2"/>' +
      '<rect x="26" y="234" width="36" height="18" rx="4" fill="#243039"/>' +
      '<text x="44" y="247" font-family="Arial,Helvetica,sans-serif" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">PAINT</text>' +
      /* body */
      '<ellipse cx="150" cy="232" rx="58" ry="46" fill="url(#rmCoat)"/>' +
      '<ellipse cx="150" cy="238" rx="44" ry="34" fill="#c3ac92" opacity=".55"/>' +
      '<rect x="116" y="258" width="20" height="36" rx="10" fill="#6b5543"/>' +
      '<rect x="160" y="258" width="20" height="36" rx="10" fill="#6b5543"/>' +
      /* horns, the signature */
      '<path class="rm-horn" d="M104 132 q-40 -4 -42 32 q-2 34 30 36 q26 2 28 -22 q2 -20 -16 -22 q-14 -2 -16 12" fill="none" stroke="url(#rmHorn)" stroke-width="17" stroke-linecap="round"/>' +
      '<path d="M196 132 q40 -4 42 32 q2 34 -30 36 q-26 2 -28 -22 q-2 -20 16 -22 q14 -2 16 12" fill="none" stroke="url(#rmHorn)" stroke-width="17" stroke-linecap="round"/>' +
      /* head */
      '<ellipse cx="150" cy="150" rx="44" ry="48" fill="url(#rmCoat)"/>' +
      '<ellipse cx="150" cy="176" rx="24" ry="22" fill="#e9e1d5"/>' +
      '<ellipse cx="150" cy="172" rx="9" ry="7" fill="#4a3a2c"/>' +
      '<path d="M150 180 q-10 10 -18 3" stroke="#4a3a2c" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M150 180 q10 10 18 3" stroke="#4a3a2c" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<circle cx="134" cy="148" r="6" fill="#2b2118"/><circle cx="136" cy="146" r="2" fill="#fff"/>' +
      '<circle cx="166" cy="148" r="6" fill="#2b2118"/><circle cx="168" cy="146" r="2" fill="#fff"/>' +
      /* painter cap between the horns */
      '<path d="M110 124 a42 30 0 0 1 80 0z" fill="url(#rmCap)"/>' +
      '<path d="M184 120 h26 a6 6 0 0 1 0 13 h-26z" fill="#243039"/>' +
      '<rect x="126" y="108" width="48" height="15" rx="4" fill="#f3c48a"/>' +
      '<text x="150" y="120" font-family="Arial,Helvetica,sans-serif" font-size="9" font-weight="bold" fill="#132a19" text-anchor="middle">BIGHORN</text>' +
      /* brush */
      '<rect x="198" y="230" width="10" height="56" rx="5" fill="#c98b3a" transform="rotate(12 203 258)"/>' +
      '<rect x="192" y="280" width="22" height="13" rx="3" fill="#b9bdc2" transform="rotate(12 203 286)"/>' +
      '<rect x="190" y="290" width="25" height="18" rx="3" fill="#243039" transform="rotate(12 203 298)"/>' +
      /* mountain mark */
      '<g class="rm-steam" fill="none" stroke="#f3c48a" stroke-width="5" stroke-linecap="round">' +
      '<path d="M222 118 q10 -14 8 -30"/><path d="M238 128 q14 -18 12 -40"/></g>' +
      '</svg>';
  }

  var css = document.createElement('style');
  css.textContent = [
    '.rm-launch{position:fixed;right:16px;bottom:16px;z-index:980;display:flex;flex-direction:column;align-items:flex-end;gap:4px}',
    '.rm-btn{width:148px;height:170px;background:none;border:0;padding:0;cursor:pointer;filter:drop-shadow(0 10px 20px rgba(7,51,111,.32));transition:transform .2s}',
    '.rm-btn:hover{transform:translateY(-4px) rotate(-2deg)}',
    '.rm-btn svg{width:100%;height:100%;display:block}',
    '.rm-horn{transform-origin:150px 150px;animation:rmnod 5s ease-in-out infinite}',
    '.rm-steam{opacity:0;animation:rmsteam 5s ease-in-out infinite}',
    '',
    '@keyframes rmnod{0%,70%,100%{transform:rotate(0)}78%{transform:rotate(-4deg) translateY(2px)}86%{transform:rotate(3deg)}}',
    '@keyframes rmtail{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(14deg)}}',
    '@keyframes rmbreath{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.35)}}',
    '.rm-bark{opacity:0;animation:rmsteam 4.6s ease-in-out infinite}',
    '@keyframes rmsteam{0%,70%,100%{opacity:0}76%{opacity:1}86%{opacity:.4}}',
    '.rm-led{animation:rmled 2.2s ease-in-out infinite}',
    '@keyframes rmled{0%,100%{opacity:1}50%{opacity:.35}}',
    '.rm-cord{stroke-dasharray:6 10;animation:rmcord 2.4s linear infinite}',
    '@keyframes rmcord{to{stroke-dashoffset:-32}}',
    '.rm-tip{background:#fff;color:#161e24;border:2px solid #243039;border-radius:14px 14px 4px 14px;padding:10px 30px 10px 13px;font:700 .92rem/1.3 Inter,system-ui,sans-serif;max-width:238px;box-shadow:0 10px 26px rgba(7,51,111,.2);position:relative;margin-right:22px;cursor:pointer}',
    '.rm-tip button{position:absolute;top:3px;right:5px;border:0;background:none;font-size:1.05rem;color:#5d6b7e;cursor:pointer;line-height:1}',
    '.rm-dock{position:fixed;right:0;top:44%;transform:translateY(-50%);z-index:975;display:flex;flex-direction:column;gap:8px;align-items:flex-end}',
    '.rm-dock button{display:flex;align-items:center;gap:9px;background:#161e24;color:#fff;border:0;border-radius:12px 0 0 12px;padding:12px 14px 12px 12px;font:700 .86rem Inter,system-ui,sans-serif;cursor:pointer;box-shadow:-4px 6px 18px rgba(7,51,111,.26)}',
    '.rm-dock button.alt{background:#a8500c}',
    '.rm-dock button:hover{filter:brightness(1.1);padding-right:18px}',
    '.rm-dock .mini{width:30px;height:34px;flex-shrink:0}',
    '.rm-dock .mini svg{width:100%;height:100%}',
    '.rm-panel{position:fixed;right:16px;bottom:16px;width:400px;max-width:calc(100vw - 24px);height:646px;max-height:calc(100vh - 110px);background:#fff;border:1px solid #dce3ec;border-radius:16px;box-shadow:0 28px 72px rgba(7,51,111,.32);z-index:1000;display:flex;flex-direction:column;overflow:hidden}',
    '.rm-head{background:linear-gradient(135deg,#161e24,#0b5ed7);color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px}',
    '.rm-head .av{width:46px;height:46px;border-radius:14px;background:#fff;display:grid;place-items:center;overflow:hidden;flex-shrink:0}',
    '.rm-head .av svg{width:42px;height:auto}',
    '.rm-head b{font:700 1.02rem Inter,system-ui,sans-serif;display:block}',
    '.rm-head i{font-style:normal;font-size:.76rem;color:rgba(255,255,255,.82);display:flex;align-items:center;gap:6px}',
    '.rm-head i::before{content:"";width:8px;height:8px;border-radius:50%;background:#2ee07a;box-shadow:0 0 0 0 rgba(46,224,122,.7);animation:rmled 2.2s ease-in-out infinite}',
    '.rm-head .call{margin-left:auto;background:#ffc233;color:#3a2b00;border:0;border-radius:8px;padding:8px 10px;font:700 .82rem Inter,system-ui,sans-serif;text-decoration:none}',
    '.rm-head .x{background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.4);color:#fff;border-radius:8px;padding:6px 9px;cursor:pointer;font-weight:700}',
    '.rm-tape{height:5px;background:linear-gradient(90deg,#a8500c,#ffc233,#0f7e74,#0b5ed7);}',
    '.rm-prog{height:4px;background:#e7edf5}.rm-prog i{display:block;height:100%;width:0;background:#a8500c;transition:width .35s}',
    '.rm-body{flex:1;overflow-y:auto;padding:14px;background:#faf7f2;font:1rem/1.55 Inter,system-ui,sans-serif;color:#161e24}',
    '.rm-msg{max-width:88%;padding:10px 13px;border-radius:14px;margin-bottom:10px;font-size:.95rem}',
    '.rm-msg.bot{background:#fff;border:1px solid #dce3ec;border-bottom-left-radius:4px}',
    '.rm-msg.me{background:#161e24;color:#fff;margin-left:auto;border-bottom-right-radius:4px}',
    '.rm-msg a{color:inherit}',
    '.rm-opts{display:flex;flex-wrap:wrap;gap:7px;padding:10px 14px;background:#fff;border-top:1px solid #dce3ec}',
    '.rm-opt{background:#fff;border:1px solid #243039;color:#243039;border-radius:9px;padding:8px 11px;font:600 .88rem Inter,system-ui,sans-serif;cursor:pointer}',
    '.rm-opt:hover{background:#243039;color:#fff}',
    '.rm-opt.hot{background:#a8500c;border-color:#a8500c;color:#fff}',
    '.rm-foot{display:flex;gap:7px;padding:10px 14px;border-top:1px solid #dce3ec;background:#fff}',
    '.rm-foot input{flex:1;border:1px solid #dce3ec;border-radius:9px;padding:10px;font:1rem Inter,system-ui,sans-serif;background:#faf7f2}',
    '.rm-foot button{background:#ffc233;border:0;border-radius:9px;padding:10px 14px;font-weight:700;color:#3a2b00;cursor:pointer}',
    '.rm-f{background:#fff;border:1px solid #dce3ec;border-radius:12px;padding:14px;margin-bottom:10px}',
    '.rm-f label{display:block;font:600 .84rem Inter,system-ui,sans-serif;color:#161e24;margin:9px 0 4px}',
    '.rm-f input,.rm-f select,.rm-f textarea{width:100%;border:1px solid #dce3ec;border-radius:9px;padding:10px;font:1rem Inter,system-ui,sans-serif;background:#faf7f2;color:#161e24}',
    '.rm-f .duo{display:grid;grid-template-columns:1fr 1fr;gap:0 10px}',
    '.rm-f button.go{width:100%;margin-top:12px;background:#a8500c;color:#fff;border:0;border-radius:9px;padding:13px;font:700 1rem Inter,system-ui,sans-serif;cursor:pointer}',
    '.rm-note{font-size:.8rem;color:#5d6b7e;margin-top:8px}',
    '.rm-ticket{background:#161e24;color:#fff;border-radius:12px;padding:16px;margin-bottom:12px;font-family:Inter,system-ui,sans-serif}',
    '.rm-ticket b{display:block;font-size:1.35rem;color:#ffc233;letter-spacing:.04em}',
    '.rm-ticket .ln{display:flex;justify-content:space-between;gap:10px;font-size:.86rem;padding:5px 0;border-bottom:1px dashed rgba(255,255,255,.26)}',
    '.rm-ticket .ln:last-of-type{border-bottom:0}',
    '.rm-ticket small{display:block;margin-top:8px;color:rgba(255,255,255,.82);font-size:.82rem}',
    '@media (max-width:640px){.rm-panel{right:6px;left:6px;width:auto;bottom:74px;top:60px;height:auto;max-height:none}',
    '.rm-launch{right:4px;bottom:74px}.rm-btn{width:104px;height:120px}.rm-tip{font-size:.84rem;max-width:176px;margin-right:12px}',
    '.rm-dock{top:150px;bottom:auto;transform:none}.rm-dock button{padding:10px 10px 10px 8px;font-size:.74rem}.rm-dock .mini{width:24px;height:28px}}',
    '@media (prefers-reduced-motion:reduce){.rm-horn,.rm-steam,.rm-led{animation:none}}'
  ].join('');
  document.head.appendChild(css);

  function el(h) { var d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstChild; }

  var launch = el('<div class="rm-launch"><button class="rm-btn" id="rmBtn" aria-label="Chat with Ramsey, our shop dog" aria-expanded="false">' + ram('') + '</button></div>');
  document.body.appendChild(launch);
  var dock = el('<div class="rm-dock">' +
    '<button data-mode="quote"><span class="mini">' + ram('') + '</span>Quick quote</button>' +
    '<button class="alt" data-mode="callback"><span class="mini">' + ram('') + '</span>Call me back</button></div>');
  document.body.appendChild(dock);

  var panel = null, answers = {}, log = [], capture = null, started = false;

  function openPanel(mode) {
    if (!panel) {
      panel = el('<div class="rm-panel" role="dialog" aria-modal="false" aria-label="Painter Hotline chat">' +
        '<div class="rm-head"><span class="av">' + ram('') + '</span><span><b>Ramsey</b><i>Arvada, CO</i></span>' +
        '<a class="call" href="tel:' + TEL + '">' + DISP + '</a><button class="x" aria-label="Close us chat">X</button></div>' +
        '<div class="rm-tape"></div><div class="rm-prog"><i id="rmProg"></i></div>' +
        '<div class="rm-body" id="rmBody"></div><div class="rm-opts" id="rmOpts"></div>' +
        '<div class="rm-foot"><label class="sr" for="rmIn">Type a message to us</label>' +
        '<input id="rmIn" placeholder="Ask us anything..." autocomplete="off"><button id="rmSend">Send</button></div></div>');
      document.body.appendChild(panel);
      panel.querySelector('.x').addEventListener('click', closePanel);
      panel.querySelector('#rmSend').addEventListener('click', typed);
      panel.querySelector('#rmIn').addEventListener('keydown', function (e) { if (e.key === 'Enter') typed(); });
    }
    panel.hidden = false;
    launch.style.display = 'none';
    document.getElementById('rmBtn').setAttribute('aria-expanded', 'true');
    if (mode === 'quote') startQuote();
    else if (mode === 'callback') startCallback();
    else if (!started) greet();
  }
  function closePanel() {
    if (panel) panel.hidden = true;
    launch.style.display = '';
    document.getElementById('rmBtn').setAttribute('aria-expanded', 'false');
  }
  document.getElementById('rmBtn').addEventListener('click', function () { openPanel(); });
  dock.querySelectorAll('button').forEach(function (b) { b.addEventListener('click', function () { openPanel(b.dataset.mode); }); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-quote]');
    if (a) { e.preventDefault(); openPanel('quote'); }
  });

  function say(html, who) {
    var b = document.getElementById('rmBody');
    b.appendChild(el('<div class="rm-msg ' + (who || 'bot') + '">' + html + '</div>'));
    b.scrollTop = b.scrollHeight;
  }
  function opts(list) {
    var o = document.getElementById('rmOpts'); o.innerHTML = '';
    list.forEach(function (x) {
      var b = el('<button class="rm-opt' + (x.hot ? ' hot' : '') + '" type="button">' + x.label + '</button>');
      b.addEventListener('click', function () { say(x.label, 'me'); log.push('Visitor: ' + x.label); o.innerHTML = ''; x.fn(); });
      o.appendChild(b);
    });
  }
  function prog(p) { var b = document.getElementById('rmProg'); if (b) b.style.width = (p * 100) + '%'; }
  function form(html) {
    document.getElementById('rmOpts').innerHTML = '';
    var b = document.getElementById('rmBody'), f = el('<div class="rm-f">' + html + '</div>');
    b.appendChild(f); b.scrollTop = b.scrollHeight; return f;
  }

  /* ---------- knowledge base ---------- */
  var SITE_ID = "paintersarvada.com", CITY = "Arvada";
  var KB = [
    [/(cheaper|do better on price|better price|lower (the )?price|beat .*(price|quote|bid)|discount|negotiat|price match)/i, 'We price the work rather than running promotions, so there is no padded number waiting to come down. What can change is scope. On an Arvada exterior the honest lever is usually phasing: do the west and south elevations that are actually failing now, and plan the north and east for a later season.'],
    [/\\b(hardboard|masonite|siding (swell|soft|rot|bad)|swollen|delaminat)\\b/i, 'That is the big one in ' + CITY + '. Homes built roughly 1968 to 1990 here mostly wear hardboard, and it swells wherever water reaches an unsealed cut edge, usually the bottom course or under a window. Painting over a swollen board does nothing and traps the moisture in. We count the failed sections at the estimate and write the number down. There is a full guide at <a href="/blog/hardboard-siding-arvada/">hardboard siding in Arvada</a>.'],
    [/\\b(texture|knockdown|orange peel|skip trowel|popcorn|patch)\\b/i, 'Nearly every ' + CITY + ' interior is textured, so a repair has to be matched or it stays visible under every lamp in the room. We match knockdown, orange peel and skip trowel as part of interior work. One caution: if the house predates about 1980, popcorn ceiling texture should be tested before anyone disturbs it.'],
    [/\\b(why (you|should)|what makes|different|better than|choose|best painter)\\b/i, 'We are based here, at 12191 W 64th Ave, not servicing ' + CITY + ' from somewhere else. Practically that means we know which neighborhoods have the hardboard problem, we know Candelas boards meet on a schedule, and we price the repair instead of quietly painting over it. 4.9 stars from 95 Google reviews, and a 5-year written warranty.'],
    [/\\b(prep|preparation|what.*included|scope|process)\\b/i, 'Exterior: protect everything, pressure wash, scrape to a sound edge, repair and seal failed hardboard, sand transitions, fill and caulk, prime bare and repaired areas, then two finish coats on siding, trim, fascia and soffit. Interior: protect and cover, patch, match texture, caulk, spot prime, then two coats. Every step is itemized by surface on your estimate.'],
    [/\\b(deposit|payment|financ|pay|invoice|down)\\b/i, 'A deposit reserves your dates and the balance is due at completion, after you walk the work with us. The terms are printed on your written estimate.'],
    [/\\b(hoa|covenant|approval|board|palette|candelas|leyden|five parks)\\b/i, 'The newer west-side communities generally require color approval, including Candelas, Leyden Rock and Five Parks. We prepare the samples and the submission. The one thing we cannot speed up is the board meeting, so start early. More on the <a href="/candelas-painters/">Candelas page</a>.'],
    [/\\b(lead|1978|old house|olde town|historic|asbestos)\\b/i, 'Homes built before 1978 may contain lead paint, and the federal EPA rule requires certified firms and lead-safe work practices when painted surfaces get disturbed. That covers most of Olde Town. See the <a href="/olde-town-arvada-painters/">Olde Town page</a> for how we handle it.'],
    [/\\b(season|when can you|winter|spring|weather|cold|temperature)\\b/i, 'Exteriors here run roughly mid-May to early October. Denver-area records put the average last spring freeze near May 5 and the first fall freeze near October 7, and the number that matters is the overnight low because the coating cures through the night. Interiors we do year-round, and winter is genuinely the easier time to book.'],
    [/\\b(cabinet|kitchen|oak|refinish)\\b/i, 'Cabinets get degreased, scuff sanded, bonding primed and sprayed, with doors done off-site and boxes in place behind containment. Published ranges put refinishing at roughly $2,000 to $8,000 against $15,000 or more to replace. A lot of ' + CITY + ' kitchens have solid 80s and 90s oak where only the color is dated. See <a href="/cabinet-painting-arvada/">cabinet painting</a>.'],
    [/\\b(deck|fence|stain|seal)\\b/i, 'Pour a cup of water on the boards. If it beads, the seal is fine. If it soaks in and darkens, it is time. On our west-side exposure that is commonly every two to three years. We clean, brighten to restore the pH, sand where the grain raised, then seal. Details on <a href="/deck-and-fence-staining-arvada/">deck and fence staining</a>.'],
    [/\\b(drywall|crack|nail pop|hole|water damage|repair)\\b/i, 'We repair nail pops, settlement cracks, holes and water damage, and we match the texture afterward so the patch disappears. Doing the repair and the paint together is the point, because a repair is not finished until it is textured, primed and coated. See <a href="/drywall-repair-and-texture-arvada/">drywall repair and texture</a>.'],
    [/\\b(warranty|guarantee|if it fails|peel)\\b/i, 'Five years on workmanship, in writing, with the exclusions actually printed. It covers peeling, flaking and adhesion failure from our prep or application. It does not cover normal UV fading or substrate we flagged that you chose not to repair. Full detail on the <a href="/warranty/">warranty page</a>.'],
    [/\\b(insur|licen|bonded|certificate)\\b/i, 'Insured, with the certificate provided at the estimate. Colorado does not issue a statewide painting license, so insurance and a written scope are the two documents that actually protect you.'],
    [/\\b(brand|sherwin|ppg|benjamin|what paint)\\b/i, 'Sherwin-Williams and PPG. The exact line and sheen are named per surface on your estimate so you can look up the manufacturer data yourself.'],
    [/\\b(sheen|flat|eggshell|satin|gloss)\\b/i, 'Flat on ceilings, eggshell on most walls, satin in kitchens, baths, hallways and basements, semi-gloss on trim and doors. On textured ' + CITY + ' walls we tend to go one step lower than you might elsewhere, because sheen lights up every bump. There is a full guide at <a href="/blog/interior-paint-sheen-guide-arvada/">which sheen goes where</a>.'],
    [/\\b(west wall|sun|fade|chalk|uv|one side)\\b/i, 'West and south elevations take the afternoon sun straight off the foothills, and they commonly fail a full cycle before the north and east sides. If chalk comes off on your hand, that coating is done. You can absolutely repaint just those elevations. <a href="/blog/why-west-walls-fail-first-arvada/">Here is why it happens</a>.'],
    [/\\b(how long|how many days|timeline|take)\\b/i, 'A single interior room is usually one day. A full exterior runs three to five working days, longer if there is real hardboard repair. Cabinets are three to five days on site. Your estimate gives you the actual schedule rather than a guess.'],
    [/\\b(area|serve|lakewood|wheat ridge|golden|westminster|broomfield|thornton|northglenn)\\b/i, 'We are based in ' + CITY + ' and also work in Westminster, Broomfield, Northglenn and Thornton. For Lakewood, Wheat Ridge and Golden, Bighorn has dedicated sites for each of those cities with local detail. Same crews either way.'],
    [/\\b(think about it|get back to you|need time|compare|other (bid|quote))\\b/i, 'Take the time, and compare on four lines rather than the total: the preparation included, whether failed siding is counted or ignored, the exact product and coat count, and the warranty terms. A lower number is nearly always one of those being smaller.'],
    [/\\b(estimate|quote|price|cost|how much)\\b/i, 'Free, in person or from photos. Published 2026 Front Range data puts exteriors at roughly $1.55 to $4.10 per square foot and interiors at about $1.50 to $3.50. On ' + CITY + ' homes, siding repair is the thing most likely to move your number. Full breakdown on the <a href="/painting-cost-arvada/">cost page</a>.'],
  ];

  function lookup(t) { for (var i = 0; i < KB.length; i++) if (KB[i][0].test(t)) return KB[i][1]; return null; }

  function typed() {
    var inp = document.getElementById('rmIn'), t = inp.value.trim();
    if (!t) return;
    inp.value = ''; say(t, 'me'); log.push('Visitor: ' + t);
    if (capture) { var fn = capture; capture = null; fn(t); return; }
    var a = lookup(t);
    say(a || 'I would rather get you a real answer than guess at that one. The fastest path is a quick quote, or call <a href="tel:' + TEL + '">' + DISP + '</a> and ask a painter directly.');
    menu();
  }
  function menu() {
    opts([{ label: 'Run a quick quote', hot: true, fn: startQuote },
          { label: 'Have someone call me', fn: startCallback },
          { label: 'Another question', fn: function () { say('Go ahead, type it below.'); } }]);
  }

  function greet() {
    started = true;
    say('Hey, I am <strong>Ramsey</strong>, the bighorn around here. I can do three things well: run a <strong>quick quote</strong> in about ninety seconds, get a painter to <strong>call you back</strong> in a window you pick, or just answer what you actually want to know before anybody talks price. Where do you want to start?');
    opts([{ label: 'Quick quote', hot: true, fn: startQuote },
          { label: 'Call me back', fn: startCallback },
          { label: 'What makes you different?', fn: whyUs },
          { label: 'I have a question first', fn: function () { say('Ask away. Cost, timing, prep, warranty, towns we cover, anything.'); } }]);
  }

  /* ---------- value building ---------- */
  function whyUs() {
    log.push('Visitor asked why Painter Hotline');
    say('Short version, and none of it is hard to verify.');
    setTimeout(function () {
      say('<strong>Specialized crews.</strong> Exterior, interior, cabinets and commercial are different skills. You get the crew that does your kind of work every day, not whoever was free.');
    }, 350);
    setTimeout(function () {
      say('<strong>20+ years in Colorado.</strong> Which mostly means we know what fails here: south walls chalking, sprinklers soaking the bottom courses, caulk joints opening over the freeze-thaw season.');
    }, 900);
    setTimeout(function () {
      say('<strong>A dedicated project manager</strong> so one person owns your project, <strong>full insurance</strong> with the certificate in your file, and a <strong>5-year workmanship warranty</strong> in writing.');
      opts([
        { label: 'What does doing it twice cost?', fn: twiceCost },
        { label: 'Run a quick quote', hot: true, fn: startQuote },
        { label: 'Have someone call me', fn: startCallback }
      ]);
    }, 1500);
  }
  function twiceCost() {
    say('Here is the math nobody enjoys. A cheap repaint that skips washing, scraping and priming usually looks fine through the first season. By the second or third Colorado winter the trim is peeling and the south wall is chalking.');
    setTimeout(function () {
      say('Now the next painter has to <strong>remove</strong> the failed coating before they can start, which is work nobody paid for the first time. So you pay for the cheap job, the removal, and then the job done correctly. That is why our preparation is itemized in writing instead of hidden in a lump sum.');
      opts([
        { label: 'Makes sense, price my project', hot: true, fn: startQuote },
        { label: 'What is in your prep?', fn: function () { say(lookup('prep') || ''); menu(); } },
        { label: 'Have someone call me', fn: startCallback }
      ]);
    }, 900);
  }

  /* ---------- quick quote ---------- */
  var Q = {};
  function startQuote() {
    Q = {}; answers = {}; prog(.1);
    say('Quick quote it is. <strong>What are we painting?</strong>');
    opts([
      { label: 'Home exterior', fn: function () { Q.t = 'ext'; answers.project = 'Exterior house painting'; qExtSize(); } },
      { label: 'Interior rooms', fn: function () { Q.t = 'int'; answers.project = 'Interior painting'; qIntSize(); } },
      { label: 'Kitchen cabinets', fn: function () { Q.t = 'cab'; answers.project = 'Cabinet painting'; qCab(); } },
      { label: 'Deck or fence', fn: function () { Q.t = 'deck'; answers.project = 'Deck or fence staining'; qDeck(); } },
      { label: 'Commercial property', fn: function () { Q.t = 'com'; answers.project = 'Commercial property'; qCommercial(); } }
    ]);
  }
  function qExtSize() {
    prog(.25); say('<strong>What size is the building?</strong>');
    opts([
      { label: 'Single story', fn: function () { Q.sq = 1600; Q.h = 1; answers.size = 'Single story'; qExtCond(); } },
      { label: 'Two story', fn: function () { Q.sq = 2600; Q.h = 1.12; answers.size = 'Two story'; qExtCond(); } },
      { label: 'Large or walkout', fn: function () { Q.sq = 3400; Q.h = 1.2; answers.size = 'Large or walkout'; qExtCond(); } },
      { label: 'Townhome or condo', fn: function () { Q.sq = 1100; Q.h = 1.05; answers.size = 'Townhome or condo'; qExtCond(); } }
    ]);
  }
  function qExtCond() {
    prog(.45); say('<strong>How is the existing paint holding up?</strong> Rub a sunny wall and look at the trim.');
    opts([
      { label: 'Faded but sound', fn: function () { Q.c = 1; answers.condition = 'Faded but sound'; qZone(); } },
      { label: 'Chalky, caulk cracking', fn: function () { Q.c = 1.14; answers.condition = 'Chalky with cracked caulk'; qZone(); } },
      { label: 'Peeling in spots', fn: function () { Q.c = 1.3; Q.visit = true; answers.condition = 'Peeling in spots'; qZone(); } },
      { label: 'Peeling badly, bare wood', fn: function () { Q.c = 1.45; Q.visit = true; answers.condition = 'Peeling badly with bare wood'; qZone(); } }
    ]);
  }
  function qIntSize() {
    prog(.25); say('<strong>How much space?</strong>');
    opts([
      { label: '1 room', fn: function () { Q.sq = 350; answers.size = '1 room'; qIntScope(); } },
      { label: '2-3 rooms', fn: function () { Q.sq = 850; answers.size = '2-3 rooms'; qIntScope(); } },
      { label: '4-6 rooms', fn: function () { Q.sq = 1600; answers.size = '4-6 rooms'; qIntScope(); } },
      { label: 'Whole house', fn: function () { Q.sq = 2400; answers.size = 'Whole house'; qIntScope(); } }
    ]);
  }
  function qIntScope() {
    prog(.45); say('<strong>Walls only, or trim and ceilings too?</strong>');
    opts([
      { label: 'Walls only', fn: function () { Q.c = 1; answers.scope = 'Walls only'; qZone(); } },
      { label: 'Walls and trim', fn: function () { Q.c = 1.14; answers.scope = 'Walls and trim'; qZone(); } },
      { label: 'Walls, trim and ceilings', fn: function () { Q.c = 1.3; answers.scope = 'Walls, trim and ceilings'; qZone(); } },
      { label: 'Repairs needed first', fn: function () { Q.c = 1.35; Q.visit = true; answers.scope = 'Repairs needed before painting'; qZone(); } }
    ]);
  }
  function qCab() {
    prog(.3); say('<strong>Roughly how many cabinet doors and drawer fronts?</strong>');
    opts([
      { label: '10-18', fn: function () { Q.d = 15; answers.size = '10-18 pieces'; qCabFinish(); } },
      { label: '20-35', fn: function () { Q.d = 28; answers.size = '20-35 pieces'; qCabFinish(); } },
      { label: '36-50', fn: function () { Q.d = 43; answers.size = '36-50 pieces'; qCabFinish(); } },
      { label: 'More than 50', fn: function () { Q.d = 60; answers.size = 'More than 50 pieces'; qCabFinish(); } }
    ]);
  }
  function qCabFinish() {
    prog(.5); say('<strong>What is on them now?</strong>');
    opts([
      { label: 'Stained wood', fn: function () { Q.c = 1.05; answers.condition = 'Stained wood'; qZone(); } },
      { label: 'Factory painted, good', fn: function () { Q.c = 1; answers.condition = 'Factory painted, good shape'; qZone(); } },
      { label: 'Painted and chipping', fn: function () { Q.c = 1.25; Q.visit = true; answers.condition = 'Previously painted, chipping'; qZone(); } },
      { label: 'Laminate or thermofoil', fn: function () { Q.c = 1.18; Q.visit = true; answers.condition = 'Laminate or thermofoil'; qZone(); } }
    ]);
  }
  function qDeck() {
    prog(.3); say('<strong>What are we sealing?</strong>');
    opts([
      { label: 'Small deck', fn: function () { Q.sq = 260; answers.size = 'Small deck'; qDeckCond(); } },
      { label: 'Medium deck', fn: function () { Q.sq = 450; answers.size = 'Medium deck'; qDeckCond(); } },
      { label: 'Large deck with rails', fn: function () { Q.sq = 700; answers.size = 'Large deck with railings'; qDeckCond(); } },
      { label: 'Fence, or deck and fence', fn: function () { Q.sq = 850; answers.size = 'Fence, or deck and fence'; qDeckCond(); } }
    ]);
  }
  function qDeckCond() {
    prog(.5); say('<strong>What shape is the wood in?</strong>');
    opts([
      { label: 'Maintained', fn: function () { Q.c = 1; answers.condition = 'Maintained'; qZone(); } },
      { label: 'Gray and weathered', fn: function () { Q.c = 1.18; answers.condition = 'Gray and weathered'; qZone(); } },
      { label: 'Old stain peeling', fn: function () { Q.c = 1.4; Q.visit = true; answers.condition = 'Old stain peeling, stripping needed'; qZone(); } },
      { label: 'Boards may need replacing', fn: function () { Q.c = 1.32; Q.visit = true; answers.condition = 'Possible board replacement'; qZone(); } }
    ]);
  }
  function qCommercial() {
    answers.project = 'Commercial property'; Q.visit = true;
    prog(.5); say('Commercial work always starts with a walkthrough so the scope, access and phasing are right before anyone quotes a number. <strong>What kind of property?</strong>');
    opts([
      { label: 'Office or suite', fn: function () { answers.size = 'Office or suite'; qZone(); } },
      { label: 'Retail or restaurant', fn: function () { answers.size = 'Retail or restaurant'; qZone(); } },
      { label: 'Warehouse or industrial', fn: function () { answers.size = 'Warehouse or industrial'; qZone(); } },
      { label: 'HOA or multi-unit', fn: function () { answers.size = 'HOA or multi-unit'; qZone(); } }
    ]);
  }
  function qZone() {
    prog(.68); say('<strong>Where is the property?</strong> Region affects scheduling and sometimes product choice.');
    opts([
      { label: 'Denver metro', fn: function () { Q.z = 1; answers.region = 'Denver metro'; qWhen(); } },
      { label: 'North or Boulder County', fn: function () { Q.z = 1.02; answers.region = 'North / Boulder County'; qWhen(); } },
      { label: 'Eastern plains', fn: function () { Q.z = 1.04; answers.region = 'Eastern plains'; qWhen(); } },
      { label: 'Foothills or mountains', fn: function () { Q.z = 1.12; answers.region = 'Foothills or mountain town'; qWhen(); } }
    ]);
  }
  function qWhen() {
    prog(.82); say('<strong>How soon do you want it done?</strong>');
    opts([
      { label: 'This week if possible', fn: function () { answers.timeline = 'This week if possible'; result(); } },
      { label: 'Within a month', fn: function () { answers.timeline = 'Within a month'; result(); } },
      { label: '1 to 3 months', fn: function () { answers.timeline = '1 to 3 months'; result(); } },
      { label: 'Pricing and planning', fn: function () { answers.timeline = 'Pricing and planning'; result(); } }
    ]);
  }
  function ticket() {
    var n = Math.floor(Math.random() * 9000) + 1000;
    return 'PH-' + (new Date().getMonth() + 1) + (new Date().getDate()) + '-' + n;
  }
  function result() {
    prog(.9);
    var c = Q.c || 1, z = Q.z || 1, lo, hi;
    if (Q.t === 'ext') { lo = Q.sq * 1.55 * (Q.h || 1); hi = Q.sq * 4.10 * (Q.h || 1); }
    else if (Q.t === 'int') { lo = Q.sq * 1.50; hi = Q.sq * 3.50; }
    else if (Q.t === 'cab') { lo = 1800 + (Q.d - 20) * 62; hi = 3600 + (Q.d - 20) * 126; }
    else if (Q.t === 'deck') { lo = Q.sq * 2.10; hi = Q.sq * 4.60; }
    else { lo = 0; hi = 0; }
    Q.ticket = ticket();
    answers.ticket = Q.ticket;
    if (lo) {
      lo = Math.round(lo * c * z / 50) * 50; hi = Math.round(hi * c * z / 50) * 50;
      var lod = Math.round(lo * .75 / 50) * 50, hid = Math.round(hi * .75 / 50) * 50;
      answers.ballpark = '$' + lo.toLocaleString() + ' - $' + hi.toLocaleString();
      answers.ballpark_after_discount = '$' + lod.toLocaleString() + ' - $' + hid.toLocaleString();
      say('<div class="rm-ticket"><b>$' + lo.toLocaleString() + ' - $' + hi.toLocaleString() + '</b>' +
        '<span class="ln"><span>Project</span><span>' + (answers.project || '') + '</span></span>' +
        '<span class="ln"><span>Scope</span><span>' + (answers.size || answers.scope || '') + '</span></span>' +
        '<span class="ln"><span>Region</span><span>' + (answers.region || '') + '</span></span>' +
        '<span class="ln"><span>Ticket</span><span>' + Q.ticket + '</span></span>' +
        '<small>Published 2026 Front Range range for this scope. With 25% off labor on projects booked by October 31, 2026, most of this scope lands around <strong>$' + lod.toLocaleString() + ' - $' + hid.toLocaleString() + '</strong>. Paint and materials are not included in the discount.</small></div>');
    } else {
      say('<div class="rm-ticket"><b>Walkthrough first</b><span class="ln"><span>Project</span><span>' + (answers.project || '') + '</span></span><span class="ln"><span>Ticket</span><span>' + Q.ticket + '</span></span><small>Commercial scopes get measured on site so the bid is line-item accurate rather than a guess.</small></div>');
    }
    if (Q.visit) {
      say('Heads up: what you described is worth <strong>seeing in person</strong>. Peeling, water damage, failing finishes and commercial access all change the prep plan, and the visit is free either way.');
      answers.recommendation = 'Site visit recommended';
    } else {
      answers.recommendation = 'Photo quote suitable';
    }
    setTimeout(function () {
      say('One honest question before I take your details: if a written proposal comes back at that number, with the preparation spelled out and your dates confirmed, is that something you would be ready to move forward on?');
      opts([
        { label: 'Yes, if the details are right', hot: true, fn: function () { answers.intent = 'Ready to move forward if details fit'; collect('quote'); } },
        { label: 'Maybe, I want to compare', fn: function () { answers.intent = 'Comparing options'; say('Smart. When you compare, look at four lines: the preparation, the exact product and sheen, the number of coats, and the warranty. A lower number is almost always one of those four being smaller. Let me get you the written version so you have something real to compare.'); collect('quote'); } },
        { label: 'Just gathering information', fn: function () { answers.intent = 'Information gathering'; say('No pressure at all. I will still get you the written scope so you have a real benchmark whenever you are ready.'); collect('quote'); } }
      ]);
    }, 700);
  }

  function startCallback() {
    answers = {}; log.push('Visitor chose callback'); prog(.5);
    say('Easy. Pick a window and a painter will call you back at that time.');
    opts([
      { label: 'Next hour or two', fn: function () { answers.callback_window = 'Next hour or two'; collect('callback'); } },
      { label: 'This afternoon', fn: function () { answers.callback_window = 'This afternoon'; collect('callback'); } },
      { label: 'Tomorrow morning', fn: function () { answers.callback_window = 'Tomorrow morning'; collect('callback'); } },
      { label: 'Any time, just call', fn: function () { answers.callback_window = 'Any time'; collect('callback'); } }
    ]);
  }

  function collect(kind) {
    prog(.95);
    say(kind === 'callback' ? 'Who am I putting on the board?' : 'Last step. Where should the written quote go, and can you add photos?');
    var f = form(
      '<label for="rmNm">Your name</label><input id="rmNm" autocomplete="name">' +
      '<div class="duo"><div><label for="rmPh">Phone</label><input id="rmPh" type="tel" inputmode="tel" autocomplete="tel"></div>' +
      '<div><label for="rmZp">ZIP code</label><input id="rmZp" inputmode="numeric" autocomplete="postal-code" maxlength="10"></div></div>' +
      '<label for="rmEm">Email</label><input id="rmEm" type="email" autocomplete="email">' +
      (kind === 'callback' ? '<label for="rmWhat">What is the project?</label><input id="rmWhat" placeholder="Exterior repaint, cabinets, deck...">' :
        '<label for="rmPhotos">Photos (up to 4)</label><input id="rmPhotos" type="file" accept="image/*" multiple>') +
      '<label for="rmMs">Anything else?</label><textarea id="rmMs" rows="2"></textarea>' +
      '<button class="go" type="button" id="rmGo">' + (kind === 'callback' ? 'Put me on the callback list' : 'Send it to us') + '</button>' +
      '<p class="rm-note">Used only to prepare your quote. Prefer to talk now? Call <a href="tel:' + TEL + '">' + DISP + '</a>.</p>');
    f.querySelector('#rmGo').addEventListener('click', function () { send(kind, f, this); });
  }

  function send(kind, f, btn) {
    var nm = f.querySelector('#rmNm').value.trim(), ph = f.querySelector('#rmPh').value.trim();
    if (!nm || ph.replace(/\D/g, '').length < 10) { say('I need a name and a 10-digit number so someone can actually reach you.'); return; }
    btn.disabled = true; btn.textContent = 'Sending...';
    var fd = new FormData();
    fd.append('source_site', 'paintersarvada.com Ramsey ' + (kind === 'callback' ? 'callback request' : 'quick quote'));
    fd.append('user_name', nm); fd.append('user_phone', ph);
    fd.append('user_email', f.querySelector('#rmEm').value.trim());
    fd.append('user_zip', f.querySelector('#rmZp').value.trim());
    if (f.querySelector('#rmWhat')) fd.append('project_type', f.querySelector('#rmWhat').value.trim());
    fd.append('user_message', f.querySelector('#rmMs').value.trim());
    fd.append('request_type', kind === 'callback' ? 'Callback requested' : 'Quick quote');
    Object.keys(answers).forEach(function (k) { fd.append(k, answers[k]); });
    fd.append('chat_transcript', log.join('\n') || 'Hotline intake only');
    var fin = f.querySelector('#rmPhotos');
    var pics = (window.BHP && BHP.photos) ? BHP.photos(fin) : Promise.resolve([]);
    pics.then(function (list) {
      list.forEach(function (p, i) { fd.append('photo_' + (i + 1), p); });
      return (window.BHP && BHP.send) ? BHP.send(fd, 'HOTLINE ' + (kind === 'callback' ? 'CALLBACK' : 'QUICK QUOTE') + ': Painter Hotline') : Promise.resolve('fail');
    }).then(function (state) {
      prog(1);
      if (state === 'ok') {
        f.remove();
        say('You are on the board, ' + nm.split(' ')[0] + '.' + (answers.ticket ? ' Ticket <strong>' + answers.ticket + '</strong>.' : '') + ' A painter will call to confirm the details. Need us sooner, call <a href="tel:' + TEL + '">' + DISP + '</a>.');
        opts([{ label: 'Thanks, Ramsey', fn: closePanel }]);
      } else if (state === 'blocked' || state === 'fast') {
        btn.disabled = false; btn.textContent = 'Send it to us';
        say('Give that one more second, then send it again.');
      } else {
        btn.disabled = false; btn.textContent = 'Try again';
        say('I could not confirm that went through. Please call <a href="tel:' + TEL + '">' + DISP + '</a> so it does not get lost.');
      }
    });
  }

  var hid = false;
  try { hid = sessionStorage.getItem('rmTipX') === '1'; } catch (e) { }
  if (!hid) {
    setTimeout(function () {
      if (panel && !panel.hidden) return;
      var tip = el('<div class="rm-tip" role="status">I can price your Arvada project in about ninety seconds. Want to try?<button type="button" aria-label="Dismiss">&times;</button></div>');
      launch.insertBefore(tip, launch.firstChild);
      tip.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') { tip.remove(); try { sessionStorage.setItem('rmTipX', '1'); } catch (x) { } }
        else openPanel();
      });
    }, 1400);
  }

  var s2 = document.createElement('style');
  s2.textContent = '.ringer b{white-space:nowrap}@media (max-width:760px){.ringer b{font-size:1.08rem!important;letter-spacing:-.02em}}@media (max-width:400px){.ringer b{font-size:1rem!important}}';
  document.head.appendChild(s2);
})();
