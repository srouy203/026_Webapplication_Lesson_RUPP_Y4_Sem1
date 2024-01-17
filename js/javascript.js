/*
   static web page ឬ static web site
   វាមានព័ត៌មាននិងរចនាសម្ព័ន្ធឥតប្រែប្រួលដែលបានបង្កើតតាំងពីពេល
   សរសេរ HTML និង​ CSS។

   dynamic web page ឬ dynamic web site
   វាមានព័ត៌មាននិងរចនាសម្ព័ន្ធអាចផ្លាស់ប្តូរពេលវាកំពុងដំណើរការដោយប្រើ
   ធនធាននៃម៉ាស៊ីនអ្នកទស្សនា(client side ឬ front-end)
   ឬធនធាននៃមេម៉ាស៊ីន(server side ឬ back-end)។
   *ចំណាំ ធនធាននៃម៉ាស៊ីន(server resources រួមមាន​ hardwares,
      softwares, files, ឬ services)

   Javascript ភាសាដែលអាចផ្លាស់ប្តូរខ្លឹមសារឬរចនាសម្ព័ន្ធវេបផេក
   ពេលវេបផេកកំពុងដំណើរការដោយប្រើធនធាននៃម៉ាស៊ីនអ្នកទស្សនា។

   របៀបសរសេរ
      - inline script សរសេរស្គ្រីបក្នុងធាតុ
         <... on_event="javascript_code;">...</>
      - internal script សរសេរស្គ្រីបក្នុងវេបផេក
         <script type="text/javascript">
            javascript_code;
         </script>
      - external script សរសេរស្គ្រីបក្រៅវេបផេកគឺក្នុងឯកសារjavascript
         <script type="text/javascript"
                         src="អាសយដ្ឋានឯកសារjavascript"></script>

      អថេរឬអញ្ញាត្ត variable ជាឈ្មោះបង្កើតឡើងដើម្បីផ្ទុកទិន្នន័យត្រូវប្រើបណ្តោះអាសន្ន។

      ឈ្មោះអថេរត្រូវផ្តើមដោយអក្សរនិងមានន័យតាមទិន្នន័យដែលផ្ទុកព្រមទាំងមិនអាចមាន
      សញ្ញាមួយចំនួនដូចជា ដកឃ្លា(white spaces)ុ, ដុល្លារ ។ល។
      
      របៀបបង្កើត
         var ឈ្មោះអថេរ = តម្លៃដំបូង; 
      ឬ 
         let ឈ្មោះអថេរ = តម្លៃដំបូង;

         /*
    app = function + fuction + ... + function
    app = object + object + ... + object
        (class, property, method, event)

    - document object = html document (web page)
    document.getElementById(អាយឌី) ជ្រើសរើសធាតុដែលស្គាល់អាយឌី
    document.getElemenByTagName(ឈ្មោះ)​ ​ជ្រើសរើសធាតុ​មួយប្រភេទដោយសរសេឈ្មោះដូចជា a, span, ។ល៕
    ​document.getElemenByClassName(ថ្នាក់) ជ្រើសរើសធាតុ​មួយឬច្រើនដែលថិតក្នុងថ្នាក់បញ្ចាក់។

    ក្រោយពេលជ្រើសធាតុបានដោយប្រើ getElementById, getElementByTagName ឬ​ getElementByClassName
    នោះអាចផ្លាស់ប្ដុរធាតុដោយប្រើ properties ឬ​ method  ដូចខាងក្រោម:

    element.textContent = ខ្លឹមសារ​សម្រាប់ប្ដុរខ្លឹមសារថិតនៅច្លោះស្លាកផ្ដើមនិងស្លាកបញ្ចប់នៃធាតុ
    element.attribute = តម្លៃសម្រាប់ប្ដុរតម្លៃគុណលក្ខណះនៃធាតុ
    element.style.property = តម្លៃសម្រាប់ប្ដរតម្លៃនៃការរចនានៃលក្ខណះនៃការចនាដែលប្រៀបដូចទៅនឹង property:value ក្នុង​ css។


    Javascript object 
      Math ជាវត្ថុប្រើប្រាស់បំពេញមុខងារគណិតវិទ្យាដូចជា​ លេខចៃដន្យ បង្កត់លេខ។ល។
      random() ជា Method ដែលបំពេញមុខងារបង្កប់ចុះនូវលេខទសភាគដោយចៃដន្យចន្លោះ ០​ និង ១។
      floor(លេខទសភាគ) បំពេញមុខងារបង្កត់ចុះនូវលេខទសភាគបានបញ្ញាក់។
      ceil(លេខទសភាគ)​ បំពេញមុខងារបង្កត់ឡើងនូវលេខទសភាគបានបញ្ញាក់។
      round (លេខទសភាគ)​ បំពេញមុខងារបង្កត់ចុះឬឡើងនូវលេខទសភាគបានបញ្ញាក់
                           អាស្រ័យផ្នែកទសភាគតិចជាង៥ឬធំជាងឬស្មើ៥។
                           

      windown object ជាវត្ថុប្រើប្រាស់អាចអោយ javascript ប្រើមុខងារនានា
            នៃ tab មួយរបស់ browser ដូចជា កំណត់ពេលអោយកិច្ចការដំណើរការ លុបចោល
            នូវពេលដែលកិច្ចការត្រូវដំណើរការ។ ល។
      setInterval (កិច្ចការ, ពេលគិតជាមិលីវិនាទី) ជា method មានមុខងារធ្វើអោយ
            ការ (function) ដំណើរការសារចុះសារឡើងមិនកំណត់ចំនួនដង អោយតែដល់ពេលវេលា
            ជាមិលីវិនាទីបានបញ្ជាក់។
      clearInterval (អាយឌីសម្គាល់ដំណើរការ) លុបចោលពេលធ្វើកិច្ចការដំណើរការបាន
            កំណត់ដោយ setInterval។

      ****** ប្រើ event របស់ object
            របៀបទី១
                ធាតុបានជ្រើសរើស .addEventListener ("ឈ្មោះevent", ឈ្មោះ function);
            របៀបទី២
                ធាតុបានជ្រើសរើស.onឈ្មោះ event = ឈ្មោះ function;
                ឈ្មោះ event ប្រើប្រាស់ញឹកញាប់មាន click, change, focus, blur។​ល។


      ដូចការរចនា(dynamic style)
            ជាធាតុជ្រើសរើស.style.ឈ្មោះproperty = តម្លៃថ្មី
        *ចំណាំ ពេលសរសេរឈ្មោះ CSS property ក្នុង javascript មិនប្រើសញ្ញា - ទេ តែរាល់អក្សរទី១នៃពាក្យត្រូវដូូរទៅអក្សរធំ
              ដោយគិតចាប់ពីពាក្យទី២ឡើងទៅដូចជា background-color សរសេរ backgroundColor វិញទើបត្រួវ ។


      Javascript selector
      ជ្រើសយកធាតុមួយ
      ​​​​  document.querySelector("CSS selector")

      ជ្រើសយកធាតុជាច្រើន
         document.querSelectorAll("CSS selector")
      *ចំណាំរាល់ CSS selector អាចប្រើក្នុង Javascript បានដូចជា #អាយឌី .ថ្នាក់។ល។
      បង្កើតធាតុ
         document.crateElement("ធាតុត្រូវបង្កើត");
      បង្កើតខ្លឹមសារ
         document.createTextNode("ខ្លឺមសារ");
         ថែមខ្លឺសារចូលក្នុងធាតុ
         ធាតុ.appendChild(ខ្លឺមសារ);
      ថែមធាតុចូលក្នុងវេបផេក
      មេធាតុ.appendChild(កូនធាតុ);

      បង្កើតគុណលក្ខណះ
         document.crateAttribute("ឈ្មោះគុណលក្ខណះត្រូវបង្កើត");
      កំណត់តម្លៃអោយគុណលក្ខណះ
         គុណលក្ខណះ.value="តម្លៃត្រូវផ្ដល់អោយគុណលក្ខណះ";
      ថែមគុណលក្ខណះអោយធាតុ
         ធាតុ.setAttributeNode(គុណលក្ខណះ);
      លុបធាតុ
         ធាតុដែលត្រូវលុប.remove();
      លុបគុណលក្ខណះ
         ធាតុដែលមានគុណលក្ខណះត្រូវលុប.removeAttrubte("ឈ្មោះគុណលក្ខណះត្រូវលុប");
      
*/