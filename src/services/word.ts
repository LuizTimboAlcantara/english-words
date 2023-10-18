import api from "./api";

export const getDetailsWord = async (word: string) => {
  try {
    const { data } = await api.get(`${word}`);

    if (data) return { data: data, status: 200 };
  } catch (error) {
    return { status: 400 };
  }
};
