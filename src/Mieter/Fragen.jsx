import React from 'react';

const faqs = [
  {
    question: 'ما الذي يحدث بعد تعبئة النموذج؟',
    answer: 'نقوم بمراجعة بياناتك، ثم نتواصل معك خلال 15 دقيقة لتقديم عرض مناسب بناءً على توفر الغرف.'
  },
  {
    question: 'كيف يتم التواصل معنا؟',
    answer: 'عبر الهاتف أو البريد الإلكتروني بعد إرسال النموذج، وسنكون متاحين للإجابة على أي استفسار.'
  },
  {
    question: 'هل يمكن تعديل أو إلغاء الحجز؟',
    answer: 'نعم، يمكنك تعديل أو إلغاء الحجز قبل موعد الوصول بـ 24 ساعة دون رسوم إضافية.'
  },
  {
    question: 'ما هي خيارات الدفع المتاحة؟',
    answer: 'نقبل التحويل البنكي، الدفع الإلكتروني، والدفع النقدي عند الوصول.'
  },
  {
    question: 'هل هناك حد أدنى لمدة الإيجار؟',
    answer: 'نعم، الحد الأدنى هو ليلة واحدة، ويمكن الحجز لفترات أطول حسب الحاجة.'
  }
];

export default function Fragen() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">الأسئلة الشائعة</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
            <summary className="cursor-pointer text-lg font-medium text-gray-700 hover:text-blue-600 transition">
              {faq.question}
            </summary>
            <p className="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="text-gray-700">لم تجد إجابتك؟</p>
        <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          تواصل معنا
        </button>
      </div>
    </div>
  );
}