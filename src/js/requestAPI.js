import axios from 'axios';

export async function getImages(inputValue, pageNum) {
  const config = {
    params: {
      key: '34038357-dbc5d89a868895964ef22af2f',
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page: pageNum,
    },
  };

  try {
    const response = await axios.get('https://pixabay.com/api/', config);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// console.log(response);
