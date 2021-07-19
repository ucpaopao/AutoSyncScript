/*
20210719 Milo
软件名：微信小程序携程签到
[rewrite_remote]
https://m.ctrip.com/restapi/soa2  script-request-body  https://raw.githubusercontent.com/milomoon/MyScripts/main/xcqd.js
[HITM]
m.ctrip.com
cron 0 6 * * *
*/




const $ = new Env('携程签到');
let xcqdurl = $.getdata('xcqdurl')
let xcqdhd = $.getdata('xcqdhd')
let xcqdbody = $.getdata('xcqdbody')
let xcszurl = $.getdata('xcszurl')
let xcszhd = $.getdata('xcszhd')
let xcszbody = $.getdata('xcszbody')
let xchyurl = $.getdata('xchyurl')
let xchyhd = $.getdata('xchyhd')
let xchybody = $.getdata('xchybody')
let xckspyurl = $.getdata('xckspurl')
let xcksphd = $.getdata('xcksphd')
let xckspbody = $.getdata('xckspbody')
let user_id = ''
!(async () => {
  if (typeof $request !== "undefined") {
    await xcqdck()
  } else {
    await xcqdqd();
    await $.wait(1000);
    await xcszqd();
    await $.wait(1000);
    await xchyqd();
    await $.wait(1000);
    for (let c = 0; c < 5; c++) {
      $.index = c + 1
     console.log(`\n第${c+1}次看视频！`)

             await xcksp()
             await $.wait(5000)}
}
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//ck
function xcqdck() {
   if ($request.url.indexOf("signin") > -1) {
    $.setdata($request.url,'xcqdurl')
    $.log(xcqdurl)
$.setdata(JSON.stringify($request.headers),'xcqdhd')
$.log(xcqdhd)
    $.setdata($request.body,'xcqdbody')
$.log(xcqdbody)
   $.msg($.name,"","携程签到获取headers成功！")
    }else if ($request.url.indexOf("roll") > -1) {
      $.setdata($request.url,'xcszurl')
      $.log(xcszurl)
  $.setdata(JSON.stringify($request.headers),'xcszhd')
  $.log(xcszhd)
      $.setdata($request.body,'xcszbody')
  $.log(xcszbody)
     $.msg($.name,"","携程会员签到body成功！")
      }else if ($request.url.indexOf("saveDailyBonus?") > -1) {
      $.setdata($request.url,'xchyurl')
      $.log(xchyurl)
  $.setdata(JSON.stringify($request.headers),'xchyhd')
  $.log(xchyhd)
      $.setdata($request.body,'xchybody')
  $.log(xchybody)
     $.msg($.name,"","携程骰子获取body成功！")
      }else if ($request.url.indexOf("mkt/taskdistribute") > -1) {
        $.setdata($request.url,'xckspurl')
        $.log(xckspurl)
    $.setdata(JSON.stringify($request.headers),'xcksphd')
    $.log(xcksphd)
        $.setdata($request.body,'xckspbody')
    $.log(xckspbody)
       $.msg($.name,"","获取携程看视频body成功！")
        }
  }

//签到  
function xcqdqd(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcqdurl.match(/user_id=(\d+)/)[1]
//let url = {url : `https://m.ctrip.com/restapi/soa2/16575/signin`,
  let url = {url : xcqdurl,
        headers : 
JSON.parse(xcqdhd),
        body : xcqdbody
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.errcode == 0){
        console.log('\n签到成功：'+result.errmsg)
}else{
        console.log('\n签到失败或已签到'+result.errmsg)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}


function xcszqd(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcqdurl.match(/user_id=(\d+)/)[1]
//let url = {url : `https://m.ctrip.com/restapi/soa2/16575/signin`,
  let url = {url : xcszurl,
        headers : 
JSON.parse(xcszhd),
        body : xcszbody
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.errcode == 0){
        console.log('\n签到成功：'+result.errmsg)
}else{
        console.log('\n签到失败或已签到'+result.errmsg)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}


function xchyqd(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcqdurl.match(/user_id=(\d+)/)[1]
//let url = {url : `https://m.ctrip.com/restapi/soa2/16575/signin`,
  let url = {url : xchyurl,
        headers : 
JSON.parse(xchyhd),
        body : xchybody
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.resultcode == 0){
        console.log('\n签到成功：'+result.resultmessage)
}else{
        console.log('\n签到失败或已签到'+result.resultmessage)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}


function xcksp(timeout = 0) {
  return new Promise((resolve) => {
//user_id=xcqdurl.match(/user_id=(\d+)/)[1]
let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userTodoTask`,
  //let url = {url : xckspurl,
        headers : 
JSON.parse(xcksphd),
        body : xckspbody
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n观看成功：'+result.msg)
}else{
        console.log('\n观看失败或已签到'+result.msg)
}
        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}
