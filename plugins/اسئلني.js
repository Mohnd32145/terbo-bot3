let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 سؤال 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「〘𝑻𝑼𝑹𝑩𝑶﹝⚡️﹞𝑩𝑶𝑻〙」─*`, m)
}
handler.help = ['reto']
handler.tags = ['fun']
handler.command = /اسئلني/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 global.bucin = [ 
 "تتوقع حد يسأل عليك لو قفلت فترة ؟", 
 "اكتر كذبة مشهوره عندك", 
 "حاجة مستحيل تاكلها ", 
 "ايه الوحش ف الحياة ؟", 
 "عندك استعداد تساعك مراتك او امك في البيت (كنس - طبخ - غسيل )؟", 
 "اعلي مجموع جبته فحياتك ؟", 
 "اكتر حاجة خايف تخسرها ؟", 
 " لو قدامك تغير حاجه ف الحياة ف ايه هي ؟",  
 "عمرك عملت خدمة لشخص وهو اتبري منك ؟",  
 " عمرك سقطت ف المدرسة ؟ وكم مرة ؟", 
 "لو زعلت مبتاكلش ؟ ",   
 " لو حطوك في مستشفي المجانين بالغلط , هتثبت لهم ازاي انك عاقل",  
 "تتوقع اشباهك ال 40 عايشين حياة حلوه ؟",  
 "اقرب شخص لقلبك ؟",  
 "منشن لاتنين تحسهم نفس الشخصية",  
 "كلمة لشخص خانك !؟", 
  "لو حياتك عبارو عن كتاب هيبقي تتوقع هيبقي اسمه ايه ؟", 
  " لو اتسجنت (بعد الشر عليك/ي يحب ) تتوقع التهمة هتبقي ايه ؟",  
 " مؤمن بوجود السحر والحسد؟ وليه ؟",  
 "ممكن تسيب حد عشان ماضية وحش ؟",  
 "حجات متعملهاش غير وانت رايق ؟ ", 
  " ايه الاحسن العقل ولا القلب ؟", 
  " شخصة اما تشوفها تحس انك مقهور ؟", 
  "منشن لحد تقوله انت اسطورة وانا بحبك", 
  "اكتر حاجه عاوز تنساها ؟",  
  "شعور انت عاوز يموت ؟", 
  "تقدر تعيش من غير صحاب ؟", 
  " التاريخ ال انت مستنيه ( السنة او اليوم ال نفسه يجي بسرعه )",  
 " اسم المنطقة ال انت عايش/ة فيها ؟",  
 "انت شايف نفسك اجتماعي ولا انطوائي ؟ ",  
 "شخصية خيالية ( كرتونية ) اتاثرت بيها ؟", 
  "ايه الكلمات ال تعبر عن حياتك ؟", 
  " منشن لشخص تحسة مصيبة ", 
  " الشخص ال تفكر فيه قبل ما تنام ؟", 
  "اقرب حد ليك ف العيلة ؟ ",  
  "اكتر حاجه تخوفك ؟", 
  "اغنية لازقة ف مخك (كل واحد مسئول عن سيئات الاغنيه لو بحث عنها اللهم بلغت اللهم فاشهد )", 
  "اكتر صديق مقرب ليك ؟ ",  
 "احسن حاجة حصلتلك النهارده ؟",  
 " ها غمض عينك وقول ايه المكان ال تحس نفسك فيه 🙃",  
 "جربت الشهره ولا تتمناها ؟", 
  " ممكن تبيع صاحبك عشان مصلحتك ؟", 
  " اغرب اكله عاوز كنت عاوز تاكلها فجاه ؟", 
  " بتحب/ي القطط ؟", 
  " اكتر صفة تكرها ف صاحبك ؟",  
  "اسمك بالكامل ؟", 
  
 "اكتر حرف تحبه ؟", 
  
 "اكتر شخص تحسه مات ف المجتع ؟", 
  
 "القصيرة حلو تتفق 🙈🫱🏻‍🫲🏻",   
 "لو لقيت ورقة بيضه هترسم ايه عشان تعبر عن حياتك ؟", 
  
 "اكتر شهر انت بتفرح اما بيجي ؟", 
  
 "قول حقيقة عنك ؟", 
  
 "الاصدق ف الحب الولد ولا البنت ؟", 
  
 "كلمات متقدرش تستغني عنها ؟", 
  
  
 "عبر عن نفسك فتلت كلمات ", 
  
 " أغرب موقف مضحك حصلك في حياتك؟", 
  
 "قوة الاستيعاب عندك كام من 10", 
  
 "اذكر موقف متقدرش تنساه طول عمرك؟", 
  
 "اغبى كذبه صدقتها وانت صغير/ة؟", 
  
 "فكرت قبل كده تنتفم من ال ظلمك ؟", 
  
 "بتنام كام ساعه ف اليوم ؟", 
   
 "مع او ضد : السفر يصلح ما افسده الدهر ؟", 
  
 "احسن ايام الاسبوع عندك 🔖؟", 
  
 "تتجوز ال بتحبه/ا او تاخد مليون دولار", 
  
 "على نياتكُم تُرزقون منشن لحد ينطبق عليه المثل ده ؟", 
  
 "هل يمكنك أن تذكر لي معلومة لا يعرفها عنك أحد؟", 
  
 "اكتر شيخ بتحبه ؟", 
  
 "بتتعامل ازاي مع الشخص المُتطفل ( الفضولي ) ؟", 
  
 "موقف غير حياتك؟", 
  
 "تتوقع حد بيفكر فيك دلوقت ؟",  
  
 "لو عندك عصايه سحريه هتعمل بيها ايه ؟", 
  
 "حاسس بالذنب ع حاجه معينه ؟", 
  
 "تحتاج وقت اد ايه عشان تثق ف شخص", 
  
 "اكتر حاجه بتخليك تضحك من اغماق قلبك ؟", 
  
 "حيوانك المفضل؟", 
  
 "🐦‍⬛ بتحب حد ف الجروب ؟", 
  
 "صفة بتحبها ف الناس ؟", 
  
 "حد بيحبني ؟", 
  
 "شعورك لما بتشوف صورة ليك وانت صغير ؟", 
  
 "لو حد طنشك عن قصدك بتعمل ايه ؟", 
  
 "لو معاك ورقه بيضه وقلم هتكتب ايه ؟", 
  
 "عدد الصور فتلفونك ؟", 
  
 "ايهما اصدق نظره العين ولا نبره الصوت ؟", 
  
 "لو عزمت صحابك وجابو حد بتكره هتعمل ايه ؟", 
  
 "حاجه اهم عندك من الناس ؟", 
  
 "الاسود ولا الابيض ؟", 
  
 "بتحب الرسوم المتحركه (الانمي -الكرتون)", 
  
 "بتحب صاصا يقلب صاصا 🥹 ؟", 
  
 "بتحب حد ؟", 
  
 "ممكن تاذي حد عشان انت بتكره ؟", 
  
 "اسم الدلع ال مبتحبهوش ؟", 
  
 "اخر شاات كان مع مين ؟", 
  
 "شفيعك يوم القيامة ؟", 
  
 " ده مش سؤال بس *صلي علي الحبيب*🥹", 
  
 "عبر عن نفسك بايموجي دلوقت ؟", 
  
 "بتضيع وقت فراغك بايه ؟",  
  
 "اكتر ادمن مش طايقه-طايقاه ؟", 
  
 "نفسك تخلع من البلد دي ؟ وهتروح فين ؟", 
  
 "هل انت تافه ؟", 
  
 "اكتر اسم دلع بتحبه ؟", 
  
 "لو هتقيم حظك هتديلو كام من عشره ؟", 
  
 "تختار المال ولا الصحة ولا الرضا ؟", 
  
 "علاقتك مع عيلتك ؟", 
  
 "لو سافرت بالزمن الحقبة الزمنيه ال عاوز تبني فيها حياتك هتبقي ايه ؟", 
  
 "حاجه اهلك كارهينها فيك ؟", 
  
 "احقر الناس من ...", 
  
 "االخروجة الحلوه بالمكان ولا الشخص ال انت خارج معاه ؟", 
  
 "كلمة تنرفزك ؟", 
  
 "اكتر شخصية عامة بتحبها ؟", 
  
 "حاجه تخطف النوم من عينك ؟", 
  
 "ايه اخر رسالة جتلك ف الواتس ؟", 
  
 "تقيم للبوت من عشره ؟", 
  
 "انزل بخلفية فونك ؟", 
  
 " صفة فيا تتمني اغيرها ؟", 
  
 "اكتب شطر من قصيدة جت فـ بالك ؟", 
  
 "بتخاف من حاجه معينه ؟", 
  
 "لو كان هناك أمامك اختيارين أحدهما الزواج والإستقرار معي هنا والآخر السفر والعمل بالخارج، هتختاري ايه ؟", 
  
 "وزنك ؟", 
  
 "حاسس بحاجه تميزك عن باقي الناس ؟", 
  
 "افضل مكان ف بتروحه ؟", 
  
 "عدي الدور", 
  
 "لو كسبت خمسه مليون دولار هتعمل ايه ؟", 
  
 "لو هتبقي عايش ف اخر لعبه لعبتها هتبقي لعبه ايه ؟", 
  
 "اكتر انمي - فيلم حبيته فحياتك ؟", 
  
 "اكتر حاجه انت عاوزها دلوقت ؟", 
  
 "رساله عايز تقولها لحد ومش عارف ؟", 
  
 " من وقتك تصلي ع الرسول صلي الله عليه وسلم 💫", 
  
 "دقيقه من وقتك تدعو لامواتنا واموات المسلمين بالرحمة 🤲🏻", 
  
 "اكتر لغة نفسك تتعلمها ؟", 

 "لو هتسافر بره هتاخد معاك مين ؟", 
   
 ] 
