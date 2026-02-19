export default function Welcome() {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20 mb-5">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            مرحبًا بك في قمرة
          </h1>
          <p className="mt-3 text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
            قمرة هي منصة تجارة إلكترونية متكاملة تمكّنك من بناء تطبيقات قوية
            لتوسيع إمكانيات المتاجر الإلكترونية. هذا هو تطبيقك الافتراضي — ابدأ
            بالتعديل عليه وبنائه حسب احتياجاتك.
          </p>
        </div>

        {/* Quick Start */}
        <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm mb-5 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h2 className="text-[15px] font-semibold text-gray-800">ابدأ بسرعة</h2>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "استكشف بنية المشروع",
                  desc: "تصفّح مجلد app/routes لفهم كيفية عمل التوجيه. كل ملف يمثّل صفحة.",
                },
                {
                  step: "2",
                  title: "عدّل صفحة الإعدادات",
                  desc: "اذهب إلى صفحة الإعدادات لترى مثالًا عمليًا على استخدام أدوات قمرة.",
                },
                {
                  step: "3",
                  title: "أضف صفحة جديدة",
                  desc: "أنشئ ملفًا جديدًا مثل _app.orders.tsx في مجلد routes وسيظهر تلقائيًا.",
                },
                {
                  step: "4",
                  title: "انشر تطبيقك",
                  desc: "عند الانتهاء، استخدم qumra deploy لنشر تطبيقك على متجر قمرة.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="pt-0.5">
                    <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Available Hooks */}
        <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm mb-5 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </div>
              <div>
                <h2 className="text-[15px] font-semibold text-gray-800">الأدوات المتاحة</h2>
                <p className="text-xs text-gray-400">من مكتبة @qumra/jisr</p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {[
              {
                name: "useSaveBar",
                desc: "شريط الحفظ والتراجع — يظهر عند تعديل البيانات ويدير عمليات الحفظ والإلغاء.",
                color: "emerald",
              },
              {
                name: "useToast",
                desc: "إشعارات فورية — لعرض رسائل النجاح أو الخطأ للمستخدم.",
                color: "blue",
              },
              {
                name: "useModal",
                desc: "نوافذ حوار — لتأكيد الإجراءات الحساسة مثل الحذف.",
                color: "amber",
              },
              {
                name: "useFullscreen",
                desc: "وضع ملء الشاشة — لتوسيع واجهة التطبيق.",
                color: "violet",
              },
              {
                name: "useNavigationMenu",
                desc: "قائمة التنقل — لإدارة عناصر القائمة الجانبية ديناميكيًا.",
                color: "rose",
              },
            ].map((hook) => (
              <div key={hook.name} className="px-6 py-4 flex items-start gap-3">
                <div className={`flex-shrink-0 mt-0.5 w-2 h-2 rounded-full bg-${hook.color}-500`} />
                <div>
                  <code className="text-sm font-semibold text-gray-800" dir="ltr">
                    {hook.name}
                  </code>
                  <p className="text-sm text-gray-500 mt-0.5">{hook.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              اذهب إلى{" "}
              <a href="/settings" className="text-emerald-600 font-medium hover:underline">
                صفحة الإعدادات
              </a>{" "}
              لترى هذه الأدوات تعمل فعليًا.
            </p>
          </div>
        </div>

        {/* Project Structure */}
        <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm mb-5 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
              </div>
              <h2 className="text-[15px] font-semibold text-gray-800">بنية المشروع</h2>
            </div>
          </div>

          <div className="p-6">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto" dir="ltr">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
{`app/
├── routes/
│   ├── _app.tsx          # Layout رئيسي + مصادقة
│   ├── _app._index.tsx   # هذه الصفحة (الرئيسية)
│   ├── _app.settings.tsx # صفحة الإعدادات (مثال)
│   └── auth.$.tsx        # مسار المصادقة
├── root.tsx              # جذر التطبيق
├── qumra.server.ts       # إعداد SDK
└── app.css               # الأنماط العامة`}
              </pre>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="https://docs.qumra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl border border-gray-200/80 shadow-sm p-5 hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-500/5 transition-all duration-200"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition-colors">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-800">التوثيق</h3>
            <p className="text-xs text-gray-400 mt-1">دليل شامل لتطوير التطبيقات</p>
          </a>

          <a
            href="https://docs.qumra.com/api"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl border border-gray-200/80 shadow-sm p-5 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-200"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-800">مرجع API</h3>
            <p className="text-xs text-gray-400 mt-1">واجهات البرمجة والـ GraphQL</p>
          </a>

          <a
            href="https://github.com/nicespace-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl border border-gray-200/80 shadow-sm p-5 hover:border-violet-300 hover:shadow-md hover:shadow-violet-500/5 transition-all duration-200"
          >
            <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center mb-3 group-hover:bg-violet-100 transition-colors">
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-800">أمثلة</h3>
            <p className="text-xs text-gray-400 mt-1">تطبيقات نموذجية للاستلهام</p>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            مبني بواسطة قمرة CLI &middot; React Router &middot; Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
