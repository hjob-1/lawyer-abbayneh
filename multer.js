import multer from "multer";

const multerConfig = (path_name) => {
  const storageEngine = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads/" + path_name),
    filename: (req, file, cb) =>
      cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname),
  });
  return multer({ storage: storageEngine });
};

export default multerConfig;
