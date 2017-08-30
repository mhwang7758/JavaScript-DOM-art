/**
 * Created by mhwang on 2017/8/19.
 */
function showPic(whichPic) {
    var source = whichPic.getAttribute("href");
    var placeHolder = document.getElementById("placeHolder");
    placeHolder.setAttribute("src",source);
    var title = whichPic.getAttribute("title");
    var desription = document.getElementById("description");
    desription.firstChild.nodeValue = title;
}
