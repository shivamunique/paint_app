function testing()
{
    let c=document.getElementById("c1");
    let ct=c.getcontext("2d");
    ct.fillstyle="red";
    ct.fillrect(10,20,200,150);
    ct.arc(10,20,40,0,6);
    ct.stroke();
}
