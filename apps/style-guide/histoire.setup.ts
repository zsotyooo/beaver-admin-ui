import "@digital-beaver-admin/admin-ui/dist/admin-ui.css";
import { isDark, isCollecting } from "histoire/client";

if (!isCollecting()) {
	setInterval(() => {
		const htmlElement = document.documentElement;
		if (htmlElement) {
			htmlElement.classList[isDark() ? "add" : "remove"]("dark");
		}
	}, 1000);
}
