function replace() {
    var dueT = document.getElementsByTagName("td");
    var dueCol = [];
    var j = 0;
    for ( var i = 0; i < dueT.length/5; i++) {
        var temp = dueT[i*5+4].innerText;
        var stnd = new Date(temp);
        if (Date.parse(stnd) < Date.parse(Date())) {}
        else {
            dueCol[j] = {title:"", status:"", openDate:"", dueDate:""};
            dueCol[j].title = dueT[i*5+1].innerText;
            dueCol[j].status = dueT[i*5+2].innerText;
            dueCol[j].openDate = Date.parse(dueT[i*5+3].innerText);
            dueCol[j].dueDate = Date.parse(dueT[i*5+4].innerText);
            j = j + 1;
        }
    }
    var data = dueCol;
    var Assignment1 = data[0]["title"];
    $('#Assignment1_Name').html(Assignment1);
    /*$(function(){
        var tbody = $("<tbody />"),tr;
        $.each(JSON.stringify(data), function(_,obj){
            tr = $("<tr />");
            $.each(JSON.stringify(obj),function(_,text){
                tr.append("<td>"+JSON.stringify(text)+"</td>");
            });
            tr.appendTo(tbody);
        });
        tbody.replace("assignment");
    })**/

    //https://stackoverflow.com/questions/21434012/loop-through-a-json-array-to-create-a-table


    /*$('#Assignment1_Class').html('ENWR 1134');
    $('#Assignment1_Due').html('29th September');
    $('#Assignment1_Posted').html('29th September');
    $('#Assignment1_URL').attr('href', 'https://www.google.com');

    $('#Assignment2_Name').html('Prelab Experiment 2');
    $('#Assignment2_Class').html('CHEM 1611');
    $('#Assignment2_Due').html('29th September');
    $('#Assignment2_Posted').html('29th September');
    $('#Assignment2_URL').attr('href', 'https://www.google.com');

    $('#Assignment3_Name').html('Homework 4');
    $('#Assignment3_Class').html('ENGR 1624');
    $('#Assignment3_Due').html('29th September');
    $('#Assignment3_Posted').html('29th September');
    $('#Assignment3_URL').attr('href', 'https://www.google.com');

    $('#Announcement1_Subject').html('Information about Next Class');
    $('#Announcement1_Class').html('ENGR 1624');
    $('#Announcement1_Description').html('Hi Engineers, did you ever wish you ever had your own robot army? Youre in luck well begin learning how to program humanoid "Nao" robots tomorrow! This is a really cool opportunity...');
    $('#Announcement1_URL').attr('href', 'https://www.google.com');

    $('#Announcement2_Subject').html('Information about Next Class');
    $('#Announcement2_Class').html('ENGR 1624');
    $('#Announcement2_Description').html('Hi Engineers, did you ever wish you ever had your own robot army? Youre in luck well begin learning how to program humanoid "Nao" robots tomorrow! This is a really cool opportunity...');
    $('#Announcement2_URL').attr('href', 'https://www.google.com');

    $('#Announcement3_Subject').html('Information about Next Class');
    $('#Announcement3_Class').html('ENGR 1624');
    $('#Announcement3_Description').html('Hi Engineers, did you ever wish you ever had your own robot army? Youre in luck well begin learning how to program humanoid "Nao" robots tomorrow! This is a really cool opportunity...');
    $('#Announcement3_URL').attr('href', 'https://www.google.com');**/
}
window.onload = replace;
