import bookTicketsAPI from "./customizeAxios";

export const addCar = async (car: FormData) => {
  try {
    const response = await bookTicketsAPI.post(
      `/car/add`,
      car
    );
    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error?.message : "Lỗi khi thêm xe");
  }
}