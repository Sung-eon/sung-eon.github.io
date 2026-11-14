// The theme, from the key the project sites (Starlight) use: 'light', 'dark', or '' for auto. Runs in <head>, so the
// page never paints in the wrong theme, and a choice made on a project site holds here too.
(() => {
	const media = matchMedia('(prefers-color-scheme: light)');
	const apply = () => {
		let theme = '';
		try {
			theme = localStorage.getItem('starlight-theme') || '';
		} catch {}
		document.documentElement.dataset.theme = theme || (media.matches ? 'light' : 'dark');
	};
	apply();
	media.addEventListener('change', apply);
})();
