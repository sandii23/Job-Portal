export const BASE_URL = "http://localhost:8000";
export const USER_API_END_POINT="http://localhost:8000/api/v1/user";
export const JOB_API_END_POINT="http://localhost:8000/api/v1/job";
export const APPLICATION_API_END_POINT="http://localhost:8000/api/v1/application";
export const COMPANY_API_END_POINT="http://localhost:8000/api/v1/company";

export const getImageUrl = (imagePath) => {
    if (!imagePath) return "";
    if (imagePath.startsWith("http")) return imagePath; // Already a full URL (Cloudinary)
    return `${BASE_URL}${imagePath}`; // Relative path from uploads folder
};