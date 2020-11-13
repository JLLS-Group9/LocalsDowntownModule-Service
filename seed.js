
const faker = require('faker')
const Promise = require("bluebird");
const Property = require("./database/index.js")
const fs = Promise.promisifyAll(require("fs"));

let review = faker.lorem.sentences();
console.log(review);



const neighbor0 = [{ "id": 1, "topic": "Community", "username": "Kiel", "text": "repellat", "likes": 4, "date": "2020-04-25T00:33:31.740Z", "resident": false }, { "id": 2, "topic": "Community", "username": "Ronaldo", "text": "aliquam", "likes": 0, "date": "2020-08-05T20:20:01.344Z", "resident": true }, { "id": 3, "topic": "Dog Owners", "username": "Mandy", "text": "perferendis", "likes": 8, "date": "2020-02-29T12:41:39.611Z", "resident": true }, { "id": 4, "topic": "Dog Owners", "username": "Lawson", "text": "in", "likes": 8, "date": "2020-05-12T00:46:03.345Z", "resident": false }, { "id": 5, "topic": "Community", "username": "Mittie", "text": "architecto", "likes": 2, "date": "2020-09-10T05:11:02.813Z", "resident": false }, { "id": 6, "topic": "Parents", "username": "Ara", "text": "temporibus", "likes": 4, "date": "2020-03-12T13:51:19.277Z", "resident": false }, { "id": 7, "topic": "Dog Owners", "username": "Diana", "text": "autem", "likes": 8, "date": "2020-01-31T22:48:56.242Z", "resident": false }, { "id": 8, "topic": "Dog Owners", "username": "Cale", "text": "sit", "likes": 4, "date": "2020-09-29T22:18:35.249Z", "resident": false }, { "id": 9, "topic": "Parents", "username": "Tessie", "text": "assumenda", "likes": 0, "date": "2020-06-02T22:08:52.994Z", "resident": false }, { "id": 10, "topic": "Dog Owners", "username": "Boyd", "text": "assumenda", "likes": 9, "date": "2020-07-14T21:22:44.218Z", "resident": false }, { "id": 11, "topic": "Dog Owners", "username": "Jeromy", "text": "reprehenderit", "likes": 10, "date": "2020-02-17T19:10:54.694Z", "resident": false }, { "id": 12, "topic": "Parents", "username": "Josianne", "text": "maiores", "likes": 5, "date": "2019-11-18T21:15:44.169Z", "resident": false }, { "id": 13, "topic": "Parents", "username": "Jeremy", "text": "iusto", "likes": 3, "date": "2020-03-10T19:12:09.468Z", "resident": false }, { "id": 14, "topic": "Parents", "username": "Alfred", "text": "quasi", "likes": 6, "date": "2020-05-05T00:39:14.559Z", "resident": false }, { "id": 15, "topic": "Dog Owners", "username": "Tess", "text": "laudantium", "likes": 10, "date": "2020-05-13T14:30:31.185Z", "resident": false }]

