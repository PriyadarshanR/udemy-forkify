import { TIMEOUT_SEC } from './config';

const timeout = function () {
  return new Promise((_, reject) => {
    setTimeout(
      reject,
      TIMEOUT_SEC * 1000,
      new Error(`Request took too long! Timeout after ${TIMEOUT_SEC} second`)
    );
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

/*
export const getJSON = async function (url) {
  const res = await Promise.race([fetch(`${url}`), timeout()]);
  const data = await res.json();

  // if (data.results === 0) throw new Error('Could not find any results.');
  if (!res.ok) throw new Error(`${data.message} status: ${res.status}`);

  return data;
};

export const sendJSON = async function (url, uploadData) {
  const res = await Promise.race([
    fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    }),
    timeout(),
  ]);
  const data = await res.json();

  // if (data.results === 0) throw new Error('Could not find any results.');
  if (!res.ok) throw new Error(`${data.message} status: ${res.status}`);

  return data;
};
*/
