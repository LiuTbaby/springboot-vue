$(".time").datetimepicker({
    language: 'zh-CN', //语言
    format: 'yyyy-mm-dd',//日期的格式
    minView: 'month', //可以选择的最小视图
    initialDate: new Date(),//初始化显示的日期
    autoclose: true,//设置选择完日期或者时间之后，日否自动关闭日历
    todayBtn: true,//设置是否显示"今天"按钮,默认是false
    clearBtn: true//设置是否显示"清空"按钮，默认是false
});