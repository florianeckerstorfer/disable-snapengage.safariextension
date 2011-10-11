function disableSnapEngage()
{
	var scripts = document.getElementsByTagName('script');
	for (var i = 0; i < scripts.length; ++i)
	{
		if (scripts[i].src.indexOf('snapengage') != -1 || scripts[i].src.indexOf('snapabug') != -1 || scripts[i].innerHTML.indexOf('snapengage') != -1)
		{
			scripts[i].parentNode.removeChild(scripts[i]);
			// scripts[i].outerHTML = '';
		}
	}
	var div1 = document.getElementById('SnapABug_W');
	div1.parentNode.removeChild(div1);
	var div2 = document.getElementById('SnapABug_WP');
	div2.parentNode.removeChild(div2);
	var div3 = document.getElementById('SnapABug_Applet');
	div3.parentNode.removeChild(div3);
	var div4 = document.getElementsByClassName('SnapABug_Button');
	for (var i = 0; i < div4.length; ++i)
	{
		div4[i].parentNode.removeChild(div4[i]);
	}
}
window.setTimeout('disableSnapEngage();', 5000);