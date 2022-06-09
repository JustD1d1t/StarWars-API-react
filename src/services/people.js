import serverAPI from "./serverAPI";

const peopleService = {
  async getPeople(url) {
    const data = await serverAPI.get(url);
    return data;
  },
};

export default peopleService;
