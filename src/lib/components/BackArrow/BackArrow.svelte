<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon/Icon.svelte';

	const { params, route } = $page;
	const routeId = route.id ?? '';
	let href: string;

	// Get the first part of the route
	const rootPath = routeId.split('/')[1];

	// routeId === /workouts/[workoutId]/week/[weekId] ...etc.
	// params === { workoutId: '1', weekId: '1', ...etc.}
	// replace [] with the matching value from params
	const path = routeId.replace(/\[.*?\]/g, (match) => {
		const key = match.replace(/\[|\]/g, '');
		return params[key];
	});

	// Unless the route is /workouts, then remove the last /dir/id part of the url
	// e.g. /workouts/1/week/1/day/1 -> /workouts/1/week/1
	// e.g. /workouts/1/week/1 -> /workouts/1
	// e.g. /workouts/1 -> /workouts
	if (path === rootPath) {
		href = path;
	} else {
		const parts = path?.split('/').slice(0, -2);
		href = parts && parts.length > 1 ? parts.join('/') : `/${rootPath}`;
	}
</script>

<a {href} class="d-inline-block fs-3 color-light-1 pb-0">
	<Icon sprite="arrow-left" />
</a>
