import { browser } from '$app/environment';

export type Theme = 'plush' | 'sombre' | 'brilliant' | 'luminous';

class ThemeState {
	current = $state<Theme>('brilliant');

	constructor() {
		if (browser) {
			const saved = localStorage.getItem('theme');
			const validThemes: Theme[] = ['plush', 'sombre', 'brilliant', 'luminous'];
			if (saved && validThemes.includes(saved as Theme)) {
				this.current = saved as Theme;
			}
			this.applyTheme();
		}
	}

	set(theme: Theme) {
		this.current = theme;
		this.applyTheme();
		if (browser) {
			localStorage.setItem('theme', theme);
		}
	}

	private applyTheme() {
		if (browser) {
			document.documentElement.setAttribute('data-theme', this.current);
		}
	}
}

export const themeState = new ThemeState();
