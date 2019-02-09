const child_process = require('child_process');

class apkFile {

    init(fileName) {
        this.alltext = getAllMsg(fileName)
        console.log(this.alltext)
    }

    getAppName(){
        return getStrIntermediate(this.alltext,'application-label:\'','\'')
    }
    getVersionCode(){
        return getStrIntermediate(this.alltext,'versionCode=\'','\'')
    }
    getSdkVersion(){
        return getStrIntermediate(this.alltext,'sdkVersion:\'','\'')
    }
    getPackageName(){
        return getStrIntermediate(this.alltext,'package: name=\'','\'')
    }
    getVersionName(){
        return getStrIntermediate(this.alltext,'versionName=\'','\'')
    }
}

function getStrIntermediate(str, zb, yb) {
    var bds = zb + '(\\S*)' + yb;
    return str.match(bds)[1];
}
function runCMD(cmdStr) {
    var text = ''
    try {
        text = child_process.execSync(cmdStr, {encoding: 'buffer'})
        return text.toString()
    } catch (ex) {
        console.log(ex)
    }
}

function getAllMsg(fileName) {
    return runCMD('module\\aapt.exe d badging ' + fileName)
}

module.exports = apkFile;