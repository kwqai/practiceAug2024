// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
  }
  
  console.log(getTime());

  function getCurrentDateTime(): string {
    const currentDate = new Date();
    const date = currentDate.toDateString();
    const time = currentDate.toLocaleTimeString();
    return `${date} ${time}`;
  }
  
  console.log(getCurrentDateTime());
  