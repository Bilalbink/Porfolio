/**
 * Inserts the Cloudinary `t_DaisyUI-Card` transformation into a URL for
 * use in card/thumbnail previews. Returns the original URL unchanged if it
 * is not a Cloudinary URL or if the transform is already present.
 */
export const withCloudinaryCrop = (url: string): string => {
    if (!url.includes("res.cloudinary.com")) return url;
    if (url.includes("/t_DaisyUI-Card/")) return url;
    return url.replace("/upload/", "/upload/ar_325:208,c_fill/");
};