const neighbor1 = [{ "id": 1, "topic": "Commute", "username": "Michaela", "text": "ullam", "likes": 6, "date": "2020-01-24T03:49:12.650Z", "resident": false }, { "id": 2, "topic": "Community", "username": "Madge", "text": "voluptatem", "likes": 7, "date": "2020-07-29T18:24:47.323Z", "resident": true }, { "id": 3, "topic": "Dog Owners", "username": "Raina", "text": "culpa", "likes": 0, "date": "2020-06-20T04:04:13.148Z", "resident": true }, { "id": 4, "topic": "Parents", "username": "Gregory", "text": "possimus", "likes": 3, "date": "2020-06-02T07:39:11.330Z", "resident": true }, { "id": 5, "topic": "Parents", "username": "Lesly", "text": "accusantium", "likes": 9, "date": "2020-07-20T00:58:56.107Z", "resident": true }, { "id": 6, "topic": "Parents", "username": "Vance", "text": "quo", "likes": 5, "date": "2020-06-26T20:09:40.730Z", "resident": true }, { "id": 7, "topic": "Commute", "username": "Murphy", "text": "maiores", "likes": 4, "date": "2020-03-20T07:57:58.026Z", "resident": true }, { "id": 8, "topic": "Community", "username": "Marquise", "text": "asperiores", "likes": 8, "date": "2020-08-09T23:00:37.397Z", "resident": false }, { "id": 9, "topic": "Community", "username": "Elsa", "text": "corrupti", "likes": 4, "date": "2019-12-09T03:30:38.358Z", "resident": true }, { "id": 10, "topic": "Parents", "username": "Chesley", "text": "nobis", "likes": 4, "date": "2019-12-05T16:53:25.600Z", "resident": false }, { "id": 11, "topic": "Parents", "username": "Henry", "text": "debitis", "likes": 10, "date": "2020-08-07T15:24:08.993Z", "resident": false }, { "id": 12, "topic": "Dog Owners", "username": "Norma", "text": "optio", "likes": 7, "date": "2019-11-25T10:07:39.987Z", "resident": false }, { "id": 13, "topic": "Community", "username": "Janae", "text": "labore", "likes": 2, "date": "2020-10-21T06:08:26.769Z", "resident": false }, { "id": 14, "topic": "Community", "username": "Cassidy", "text": "voluptas", "likes": 8, "date": "2020-07-30T16:43:44.589Z", "resident": true }, { "id": 15, "topic": "Community", "username": "Nathan", "text": "vel", "likes": 10, "date": "2020-06-25T15:35:31.120Z", "resident": false }]

const neighbor2 = [{ "id": 1, "topic": "Commute", "username": "Raphaelle", "text": "quia", "likes": 5, "date": "2020-09-06T17:42:52.664Z", "resident": true }, { "id": 2, "topic": "Dog Owners", "username": "Virginie", "text": "officiis", "likes": 2, "date": "2020-02-07T02:19:08.755Z", "resident": true }, { "id": 3, "topic": "Community", "username": "Fannie", "text": "sed", "likes": 3, "date": "2020-07-25T02:26:48.470Z", "resident": true }, { "id": 4, "topic": "Dog Owners", "username": "Myah", "text": "dolorem", "likes": 6, "date": "2020-05-17T20:57:02.488Z", "resident": true }, { "id": 5, "topic": "Dog Owners", "username": "Roscoe", "text": "autem", "likes": 7, "date": "2020-08-14T10:22:13.992Z", "resident": false }, { "id": 6, "topic": "Commute", "username": "Katarina", "text": "sunt", "likes": 6, "date": "2020-05-17T16:57:00.559Z", "resident": true }, { "id": 7, "topic": "Commute", "username": "Stephanie", "text": "sed", "likes": 3, "date": "2020-03-21T12:22:26.002Z", "resident": true }, { "id": 8, "topic": "Commute", "username": "Yvonne", "text": "ipsam", "likes": 2, "date": "2020-04-04T19:21:39.146Z", "resident": true }, { "id": 9, "topic": "Community", "username": "Al", "text": "autem", "likes": 10, "date": "2020-03-14T18:37:53.901Z", "resident": true }, { "id": 10, "topic": "Commute", "username": "Evangeline", "text": "quo", "likes": 7, "date": "2020-06-07T12:46:20.914Z", "resident": true }, { "id": 11, "topic": "Dog Owners", "username": "Marlon", "text": "rerum", "likes": 4, "date": "2020-07-12T14:41:56.991Z", "resident": false }, { "id": 12, "topic": "Commute", "username": "Carmella", "text": "perspiciatis", "likes": 2, "date": "2020-06-28T15:49:59.058Z", "resident": true }, { "id": 13, "topic": "Dog Owners", "username": "Manuela", "text": "voluptate", "likes": 7, "date": "2020-09-20T22:47:36.659Z", "resident": false }, { "id": 14, "topic": "Commute", "username": "Greta", "text": "in", "likes": 10, "date": "2020-09-14T18:21:15.050Z", "resident": true }, { "id": 15, "topic": "Dog Owners", "username": "Joanie", "text": "voluptatibus", "likes": 0, "date": "2020-08-20T18:35:13.059Z", "resident": true }]

