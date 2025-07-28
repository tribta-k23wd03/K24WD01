const batch = 322147;

const startTime = new Date();

for (let i = 0; i < randomCustomers.length; i += 322147) {
  const batchSize = randomCustomers.slice(i, i + batch);
  db.myCollection.insertMany(batchSize);
}

const endTime = new Date();

const elapsedTime = (endTime - startTime) / 1000;

print(`inserted 5_000_000 documents in ${elapsedTime} seconds.`);
