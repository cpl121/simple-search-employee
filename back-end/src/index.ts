import express from 'express';
import type { Request, Response } from 'express'
import cors from 'cors';
import { employeesRouter } from './routes/employee';

const app = express();
const PORT = 3000;

//app.set('json spaces', 2);
// app.use(express.urlencoded({extended: false}));

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/employees', employeesRouter);

app.get('/', (req: Request, res: Response) => {
	res.send('Working!!')
})

// Starting the server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});