const neighbor3 = [{ "id": 1, "topic": "Parents", "username": "Octavia", "text": "quibusdam", "likes": 9, "date": "2020-08-04T05:47:36.563Z", "resident": true }, { "id": 2, "topic": "Commute", "username": "Tito", "text": "nihil", "likes": 10, "date": "2020-07-01T06:52:53.232Z", "resident": false }, { "id": 3, "topic": "Commute", "username": "Clifton", "text": "maiores", "likes": 3, "date": "2020-10-11T04:45:51.623Z", "resident": false }, { "id": 4, "topic": "Dog Owners", "username": "Shane", "text": "aut", "likes": 10, "date": "2020-09-14T09:23:40.824Z", "resident": true }, { "id": 5, "topic": "Community", "username": "Darrel", "text": "magnam", "likes": 7, "date": "2020-02-22T19:54:01.905Z", "resident": false }, { "id": 6, "topic": "Commute", "username": "Estella", "text": "quia", "likes": 10, "date": "2020-09-06T02:30:53.044Z", "resident": true }, { "id": 7, "topic": "Commute", "username": "Trevor", "text": "doloremque", "likes": 10, "date": "2020-03-17T14:22:51.405Z", "resident": false }, { "id": 8, "topic": "Commute", "username": "Stuart", "text": "cumque", "likes": 2, "date": "2020-02-09T04:35:14.053Z", "resident": false }, { "id": 9, "topic": "Parents", "username": "Cortney", "text": "quo", "likes": 9, "date": "2020-10-12T01:12:46.993Z", "resident": true }, { "id": 10, "topic": "Dog Owners", "username": "Abbey", "text": "accusantium", "likes": 3, "date": "2020-03-10T16:58:43.016Z", "resident": true }, { "id": 11, "topic": "Dog Owners", "username": "Cleve", "text": "suscipit", "likes": 9, "date": "2020-06-01T17:20:16.288Z", "resident": false }, { "id": 12, "topic": "Parents", "username": "Gina", "text": "quia", "likes": 5, "date": "2020-02-18T06:57:35.370Z", "resident": true }, { "id": 13, "topic": "Dog Owners", "username": "Jarred", "text": "eligendi", "likes": 8, "date": "2020-11-02T00:11:00.187Z", "resident": false }, { "id": 14, "topic": "Dog Owners", "username": "Garret", "text": "qui", "likes": 7, "date": "2020-04-23T22:25:33.192Z", "resident": true }, { "id": 15, "topic": "Parents", "username": "Victoria", "text": "autem", "likes": 10, "date": "2020-06-07T05:43:35.129Z", "resident": false }]

