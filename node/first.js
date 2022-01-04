// core modules - fs, os, process, http


for (i = 0; i < 100000; ++i) {
    console.log(i);
    if (i === 1001) {
        process.exit(1);
    }
}

console.log('done');



