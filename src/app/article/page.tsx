import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "کڈٹ کالج پشین - تعلیم اور کردار سازی | Cadet College Pishin",
  description: "کڈٹ کالج پشین کی اردو مضمون - تعلیم اور کردار سازی",
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="text-center mb-10">
              <h1 className="urdu-font text-3xl sm:text-4xl text-primary mb-4 leading-relaxed">
                کڈٹ کالج پشین: تعلیم اور کردار سازی کا مرکز
              </h1>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="urdu-font text-lg text-gray-800 leading-loose space-y-6 text-right">
              <p>
                کڈٹ کالج پشین جو 2011 میں قائم کیا گیا، بلوچستان کے نوجوانوں کے لیے ایک مثالی تعلیمی ادارہ ہے۔
                یہ کالج نہ صرف تعلیمی معیار بلکہ کردار سازی اور قیادت کی صلاحیتوں کو فروغ دینے پر بھی خصوصی توجہ دیتی ہے۔
              </p>

              <p>
                کالج کا مقصد ایسے نوجوانوں کی تیاری ہے جو مستقبل میں پاکستان کی خدمت کر سکیں۔
                یہاں طلباء کو نہ صرف کتابی علم دیا جاتا ہے بلکہ انہیں اخلاقی اقدار، نظم و ضبط، اور ذمہ داری کا درس بھی دیا جاتا ہے۔
              </p>

              <p>
                کڈٹ کالج پشین میں جدید سائنس لیبارٹریز، کمپیوٹر لیب، لائبریری، اور کھیلوں کے وسیع سہولیات موجود ہیں۔
                طلباء کو فٹ بال، کرکٹ، ہاکی، ایتھلیٹکس، اور دیگر کھیلوں میں تربیت دی جاتی ہے۔
              </p>

              <p>
                کالج کے اساتذہ انتہائی قابل اور تجربہ کار ہیں جو طلباء کی فکری اور عملی صلاحیتوں کو نکھارنے میں مصروف عمل ہیں۔
                ہر سال بورڈ امتحانات میں کالج کے طلباء شاندار نتائج حاصل کرتے ہیں۔
              </p>

              <p>
                کڈٹ کالج پشین کا شعار ہے: &quot;تعلیم، نظم، قیادت&quot;۔
                یہ کالج ہر سال سینکڑوں نوجوانوں کو تیار کرتی ہے جو ملک و قوم کی خدمت میں اپنا کردار ادا کرتے ہیں۔
              </p>

              <p>
                اگر آپ اپنے بچے کا مستقبل روشن دیکھنا چاہتے ہیں تو کڈٹ کالج پشین بہترین انتخاب ہے۔
                یہاں تعلیم کا سفر صرف ڈگری حاصل کرنے تک محدود نہیں بلکہ ایک مکمل انسان بننے تک جاری رہتا ہے۔
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} کڈٹ کالج پشین - جملہ حقوق محفوظ ہیں
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
