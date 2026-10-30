/* تألّق | TAALAQ STUDIO — Zid (Growth/نمو theme) homepage JS v1
   يبني أقسام الصفحة الرئيسية بنفس ترتيب صفحة الموقع في ملف الهوية.
   الألوان: #FFFFFF / #111111 / #9B7BC6 / #F4F0FA — الخط: Alexandria */
(function () {
  var WA = 'https://wa.me/966507689004';
  var STAR = '<svg viewBox="0 0 80 100" aria-hidden="true"><path d="M40 0C43 35 45 47 80 50C45 53 43 65 40 100C37 65 35 53 0 50C35 47 37 35 40 0Z"/></svg>';

  function css() {
    if (document.getElementById('tq-style')) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;700&family=Open+Sans:wght@400&display=swap';
    document.head.appendChild(l);
    var s = document.createElement('style');
    s.id = 'tq-style';
    s.textContent = [
      '.tq{font-family:Alexandria,sans-serif;color:#111;direction:rtl}',
      '.tq *{box-sizing:border-box}',
      '.tq-wrap{max-width:1120px;margin:0 auto;padding:0 20px}',
      '.tq h1,.tq h2,.tq h3{font-family:Alexandria,sans-serif;margin:0;line-height:1.5;color:#111}',
      '.tq p{margin:0}',
      '.tq-btn{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;padding:13px 28px;font:500 16px Alexandria,sans-serif;text-decoration:none;border:1px solid #9B7BC6;transition:background .2s,color .2s}',
      '.tq-btn-fill{background:#9B7BC6;color:#111}.tq-btn-fill:hover{background:#111;border-color:#111;color:#fff}',
      '.tq-btn-soft{background:#F4F0FA;color:#111}.tq-btn-soft:hover{background:#9B7BC6}',
      /* hero */
      '.tq-hero{position:relative;overflow:hidden;padding:88px 0 80px;background:#fff}',
      '.tq-hero .tq-wrap{position:relative;z-index:1;display:grid;gap:20px}',
      '.tq-eyebrow{font-family:"Open Sans",sans-serif;font-size:13px;letter-spacing:.14em;color:#9B7BC6;direction:ltr;text-align:right}',
      '.tq-hero h1{font-size:clamp(38px,6.5vw,76px);font-weight:700;max-width:12ch;line-height:1.6}',
      '.tq-hero h1 em{font-style:normal;color:#9B7BC6}',
      '.tq-lead{color:#55505a;font-size:clamp(16px,2vw,20px);max-width:46ch;line-height:1.8}',
      '.tq-ctas{display:flex;flex-wrap:wrap;gap:12px;margin-top:6px}',
      '.tq-glow{position:absolute;left:4%;top:50%;transform:translateY(-50%);width:min(40vw,420px);aspect-ratio:4/5;pointer-events:none}',
      '.tq-glow svg{position:absolute;inset:0;width:100%;height:100%;fill:#9B7BC6}',
      '.tq-glow .tq-big{opacity:.09}',
      '.tq-glow .tq-small{transform:scale(.45);animation:tqTw 5s ease-in-out infinite}',
      '@keyframes tqTw{0%,100%{transform:scale(.45) rotate(0)}50%{transform:scale(.48) rotate(4deg)}}',
      '@media (max-width:760px){.tq-glow{opacity:.35;left:-110px}}',
      /* sections */
      '.tq-sec{padding:80px 0;border-top:1px solid #ECE7F3;scroll-margin-top:90px}',
      '.tq-band{background:#F4F0FA;border-top:none}',
      '.tq-head{display:grid;gap:8px;margin-bottom:40px}',
      '.tq-head h2{font-size:clamp(28px,4vw,42px);font-weight:700}',
      '.tq-head p{color:#55505a;max-width:56ch;line-height:1.8}',
      '.tq-grid4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}',
      '.tq-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}',
      '@media (max-width:1020px){.tq-grid4{grid-template-columns:repeat(2,minmax(0,1fr))}}',
      '@media (max-width:760px){.tq-grid4,.tq-grid3{grid-template-columns:1fr}}',
      '.tq-card{background:#fff;border-radius:16px;padding:26px 22px;display:grid;gap:8px;align-content:start;min-width:0}',
      '.tq-card svg{width:28px;height:35px;fill:#9B7BC6;margin-bottom:20px}',
      '.tq-card h3{font-size:20px;font-weight:700}',
      '.tq-card p{color:#55505a;font-size:15px;line-height:1.7}',
      '.tq-soft{background:#FAF8FD;border:1px solid #ECE7F3}',
      '.tq-ico{width:44px;height:44px;border-radius:12px;background:#F4F0FA;display:grid;place-items:center}',
      '.tq-ico svg{width:18px;height:22px;margin:0}',
      '.tq-work .tq-ph{aspect-ratio:1/1;border:2px solid #9B7BC6;border-radius:16px;background:#F4F0FA;display:grid;place-items:center;color:#9B7BC6;font-size:15px}',
      '.tq-work h3{font-size:18px;font-weight:500;margin-top:14px}',
      '.tq-work p{color:#55505a;font-size:14px}',
      '.tq-sub-lav{color:#9B7BC6!important}',
      '.tq-steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));counter-reset:s}',
      '@media (max-width:900px){.tq-steps{grid-template-columns:repeat(2,minmax(0,1fr))}}',
      '.tq-steps li{counter-increment:s;padding:18px 0 18px 16px;border-top:1px solid #9B7BC6;display:grid;gap:6px;min-width:0}',
      '.tq-steps li::before{content:counter(s);font-size:13px;color:#9B7BC6}',
      '.tq-steps b{font-size:16px;font-weight:500}',
      '.tq-steps span{color:#55505a;font-size:14px;line-height:1.6}',
      '.tq-cta{margin:72px auto;padding:56px 24px;border-radius:20px;background:#9B7BC6;display:grid;gap:22px;justify-items:center;text-align:center}',
      '.tq-cta h2{font-size:clamp(28px,4.5vw,46px);font-weight:700}',
      '.tq-btn-tint{background:#F4F0FA;color:#111;border-color:#F4F0FA;font-weight:700}.tq-btn-tint:hover{background:#111;color:#fff;border-color:#111}',
      '.tq-reveal{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}',
      '.tq-reveal.tq-in{opacity:1;transform:none}',
      '@media (prefers-reduced-motion:reduce){.tq-reveal{opacity:1;transform:none;transition:none}.tq-glow .tq-small{animation:none}}',
      /* theme sections we replace on the homepage */
      'body.tq-home .section-hero,body.tq-home .section-call-to-action{display:none!important}'
    ].join('');
    document.head.appendChild(s);
  }

  function el(html) {
    var d = document.createElement('div');
    d.innerHTML = html.trim();
    return d.firstChild;
  }

  function card(t, p) {
    return '<article class="tq-card tq-reveal">' + STAR + '<h3>' + t + '</h3><p>' + p + '</p></article>';
  }
  function why(t, p) {
    return '<article class="tq-card tq-soft tq-reveal"><div class="tq-ico">' + STAR + '</div><h3>' + t + '</h3><p>' + p + '</p></article>';
  }
  function work() {
    return '<article class="tq-work tq-reveal"><div class="tq-ph">ضع صورة المشروع هنا</div><h3>اسم المشروع</h3><p>القطاع • نوع المشروع</p></article>';
  }

  function build() {
    var main = document.getElementById('main');
    if (!main || document.getElementById('tq-hero')) return;
    var isHome = location.pathname === '/' || location.pathname === '';
    // Hide the automatic "tax exempt" badge on product cards (all pages, incl. late-loaded cards)
    var hideTax = function () {
      document.querySelectorAll('.badge').forEach(function (b) {
        if (/معفى من الضريبة/.test(b.textContent)) b.style.display = 'none';
      });
    };
    hideTax(); setTimeout(hideTax, 1500); setTimeout(hideTax, 4000);
    if (!isHome) return;
    document.body.classList.add('tq-home');

    var hero = el(
      '<section id="tq-hero" class="tq tq-hero"><div class="tq-glow" aria-hidden="true">' +
      '<svg class="tq-big" viewBox="0 0 80 100"><path d="M40 0C43 35 45 47 80 50C45 53 43 65 40 100C37 65 35 53 0 50C35 47 37 35 40 0Z"/></svg>' +
      '<svg class="tq-small" viewBox="0 0 80 100"><path d="M40 0C43 35 45 47 80 50C45 53 43 65 40 100C37 65 35 53 0 50C35 47 37 35 40 0Z"/></svg></div>' +
      '<div class="tq-wrap"><p class="tq-eyebrow">BRAND IDENTITY &amp; DESIGN</p>' +
      '<h1>نصمم هوية تخلّي علامتك <em>تلمع</em></h1>' +
      '<p class="tq-lead">شعار، هوية بصرية، وموشن جرافيك لأصحاب العلامات التجارية والمطاعم والكافيهات والمتاجر.</p>' +
      '<div class="tq-ctas"><a class="tq-btn tq-btn-fill" href="#tq-packages">ابدأ مشروعك</a>' +
      '<a class="tq-btn tq-btn-soft" href="#tq-work">شاهد أعمالنا</a></div></div></section>'
    );

    var services = el(
      '<section id="tq-services" class="tq tq-sec tq-band"><div class="tq-wrap"><div class="tq-head tq-reveal"><h2>خدماتنا</h2>' +
      '<p>كل ما تحتاجه علامتك عشان تظهر باحتراف</p></div><div class="tq-grid4">' +
      card('الشعار', 'شعار مميز بنسخ تناسب كل استخدام') +
      card('الهوية البصرية', 'ألوان وخطوط ونظام متكامل') +
      card('الموشن جرافيك', 'حركة تعطي علامتك حياة') +
      card('تصاميم السوشيال', 'قوالب وبنرات متناسقة') +
      '</div></div></section>'
    );

    var whyS = el(
      '<section id="tq-why" class="tq tq-sec"><div class="tq-wrap"><div class="tq-head tq-reveal"><h2>ليش تألّق؟</h2>' +
      '<p>نشتغل على هويتك كنظام متكامل، مو تصميم شعار وبس.</p></div><div class="tq-grid3">' +
      why('نفهم قبل ما نصمم', 'نبدأ بنشاطك وجمهورك ووش يميّزك، وبعدها نبني التصميم على هالأساس.') +
      why('أنت معنا في كل خطوة', 'ما ننتقل لأي مرحلة إلا بعد موافقتك، عشان النتيجة تطلع مثل ما تبي.') +
      why('ملفات جاهزة للاستخدام', 'نسلّمك ملفات منظمة بالصيغ المناسبة للطباعة والسوشيال، حسب باقتك.') +
      '</div></div></section>'
    );

    var pkHead = el(
      '<section id="tq-packages" class="tq tq-sec" style="padding-bottom:0"><div class="tq-wrap"><div class="tq-head tq-reveal" style="margin-bottom:0"><h2>باقاتنا</h2>' +
      '<p>اختر الباقة اللي تناسب مرحلة مشروعك. التطبيقات نختارها حسب نشاطك، مو قائمة واحدة للجميع.</p></div></div></section>'
    );

    var works = el(
      '<section id="tq-work" class="tq tq-sec"><div class="tq-wrap"><div class="tq-head tq-reveal"><h2>أعمال مختارة</h2>' +
      '<p class="tq-sub-lav">مشاريع عملاء ومشاريع مفهومية — نوضّح نوع كل مشروع</p></div>' +
      '<div class="tq-grid3">' + work() + work() + work() + '</div></div></section>'
    );

    var steps = el(
      '<section id="tq-process" class="tq tq-sec"><div class="tq-wrap"><div class="tq-head tq-reveal"><h2>طريقة عملنا</h2>' +
      '<p>ست مراحل واضحة، وما ننتقل للمرحلة اللي بعدها إلا بعد موافقتك.</p></div><ol class="tq-steps tq-reveal">' +
      '<li><b>فهم مشروعك</b><span>نشاطك وجمهورك وش يميّزك</span></li>' +
      '<li><b>الاتجاه الإبداعي</b><span>الأسلوب والألوان والخطوط</span></li>' +
      '<li><b>تصميم الشعار</b><span>نطوّر الشعار حتى تعتمده</span></li>' +
      '<li><b>بناء الهوية</b><span>نظام بصري متناسق</span></li>' +
      '<li><b>التطبيقات</b><span>المطبوعات والسوشيال حسب الباقة</span></li>' +
      '<li><b>التسليم</b><span>ملفات منظمة جاهزة للاستخدام</span></li>' +
      '</ol></div></section>'
    );

    var cta = el(
      '<div id="tq-contact" class="tq"><div class="tq-wrap"><div class="tq-cta tq-reveal"><h2>جاهز تبدأ هويتك؟</h2>' +
      '<a class="tq-btn tq-btn-tint" href="' + WA + '" target="_blank" rel="noopener">تواصل معنا</a></div></div></div>'
    );

    var products = main.querySelector('.section-products');
    // Show packages from lowest to highest price
    var grid = products && products.querySelector('[data-grid-root]');
    if (grid) {
      var cards = Array.prototype.slice.call(grid.querySelectorAll(':scope > [data-product-card]'));
      var price = function (c) {
        var m = (c.textContent || '').replace(/,/g, '').match(/(\d+(?:\.\d+)?)\s*(?:\.00)?/g);
        var n = m ? m.map(parseFloat).filter(function (x) { return x >= 100; }) : [];
        return n.length ? n[0] : 0;
      };
      cards.sort(function (a, b) { return price(a) - price(b); }).forEach(function (c) { grid.appendChild(c); });
    }
    var firstSection = main.querySelector('section') || null;
    main.insertBefore(hero, firstSection);
    main.insertBefore(services, firstSection);
    main.insertBefore(whyS, firstSection);
    if (products) {
      main.insertBefore(pkHead, products);
      products.parentNode.insertBefore(works, products.nextSibling);
      works.parentNode.insertBefore(steps, works.nextSibling);
      steps.parentNode.insertBefore(cta, steps.nextSibling);
    } else {
      main.appendChild(works); main.appendChild(steps); main.appendChild(cta);
    }

    var items = document.querySelectorAll('.tq-reveal');
    if (!('IntersectionObserver' in window)) { items.forEach(function (e) { e.classList.add('tq-in'); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('tq-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (e) { io.observe(e); });
  }

  function init() { try { css(); build(); } catch (e) { if (window.console) console.warn('TAALAQ home script:', e); } }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
