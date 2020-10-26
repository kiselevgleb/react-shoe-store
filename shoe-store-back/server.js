const http = require('http');
const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const categories = JSON.parse(fs.readFileSync('./data/categories.json'));
const items = JSON.parse(fs.readFileSync('./data/products.json'));
const topSaleIds = [66, 65, 73];
const moreCount = 6;

const itemBasicMapper = item => ({
    id: item.id,
    category: item.category,
    title: item.title,
    price: item.price,
    images: item.images,
});

const randomNumber = (start, stop) => {
    return Math.floor(Math.random() * (stop - start + 1)) + start;
}

const fortune = (ctx, body = null, status = 200) => {
    // Uncomment for delay
    // const delay = randomNumber(1, 10) * 1000;
    const delay = 0;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Uncomment for error generation
            // if (Math.random() > 0.8) {
            //     reject(new Error('Something bad happened'));
            //     return;
            // }

            ctx.response.status = status;
            ctx.response.body = body;
            resolve();
        }, delay);
    })
}

const app = new Koa();
app.use(cors());
app.use(koaBody({
    json: true
}));

const router = new Router();

router.get('/api/top-sales', async (ctx, next) => {
    return fortune(ctx, items.filter(o => topSaleIds.includes(o.id)).map(itemBasicMapper));
});

router.get('/api/categories', async (ctx, next) => {
    return fortune(ctx, categories);
});

router.get('/api/items', async (ctx, next) => {
    const { query } = ctx.request;

    const categoryId = query.categoryId === undefined ? 0 : Number(query.categoryId);
    const offset = query.offset === undefined ? 0 : Number(query.offset);
    const q = query.q === undefined ? '' : query.q.trim().to