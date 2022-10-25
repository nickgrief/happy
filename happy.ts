interface Quote {
  q: string;
  a: string;
  h: string;
}

const OFFSET = Number(Deno.args[0]) || 2;

const response = await fetch(
  `https://zenquotes.io/api/random`,
);

const content: Quote[] = await response.json();

const quote = content[0].q;
const author = content[0].a;

const quoteLength = quote.length;
const authorLength = author.length;

const spaceLength = Math.max(quoteLength - authorLength + OFFSET, 0);
const spacing = " ".repeat(spaceLength);

console.log(`"${quote}"\n`);
console.log(spacing + author);
