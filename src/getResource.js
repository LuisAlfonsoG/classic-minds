export default async function getResource(href, token){
  return await fetch(href, {
    "Authorization": `Bearer ${token}`
  });
}