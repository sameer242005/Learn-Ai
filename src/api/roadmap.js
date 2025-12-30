import api from "./axios";

export const getRoadmap = async (skill) => {
  const res = await api.get(`/roadmaps/${encodeURIComponent(skill)}`);
  return res.data;
};