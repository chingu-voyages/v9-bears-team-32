async function getAjax(route: string) {
  try {
    const res = await fetch(`/api${route}`);
    return await res.json();
  } catch(e) {
    throw e;
  }
}

async function postAjax(route: string, payload: string) {

  const postConfig: RequestInit = {
      method: 'POST',
      body: payload,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
  }
  try {
    const res = await fetch(`/api${route}`, postConfig);
    return await res.json();
  } catch(e) {
    throw e;
  }

}

export { getAjax, postAjax };
