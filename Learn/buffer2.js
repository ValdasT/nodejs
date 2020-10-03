/**
 * Description: Create first safe and not Buffer empty and with string.
 */
// Creates a zero-filled Buffer of length 10.
const a1 = Buffer.alloc(10);
console.log('a1', a1);
console.log('a1 String', a1.toString());

// Creates a Buffer of length 10, filled with 41 = A.
const a2 = Buffer.alloc(10, 'A');
console.log('a2', a2);
console.log('a2 String', a2.toString());

// Create a Buffer no safe and transform to string.
const a3 = Buffer.allocUnsafe(10);
console.log('a3', a3);
console.log('a3 String', a3.toString());

// Create a Buffer from a string and transform to string.
const f1 = Buffer.from('Hi from NodeJS');
console.log('f1', f1);
console.log('f1 String', f1.toString());



/**
 * Description: Get length of string and buffer string.
 */

// Get length string const and lenght byte of Buffer and compare.
const str = 'Hi from NodeJS';
const str1 = Buffer.from(str);
const str2 = Buffer.byteLength(str);
console.log(`str: ${str}, str length: ${str.length}, str1 lenght: ${str1.length}, str2 byteLength: ${str2}`);


/**
 * Description: Is Buffer and is Encoding functions.
 */

// Get if one const is or not a Buffer.
const str = 'Hi from NodeJS';
const str1 = Buffer.from(str);
console.log(`str isBuffer: ${Buffer.isBuffer(str)} str1 isBuffer: ${Buffer.isBuffer(str1)}`);

// Controler if one encoding is correct for Buffer or not.
const encoding1 = 'utf8';
const encoding2 = 'base64';
const encoding3 = 'other';
console.log(`encoding1 isEncoding: ${Buffer.isEncoding(encoding1)}, encoding2 isEncoding: ${Buffer.isEncoding(encoding2)}, encoding3 isEncoding: ${Buffer.isEncoding(encoding3)}`);


/**
 * Description: Work with compare, concat, equals, includes,
 * indexOf, lastIndexOf, keys and slice functions.
 */

/**
 * 0 if they are equal
 * 1 if buf1 is higher than buf2
 * -1 if buf1 is lower than buf2
 */

/** Define main const */
const str = 'Hi from NodeJS';
const str1 = 'Hi from NodeJS A';
const str2 = 'Hi from NodeJS B';
const str3 = 'Hi from NodeJS 1';

// [comparte] function with two Buffers.
const c1 = Buffer.from(str);
const c2 = Buffer.from(str);
console.log(`Comparte c1 with c2: ${Buffer.compare(c1, c2)}`);
console.log(`Comparte c2 with c1: ${Buffer.compare(c2, c1)}`);

// [comparte] function with two Buffers.
const c5 = Buffer.from(str3);
const c3 = Buffer.from(str1);
const c4 = Buffer.from(str2);
console.log(`Comparte c3 with c4: ${Buffer.compare(c3, c4)}`);
console.log(`Comparte c4 with c3: ${Buffer.compare(c4, c3)}`);
console.log(`Comparte c5 with c3: ${Buffer.compare(c5, c3)}`);

// [comparte] Other form for compare Buffers.
console.log(`Comparte c1 with c2: ${c1.compare(c2)}`);
console.log(`Comparte c3 with c4: ${c3.compare(c4)}`);

// [concat] Concat buffers.
const c6 = Buffer.from(str);
const c7 = Buffer.from(str);
console.log(`Concat equal buffers: ${Buffer.concat([c6, c7])}`);

// [equals] Are equal buffers?.
const e1 = Buffer.from(str);
const e2 = Buffer.from(str);
const e3 = Buffer.from(str1);
console.log(`Equal buffers e1 and e2: ${e1.equals(e2)}`);
console.log(`Equal buffers e2 and e3: ${e2.equals(e3)}`);

// [includes] Includes a buffer other?.
const i1 = Buffer.from(str);
const i2 = Buffer.from(str1);
console.log(`Includes i1 buffer i2?: ${i1.includes(i2)}`);
console.log(`Includes i2 buffer i1?: ${i2.includes(i1)}`);

// [indexOf] indexOf of string into Buffer.
const i3 = Buffer.from(str);
console.log(`indexOf of 'N' string into Buffer: ${i3.indexOf('N')}`);
console.log(`Includes of 'o' string into Buffer: ${i3.indexOf('o')}`);

// [lastIndeOf] lastIndeOf of string into Buffer.
const i4 = Buffer.from(str);
console.log(`indexOf of 'N' string into Buffer: ${i4.lastIndexOf('N')}`);
console.log(`Includes of 'o' string into Buffer: ${i4.lastIndexOf('o')}`);

// [keys] Get keys of Buffer.
const k1 = Buffer.from(str);
console.log(`Keys of k1 Buffer: ${k1.keys()}`);
for (const key of k1.keys()) {
  console.log(`key: ${key}`);
}



/**
 * Description: Work with toString and toJSON functions.
 */


/** Define main const */
const str = 'Hi from NodeJS';

// Convert Buffer to String.
const c1 = Buffer.from(str);
console.log(`Buffer c1 toString: ${c1.toString()}`);

// Convert Buffer to JSON.
const json = c1.toJSON();
console.log(`Buffer c1 toJSON: ${json}`);
for (const key in json) {
  console.log(`key: ${key}, value: ${json[key]}`);
}