const neighbor4 = [{ "id": 1, "topic": "Parents", "username": "Mariane", "text": "occaecati", "likes": 4, "date": "2020-01-29T19:09:46.783Z", "resident": false }, { "id": 2, "topic": "Dog Owners", "username": "Alta", "text": "fugit", "likes": 8, "date": "2020-07-25T08:02:13.477Z", "resident": true }, { "id": 3, "topic": "Community", "username": "Cecilia", "text": "laudantium", "likes": 2, "date": "2020-08-29T14:27:12.491Z", "resident": false }, { "id": 4, "topic": "Commute", "username": "Colten", "text": "culpa", "likes": 6, "date": "2020-05-11T17:39:44.906Z", "resident": true }, { "id": 5, "topic": "Parents", "username": "Jose", "text": "delectus", "likes": 3, "date": "2020-09-21T22:43:26.567Z", "resident": true }, { "id": 6, "topic": "Parents", "username": "Derick", "text": "exercitationem", "likes": 9, "date": "2020-01-14T13:01:33.925Z", "resident": true }, { "id": 7, "topic": "Parents", "username": "Conor", "text": "ut", "likes": 9, "date": "2020-05-21T14:16:46.076Z", "resident": false }, { "id": 8, "topic": "Parents", "username": "Amaya", "text": "error", "likes": 0, "date": "2020-01-06T23:02:30.592Z", "resident": true }, { "id": 9, "topic": "Dog Owners", "username": "Devin", "text": "consectetur", "likes": 9, "date": "2020-02-08T14:08:10.198Z", "resident": true }, { "id": 10, "topic": "Community", "username": "Jovani", "text": "molestiae", "likes": 9, "date": "2020-02-17T19:14:05.511Z", "resident": false }, { "id": 11, "topic": "Parents", "username": "Shana", "text": "eum", "likes": 4, "date": "2019-12-07T05:23:49.945Z", "resident": false }, { "id": 12, "topic": "Commute", "username": "Pearlie", "text": "voluptatem", "likes": 2, "date": "2020-03-15T03:44:52.681Z", "resident": true }, { "id": 13, "topic": "Community", "username": "Monty", "text": "eum", "likes": 4, "date": "2020-11-02T21:53:20.040Z", "resident": true }, { "id": 14, "topic": "Commute", "username": "Aidan", "text": "sit", "likes": 5, "date": "2020-08-21T15:51:16.427Z", "resident": false }, { "id": 15, "topic": "Commute", "username": "Mable", "text": "ut", "likes": 3, "date": "2020-02-02T03:41:18.356Z", "resident": false }]

const neighbor5 = [{ "id": 1, "topic": "Community", "username": "Amari", "text": "et", "likes": 3, "date": "2020-04-04T23:12:44.399Z", "resident": true }, { "id": 2, "topic": "Parents", "username": "Kelly", "text": "rem", "likes": 6, "date": "2020-03-23T15:36:08.709Z", "resident": true }, { "id": 3, "topic": "Commute", "username": "Christophe", "text": "qui", "likes": 2, "date": "2019-11-19T11:30:37.706Z", "resident": true }, { "id": 4, "topic": "Dog Owners", "username": "Giles", "text": "odio", "likes": 5, "date": "2020-10-13T18:00:02.051Z", "resident": true }, { "id": 5, "topic": "Community", "username": "Alfonzo", "text": "explicabo", "likes": 8, "date": "2020-07-08T10:51:33.246Z", "resident": false }, { "id": 6, "topic": "Commute", "username": "Sebastian", "text": "ducimus", "likes": 1, "date": "2019-12-10T15:43:01.040Z", "resident": true }, { "id": 7, "topic": "Commute", "username": "Leopoldo", "text": "et", "likes": 7, "date": "2020-10-21T21:11:47.907Z", "resident": false }, { "id": 8, "topic": "Dog Owners", "username": "Alessia", "text": "ut", "likes": 10, "date": "2020-03-07T07:59:38.212Z", "resident": true }, { "id": 9, "topic": "Dog Owners", "username": "Sydnie", "text": "quos", "likes": 7, "date": "2020-06-12T19:52:21.015Z", "resident": false }, { "id": 10, "topic": "Parents", "username": "Kyla", "text": "adipisci", "likes": 3, "date": "2020-08-24T18:56:48.267Z", "resident": true }, { "id": 11, "topic": "Community", "username": "Shyann", "text": "reiciendis", "likes": 8, "date": "2020-10-31T19:01:40.565Z", "resident": true }, { "id": 12, "topic": "Parents", "username": "Domenick", "text": "voluptates", "likes": 0, "date": "2020-07-13T10:09:03.185Z", "resident": true }, { "id": 13, "topic": "Commute", "username": "Roger", "text": "et", "likes": 5, "date": "2020-06-12T06:29:26.645Z", "resident": false }, { "id": 14, "topic": "Parents", "username": "Monte", "text": "et", "likes": 5, "date": "2020-10-11T18:14:47.322Z", "resident": false }, { "id": 15, "topic": "Dog Owners", "username": "Westley", "text": "et", "likes": 9, "date": "2020-06-16T01:20:40.818Z", "resident": true }]

