import type {GetSession, Handle} from "@sveltejs/kit";

import {ONE_DAY_IN_SECONDS, ONE_WEEK_IN_SECONDS} from "$lib/constants";

import {getCookieValue} from "$lib/getCookieValue";

import {isTheme} from "../types";

const getThemeFromCookie = (cookie: string | null) => {
	const theme = getCookieValue(cookie, "theme");
	return isTheme(theme) ? theme : null;
};

export const handle: Handle = async ({event, resolve}) => {
	const cookie = event.request.headers.get("cookie");

	event.locals.theme = getThemeFromCookie(cookie);

	return resolve(event);
};

export const getSession: GetSession = ({locals}) => {
	const theme = locals.theme;
	return {theme};
};
