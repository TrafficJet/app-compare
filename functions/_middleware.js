export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'www.app-compare.com') {
    url.hostname = 'app-compare.com';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