const neighbor6 = [{ "id": 1, "topic": "Parents", "username": "Tony", "text": "ab", "likes": 9, "date": "2020-07-23T19:58:09.003Z", "resident": true }, { "id": 2, "topic": "Commute", "username": "Brandi", "text": "ea", "likes": 2, "date": "2020-06-13T19:56:13.177Z", "resident": true }, { "id": 3, "topic": "Parents", "username": "Nolan", "text": "et", "likes": 2, "date": "2019-11-15T10:30:19.043Z", "resident": true }, { "id": 4, "topic": "Dog Owners", "username": "Jasen", "text": "modi", "likes": 3, "date": "2019-12-13T20:01:07.885Z", "resident": true }, { "id": 5, "topic": "Community", "username": "Jedidiah", "text": "dignissimos", "likes": 2, "date": "2020-10-14T04:28:21.249Z", "resident": true }, { "id": 6, "topic": "Dog Owners", "username": "Jocelyn", "text": "et", "likes": 9, "date": "2020-08-11T21:50:09.561Z", "resident": false }, { "id": 7, "topic": "Commute", "username": "Teagan", "text": "qui", "likes": 4, "date": "2020-04-01T20:54:08.173Z", "resident": false }, { "id": 8, "topic": "Dog Owners", "username": "Mattie", "text": "id", "likes": 8, "date": "2020-07-15T22:47:33.221Z", "resident": false }, { "id": 9, "topic": "Community", "username": "Graham", "text": "nihil", "likes": 9, "date": "2020-09-24T22:12:01.090Z", "resident": true }, { "id": 10, "topic": "Commute", "username": "Stan", "text": "quisquam", "likes": 2, "date": "2020-07-16T22:39:40.404Z", "resident": true }, { "id": 11, "topic": "Dog Owners", "username": "Kathryn", "text": "minus", "likes": 3, "date": "2019-11-25T14:18:44.225Z", "resident": false }, { "id": 12, "topic": "Commute", "username": "Hester", "text": "sequi", "likes": 8, "date": "2020-02-10T17:17:55.427Z", "resident": true }, { "id": 13, "topic": "Parents", "username": "Valentine", "text": "animi", "likes": 6, "date": "2020-07-29T10:14:12.092Z", "resident": true }, { "id": 14, "topic": "Parents", "username": "Luis", "text": "cumque", "likes": 3, "date": "2020-09-30T09:38:13.582Z", "resident": true }, { "id": 15, "topic": "Dog Owners", "username": "Oral", "text": "cum", "likes": 0, "date": "2020-08-04T03:16:33.481Z", "resident": false }]

