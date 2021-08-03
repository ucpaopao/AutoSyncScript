const $ = new Env('携程周周乐');
let xccksp1url = $.getdata('xccksp1url')
let xccksp1hd = $.getdata('xccksp1hd')
let xccksp1body = $.getdata('xccksp1body')

let xcrwsjurl = $.getdata('xcrwsjurl')
let xcrwsjhd = $.getdata('xcrwsjhd')
let xcrwsjbody = $.getdata('xcrwsjbody')

!(async () => {
    if (typeof $request !== "undefined") {
      await xcrwsjck()     
      await xcckspck() 
      
    } else {
         
       await xcrwsjqd();
       await $.wait(1000);}
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

//获取ck
function xcckspck() {
    if ($request.url.indexOf("todoTask") > -1) {
     $.setdata($request.url,'xccksp1url')
     $.log(xccksp1url)
 $.setdata(JSON.stringify($request.headers),'xccksp1hd')
 $.log(xccksp1hd)
     $.setdata($request.body,'xccksp1body')
 $.log(xccksp1body)
    $.msg($.name,"","携程五次视频body成功！")
     } 
   }

   function xcrwsjck() {
    if ($request.url.indexOf("userTaskList") > -1) {
     $.setdata($request.url,'xcrwsjurl')
     $.log(xcrwsjurl)
 $.setdata(JSON.stringify($request.headers),'xcrwsjhd')
 $.log(xcrwsjhd)
     $.setdata($request.body,'xcrwsjbody')
 $.log(xcrwsjbody)
    $.msg($.name,"","携程任务数据body成功！")
     } 
   }

let A = '"id":65'


//签到
function xcrwsjqd(timeout = 0) {
    return new Promise((resolve) => {
  //user_id=xccksp1url.match(/user_id=(\d+)/)[1]
 // cookie = xccksp1hd.match(/"Cookie":"([\w=&;]+)"/)[1]
 // cid = xccksp1body.match(/"cid":"(\d+)"/)[1]
 // auth = xccksp1body.match(/"auth":"(\w+)"/)[1]
 // appId1 = xccksp1body.match(/"appId","value":"(\w+)"/)[1]
  //let url = {url : `https://m.ctrip.com/restapi/soa2/22598/todoTask`,
    let url = {
          url : xcrwsjurl,
          headers : JSON.parse(xcrwsjhd),
          body : xcrwsjbody
  }
        $.post(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
      if(result.code == 200){
        console.log('\n数据获取成功：')
        console.log(result.todoTaskList.indexOf('"id":65') != -1);
  for (let c = 0; c < 5; c++) {
    $.index = c + 1
   console.log(`\n第${c+1}次发牌！`)

           await xcckspqd()
           await $.wait(1000);}
            
}else{
        console.log('\n获取次数失败：'+result.chanceNum)

}

        } catch (e) {
        } finally {
          resolve()
        }
    },timeout)
  })
}


function xcckspqd(timeout = 0) {
    return new Promise((resolve) => {
  //user_id=xccksp1url.match(/user_id=(\d+)/)[1]
  cid = xccksp1body.match(/"cid":"(\d+)"/)[1]
  auth = xccksp1body.match(/"auth":"(\w+)"/)[1]
  appId1 = xccksp1body.match(/"appId","value":"(\w+)"/)[1]
  //let url = {url : `https://m.ctrip.com/restapi/mkt/taskdistribute/userTodoTask`,
    let url = {url : xccksp1url,
          headers : 
  JSON.parse(xccksp1hd),
          body : `{"channelCode":"6733N074D4","taskId":36,"done":1,"status":1,"head":{"cid":"${cid}","ctok":"","cver":"1.1.91","lang":"01","sid":"","syscode":"30","auth":"${auth}","sauth":"","extension":[{"name":"appId","value":"${appId1}"},{"name":"scene","value":"1089"}]}}`
      }
        $.post(url, async (err, resp, data) => {
          try {
             
      const result = JSON.parse(data)
          if(result.code == 200){
          console.log('\n观看成功：'+result.message)
  }else{
          console.log('\n观看失败：'+result.message)
  }
          } catch (e) {
          } finally {
            resolve()
          }
      },timeout)
    })
  }