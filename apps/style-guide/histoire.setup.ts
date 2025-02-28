import "@digital-beaver-admin/admin-ui/dist/admin-ui.css";
import { isDark } from "histoire/client";

if (document) {
	setInterval(() => {
		const htmlElement = document.documentElement; // Get the <html> element
		if (isDark()) htmlElement.classList.add("dark");
		else htmlElement.classList.remove("dark");
	}, 1000);
}
