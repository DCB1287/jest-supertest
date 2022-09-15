# jest-supertest
Example showing how to use supertest with jest to get coverage from Express server.

To run:
npm start
npm test -- --collectCoverage

The jest test tests each endpoint and the coverage report shows the tests that use supertest are covered and the test that uses axios is not.
