function jsonStr(data){
    var arr=[];
    for(var name in data){
        arr.push(name+'='+data[name]);
    }
    return arr.join('&');
}
function ajax(json){
    //url,data,type,fnLoading,fnTime,fnSucc,fnFail
    json=json || {};
    if(!json.url)return;
    json.time=json.time || 15000;
    json.data=json.data || {};
    json.type=json.type || 'get';


    var timer=null;
    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else{
        var oAjax=new ActiveXObject('Micorsoft.XMLHTTP');
    }
    switch(json.type.toLowerCase()){
        case 'get':
                oAjax.open('get',json.url+'?'+jsonStr(json.data),true);
                oAjax.send();
            break;
        case 'post':
                oAjax.open('post',json.url,true);
                //设置头部
                oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                // 发送数据
                oAjax.send(jsonStr(json.data));
            break;
    }
    // 正在加载
    json.fnLoading && json.fnLoading();

    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
                json.fnSucc && json.fnSucc(oAjax.responseText);
                // 成功加载数据清除定时器
                clearTimeout(timer);
            }else{
                json.fnFail && json.fnFail(oAjax.status);
            }
        }
    };

    timer=setTimeout(function(){
        alert('网络超时！');
        //网络超时的回调函数
        json.fnTime && json.fnTime();
        oAjax.onreadystatechange=null;
    },json.time);
}









