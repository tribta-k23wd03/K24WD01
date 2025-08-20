export default function Message() {
  const myName: any = undefined;
  if (myName) return <h1>Hello, My name is {myName}</h1>;
  return <h1>Hello, NoOne Here.</h1>;
}
