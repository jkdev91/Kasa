import appartmentsData from "../assets/appartmentData.json";
import aboutDatas from "../assets/aboutData.json";

// this service is responsible for getting appartment data
export const getAllAppartments = () => appartmentsData;
export const getAppartmentById = (id) => appartmentsData.find((appartment) => appartment.id === id);

// TODO BONUS: get data asynchronously in the application
export const getAllAppartmentsAsync = async (isFailure = false) => {
    // simulate an async request
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (isFailure) throw new Error("Failed to fetch data");
    return appartmentsData;
}
export const getAppartmentByIdAsync = async (id, isFailure = false) => {
    // simulate an async request
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (isFailure) throw new Error("Failed to fetch data");
    return appartmentsData.find((appartment) => appartment.id === id);
}


// responsible for getting about datas
export const getAboutDatas = () => aboutDatas;
export const getAboutDatasbyId = (id) => aboutDatas.find((data) => data.id);