// try {
//     // try statements
// } catch (e) {
//     // catch statements
// } finally {
//     // finally statements
// }

// if an error occurs inside the try block
// execute the catch block

// function idontExist() {
//     // try {
//         undefinedFunction();
//     // } catch (err) {
//         // console.log('E2');
//     // }
// }

// try {
//     idontExist();
// } catch (err) {
//     console.log('E1');
// }

// try {
//     console.log(1);
//     try {

//     } catch (e) {

//     }
//     // idontExist();
// } catch (e) {
//     console.log('err');
// } finally {
//     console.log('finally');
// }

// try {
//     idontExist(); // JS will throw an exception as this function does not exists
// } catch (e) {
//     if (e instanceof ReferenceError) {
//         console.log('Ref err occured');
//     } else {
//         console.log('Err occured');
//     }
// }

// function area(l, b) {
//     try {
//         if (isNaN(l) || isNaN(b)) {
//             throw 'Not a number exception';
//         }
//         return l * b;
//     } catch (e) {
//         console.log('Please pass a number');
//         return 0;
//     }
// }

// function area(l, b) {
//     if (isNaN(l) || isNaN(b)) {
//         throw new Error('Not a number');
//     }
//     return l * b;
// }
// function caller() {
//     try {
//         area(3, 'A');
//     } catch (e) {
//         throw new Error('An error occured while calculating the area');
//     }
// }
// try {
//     console.log(caller());
// } catch (e) {
//     console.log('AEO');
// }

// try {
//     try {
//         throw new Error('err');
//     } catch (ex) {
//         console.log('AEO');
//     }
// } catch (e) {
//     console.log('out');
// }

// try {
//     try {
//         throw new Error('err');
//     } finally {
//         console.log('AEO');
//     }
// } catch (e) {
//     console.log('out');
// }

try {
    try {
        throw new Error('err');
    } catch (e) {
        console.log('inner');
        throw new Error('err');
    } finally {
        console.log('finally');
    }
} catch (e) {
    console.log('outer');
}









