const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export async function getData<T>(loadFrom: string): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${loadFrom}`);

    return response.json();
  } catch (error) {
    throw new Error(`error ${error}`);
  }
}

export async function addData<T>(addTo: string, data: T) {
  try {
    const response = await fetch(`${BASE_URL}${addTo}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ ...data })
    });

    return response.json();
  } catch (error) {
    throw new Error(`error ${error}`);
  }
}
