import multer from 'multer';
import crypto from 'crypto';
import { resolve, extname } from 'path';

export default multer({
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (request, file, callback) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return callback(err);
        return callback(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
});
