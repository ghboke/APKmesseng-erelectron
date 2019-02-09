var apkFile = require('./app-js/apkFile.js')
var apkFile = new apkFile()
var zipper = require("zip-local");
var fs = require('fs');
/*zipper.unzip("D:\\down\\mobileqq_android.apk", function (error, unzipped) {
    if (!error) {
        // extract to the current working directory
        //unzipped.save(null, function() { });
        var unzippedfs = unzipped.memory();
        var files = unzippedfs.contents();
        // print an array of file paths in the unzipped file
        /!*console.log(unzippedfs.contents()); // prints [ 'hello-world.cpp' ]
          files.forEach(function (file) {
              console.log(file)
          });*!/
        console.log(files)
          layer.msg('遍历完成')
        // read the file as text
        //var txt = unzippedfs.read("hello-world.cpp", 'text');
        // or read it as Buffer
        //var buff = unzippedfs.read("res/mipmap-xxxhdpi-v4/ic_launcher.png", 'buffer');
        //console.log(buff.toString('base64'))
        //$('#apkimg').attr('src', buff.toString('base64'));
        //var base64Img = buff.toString('base64');
        //document.getElementById('apkimg').setAttribute('src', 'data:image/png;base64,' + base64Img);

    }
});*/

function getAllMsg(path) {
    apkFile.init(path)
    $('#application-label').text(apkFile.getAppName())
    $('#packagename').text(apkFile.getPackageName())
    $('#versionName').text(apkFile.getVersionName())
    $('#versionCode').text(apkFile.getVersionCode())
    layer.msg('读取完成')

}

//处理拖放
var content = document.querySelector('#main');
content.ondragenter = content.ondragover = content.ondragleave = function () {
    return false; /*阻止默认行为*/
}
content.ondrop = function (e) {
    //阻止默认行为
    e.preventDefault();
    var path = e.dataTransfer.files[0].path;
    getAllMsg(path)
}
//禁止网页图片拖放
$('img').on('mousedown', function (e) {
    e.preventDefault()
})


