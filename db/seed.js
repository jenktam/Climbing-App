'use strict'

const db = require('APP/db')
    , {User, Project, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
  }

  // must seed projects after seedEverything() since user_id is included in it's model
  seeded.projects = projects(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  god: {
    email: 'god@example.com',
    name: 'So many names',
    password: '1234',
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234'
  },
  cindy: {
    name: 'Cindy',
    email: 'cindy@cindy.com',
    password: '1234'
  },
  jen: {
    name: 'Jen',
    email: 'jen@jen.com',
    password: '1234'
  },
  alice: {
    name: 'Alice',
    email: 'alice@alice.com',
    password: '1234'
  },
  dennis: {
    name: 'Dennis',
    email: 'dennis@dennis.com',
    password: '1234'
  }
})

const projects = seed(Project, ({users}) => ({
  'one': { name: 'The Right Thing', grade: 'V4', attempts: '2', location: 'Leavenworth, WA', stars: '5', notes: 'Such a cool crimp problem.', imageURL: 'http://lorempixel.com/400/200/', user_id: 1 },
  'two': { name: 'I Love Jugs', grade: 'V2', attempts: '5', location: 'Leavenworth, WA', stars: '5', notes: 'What a fun problem. I could do this over and over again...I love jugs!', imageURL: 'http://lorempixel.com/400/200/', user_id: 1 },
  'three': { name: 'The Wizard', grade: 'V3', attempts: '5', location: 'Leavenworth, WA', stars: '2', notes: 'This is a mystical one. It such has me puzzled.', imageURL: 'http://lorempixel.com/400/200/', user_id: 2 },
  'four': { name: 'Black Mark', grade: 'V4', attempts: '5', location: 'Squamish, BC', stars: '4', notes: 'One word...hard.', imageURL: 'http://lorempixel.com/400/200/', user_id: 3 },
  'five': { name: 'Hulkster\'s Hump Fest', grade: 'V2', attempts: '2', location: 'Squamish, BC', stars: '5', notes: 'Happy to put this one to rest on my second trip to Squamish.', imageURL: 'http://lorempixel.com/400/200/', user_id: 4 },
  'six': { name: 'Monkey Bar Right', grade: 'V2', attempts: '4', location: 'Red Rocks, NV', stars: '5', notes: 'I love this route. It is so much fun.', imageURL: 'http://lorempixel.com/400/200/', user_id: 5 },
  'seven': { name: 'Crimps', grade: 'V2', attempts: '2', location: 'Red Rocks, NV', stars: '5', notes: 'Great if you love crimps.', imageURL: 'http://lorempixel.com/400/200/', user_id: 6 },
}))

if (module === require.main) {
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others={}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {users, projects})
