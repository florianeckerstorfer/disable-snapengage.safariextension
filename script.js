var scripts = document.getElementsByTagName('script');
for (var i = 0; i < scripts.length; ++i)
{
	if (scripts[i].src.indexOf('snapengage') != -1)
	{
		scripts[i].outerHTML = '';
	}
}