const neighbor7 = [{ "id": 1, "topic": "Commute", "username": "Antonietta", "text": "aut", "likes": 5, "date": "2020-02-20T11:38:37.299Z", "resident": false }, { "id": 2, "topic": "Dog Owners", "username": "Zachariah", "text": "ea", "likes": 8, "date": "2020-06-01T08:50:43.661Z", "resident": false }, { "id": 3, "topic": "Community", "username": "Dominique", "text": "rerum", "likes": 9, "date": "2020-01-01T19:52:53.597Z", "resident": true }, { "id": 4, "topic": "Parents", "username": "Blair", "text": "est", "likes": 5, "date": "2020-03-31T05:07:08.048Z", "resident": true }, { "id": 5, "topic": "Community", "username": "Anderson", "text": "odio", "likes": 6, "date": "2019-11-30T11:04:37.539Z", "resident": false }, { "id": 6, "topic": "Commute", "username": "Manuel", "text": "dolores", "likes": 10, "date": "2020-07-16T20:26:12.489Z", "resident": false }, { "id": 7, "topic": "Commute", "username": "Raphael", "text": "ut", "likes": 3, "date": "2020-04-18T07:11:48.759Z", "resident": true }, { "id": 8, "topic": "Commute", "username": "Dawn", "text": "molestiae", "likes": 6, "date": "2020-06-13T03:27:36.101Z", "resident": false }, { "id": 9, "topic": "Dog Owners", "username": "Genesis", "text": "vel", "likes": 10, "date": "2020-01-30T15:13:53.304Z", "resident": true }, { "id": 10, "topic": "Dog Owners", "username": "Rory", "text": "maxime", "likes": 1, "date": "2020-03-20T04:40:12.406Z", "resident": true }, { "id": 11, "topic": "Community", "username": "Junior", "text": "non", "likes": 2, "date": "2020-04-21T09:12:37.643Z", "resident": false }, { "id": 12, "topic": "Community", "username": "Emery", "text": "quia", "likes": 4, "date": "2020-04-06T16:32:11.285Z", "resident": true }, { "id": 13, "topic": "Dog Owners", "username": "Rickey", "text": "quasi", "likes": 8, "date": "2020-02-16T21:50:07.340Z", "resident": false }, { "id": 14, "topic": "Dog Owners", "username": "Jaydon", "text": "veritatis", "likes": 7, "date": "2020-01-12T00:22:58.241Z", "resident": true }, { "id": 15, "topic": "Dog Owners", "username": "Dave", "text": "quam", "likes": 5, "date": "2020-04-06T18:56:20.901Z", "resident": true }]

const neighbor8 = [{ "id": 1, "topic": "Dog Owners", "username": "Carole", "text": "error", "likes": 10, "date": "2020-05-09T00:12:09.404Z", "resident": true }, { "id": 2, "topic": "Parents", "username": "Maymie", "text": "quia", "likes": 10, "date": "2020-06-02T03:52:12.211Z", "resident": false }, { "id": 3, "topic": "Community", "username": "Jaiden", "text": "nisi", "likes": 1, "date": "2020-09-10T22:14:44.550Z", "resident": true }, { "id": 4, "topic": "Commute", "username": "Marjory", "text": "eos", "likes": 1, "date": "2020-03-30T17:22:49.579Z", "resident": true }, { "id": 5, "topic": "Commute", "username": "Elton", "text": "earum", "likes": 7, "date": "2020-11-11T21:22:48.037Z", "resident": true }, { "id": 6, "topic": "Dog Owners", "username": "Alexandria", "text": "natus", "likes": 3, "date": "2020-08-24T07:36:35.696Z", "resident": false }, { "id": 7, "topic": "Dog Owners", "username": "Ayla", "text": "saepe", "likes": 1, "date": "2019-11-18T11:00:07.775Z", "resident": true }, { "id": 8, "topic": "Parents", "username": "Deanna", "text": "minus", "likes": 7, "date": "2020-09-13T22:43:47.904Z", "resident": false }, { "id": 9, "topic": "Parents", "username": "Horacio", "text": "similique", "likes": 8, "date": "2020-08-14T16:05:23.198Z", "resident": true }, { "id": 10, "topic": "Parents", "username": "Daron", "text": "et", "likes": 8, "date": "2020-01-24T01:39:23.674Z", "resident": false }, { "id": 11, "topic": "Parents", "username": "Coleman", "text": "voluptas", "likes": 6, "date": "2020-11-04T09:25:07.240Z", "resident": false }, { "id": 12, "topic": "Parents", "username": "Carmelo", "text": "eos", "likes": 3, "date": "2020-06-26T02:55:35.979Z", "resident": true }, { "id": 13, "topic": "Community", "username": "Leonie", "text": "odio", "likes": 6, "date": "2020-01-26T06:39:52.122Z", "resident": false }, { "id": 14, "topic": "Parents", "username": "Wilton", "text": "laboriosam", "likes": 6, "date": "2019-12-06T22:51:29.582Z", "resident": true }, { "id": 15, "topic": "Dog Owners", "username": "Dimitri", "text": "dolorem", "likes": 7, "date": "2019-12-31T22:34:45.896Z", "resident": true }]

