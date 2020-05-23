import multer from 'multer';
import { resolve, extname } from 'path';

const storage = multer.diskStorage({
  destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  filename: (request, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    callback(null, uniqueSuffix + extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

export default upload;
