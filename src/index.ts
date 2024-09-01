import express, { Request, Response } from 'express';

const app = express();
const port = 8080;

const data: { [key: string]: string | string[] } = {
  bananas: ['123', '321'],
  mangos: 'i am mango',
  apples: 'no apples today',
};

app.get('/', (req: Request, res: Response) => {
  const params = req.query;
  if (params['query_fields']) {
    const fields = params['query_fields'];
    console.log(
      `[${new Date().toISOString()}]:`,
      'user search params: ',
      params,
    );

    res.json({});
  } else {
    res.status(400).send('query must contauin query_fields http param');
  }
});

app
  .listen(port, () => {
    console.log('server running at port: ', port);
  })
  .on('error', (err) => {
    throw new Error(err.message);
  });

function getDataByParams(params: Array<string>): object {
  const res: { [key: string]: string | string[] } = {};
  for (const param of params) {
    res[param] = data[param];
  }
  return res;
}