const neighbor9 = [{ "id": 1, "topic": "Community", "username": "Zoey", "text": "sit", "likes": 3, "date": "2020-05-21T19:13:42.987Z", "resident": true }, { "id": 2, "topic": "Dog Owners", "username": "Jo", "text": "dolor", "likes": 8, "date": "2020-10-22T14:53:00.753Z", "resident": false }, { "id": 3, "topic": "Parents", "username": "Loraine", "text": "vel", "likes": 8, "date": "2019-11-30T17:28:27.476Z", "resident": true }, { "id": 4, "topic": "Community", "username": "Wellington", "text": "doloremque", "likes": 6, "date": "2020-01-06T03:59:06.549Z", "resident": true }, { "id": 5, "topic": "Community", "username": "Thea", "text": "voluptatibus", "likes": 7, "date": "2019-12-06T00:57:56.326Z", "resident": false }, { "id": 6, "topic": "Dog Owners", "username": "Lafayette", "text": "minus", "likes": 9, "date": "2020-01-18T00:49:54.100Z", "resident": false }, { "id": 7, "topic": "Commute", "username": "Kayli", "text": "ut", "likes": 6, "date": "2020-07-31T11:12:58.752Z", "resident": false }, { "id": 8, "topic": "Community", "username": "Ansel", "text": "odit", "likes": 4, "date": "2020-04-20T05:12:40.673Z", "resident": true }, { "id": 9, "topic": "Community", "username": "Enid", "text": "quidem", "likes": 4, "date": "2020-02-20T20:16:47.186Z", "resident": false }, { "id": 10, "topic": "Dog Owners", "username": "Muhammad", "text": "repellendus", "likes": 7, "date": "2020-10-27T02:38:40.830Z", "resident": false }, { "id": 11, "topic": "Commute", "username": "Charlie", "text": "voluptatem", "likes": 6, "date": "2020-01-07T09:55:13.595Z", "resident": false }, { "id": 12, "topic": "Community", "username": "Bo", "text": "reiciendis", "likes": 2, "date": "2019-12-12T07:58:31.548Z", "resident": true }, { "id": 13, "topic": "Dog Owners", "username": "Monserrat", "text": "sit", "likes": 7, "date": "2020-08-07T11:36:46.214Z", "resident": true }, { "id": 14, "topic": "Dog Owners", "username": "Griffin", "text": "id", "likes": 9, "date": "2020-01-17T10:35:58.079Z", "resident": false }, { "id": 15, "topic": "Community", "username": "Eliseo", "text": "nemo", "likes": 9, "date": "2019-12-17T04:55:48.007Z", "resident": true }]

const allReviews= [neighbor0,neighbor1,neighbor2,neighbor3,neighbor4,neighbor5,neighbor6,neighbor7,neighbor8,neighbor9,]




//function to determine topic
function SingleTopic() {
  let random = Math.floor(Math.random() * 4);
  if (random === 0) {
    random = 'Community';
  } else if (random === 1) {
    random = 'Dog Owners';
  } else if (random === 2) {
    random = 'Parents';
  } else {
    random = 'Commute'
  }
  return random;
}

