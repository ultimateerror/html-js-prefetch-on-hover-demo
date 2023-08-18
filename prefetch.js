'use strict';

function prefetchUrl(evnt) {
	const linkPath = evnt.target.href;

	if (
		location.href.includes(linkPath) ||
		(linkPath.endsWith('/index.html') && location.pathname == '/')
	) {
		return;
	}

	const link = document.createElement('link');
	link.rel = 'prefetch';
	link.href = linkPath;
	document.head.appendChild(link);
}

document.querySelectorAll('nav a').forEach(link => {
	link.addEventListener('mouseover', prefetchUrl, { once: true });
});
