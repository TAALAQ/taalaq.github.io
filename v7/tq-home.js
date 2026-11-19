/* منصة تألّق — كود الصفحة الرئيسية لمتجر زد (v7)
   الصقه كامل في: إعدادات الثيم ← تعديل كود JS (بدون وسوم script) مكان كود v6
   الصور وأدلة الهوية تنقرأ من: https://taalaq.github.io/v7/  */
(function () {
  if (window.__TQ_V7__) return; window.__TQ_V7__ = true;

  /* ===== كلمة taalaq_studio في الهيدر: نشيلها ونحط شعار تألّق (كل الصفحات) ===== */
  function fixHeader() {
    document.querySelectorAll('header a[aria-label="الرئيسية"] h2').forEach(function (h) {
      if (h.dataset.tq) return; h.dataset.tq = "1";
      h.textContent = "";
      var img = document.createElement("img");
      img.src = "https://taalaq.github.io/logo.png"; img.alt = "منصة تألّق";
      img.style.cssText = "height:38px;width:auto;display:block";
      h.appendChild(img);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fixHeader); else fixHeader();

  var path = location.pathname.replace(/\/+$/, "");
  if (!/^(\/(ar|en))?$/.test(path)) return; // باقي الكود للصفحة الرئيسية فقط

  /* ===================== البيانات ===================== */
  var SITE = {
    whatsapp: "966507689004",
    tiktok: "taalaq_studio",
    base: "https://taalaq.github.io/v7/",
    v3: "https://taalaq.github.io/v3/",
  };

  var PACKAGES = [
    { id: "d0a15cc6-cf4e-43d8-aeab-cb0ffafaee48", url: "/products/باقة-تصميم-الشعار",
      name: "تصميم شعار", price: 750, days: 3, rounds: 3, fit: "لمشروع يحتاج شعار احترافي فقط",
      items: ["فهم مختصر لمشروعك وجمهورك", "فكرتين مختلفتين للشعار", "تطوير الفكرة المختارة لشعار نهائي",
              "نسخ ملونة وأبيض وأسود", "ملفات بصيغ SVG و PNG شفاف و JPG و PDF"] },
    { id: "8c726817-e835-4d88-bdbb-0b5e787a6813", url: "/products/باقة-الهوية-الأساسية",
      name: "الهوية الأساسية", price: 1750, days: 7, rounds: 3, fit: "لمشروع جديد يبي بداية مرتبة",
      items: ["فكرتين للشعار وتطوير وحدة", "نظام شعار بنسخه المطلوبة", "ألوان أساسية وثانوية وخطوط عربية وإنجليزية",
              "3 تطبيقات (مثل كرت العمل والورق الرسمي)", "3 قوالب سوشال قابلة للتعديل على Canva", "دليل هوية مختصر PDF"] },
    { id: "efd89466-6f98-4041-98a5-cca7ba10f04a", url: "/products/باقة-الهوية-المتكاملة", featured: true,
      name: "الهوية المتكاملة", price: 3500, days: 10, rounds: 3, fit: "للمطاعم والمقاهي والمتاجر اللي تبي حضور كامل",
      items: ["دراسة نشاطك ومنافسيك واتجاه بصري مبني على جمهورك", "3 أفكار للشعار وتطوير وحدة", "خطوط وألوان ونظام بصري متكامل",
              "6 تطبيقات (مثل الأكواب والأكياس والمنيو)", "6 قوالب سوشال قابلة للتعديل على Canva",
              "موكابات احترافية ودليل هوية شامل", "ملفات رقمية وملفات طباعة"] },
    { id: "da2333e0-ca52-4f36-97ff-793d2c19e2eb", url: "/products/باقة-الهوية-الشاملة",
      name: "الهوية الشاملة المميزة", price: 6500, days: 20, rounds: 4, fit: "للعلامات اللي تبي هوية بأعلى مستوى",
      items: ["دراسة أعمق للجمهور والمنافسين وملخص استراتيجي", "لوحة إلهام واتجاه إبداعي معتمد", "3 أفكار للشعار ونظام شعار كامل",
              "10 تطبيقات تختارها (تغليف، لوحات، زي موحد…)", "10 قوالب سوشال قابلة للتعديل على Canva",
              "موكابات موسعة ودليل هوية تفصيلي"] },
  ];

  var MOTION = {
    url: "/products/باقة-إعلانات-الموشن-جرافيك",
    options: [
      { n: 1, label: "إعلان واحد", price: 149, days: "تسليم خلال يومين عمل", id: "e3c087c8-a5bc-467d-a82f-58ce6886c2b8" },
      { n: 3, label: "3 إعلانات", price: 399, days: "تسليم خلال 6 أيام عمل", id: "fb989474-845d-4639-a9e0-8cfb015e1588", tag: "الأكثر طلبًا" },
      { n: 6, label: "6 إعلانات", price: 749, days: "تسليم خلال 12 يوم عمل", id: "8f68ce99-e8f4-4a30-bba8-4102a68dbbcb", tag: "الأوفر" },
    ],
    items: ["كل إعلان من 10 إلى 15 ثانية", "مقاس طولي 9:16 + مقاس ثانٍ مجانًا", "تعليق صوتي سعودي مجاني، رجالي أو نسائي",
            "مؤثرات صوتية مناسبة", "جولة تعديل لكل إعلان"],
  };

  var WORKS = [
    { slug: "lahhab", name: "لهّاب", nameEn: "LAHHAB", sector: "مطعم سماش برجر · الرياض", accent: "#1C1917" },
    { slug: "medad", name: "مِداد", nameEn: "MEDAD", sector: "مقهى قهوة مختصة", accent: "#4A1520" },
    { slug: "ghina", name: "شاهي غنى", nameEn: "GHINA TEA", sector: "محل شاهي · درايف ثرو", accent: "#1E3550" },
    { slug: "asayel", name: "أصايل لاين", nameEn: "ASAYEL LINE", sector: "متجر عبايات إلكتروني", accent: "#4A3B31" },
    { slug: "areeka", name: "مستر عريكة", nameEn: "MR. AREEKA", sector: "حلويات شعبية", accent: "#5A3420", concept: true },
  ];

  var CLIENT_LOGOS = [["logos/medad.png", "مِداد"], ["logos/lahhab.png", "لهّاب"], ["logos/ghina.png", "شاهي غنى"], ["logos/asayel.png", "أصايل لاين"]];

  var SERVICES = [
    { title: "الهوية البصرية", keys: "شعار · ألوان · خطوط · دليل هوية", desc: "نبني لعلامتك شخصية واضحة تنعرف من بعيد، من فكرة الشعار لين آخر تطبيق.", img: "@v3/works/medad/logo.jpg" },
    { title: "التطبيقات والتغليف", keys: "أكواب · أكياس · علب · منيو · زي موحد", desc: "نطبق الهوية على كل شي يلمسه عميلك، بملفات جاهزة للطباعة.", img: "@v3/works/medad/menu.jpg" },
    { title: "السوشال ميديا", keys: "قوالب Canva · منشورات · ستوري", desc: "قوالب مرتبة بهويتك تعدّلها بنفسك، عشان حسابك يطلع بنفس المستوى كل يوم.", img: "@v3/works/medad/social.jpg" },
    { title: "الموشن جرافيك", keys: "إعلانات متحركة · ريلز · تيك توك", desc: "ترسل لنا صورة منتجك، ونحولها لإعلان متحرك يوقف التمرير.", img: "" },
  ];
  var PILLARS = [["فكرة قبل الشكل", "كل هوية تبدأ بفكرة تخص مشروعك، مو قالب جاهز."], ["تفاصيل مدروسة", "نراجع كل ملف قبل التسليم: الألوان والمقاسات والخطوط."], ["وضوح من البداية", "سعر واضح، خطوات واضحة، ومعاينة قبل التسليم."]];
  var STEPS = [
    ["قسم المبيعات", "نستقبل طلبك", "تختار باقتك وتدفع من المتجر، ويتواصل معك قسم المبيعات يأكد معك تفاصيل الطلب."],
    ["قسم الاستراتيجية", "نفهم مشروعك", "نرسل لك 6 أسئلة قصيرة، ونحدد الاتجاه البصري وتعتمده قبل ما نبدأ التصميم."],
    ["استوديو التصميم", "نصمم هويتك", "فريق التصميم يقدم لك أفكار الشعار، وتختار وحدة نطورها لين تصير هوية كاملة."],
    ["قسم الجودة والمراجعة", "نراجع كل تفصيلة", "نراجع الألوان والخطوط والمقاسات في كل ملف، ونرسل لك معاينة نهائية تعتمدها."],
    ["قسم التسليم والدعم", "نسلّمك ونبقى معك", "نسلّمك الملفات النهائية، ونساعدك في استخدامها 14 يوم بعد التسليم."],
  ];
  var SECTORS = [["المقاهي", "هوية تنعرف على الكوب واللوحة والمنيو."], ["المطاعم", "من الشعار لين التغليف وملابس الموظفين."], ["المتاجر الإلكترونية", "هوية وقوالب تخلّي متجرك يبان احترافي."], ["العلامات الجديدة", "بداية صحيحة لعلامتك من أول يوم."]];

  /* ===================== أدوات ===================== */
  var SPARK = '<svg class="spark" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 0 C53 32 68 47 100 50 C68 53 53 68 50 100 C47 68 32 53 0 50 C32 47 47 32 50 0Z"/></svg>';
  var sparkSvg = function (cls) { return SPARK.replace('class="spark"', 'class="' + cls + '"'); };
  var fmt = function (n) { return n.toLocaleString("en-US"); };
  var two = function (i) { return String(i + 1).padStart(2, "0"); };
  var img = function (p) { return p.charAt(0) === "@" ? "https://taalaq.github.io/" + p.slice(1) : SITE.base + p; };
  var waLink = function (t) { return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(t); };
  var ttLink = "https://www.tiktok.com/@" + SITE.tiktok;
  var TT_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" class="ico"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6z"/></svg>';
  var WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" class="ico"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.3z"/></svg>';

  /* الشراء: يضيف الباقة للسلة ويفتح السلة. لو تعذر، يفتح صفحة المنتج */
  function buy(id, url, btn) {
    var z = window.zid && window.zid.cart;
    if (!z || !z.addProduct) { location.href = url; return; }
    var old = btn.innerHTML; btn.innerHTML = "لحظة…"; btn.style.pointerEvents = "none";
    var done = function () { location.href = "/cart"; };
    Promise.resolve(z.get ? z.get().catch(function () { return null; }) : null).then(function (c) {
      var items = (c && (c.products || c.items || (c.cart && c.cart.products))) || [];
      var has = items.some(function (p) { return p && (p.product_id === id || p.id === id); });
      return has ? null : z.addProduct({ product_id: id, quantity: 1 });
    }).then(done).catch(function () { btn.innerHTML = old; btn.style.pointerEvents = ""; location.href = url; });
  }

  /* ===================== التصميم ===================== */
  var CSS = `
:host{all:initial;display:block;--ink:#111111;--ink-2:#1A1A1A;--white:#FFFFFF;--off:#F7F6F9;--lav:#9B7BC6;--lav-2:#B9A2DA;--line:#E7E2EF;--line-d:#2A2A2A;--muted:#5E5E5E;--muted-d:#A9A9A9;--radius:20px;--max:1200px}
*{box-sizing:border-box;margin:0;padding:0}
.tq{direction:rtl;text-align:right;font-family:"Alexandria",system-ui,sans-serif;background:var(--white);color:var(--ink);line-height:1.8;-webkit-font-smoothing:antialiased;overflow-x:hidden}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font-family:inherit}
.wrap{max-width:var(--max);margin:0 auto;padding:0 22px}
.spark{width:20px;height:20px;fill:var(--lav);flex:none}
.en{font-family:"Jost",sans-serif;letter-spacing:2px}
.ico{width:20px;height:20px;fill:currentColor;flex:none}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:999px;padding:14px 28px;font-weight:600;font-size:15px;transition:.25s;cursor:pointer;border:1.5px solid currentColor;font-family:inherit;min-height:50px;background:transparent;color:inherit}
.btn-lav{background:var(--lav);border-color:var(--lav);color:var(--white)}
.btn-lav:hover{background:var(--white);border-color:var(--white);color:var(--ink)}
.btn-ghost:hover{color:var(--lav-2)}
.btn-dark{background:var(--ink);border-color:var(--ink);color:var(--white)}
.btn-dark:hover{background:var(--lav);border-color:var(--lav)}
section{padding:110px 0}
.eyebrow{display:inline-flex;align-items:center;gap:10px;color:var(--lav);font-weight:600;font-size:14px;margin-bottom:14px}
.h2{font-size:clamp(30px,4.6vw,58px);font-weight:800;line-height:1.25}
.lead{color:var(--muted);font-size:17px;max-width:620px;margin-top:14px}
.dark{background:var(--ink);color:var(--white)}
.dark .lead{color:var(--muted-d)}
.off{background:var(--off)}

/* hero */
.hero{background:var(--ink);color:var(--white);min-height:calc(100svh - 64px);display:flex;align-items:center;position:relative;overflow:hidden;padding:90px 0 80px}
.hero .wrap{position:relative;z-index:1}
.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:56px;align-items:center}
.hero .badge{display:inline-flex;align-items:center;gap:10px;border:1px solid var(--line-d);border-radius:999px;padding:7px 16px;font-size:14px;color:var(--muted-d);margin-bottom:26px}
.hero .badge i{width:8px;height:8px;border-radius:50%;background:#5FD08A;box-shadow:0 0 0 0 rgba(95,208,138,.6);animation:ping 2s infinite}
@keyframes ping{70%{box-shadow:0 0 0 10px rgba(95,208,138,0)}100%{box-shadow:0 0 0 0 rgba(95,208,138,0)}}
.hero h1{font-size:clamp(40px,6.2vw,92px);line-height:1.18;font-weight:800}
.hero h1 em{font-style:normal;color:var(--lav)}
.hero p{font-size:clamp(16px,1.6vw,20px);color:var(--muted-d);max-width:620px;margin:24px 0 34px}
.hero .cta{display:flex;gap:12px;flex-wrap:wrap}
.trust{display:flex;gap:18px;flex-wrap:wrap;margin-top:30px;font-size:13.5px;color:#cfcfcf}
.trust span{display:inline-flex;align-items:center;gap:8px}
.trust .spark{width:13px;height:13px}
.hero-show{position:relative;aspect-ratio:4/5;border-radius:28px;overflow:hidden;background:#1A1A1A;box-shadow:0 30px 80px rgba(0,0,0,.45)}
.show-slide{position:absolute;inset:0;opacity:0;transition:opacity 1s;display:flex;flex-direction:column;background:#1A1A1A}
.show-slide.on{opacity:1;z-index:1}
.show-slide img{width:100%;aspect-ratio:1/1;object-fit:cover}
.show-cap{flex:1;display:flex;flex-direction:column;justify-content:center;gap:2px;padding:12px 24px;border-top:1px solid #2A2A2A;color:#fff}
.show-cap b{font-size:20px}
.show-cap small{font-size:13px;color:var(--lav-2)}
.show-slide.on .show-cap{animation:capIn .9s ease both}
@keyframes capIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.show-dots{position:absolute;top:18px;left:18px;z-index:3;display:flex;gap:6px}
.show-dots i{width:8px;height:8px;border-radius:99px;background:rgba(255,255,255,.4);transition:.4s}
.show-dots i.on{width:24px;background:var(--lav)}

/* sparks — same shapes, colours and speeds as v6 */
.hero .big-spark{position:absolute;opacity:.9;width:240px;height:240px;left:-40px;bottom:6%;fill:var(--lav);filter:drop-shadow(0 0 28px rgba(155,123,198,.75));animation:sparkSpin 9s linear infinite,sparkPulse 2.4s ease-in-out infinite}
.hero .small-spark{position:absolute;fill:#fff;width:46px;height:46px;left:44%;top:16%;filter:drop-shadow(0 0 14px rgba(255,255,255,.9));animation:twinkle 1.8s ease-in-out infinite}
@keyframes sparkSpin{to{rotate:360deg}}
@keyframes sparkPulse{0%,100%{scale:1}50%{scale:1.18}}
@keyframes twinkle{0%,100%{opacity:.15;transform:scale(.4) rotate(0)}50%{opacity:1;transform:scale(1.15) rotate(45deg)}}
@keyframes float{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-14px) rotate(10deg)}}
.hero .tw{position:absolute;fill:var(--lav-2);filter:drop-shadow(0 0 10px rgba(185,162,218,.9));animation:twinkle 2.2s ease-in-out infinite;pointer-events:none}
.hero .tw1{width:22px;height:22px;top:20%;right:6%;animation-delay:.3s}
.hero .tw2{width:16px;height:16px;top:72%;right:44%;animation-delay:1.1s;fill:#fff}
.hero .tw3{width:28px;height:28px;top:12%;left:30%;animation-delay:.7s}
.hero .tw4{width:14px;height:14px;bottom:14%;right:18%;animation-delay:1.6s;fill:#fff}
.hero .tw5{width:20px;height:20px;top:48%;left:3%;animation-delay:.2s}
.eyebrow .spark{animation:twinkleSoft 2.6s ease-in-out infinite}
@keyframes twinkleSoft{0%,100%{transform:scale(.85) rotate(0)}50%{transform:scale(1.15) rotate(90deg)}}
.closing{text-align:center;position:relative;overflow:hidden}
.closing .s1{position:absolute;right:8%;top:18%;width:90px;height:90px;fill:var(--lav)}
.closing .s2{position:absolute;left:10%;bottom:16%;width:40px;height:40px;fill:var(--white)}
.closing .s1,.closing .s2{animation:sparkSpin 10s linear infinite,sparkPulse 2.6s ease-in-out infinite;filter:drop-shadow(0 0 20px rgba(155,123,198,.7))}

/* clients */
.clients{padding:42px 0;border-bottom:1px solid var(--line)}
.clients .wrap{display:flex;align-items:center;gap:40px;flex-wrap:wrap;justify-content:space-between}
.clients-t{font-size:14px;color:var(--muted);white-space:nowrap}
.logos{display:flex;align-items:center;gap:56px;flex-wrap:wrap;flex:1;justify-content:space-around}
.logos img{height:56px;width:auto;opacity:.6;transition:.3s}
.logos img:hover{opacity:1}
.logos img[alt="أصايل لاين"]{height:72px;opacity:.75}

/* works */
.works-head{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;flex-wrap:wrap}
.swipe{display:none;font-size:13px;color:var(--muted)}
.brands{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:50px}
.brand-card{display:flex;flex-direction:column;border-radius:24px;overflow:hidden;border:1px solid var(--line);background:var(--white);transition:.4s;cursor:pointer;text-align:right;font:inherit;color:inherit;padding:0}
.brand-card:hover{transform:translateY(-6px);box-shadow:0 24px 50px rgba(17,17,17,.10)}
.bc-img{position:relative;aspect-ratio:1/1;background:var(--acc);overflow:hidden}
.bc-img img{width:100%;height:100%;object-fit:cover;transition:.8s}
.brand-card:hover .bc-img img{transform:scale(1.03)}
.tag-concept{position:absolute;top:14px;right:14px;z-index:2;background:rgba(17,17,17,.78);color:#fff;font-size:12px;padding:5px 12px;border-radius:99px}
.bc-body{padding:20px 22px 22px;display:flex;flex-direction:column;gap:4px}
.bc-body h3{font-size:21px;font-weight:800;display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}
.bc-body h3 small{font-size:11px;letter-spacing:3px;color:var(--muted);font-weight:400}
.bc-sector{color:var(--muted);font-size:14px}
.bc-more{margin-top:14px;display:flex;align-items:center;justify-content:space-between;gap:10px;background:var(--ink);color:#fff;border-radius:99px;padding:12px 20px;font-weight:600;font-size:14.5px;transition:.3s}
.bc-more i{font-style:normal;transition:.3s}
.brand-card:hover .bc-more{background:var(--lav)}
.brand-card:hover .bc-more i{transform:translateX(-6px)}

/* services */
.services{display:grid;gap:26px;margin-top:56px}
.svc{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:28px;overflow:hidden;background:var(--white);min-height:320px}
.svc:nth-child(even) .svc-img{order:-1}
.svc-body{padding:46px;display:flex;flex-direction:column;justify-content:center}
.svc-body .n{font-family:"Jost",sans-serif;color:var(--lav);font-size:14px;letter-spacing:3px}
.svc-body h3{font-size:clamp(24px,3vw,36px);font-weight:800;margin:6px 0}
.svc-body .keys{font-size:14px;color:var(--lav)}
.svc-body p{color:var(--muted);margin-top:12px;font-size:16px}
.svc-img{background:#F2EEF7;position:relative;overflow:hidden}
.svc-img img{width:100%;height:100%;object-fit:cover;transition:.8s}
.svc:hover .svc-img img{transform:scale(1.05)}
.svc-img.empty{display:flex;align-items:center;justify-content:center;background:var(--ink)}
.svc-img.empty .spark{width:120px;height:120px;animation:float 5s ease-in-out infinite}

/* about + pillars */
.about{text-align:center}
.about p{font-size:clamp(21px,2.8vw,34px);line-height:1.7;font-weight:600;max-width:900px;margin:0 auto}
.about p em{font-style:normal;color:var(--lav)}
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:52px}
.pillar{border:1px solid var(--line-d);border-radius:var(--radius);padding:32px 28px;background:var(--ink-2)}
.pillar .spark{width:28px;height:28px;margin-bottom:14px}
.pillar h3{font-size:21px;margin-bottom:8px}
.pillar p{color:var(--muted-d);font-size:15.5px}

/* timeline */
.timeline{position:relative;margin-top:56px;display:grid}
.timeline::before{content:"";position:absolute;top:10px;bottom:10px;right:27px;width:2px;background:linear-gradient(var(--lav),var(--line))}
.tl-item{display:grid;grid-template-columns:56px 1fr;gap:24px;padding:0 0 34px;position:relative}
.tl-dot{width:56px;height:56px;border-radius:50%;background:var(--ink);color:#fff;display:flex;align-items:center;justify-content:center;font-family:"Jost",sans-serif;font-weight:500;letter-spacing:1px;position:relative;z-index:1;border:4px solid var(--white)}
.tl-item:first-child .tl-dot{background:var(--lav)}
.tl-body{border:1px solid var(--line);border-radius:20px;padding:20px 24px;background:var(--white)}
.tl-dep{display:inline-block;font-size:13px;font-weight:700;color:var(--lav);background:#F2ECF9;border-radius:99px;padding:3px 14px;margin-bottom:8px}
.tl-body h3{font-size:20px;font-weight:700}
.tl-body p{color:var(--muted);font-size:15.5px;margin-top:4px}

/* packages */
.packs{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;align-items:stretch;margin-top:56px}
.pack{border:1px solid var(--line);border-radius:var(--radius);padding:30px 24px;display:flex;flex-direction:column;background:var(--white);position:relative}
.pack.featured{background:var(--ink);color:var(--white);border-color:var(--ink);box-shadow:0 24px 60px rgba(17,17,17,.18)}
.pack.featured .fit,.pack.featured .days,.pack.featured .price small,.pack.featured .more{color:var(--muted-d)}
.pack .badge{position:absolute;top:-13px;right:22px;background:var(--lav);color:var(--white);font-size:12.5px;padding:3px 14px;border-radius:999px}
.pack h3{font-size:20px;font-weight:700}
.pack .fit{font-size:14px;color:var(--muted);min-height:46px;margin-top:4px}
.pack .price{font-size:40px;font-weight:800;margin:14px 0 4px;display:flex;align-items:baseline;gap:8px;font-family:"Jost","Alexandria",sans-serif}
.pack .price small{font-size:15px;font-weight:400;color:var(--muted);font-family:"Alexandria",sans-serif}
.pack .days{font-size:13.5px;color:var(--muted);margin-bottom:16px}
.pack ul{list-style:none;flex:1;display:grid;gap:10px;font-size:14.5px;margin-bottom:22px;align-content:start}
.pack li{display:flex;gap:10px;align-items:flex-start}
.pack li svg{width:13px;height:13px;fill:var(--lav);margin-top:7px;flex:none}
.pack .btn{width:100%}
.pack:not(.featured) .btn{background:var(--ink);border-color:var(--ink);color:#fff}
.pack:not(.featured) .btn:hover{background:var(--lav);border-color:var(--lav)}
.pack.featured .btn{background:var(--lav);border-color:var(--lav);color:var(--white)}
.pack .more{display:block;text-align:center;font-size:13.5px;color:var(--muted);margin-top:12px;text-decoration:underline;text-underline-offset:4px}
.note{font-size:13.5px;color:var(--muted);margin-top:24px}
.sub{font-size:26px;font-weight:800;margin-top:80px;display:flex;align-items:center;gap:12px}

/* motion — one package */
.mo{margin-top:24px;display:grid;grid-template-columns:1.1fr .9fr;border-radius:28px;overflow:hidden;background:var(--ink);color:#fff;position:relative}
.mo-l{padding:40px}
.mo-l h3{font-size:26px;font-weight:800}
.mo-l p{color:var(--muted-d);font-size:15px;margin-top:6px}
.mo-l ul{list-style:none;display:grid;gap:10px;margin-top:22px;font-size:15px}
.mo-l li{display:flex;gap:10px;align-items:flex-start}
.mo-l li svg{width:13px;height:13px;fill:var(--lav);margin-top:7px;flex:none}
.mo-r{padding:40px;background:var(--ink-2);border-right:1px solid var(--line-d);display:flex;flex-direction:column;gap:18px;justify-content:center}
.seg-t{font-size:14px;color:var(--muted-d)}
.seg{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.seg button{position:relative;border:1.5px solid var(--line-d);background:transparent;color:#fff;border-radius:16px;padding:14px 6px;cursor:pointer;font-size:15px;font-weight:600;transition:.25s;min-height:64px}
.seg button small{display:block;font-size:12px;font-weight:400;color:var(--muted-d)}
.seg button em{position:absolute;top:-10px;left:50%;transform:translateX(-50%);white-space:nowrap;font-style:normal;font-size:10.5px;background:var(--lav);color:#fff;border-radius:99px;padding:1px 8px}
.seg button.on{border-color:var(--lav);background:rgba(155,123,198,.16)}
.mo-price{display:flex;align-items:baseline;gap:10px}
.mo-price b{font-size:52px;font-weight:800;font-family:"Jost","Alexandria",sans-serif;line-height:1.1;transition:.2s}
.mo-price small{color:var(--muted-d);font-size:15px}
.mo-meta{font-size:14px;color:var(--lav-2)}
.mo .btn{width:100%}

/* sectors */
.sectors{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:52px}
.sector{border:1px solid var(--line);border-radius:var(--radius);padding:28px 24px;background:var(--white);transition:.25s}
.sector:hover{border-color:var(--lav);transform:translateY(-4px)}
.sector .num{font-family:"Jost",sans-serif;color:var(--lav);font-size:13px;letter-spacing:3px}
.sector h3{font-size:20px;margin:6px 0}
.sector p{color:var(--muted);font-size:15px}

/* closing */
.closing .h2{font-size:clamp(36px,6vw,80px)}
.closing p{color:var(--muted-d);margin:16px auto 34px;max-width:520px;font-size:18px}
.closing .cta{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}

/* sticky mobile bar */
.mbar{position:fixed;left:12px;right:12px;bottom:12px;z-index:40;display:none;gap:10px;padding:10px;border-radius:22px;background:rgba(17,17,17,.94);backdrop-filter:blur(12px);box-shadow:0 14px 40px rgba(0,0,0,.35);transform:translateY(140%);transition:transform .4s}
.mbar.show{transform:none}
.mbar .btn{flex:1;min-height:48px;padding:10px 14px;font-size:14.5px}
.mbar .wa{flex:0 0 52px;padding:0;background:#25D366;border-color:#25D366;color:#fff}

/* guide viewer */
.gv{position:fixed;inset:0;z-index:2147483000;background:#0d0d0d;overflow-y:auto;display:none;direction:rtl;font-family:"Alexandria",system-ui,sans-serif;color:#fff;-webkit-overflow-scrolling:touch}
.gv.open{display:block}
.gv-top{position:sticky;top:0;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 18px;background:rgba(13,13,13,.94);backdrop-filter:blur(10px);border-bottom:1px solid #222}
.gv-top b{font-size:16px}
.gv-top small{display:block;font-size:12px;color:var(--muted-d);font-weight:400}
.gv-top button{background:var(--lav);color:#fff;border:0;border-radius:99px;padding:10px 20px;font:600 14px "Alexandria",sans-serif;cursor:pointer;min-height:44px}
.gv-pages{max-width:880px;margin:0 auto;padding:18px 14px 30px;display:grid;gap:14px}
.gv-pages img{width:100%;height:auto;border-radius:14px;background:#1a1a1a}
.gv-count{text-align:center;font-size:13px;color:var(--muted-d);padding-top:4px}
.gv-soon{text-align:center;color:var(--muted-d);font-size:15px;padding:6px 10px 0}
.gv-cta{max-width:880px;margin:0 auto 40px;padding:30px 22px;border-radius:24px;background:var(--ink-2);border:1px solid #2a2a2a;text-align:center}
.gv-cta h3{font-size:24px;font-weight:800}
.gv-cta p{color:var(--muted-d);margin:8px 0 18px}
.gv-cta .btn{margin:4px}

/* reveal */
.reveal{opacity:0;transform:translateY(30px);transition:opacity .8s ease,transform .8s ease}
.reveal.in{opacity:1;transform:none}

/* responsive */
@media (max-width:1050px){.packs{grid-template-columns:repeat(2,1fr)}.sectors{grid-template-columns:repeat(2,1fr)}.brands{grid-template-columns:repeat(2,1fr)}.mo{grid-template-columns:1fr}.mo-r{border-right:0;border-top:1px solid var(--line-d)}}
@media (max-width:860px){
  section{padding:72px 0}
  .hero{padding:56px 0 64px;min-height:auto}
  .hero-grid{grid-template-columns:1fr;gap:36px}
  .hero .cta .btn{flex:1}
  .hero .big-spark{width:130px;height:130px;left:-30px;bottom:auto;top:90px;opacity:.55}
  .hero .small-spark{left:8%;top:30%;width:30px;height:30px}
  .hero .tw3,.hero .tw5,.closing .s1,.closing .s2{display:none}
  .svc{grid-template-columns:1fr}.svc:nth-child(even) .svc-img{order:0}.svc-img{min-height:220px;aspect-ratio:16/10}.svc-body{padding:28px 24px}
  .pillars{grid-template-columns:1fr}
  .clients .wrap{flex-direction:column;gap:22px;justify-content:center;text-align:center}
  .logos{display:grid;grid-template-columns:1fr 1fr;gap:28px 20px;justify-items:center;width:100%}
  .logos img{height:40px}.logos img[alt="أصايل لاين"]{height:54px}
  .tl-item{grid-template-columns:44px 1fr;gap:14px}.tl-dot{width:44px;height:44px;font-size:13px}.timeline::before{right:21px}
  .swipe{display:block}
  .brands{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:14px;margin:36px -22px 0;padding:0 22px 14px;scrollbar-width:none}
  .brands::-webkit-scrollbar{display:none}
  .brand-card{flex:0 0 84%;scroll-snap-align:center}
  .packs{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:14px;margin:40px -22px 0;padding:16px 22px 14px;scrollbar-width:none}
  .packs::-webkit-scrollbar{display:none}
  .pack{flex:0 0 86%;scroll-snap-align:center}
  .pack .fit{min-height:0}
  .mo-l,.mo-r{padding:28px 22px}
  .mo-price b{font-size:44px}
  .mbar{display:flex}
  .tq{padding-bottom:84px}
}
@media (max-width:560px){.sectors{grid-template-columns:1fr}.hero h1{font-size:40px}}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
`;

  /* ===================== الصفحة ===================== */
  var MAIN = `
  <section class="hero">
    <i data-spark="big-spark"></i><i data-spark="small-spark"></i><i data-spark="tw tw1"></i><i data-spark="tw tw2"></i><i data-spark="tw tw3"></i><i data-spark="tw tw4"></i><i data-spark="tw tw5"></i>
    <div class="wrap hero-grid">
      <div class="hero-text">
        <div class="badge"><i></i> نستقبل مشاريع جديدة</div>
        <h1>تألّق في هويتك <em>البصرية.</em></h1>
        <p>منصة تألّق تصمم لمشروعك هوية بصرية تنعرف من أول نظرة، من الشعار لين الكوب والكيس وقوالب السوشال. مشروعك يستاهل يلمع، وإحنا نخليه يلمع.</p>
        <div class="cta">
          <a class="btn btn-lav" href="#packages">اختر باقتك</a>
          <a class="btn btn-ghost" href="#works">شوف أعمالنا</a>
        </div>
        <div class="trust"><span>${SPARK} أسعار واضحة بدون رسوم مخفية</span><span>${SPARK} معاينة قبل التسليم</span><span>${SPARK} دفع آمن من متجر زد</span></div>
      </div>
      <div class="hero-show" id="show"></div>
    </div>
  </section>

  <section class="clients"><div class="wrap"><span class="clients-t">عملاء وثقوا في تألّق</span><div class="logos" id="logos"></div></div></section>

  <section id="works" class="off">
    <div class="wrap">
      <div class="works-head"><div><div class="eyebrow"><i data-spark="spark"></i> أعمالنا</div>
        <h2 class="h2">هويات صممناها،<br>وكل وحدة لها قصة.</h2></div><span class="swipe">← اسحب لمشاهدة كل الأعمال</span></div>
      <div class="brands" id="mosaic"></div>
    </div>
  </section>

  <section id="services">
    <div class="wrap">
      <div class="eyebrow"><i data-spark="spark"></i> خدماتنا</div>
      <h2 class="h2">كل اللي تحتاجه علامتك<br>تحت سقف واحد.</h2>
      <div class="services" id="services-list"></div>
    </div>
  </section>

  <section class="about off"><div class="wrap reveal"><div class="eyebrow"><i data-spark="spark"></i> من نحن</div>
    <p>احنا في تألّق نؤمن إن الهوية مو مجرد شعار جميل، هي <em>اللمعة</em> اللي تخلّي الناس يتذكرون علامتك ويرجعون لها.</p></div></section>

  <section class="dark"><div class="wrap"><div class="eyebrow"><i data-spark="spark"></i> طريقتنا</div>
    <h2 class="h2">نشتغل بهدوء،<br>ونسلّم شي يلمع.</h2><div class="pillars" id="pillars"></div></div></section>

  <section id="how"><div class="wrap"><div class="eyebrow"><i data-spark="spark"></i> كيف نشتغل</div>
    <h2 class="h2">فريق كامل يشتغل<br>على هويتك.</h2>
    <p class="lead">مشروعك يمر على أقسام منصة تألّق، كل قسم مسؤول عن مرحلة لين تستلم هويتك.</p>
    <div class="timeline" id="steps"></div></div></section>

  <section id="packages" class="off">
    <div class="wrap">
      <div class="works-head"><div><div class="eyebrow"><i data-spark="spark"></i> الباقات</div>
        <h2 class="h2">أسعار واضحة،<br>بدون رسوم مخفية.</h2></div><span class="swipe">← اسحب لمشاهدة كل الباقات</span></div>
      <div class="packs" id="packs"></div>
      <p class="note">تختار فكرة شعار وحدة ونطورها لشعار نهائي. جولة التعديل = ملاحظاتك كلها مجموعة في رسالة وحدة. الطباعة غير مشمولة. نساعدك في استخدام ملفاتك 14 يوم بعد التسليم.</p>
      <div class="sub" id="motion-t"><i data-spark="spark"></i> إعلانات الموشن جرافيك</div>
      <div class="mo" id="motion"></div>
    </div>
  </section>

  <section><div class="wrap"><div class="eyebrow"><i data-spark="spark"></i> القطاعات</div>
    <h2 class="h2">نفهم نشاطك قبل ما نصمم له.</h2><div class="sectors" id="sectors"></div></div></section>

  <section id="contact" class="dark closing">
    <i data-spark="s1"></i><i data-spark="s2"></i>
    <div class="wrap reveal">
      <h2 class="h2">خلّنا نبدأ مشروعك.</h2>
      <p>اختر باقتك وادفع من المتجر، أو راسلنا واتساب ونساعدك تختار الباقة المناسبة.</p>
      <div class="cta">
        <a class="btn btn-lav" href="#packages">اختر باقتك</a>
        <a class="btn btn-ghost" data-wa="السلام عليكم، حاب أستفسر عن تصميم هوية" target="_blank" rel="noopener">${WA_ICON} واتساب</a>
        <a class="btn btn-ghost" data-tt target="_blank" rel="noopener">${TT_ICON} تيك توك</a>
      </div>
    </div>
  </section>

  <div class="mbar" id="mbar"><a class="btn btn-lav" href="#packages">اختر باقتك الآن</a><a class="btn wa" data-wa="السلام عليكم، حاب أستفسر عن تصميم هوية" target="_blank" rel="noopener" aria-label="واتساب">${WA_ICON}</a></div>

  <div class="gv" id="gv" role="dialog" aria-modal="true"><div class="gv-top"><div><b id="gv-name"></b><small>دليل الهوية البصرية</small></div><button type="button" data-close>✕ رجوع</button></div><div id="gv-body"></div></div>
`;

  /* ===================== البناء ===================== */
  var R = {
    show: function (el) {
      el.innerHTML = WORKS.map(function (w, i) {
        return '<a class="show-slide ' + (i ? "" : "on") + '" href="#tq-guide=' + w.slug + '"><img src="' + img("works/" + w.slug + ".jpg") + '" alt="هوية ' + w.name + '"><span class="show-cap"><b>' + w.name + '</b><small>' + w.sector + '</small></span></a>';
      }).join("") + '<div class="show-dots">' + WORKS.map(function (_, i) { return '<i class="' + (i ? "" : "on") + '"></i>'; }).join("") + "</div>";
      var k = 0, sl = el.querySelectorAll(".show-slide"), dt = el.querySelectorAll(".show-dots i");
      setInterval(function () { sl[k].classList.remove("on"); dt[k].classList.remove("on"); k = (k + 1) % sl.length; sl[k].classList.add("on"); dt[k].classList.add("on"); }, 4500);
    },
    logos: function (el) { el.innerHTML = CLIENT_LOGOS.map(function (l) { return '<img src="' + SITE.v3 + "works/" + l[0] + '" alt="' + l[1] + '" title="' + l[1] + '">'; }).join(""); },
    mosaic: function (el) {
      el.innerHTML = WORKS.map(function (w) {
        return '<a class="brand-card reveal" href="#tq-guide=' + w.slug + '" style="--acc:' + w.accent + '"><div class="bc-img"><img src="' + img("works/" + w.slug + ".jpg") + '" alt="هوية ' + w.name + '" loading="lazy">' +
          (w.concept ? '<span class="tag-concept">مشروع مفهومي</span>' : "") + '</div><div class="bc-body"><h3>' + w.name + ' <small class="en">' + w.nameEn + '</small></h3><span class="bc-sector">' + w.sector +
          '</span><span class="bc-more">اضغط لتصفح دليل الهوية <i>←</i></span></div></a>';
      }).join("");
    },
    services: function (el) {
      el.innerHTML = SERVICES.map(function (s, i) {
        return '<div class="svc reveal"><div class="svc-body"><span class="n">' + two(i) + '</span><h3>' + s.title + '</h3><div class="keys">' + s.keys + '</div><p>' + s.desc + '</p></div><div class="svc-img ' + (s.img ? "" : "empty") + '">' +
          (s.img ? '<img src="' + img(s.img) + '" alt="' + s.title + '" loading="lazy">' : SPARK) + "</div></div>";
      }).join("");
    },
    pillars: function (el) { el.innerHTML = PILLARS.map(function (p) { return '<div class="pillar reveal">' + SPARK + "<h3>" + p[0] + "</h3><p>" + p[1] + "</p></div>"; }).join(""); },
    steps: function (el) { el.innerHTML = STEPS.map(function (s, i) { return '<div class="tl-item reveal"><div class="tl-dot">' + two(i) + '</div><div class="tl-body"><span class="tl-dep">' + s[0] + "</span><h3>" + s[1] + "</h3><p>" + s[2] + "</p></div></div>"; }).join(""); },
    sectors: function (el) { el.innerHTML = SECTORS.map(function (s, i) { return '<div class="sector reveal"><span class="num">' + two(i) + "</span><h3>" + s[0] + "</h3><p>" + s[1] + "</p></div>"; }).join(""); },
    packs: function (el) {
      var list = PACKAGES.slice();
      if (matchMedia("(max-width:860px)").matches) list.sort(function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); });
      el.innerHTML = list.map(function (p) {
        return '<div class="pack reveal ' + (p.featured ? "featured" : "") + '">' + (p.featured ? '<span class="badge">الأكثر طلبًا للمقاهي والمطاعم</span>' : "") +
          "<h3>" + p.name + '</h3><div class="fit">' + p.fit + '</div><div class="price">' + fmt(p.price) + ' <small>ريال</small></div><div class="days">مدة التنفيذ التقريبية: ' + p.days + " أيام عمل · " + p.rounds + " جولات تعديل</div><ul>" +
          p.items.map(function (i) { return "<li>" + SPARK.replace('class="spark"', "") + "<span>" + i + "</span></li>"; }).join("") +
          '</ul><button type="button" class="btn" data-buy="' + p.id + '" data-url="' + p.url + '">اطلب الباقة الآن</button><a class="more" href="' + p.url + '">تفاصيل الباقة</a></div>';
      }).join("");
    },
    motion: function (el) {
      var o = MOTION.options;
      el.innerHTML = '<div class="mo-l"><h3>باقة إعلانات الموشن جرافيك</h3><p>نحوّل صورة منتجك العادية إلى إعلان موشن احترافي جاهز للنشر.</p><ul>' +
        MOTION.items.map(function (i) { return "<li>" + SPARK.replace('class="spark"', "") + "<span>" + i + "</span></li>"; }).join("") + "</ul></div>" +
        '<div class="mo-r"><div class="seg-t">اختر عدد الإعلانات</div><div class="seg">' +
        o.map(function (x, i) { return '<button type="button" data-n="' + i + '" class="' + (i === 1 ? "on" : "") + '">' + (x.tag ? "<em>" + x.tag + "</em>" : "") + x.label + "<small>" + fmt(x.price) + " ريال</small></button>"; }).join("") +
        '</div><div class="mo-price"><b id="mo-p"></b><small>ريال</small></div><div class="mo-meta" id="mo-m"></div>' +
        '<button type="button" class="btn btn-lav" id="mo-buy">اطلب الآن</button><a class="more" style="color:var(--muted-d);font-size:13.5px;text-align:center;text-decoration:underline" href="' + MOTION.url + '">تفاصيل الباقة</a></div>';
      var set = function (i) {
        var x = o[i], per = Math.round(x.price / x.n);
        el.querySelectorAll(".seg button").forEach(function (b) { b.classList.toggle("on", +b.dataset.n === i); });
        el.querySelector("#mo-p").textContent = fmt(x.price);
        el.querySelector("#mo-m").textContent = (x.n > 1 ? per + " ريال للإعلان · " : "") + x.days;
        var bb = el.querySelector("#mo-buy"); bb.dataset.buy = x.id; bb.dataset.url = MOTION.url; bb.textContent = "اطلب " + x.label + " الآن";
      };
      el.querySelectorAll(".seg button").forEach(function (b) { b.addEventListener("click", function () { set(+b.dataset.n); }); });
      set(1);
    },
  };

  /* ===================== التشغيل ===================== */
  function mount() {
    if (document.getElementById("tq-home") && document.getElementById("tq-home").shadowRoot && document.getElementById("tq-home").dataset.v === "7") return;
    if (!document.querySelector("link[data-tq-fonts]")) {
      var l = document.createElement("link"); l.rel = "stylesheet"; l.setAttribute("data-tq-fonts", "");
      l.href = "https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&family=Jost:wght@300;400;500&display=swap";
      document.head.appendChild(l);
    }
    var host = document.getElementById("tq-home");
    var target = document.querySelector("main") || document.querySelector("#main");
    if (!host) {
      host = document.createElement("div"); host.id = "tq-home";
      if (target) target.insertBefore(host, target.firstChild); else document.body.prepend(host);
    }
    if (target) Array.prototype.forEach.call(target.children, function (c) { if (c !== host) c.style.display = "none"; });
    host.dataset.v = "7";
    var root = host.shadowRoot || host.attachShadow({ mode: "open" });
    root.innerHTML = "<style>" + CSS + '</style><div class="tq">' + MAIN + "</div>";
    var q = function (s) { return root.querySelector(s); }, qa = function (s) { return root.querySelectorAll(s); };

    ["show", "logos", "mosaic", "services", "pillars", "steps", "sectors", "packs", "motion"].forEach(function (id) {
      var el = root.getElementById(id === "services" ? "services-list" : id); if (el) R[id](el);
    });
    qa("[data-wa]").forEach(function (a) { a.href = waLink(a.dataset.wa); });
    qa("[data-tt]").forEach(function (a) { a.href = ttLink; });
    qa("[data-spark]").forEach(function (s) { s.outerHTML = sparkSvg(s.dataset.spark || "spark"); });

    /* ظهور العناصر عند التمرير */
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.1 });
    qa(".reveal").forEach(function (r) { io.observe(r); });

    /* شريط الطلب في الجوال: يظهر بعد الواجهة ويختفي عند الباقات */
    var bar = q("#mbar"), hero = q(".hero"), packs = q("#packages");
    var inPacks = false, pastHero = false;
    var upd = function () { bar.classList.toggle("show", pastHero && !inPacks); };
    new IntersectionObserver(function (es) { pastHero = !es[0].isIntersecting; upd(); }).observe(hero);
    new IntersectionObserver(function (es) { inPacks = es[0].isIntersecting; upd(); }, { threshold: 0.05 }).observe(packs);

    /* دليل الهوية */
    var gv = q("#gv"), MAN = null;
    var manP = fetch(SITE.base + "guides/manifest.json", { cache: "no-store" }).then(function (r) { return r.json(); }).then(function (j) { MAN = j; return j; }).catch(function () { MAN = {}; return MAN; });
    function openGuide(slug) {
      var w = WORKS.find(function (x) { return x.slug === slug; }); if (!w) return;
      q("#gv-name").textContent = w.name + " · " + w.nameEn;
      var body = q("#gv-body");
      body.innerHTML = '<div class="gv-pages"><img src="' + img("works/" + w.slug + ".jpg") + '" alt="هوية ' + w.name + '"></div>';
      gv.classList.add("open"); gv.scrollTop = 0; document.documentElement.style.overflow = "hidden";
      manP.then(function () {
        var g = MAN && MAN[slug], h = "";
        if (g && g.pages) {
          for (var i = 1; i <= g.pages; i++) h += '<img loading="lazy" width="' + g.w + '" height="' + g.h + '" src="' + img("guides/" + slug + "/p-" + String(i).padStart(2, "0") + ".jpg") + '" alt="' + w.name + " — صفحة " + i + '">';
          body.innerHTML = '<div class="gv-pages">' + h + '<div class="gv-count">' + g.pages + " صفحة من دليل هوية " + w.name + "</div></div>";
        } else {
          body.firstChild.insertAdjacentHTML("beforeend", '<div class="gv-soon">صفحات الدليل الكاملة لهذي الهوية تنضاف قريبًا.</div>');
        }
        body.insertAdjacentHTML("beforeend", '<div class="gv-cta"><h3>تبي هوية بنفس المستوى؟</h3><p>اختر باقتك وادفع من المتجر، ونبدأ مشروعك.</p><a class="btn btn-lav" href="#packages" data-close>اختر باقتك</a> <a class="btn btn-ghost" style="color:#fff" target="_blank" rel="noopener" href="' + waLink("السلام عليكم، شفت هوية " + w.name + " وحاب أطلب هوية لمشروعي") + '">' + WA_ICON + " واتساب</a></div>");
      });
    }
    function closeGuide() { gv.classList.remove("open"); document.documentElement.style.overflow = ""; }
    function scrollTo(id) { var t = root.getElementById(id); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); }

    root.addEventListener("click", function (e) {
      var a = e.target.closest("a,button"); if (!a) return;
      var href = a.getAttribute("href") || "";
      if (a.dataset.buy) { e.preventDefault(); buy(a.dataset.buy, a.dataset.url, a); return; }
      if (a.hasAttribute("data-close")) {
        e.preventDefault(); closeGuide();
        if (location.hash.indexOf("#tq-guide=") === 0) history.replaceState(null, "", location.pathname + location.search);
        if (href.length > 1) setTimeout(function () { scrollTo(href.slice(1)); }, 60);
        return;
      }
      if (href.indexOf("#tq-guide=") === 0) { e.preventDefault(); history.pushState(null, "", href); openGuide(href.split("=")[1]); return; }
      if (href.charAt(0) === "#" && href.length > 1) { e.preventDefault(); scrollTo(href.slice(1)); }
    });
    addEventListener("popstate", function () { var m = location.hash.match(/^#tq-guide=(.+)$/); m ? openGuide(m[1]) : closeGuide(); });
    addEventListener("keydown", function (e) { if (e.key === "Escape") closeGuide(); });
    var m = location.hash.match(/^#tq-guide=(.+)$/); if (m) openGuide(m[1]);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount); else mount();
})();