//function that creates reviews
// function SingleReview(id) {
//   let review = {}
//   review.id = id;
//   review.topic = SingleTopic();
//   review.username = faker.name.firstName();
//   review.text = faker.lorem.word(); //change to sentences later
//   review.likes = Math.floor(Math.random()*11);
//   review.date = faker.date.past();
//   review.resident = faker.random.boolean();
//   review.
//   // review.yard = Math.floor(Math.random()*11);
//   // review.car = faker.random.number();
//   // review.holiday = faker.random.number();
//   // review.dogs = faker.random.number();
//   // review.parking = faker.random.number();
//   // review.kids = faker.random.number();
//   // review.atleast5years = faker.random.number();
//   // review.streetslit = faker.random.number();
//   // review.friendlyneighbor = faker.random.number();
//   // review.sidewalks = faker.random.number();
//   // review.restraunts = faker.random.number();
//   // review.wildlife = faker.random.number();
//   // review.walkalone = faker.random.number();
//   // review.communityevent = faker.random.number();
//   // review.quiet = faker.random.number();
//   // review.groccery = faker.random.number();

//   return review;
// }



//function to determine neighborhood
function Neighborhood(id) {
  if (id === 0) {
    return 'sunset';
  } else if (id === 1) {
    return 'mission';
  } else if (id === 2) {
    return 'castro';
  } else if (id === 3) {
    return 'sea cliff';
  } else if (id === 4) {
    return 'chinatown';
  } else if (id === 5) {
    return 'richmond';
  } else if (id === 6) {
    return 'ocean';
  } else if (id === 7) {
    return 'excelisior';
  } else if (id === 8) {
    return 'downtown';
  } else if (id === 9) {
    return 'monteray';
  } else {
    return 'silver';
  }
}



//function to create one neighborhood
function SingleNeighborhood() {
  let neighborhood = {};
  neighborhood.id = Math.floor(Math.random() * 10);
  neighborhood.name = Neighborhood(neighborhood.id)
  neighborhood.reviews = [];

  if (neighborhood.id === 0) {
    neighborhood.reviews = neighbor0
  }

  else if (neighborhood.id === 1) {
    neighborhood.reviews = neighbor1

  } else if (neighborhood.id === 2) {
    neighborhood.reviews = neighbor2

  } else if (neighborhood.id === 3) {
    neighborhood.reviews = neighbor3

  } else if (neighborhood.id === 4) {
    neighborhood.reviews = neighbor4

  } else if (neighborhood.id === 5) {
    neighborhood.reviews = neighbor5

  } else if (neighborhood.id === 6) {
    neighborhood.reviews = neighbor6

  } else if (neighborhood.id === 7) {
    neighborhood.reviews = neighbor7

  } else if (neighborhood.id === 8) {
    neighborhood.reviews = neighbor8

  } else if (neighborhood.id === 9) {
    neighborhood.reviews = neighbor9

  } else {
    neighborhood.reviews = neighbor0

  }


  return neighborhood;
}

// function that creates one record
function SingleRecord(id) {
  let record = {};
  record.id = id;
  record.neighborhood = SingleNeighborhood();

  return record;

}

//function to seed multiple records into a file

function seedData(entries) {
  let created = 1;
  let filetext = [];

  while (created <= entries) {
    var data = SingleRecord(created);
    filetext.push(JSON.stringify(data));
    created++;
  }

  return new Promise((resolve, reject) => {
    fs.writeFile('./data.js', filetext, (err, success) => {
      if (err) {
        reject(err)
      } else {
        resolve(success)
      }
    })
  })

}

// seedData(100)
//   .then(() => { console.log('it worked') })
//   .catch(() => { console.log('read error message') })

//
//support mvp
//if we want write to a db
//test out with small data
//get comfy w inserting data
//csv files
//json files

// fs.readFile('./data.js', 'utf8',(err, data) => {
//   if (err) throw err;
//   console.log(typeof data)
//   var format = JSON.parse(data)
//   console.log(format[0])
//   for (var i = 0; i < format.length; i++) {
//     Property.insertOne(format[i], (err, success) => {
//     if (err) {
//       console.log('err')
//     } else {
//       console.log('inserted')
//     }
//   });
//   }
// });

Property.findAll((err, success) => {
  if (err) {
    console.log('errr')
  } else {
    console.log(success)
  }
});










