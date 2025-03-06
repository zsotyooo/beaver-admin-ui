import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:saturate-[1.25] [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"bg-foreground text-background dark:text-foreground dark:bg-background shadow-sm hover:bg-foreground/90 dark:hover:bg-background/90",
				primary:
					"bg-gradient-to-b from-primary-from via-primary to-primary-to text-primary-foreground shadow-sm hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border border-input bg-background shadow hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
				ghost: "hover:bg-secondary/80",
				clear: "",
				link: "text-primary dark:text-foreground underline-offset-4 hover:underline",
			},
			size: {
				xl: "text-sm font-semibold uppercase h-12 rounded-md px-12 [&_svg]:mx-2 [&_svg]:size-5 shadow",
				lg: "text-base h-10 rounded-md px-8 [&_svg]:size-5",
				default: "text-sm h-9 px-4 py-2 [&_svg]:size-4",
				sm: "text-sm h-8 rounded-md px-3 [&_svg]:size-4",
				xs: "text-xs h-7 rounded px-2 [&_svg]:size-3",
				"icon-xl": "h-10 w-10 [&_svg]:size-6",
				"icon-lg": "h-10 w-10 [&_svg]:size-5",
				icon: "h-9 w-9 [&_svg]:size-4",
				"icon-sm": "h-8 w-8 [&_svg]:size-4",
				"icon-xs": "h-7 w-7 [&_svg]:size-3",
			},
			loading: {
				true: "cursor-wait animate-pulse repeat-infinite",
			},
			disabled: {
				true: "disabled:pointer-events-none disabled:saturate-[.6]",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			loading: false,
		},
	},
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
