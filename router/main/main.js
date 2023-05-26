import express from 'express';
import loginRouter from './login.js';
import indexRouter from './index.js';
import calendarRouter from './calendar.js';
import drugstoreRouter from './drugstore.js';
import medicineRouter from './medicine.js';

const router = express.Router();


router.use('/index',indexRouter)
router.use('/login', loginRouter);
router.use('/drugstore', drugstoreRouter);
router.use('/medicine', medicineRouter);
router.use('/calendar', calendarRouter);

export default router;