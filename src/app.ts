import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.urlencoded());
app.use(express.json());

interface ExpressError extends Error {
  status: number;
}

app.use((err: ExpressError, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app
  .listen(5000, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: 5000 🛡️
    ################################################
  `);
  })
  .on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
