import axios from 'axios';

const provinceApi = {
  getProvince: async (name: string) => {
    try {
      const res = await axios.get(
        `https://provinces.open-api.vn/api/p/search/?q=${name}`,
      );
      return res.data;
    } catch (error) {
      return null;
    }
  },
};

export default provinceApi;
