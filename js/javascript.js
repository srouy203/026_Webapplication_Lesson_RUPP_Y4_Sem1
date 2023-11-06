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


    app = function + fuction + ... + function
    app = object + object + ... + object
        (class, property, method, event)

    - document object = html document (web page)

    document.getElementById(id) ជ្រើសយកធាតុណាដែលស្គាល់ id
    document.getElementByTagName(name) ជ្រើសយកធាតុមួយប្រភេទដែលស្គាល់ឈ្មោះ ដូចជា a, span, div...
    document.getElementByClassName(class) ជ្រើសធាតុមួយឬច្រីនដែលឋិតក្នុងថ្នាក់បានបញ្ជាក់។

    ក្រោយពេលជ្រើសរើសធាតុបានដោយប្រើ getElementById,
    getElementByTagName ឬ getElementsByClassName នោះអាចផ្លាស់ប្តូរធាតុដោយប្រើ properties ឬ methods ដូចខាងក្រោម៖

    element.textContent = ខ្លឹមសារសម្រាប់ប្តូរខ្លឹមសារថិតនៅចន្លោះស្លាកផ្តើម និងស្លាកបញ្ចប់នៃធាតុ
    element.attribute = តម្លៃសម្រាប់ប្តូរតម្លៃគុណលក្ខណៈនៃធាតុ
    element.style.property = តម្លៃសម្រាប់ប្តូរតម្លៃនៃការរចនានៃលក្ខណៈនៃការរចនា ដែលប្រៀបដូចទៅនឹង property:value ក្នុង CSS។

*/

