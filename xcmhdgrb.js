
  
/*
20210719 Milo
软件名：微信小程序携程：梦幻岛
[rewrite_remote]
https://m.ctrip.com/restapi/soa2/20794/gatherCoin?  script-request-body  https://raw.githubusercontent.com/milomoon/MyScripts/main/xcmhd.js
[HITM]
m.ctrip.com
cron 0 0/6 * * *
*/






const $ = new Env('携程梦幻岛');
let xcmhdurl = $.getdata('xcmhdurl')
let xcmhdhd = $.getdata('xcmhdhd')
let xcmhdbody = $.getdata('xcmhdbody')
let user_id = ''
!(async () => {
  if (typeof $request !== "undefined") {
    await xcmhdck()
  } else {
    await xcmhdqd();
    await $.wait(1000);
    await xcmhdqd1();
    await $.wait(1000);
    await xcmhdqd2();
    await $.wait(1000);
}
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//ck
function xcmhdck() {
   if ($request.url.indexOf("gatherCoin?") > -1) {
    $.setdata($request.url,'xcmhdurl')
    $.log(xcmhdurl)
$.setdata(JSON.stringify($request.headers),'xcmhdhd')
$.log(xcmhdhd)
    $.setdata($request.body,'xcmhdbody')
$.log(xcmhdbody)
   $.msg($.name,"","携程梦幻岛获取headers成功！")
    } 
  }

//签到  
function xcmhdqd(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcmhdurl.match(/user_id=(\d+)/)[1]
let url = {url : `https://m.ctrip.com/restapi/soa2/20794/gatherCoin?_fxpcqlniredt=09031168115742014444&x-traceID=09031168115742014444-1626653611724-9921731`,
  //let url = {url : xcmhdurl,
        headers : 
        {
            'Connection' : `keep-alive`,
            'Accept-Encoding' : `gzip, deflate, br`,
            'Content-Type' : `application/json`,
            'Origin' : `https://m.ctrip.com`,
            'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.7(0x18000732) NetType/4G Language/zh_CN miniProgram`,
            'Cookie' : `DUID=u=9A0BE19C23CF030627FA083AD237AF01A343D0028037A8BD3D57CF8F7BFB45D0&v=0; IsNonUser=F; MKT_OrderClick=ASID=262684711465&AID=262684&CSID=711465&OUID=&CT=1626653500853&CURL=https%3A%2F%2Fcontents.ctrip.com%2Factivitysetupapp%2Fmkt%2Findex%2Fmembergame%3Ffromminiapp%3Dweixin%26allianceid%3D262684%26sid%3D711465%26sourceid%3D55552689%26_cwxobj%3D%257B%2522cid%2522%253A%252209301147210247723310%2522%252C%2522appid%2522%253A%2522wx0e6ed4f51db9d078%2522%252C%2522mpopenid%2522%253A%2522bd023991-e658-44c7-8532-703e9993acdf%2522%252C%2522allianceid%2522%253A%2522262684%2522%252C%2522sid%2522%253A%2522711465%2522%252C%2522ouid%2522%253A%2522%2522%252C%2522sourceid%2522%253A%252255552689%2522%252C%2522exmktID%2522%253A%2522%257B%255C%2522openid%255C%2522%253A%255C%2522bd023991-e658-44c7-8532-703e9993acdf%255C%2522%252C%255C%2522channelUpdateTime%255C%2522%253A%255C%25221626653500172%255C%2522%252C%255C%2522serverFrom%255C%2522%253A%255C%2522WAP%252FWECHATAPP%255C%2522%252C%255C%2522innersid%255C%2522%253A%255C%252214%255C%2522%252C%255C%2522innerouid%255C%2522%253A%255C%2522%255C%2522%252C%255C%2522pushcode%255C%2522%253A%255C%2522%255C%2522%257D%2522%252C%2522scene%2522%253A1089%257D&VAL={"h5_vid":"1626648347886.k037cn"}; MKT_Pagesource=H5; Union=OUID=&AllianceID=262684&SID=711465&SourceID=55552689&AppID=wx0e6ed4f51db9d078&OpenID=bd023991-e658-44c7-8532-703e9993acdf&exmktID={"openid":"bd023991-e658-44c7-8532-703e9993acdf","channelUpdateTime":"1626653500172","serverFrom":"WAP/WECHATAPP","innersid":"14","innerouid":"","pushcode":""}&createtime=1626653501&Expires=1627258300852; _bfa=1.1626648347886.k037cn.1.1626648347886.1626653500612.3.16.10650049479; _ga=GA1.2.1504958824.1626648349; _gid=GA1.2.199306605.1626648349; cticket=45655D8EC6D066D16B75FD69F2DA95D2B053D93F76331B1346BDC1FD6D346022; _RDG=287820ff2cc6bd244413bcaeeb341651fc; _RF1=14.150.81.131; _RGUID=17604af9-3278-4e61-83c0-4e5c2df19fdb; _RSG=Xv4UoalIWT1R_PyjmbJ0F8; nfes_isSupportWebP=1; _pd=%7B%22r%22%3A1%2C%22d%22%3A55%2C%22_d%22%3A54%2C%22p%22%3A56%2C%22_p%22%3A1%2C%22o%22%3A57%2C%22_o%22%3A1%2C%22s%22%3A57%2C%22_s%22%3A0%7D; MKT_code=PUSHCODE=mini&createtime=1626653455; tangram_city_id=2; GUID=09031168115742014444`,
            'Host' : `m.ctrip.com`,
            'Referer' : `https://m.ctrip.com/webapp/member/igame/game?isHideNavBar=YES&popup=close`,
            'cookieOrigin' : `https://m.ctrip.com`,
            'Accept-Language' : `zh-cn`,
            'Accept' : `*/*`
            },
        body : `{"moduleId":1,"head":{"cid":"09031168115742014444","ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","xsid":"","extension":[]}}`
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('\n领取成功：'+result.message+'获得金币'+result.coinNum)
}else{
        console.log('\n领取失败：'+result.message)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}


function xcmhdqd1(timeout = 0) {
    return new Promise((resolve) => {
        //user_id=xcmhdurl.match(/user_id=(\d+)/)[1]
        let url = {url : `https://m.ctrip.com/restapi/soa2/20794/gatherCoin?_fxpcqlniredt=09031168115742014444&x-traceID=09031168115742014444-1626653611724-9921731`,
          //let url = {url : xcmhdurl,
                headers : 
                {
                    'Connection' : `keep-alive`,
                    'Accept-Encoding' : `gzip, deflate, br`,
                    'Content-Type' : `application/json`,
                    'Origin' : `https://m.ctrip.com`,
                    'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.7(0x18000732) NetType/4G Language/zh_CN miniProgram`,
                    'Cookie' : `DUID=u=9A0BE19C23CF030627FA083AD237AF01A343D0028037A8BD3D57CF8F7BFB45D0&v=0; IsNonUser=F; MKT_OrderClick=ASID=262684711465&AID=262684&CSID=711465&OUID=&CT=1626653500853&CURL=https%3A%2F%2Fcontents.ctrip.com%2Factivitysetupapp%2Fmkt%2Findex%2Fmembergame%3Ffromminiapp%3Dweixin%26allianceid%3D262684%26sid%3D711465%26sourceid%3D55552689%26_cwxobj%3D%257B%2522cid%2522%253A%252209301147210247723310%2522%252C%2522appid%2522%253A%2522wx0e6ed4f51db9d078%2522%252C%2522mpopenid%2522%253A%2522bd023991-e658-44c7-8532-703e9993acdf%2522%252C%2522allianceid%2522%253A%2522262684%2522%252C%2522sid%2522%253A%2522711465%2522%252C%2522ouid%2522%253A%2522%2522%252C%2522sourceid%2522%253A%252255552689%2522%252C%2522exmktID%2522%253A%2522%257B%255C%2522openid%255C%2522%253A%255C%2522bd023991-e658-44c7-8532-703e9993acdf%255C%2522%252C%255C%2522channelUpdateTime%255C%2522%253A%255C%25221626653500172%255C%2522%252C%255C%2522serverFrom%255C%2522%253A%255C%2522WAP%252FWECHATAPP%255C%2522%252C%255C%2522innersid%255C%2522%253A%255C%252214%255C%2522%252C%255C%2522innerouid%255C%2522%253A%255C%2522%255C%2522%252C%255C%2522pushcode%255C%2522%253A%255C%2522%255C%2522%257D%2522%252C%2522scene%2522%253A1089%257D&VAL={"h5_vid":"1626648347886.k037cn"}; MKT_Pagesource=H5; Union=OUID=&AllianceID=262684&SID=711465&SourceID=55552689&AppID=wx0e6ed4f51db9d078&OpenID=bd023991-e658-44c7-8532-703e9993acdf&exmktID={"openid":"bd023991-e658-44c7-8532-703e9993acdf","channelUpdateTime":"1626653500172","serverFrom":"WAP/WECHATAPP","innersid":"14","innerouid":"","pushcode":""}&createtime=1626653501&Expires=1627258300852; _bfa=1.1626648347886.k037cn.1.1626648347886.1626653500612.3.16.10650049479; _ga=GA1.2.1504958824.1626648349; _gid=GA1.2.199306605.1626648349; cticket=45655D8EC6D066D16B75FD69F2DA95D2B053D93F76331B1346BDC1FD6D346022; _RDG=287820ff2cc6bd244413bcaeeb341651fc; _RF1=14.150.81.131; _RGUID=17604af9-3278-4e61-83c0-4e5c2df19fdb; _RSG=Xv4UoalIWT1R_PyjmbJ0F8; nfes_isSupportWebP=1; _pd=%7B%22r%22%3A1%2C%22d%22%3A55%2C%22_d%22%3A54%2C%22p%22%3A56%2C%22_p%22%3A1%2C%22o%22%3A57%2C%22_o%22%3A1%2C%22s%22%3A57%2C%22_s%22%3A0%7D; MKT_code=PUSHCODE=mini&createtime=1626653455; tangram_city_id=2; GUID=09031168115742014444`,
                    'Host' : `m.ctrip.com`,
                    'Referer' : `https://m.ctrip.com/webapp/member/igame/game?isHideNavBar=YES&popup=close`,
                    'cookieOrigin' : `https://m.ctrip.com`,
                    'Accept-Language' : `zh-cn`,
                    'Accept' : `*/*`
                    },
                body : `{"moduleId":2,"head":{"cid":"09031168115742014444","ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","xsid":"","extension":[]}}`
        }
              $.post(url, async (err, resp, data) => {
                try {
                   
            const result = JSON.parse(data)
                if(result.code == 0){
                console.log('\n领取成功：'+result.message+'获得金币'+result.coinNum)
        }else{
                console.log('\n领取失败：'+result.message)
        }
                } catch (e) {
                } finally {
                  resolve()
                }
            },timeout)
          })
        }


  function xcmhdqd2(timeout = 0) {
    return new Promise((resolve) => {
        //user_id=xcmhdurl.match(/user_id=(\d+)/)[1]
        let url = {url : `https://m.ctrip.com/restapi/soa2/20794/gatherCoin?_fxpcqlniredt=09031168115742014444&x-traceID=09031168115742014444-1626653611724-9921731`,
          //let url = {url : xcmhdurl,
                headers : 
                {
                    'Connection' : `keep-alive`,
                    'Accept-Encoding' : `gzip, deflate, br`,
                    'Content-Type' : `application/json`,
                    'Origin' : `https://m.ctrip.com`,
                    'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.7(0x18000732) NetType/4G Language/zh_CN miniProgram`,
                    'Cookie' : `DUID=u=9A0BE19C23CF030627FA083AD237AF01A343D0028037A8BD3D57CF8F7BFB45D0&v=0; IsNonUser=F; MKT_OrderClick=ASID=262684711465&AID=262684&CSID=711465&OUID=&CT=1626653500853&CURL=https%3A%2F%2Fcontents.ctrip.com%2Factivitysetupapp%2Fmkt%2Findex%2Fmembergame%3Ffromminiapp%3Dweixin%26allianceid%3D262684%26sid%3D711465%26sourceid%3D55552689%26_cwxobj%3D%257B%2522cid%2522%253A%252209301147210247723310%2522%252C%2522appid%2522%253A%2522wx0e6ed4f51db9d078%2522%252C%2522mpopenid%2522%253A%2522bd023991-e658-44c7-8532-703e9993acdf%2522%252C%2522allianceid%2522%253A%2522262684%2522%252C%2522sid%2522%253A%2522711465%2522%252C%2522ouid%2522%253A%2522%2522%252C%2522sourceid%2522%253A%252255552689%2522%252C%2522exmktID%2522%253A%2522%257B%255C%2522openid%255C%2522%253A%255C%2522bd023991-e658-44c7-8532-703e9993acdf%255C%2522%252C%255C%2522channelUpdateTime%255C%2522%253A%255C%25221626653500172%255C%2522%252C%255C%2522serverFrom%255C%2522%253A%255C%2522WAP%252FWECHATAPP%255C%2522%252C%255C%2522innersid%255C%2522%253A%255C%252214%255C%2522%252C%255C%2522innerouid%255C%2522%253A%255C%2522%255C%2522%252C%255C%2522pushcode%255C%2522%253A%255C%2522%255C%2522%257D%2522%252C%2522scene%2522%253A1089%257D&VAL={"h5_vid":"1626648347886.k037cn"}; MKT_Pagesource=H5; Union=OUID=&AllianceID=262684&SID=711465&SourceID=55552689&AppID=wx0e6ed4f51db9d078&OpenID=bd023991-e658-44c7-8532-703e9993acdf&exmktID={"openid":"bd023991-e658-44c7-8532-703e9993acdf","channelUpdateTime":"1626653500172","serverFrom":"WAP/WECHATAPP","innersid":"14","innerouid":"","pushcode":""}&createtime=1626653501&Expires=1627258300852; _bfa=1.1626648347886.k037cn.1.1626648347886.1626653500612.3.16.10650049479; _ga=GA1.2.1504958824.1626648349; _gid=GA1.2.199306605.1626648349; cticket=45655D8EC6D066D16B75FD69F2DA95D2B053D93F76331B1346BDC1FD6D346022; _RDG=287820ff2cc6bd244413bcaeeb341651fc; _RF1=14.150.81.131; _RGUID=17604af9-3278-4e61-83c0-4e5c2df19fdb; _RSG=Xv4UoalIWT1R_PyjmbJ0F8; nfes_isSupportWebP=1; _pd=%7B%22r%22%3A1%2C%22d%22%3A55%2C%22_d%22%3A54%2C%22p%22%3A56%2C%22_p%22%3A1%2C%22o%22%3A57%2C%22_o%22%3A1%2C%22s%22%3A57%2C%22_s%22%3A0%7D; MKT_code=PUSHCODE=mini&createtime=1626653455; tangram_city_id=2; GUID=09031168115742014444`,
                    'Host' : `m.ctrip.com`,
                    'Referer' : `https://m.ctrip.com/webapp/member/igame/game?isHideNavBar=YES&popup=close`,
                    'cookieOrigin' : `https://m.ctrip.com`,
                    'Accept-Language' : `zh-cn`,
                    'Accept' : `*/*`
                    },
                body : `{"moduleId":3,"head":{"cid":"09031168115742014444","ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","xsid":"","extension":[]}}`
        }
              $.post(url, async (err, resp, data) => {
                try {
                   
            const result = JSON.parse(data)
                if(result.code == 0){
                console.log('\n领取成功：'+result.message+'获得金币'+result.coinNum)
        }else{
                console.log('\n领取失败：'+result.message)
        }
                } catch (e) {
                } finally {
                  resolve()
                }
            },timeout)
          })
        }


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
