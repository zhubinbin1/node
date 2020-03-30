function myfunction() {
    let users = ['geddy', 'neil', 'alex'];
    let html = 'html is null';
    html = ejs.render('<%= users.join(" | "); %>', { users: users });
    // // 单个模板文件 delimiter
    // html = ejs.render('<?= users.join(" | "); ?>', { users: users },
    //     { delimiter: '?' });
    // ejs.delimiter = '$';
    // html = ejs.render('<$= users.join(" | "); $>', { users: users });


    //render 方式
    // var html = ejs.render('<%=userList.join(" | ");%>', { userList: users })

    // compile 方式
    // var template = ejs.compile('<%= users.join(" | "); %>');
    // html = template(users);
    
    // document.getElementById("content").innerHTML = html;
    $('#content').html(html);
}

