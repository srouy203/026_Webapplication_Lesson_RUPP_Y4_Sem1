$(function(){
    // alert("E5")
    /*ប្រើព្រឺត្តិការណ៏​ change ដ៣ទាញយកតម្លៃពី​ text box, password box, and text area */
    // $("#txt").change(function(){$("#data").html($(this).val())});
    $("#txt").keyup(function(){$("#data").html($(this).val())});
    $("#pwd").change(function(){$("#data").html($(this).val())});
    $("#tar").change(function(){$("#data").html($(this).val())});
    /** ប្រើ change event ទាញតម្លៃពី​ checked property នៃ​ check box & radio button */
    $("#chk1").change(function(){$("#data").html($(this).prop("checked"))});
    $("#rao1").change(function(){$("#data").html($(this).prop("checked"))});
    /*ប្រើព្រឺត្តិការណ៏​ change ដ៣ទាញយកតម្លៃពី​ dorp down list and list box*/
    $("#ddl").change(function(){$("#data").html($(this).val())});
    $("#lst").change(function(){$("#data").html($(this).val())});

    
})