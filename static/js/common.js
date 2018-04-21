//时间相关函数
var dateUtil = {
	//判断是否时闰年
	isLeapYear:function(year){
		if(year%4==0 && year%100!=0 || year%400==0){
		return true;
		}
		return false;
	},
	//将日期格式化输出 “2015|08|24”
	formatDate:function(str){
		var oDate = new Date();
		var year = oDate.getFullYear();
		var month = oDate.getMonth()+1;
		var day = oDate.getDate();
		var val = year+str+dateUtil.addZero(month)+str+dateUtil.addZero(day);
		return val;
	},
	//获取某个月份总天数
	getDays:function(month){
		var oDate = new Date();
		var year = oDate.getFullYear()+1;
		switch(month){
			case 4:
			case 6:
			case 9:
			case 11:
				return 30;
			case 2:
				if(dateUtil.isLeapYear(year)){
					return 29;
				}
				return 28;
			default:
				return 31;
		}
	},
	//判断两个日期相差的天数
	getDiffDays:function(oDate1,oDate2){
		var ss = Math.floor(Math.abs(oDate1-oDate2)/1000);
		var days = Math.floor(ss/3600/24);
		var hours = Math.floor(ss/3600%24);
		var minutes = Math.floor(ss/60%60);
		var seconds = Math.floor(ss%60);
		return days+"天"+hours+"小时"+minutes+"分钟"+seconds+"秒";
	},
	getNDate:function(n){
	//获得N天以后的日期
	var oDate = new Date();
	var date = oDate.getDate();
	oDate.setDate(date+n);
	return oDate;
		
	},
	addZero:function(num){
		return num<10 ? "0"+num:num;
	}
}



//cookie相关函数

	function getCookie(name){
	//通过cookie名获取值
		var str = document.cookie;
		var arr = str.split('; ');
		for(var i=0;i<arr.length;i++){
			var arr1 = arr[i].split('=')
			if(arr1[0]===name){
				return arr1[1];
			}
		}
	}
	function setCookie(name,val,day){
	//设置、修改cookie
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+day);
		document.cookie = name + "=" + val +";expires="+oDate+";path=/";
	}
	function removeCookie(name){
	//删除cookie
		setCookie(name,1,-1);
	}



//获取非行内样式属性值
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}
	return obj.currentStyle[attr];
}


//通过类名获取节点的兼容性写法
function getByClass(name){
				if(document.getElementsByClassName){
					return document.getElementsByClassName(name);
				}
				//先获取页面所有节点
				var arr1 = [];
				var allNodes = document.getElementsByTagName("*");
				//利用通配符，遍历所有的节点，取到每个节点中的类名
				for(var i = 0; i< allNodes.length; i++){
					//取到的是一个字符串，直接使用indexOf方法无法准确判断是否含有name
					//将获取到的字符串转换成数组，再次进行遍历
					var arr = allNodes[i].className.split(" ");
					//不能数组indexOf方法判断是否含有name，该方法不兼容
					for(var j= 0; j<arr.length; j++){
						//如果数组中有name，将对应节点保存
						if(arr[j] === name){
							arr1.push(allNodes[i]);
						}
					}
				}
				return arr1;
			}


//DOM二级事件添加、移除
function addEvent(obj,name,fn){
				if(obj.addEventListener){
					obj.addEventListener(name,fn,false);
				}else{
					obj.attachEvent("on"+name,fn);
				}
			}		
function removeEvent(obj,name,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(name,fn);
	}else{
		obj.detachEvent("on"+name,fn);
	}
}


//缓冲运动
//obj表示要发生样式变化的DOM对象，json表示该对象哪些样式属性发生怎么样的变化如：(oBox，{'width':200})
function startMove(obj,json,fn){
	//开启一个定时器之前先在外部清除定时器，把定时器加到obj上,避免不同DOM对象定时器相互干扰
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//设置判断条件，当后续flag为true时满足条件，执行后续语句
		var flag = true;
		for(var attr in json){
			//attr表示样式属性，json[attr]表示属性值---最终要达到的条件
			var iTarget = json[attr];
			if(attr == "opacity"){
				//考虑到filter和opacity的取值有100倍的关系，便于计算与取值，在opacity的值基础上乘以100
				//没关系，后边赋值时再除以100
				var iCur = parseInt(getStyle(obj,"opacity")*100);
			}else{
				//parseInt为了去除单位px
				var iCur = parseInt(getStyle(obj,attr));
			}
			//iSpeed为每一次的变化值，这个值是逐渐减小，趋向于0
			var iSpeed = (iTarget - iCur)/8;
			//但是永远不能直接等于0，导致属性值变到某个程度时，不再发生变化
			//iSpeed是一个小于1的数时，考虑取整，涉及向上还是向下的问题
			//如果是一个正数，向下取整，取到0，在没有达到目标值时，就不再变化了，不符合要求
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed): Math.floor(iSpeed);
			
			//在赋值时，仍然考虑透明度和像素
			if(attr == "opacity"){
				obj.style.opacity = (iCur+iSpeed)/100;
				obj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")"
			}else{
				obj.style[attr] = iCur + iSpeed + "px";
			}
			
			//这时需要考虑什么清除定时器的问题，
			//如果所有都达到目标值时，才可以清除定时器
			//判断某个属性值是否达到了目标值，如果没有达到就将flag置为false
			//这个flag可以在上面定义出来，表示所有都达到了目标值
			if(iCur != iTarget){
				flag = false;
			}
			
		}
		//如果flag为true，表示都达到了目标值，可以清除该对象上定时器
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30);
}
