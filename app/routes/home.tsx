import type { Route } from "./+types/home";

export function meta(args: Route.MetaArgs) {
	return [
		{ title: "Emmanuel Oga's Page" },
		{ name: "description", content: "Welcome to Emmanuel Oga's Page!" },
	];
}

export function loader({ context }: Route.LoaderArgs) {
	return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home(props: Route.ComponentProps) {
	return (
		<div>
			<h1>Emmanuel Oga</h1>
		</div>
	);
}
