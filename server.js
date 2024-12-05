import express from "express";
import cors from "cors"
import userRoutes from './src/api/routes/userRoutes.js';
import taskRoutes from './src/api/routes/taskRoutes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', taskRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});