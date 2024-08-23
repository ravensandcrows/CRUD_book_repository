const router = require('express').Router();
const Book = require('../../models/Book');

// GET ALL BOOKS
router.get('/', (req,res)=>{
    Book.findAll().then((bookData)=>{
        res.json(bookData);
    });
});

// POST A NEW BOOK
router.post('/',(req,res)=>{
    // later update create req.body.title etc.
    Book.create(req.body)
        .then((newBook)=>{
            res.json(newBook);
        })
        .catch((err)=>{
            res.json(err);
        })
});


// SEED DATA
router.post('/seed', (req, res) => {
    Book.bulkCreate([
      {
        title: 'Make It Stick: The Science of Successful Learning',
        author: 'Peter Brown',
        isbn: '978-0674729018',
        pages: 336,
        edition: 1,
        is_paperback: false
      },
      {
        title: 'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
        author: 'Kenneth Rubin',
        isbn: '978-0137043293',
        pages: 500,
        edition: 1,
        is_paperback: true
      },
      {
        title: "White Fragility: Why It's So Hard for White People to Talk About Racism",
        author: 'Robin DiAngelo',
        isbn: '978-0807047415',
        pages: 192,
        edition: 2,
        is_paperback: true
      },
      {
        title: 'The Pragmatic Programmer: Your Journey To Mastery',
        author: 'David Thomas',
        isbn: '978-0135957059',
        pages: 352,
        edition: 2,
        is_paperback: false
      },
      {
        title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
        author: 'Donald Knuth',
        isbn: '978-0201896831',
        pages: 672,
        edition: 3,
        is_paperback: false
      },
      {
        title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
        author: 'Safiya Umoja Noble',
        isbn: '978-1479837243',
        pages: 256,
        edition: 1,
        is_paperback: true
      }
    ])
      .then(() => {
        res.send('Database seeded!');
      })
      .catch((err) => {
        res.json(err);
      });
});

module.exports = router;
