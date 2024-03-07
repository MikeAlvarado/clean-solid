(() => {
  const celciusTemperatures = [33.6, 12.34];

  const serverIpAddress = '123.123.123.123';

  const userList = [
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ];

  const emails = userList.map((user) => user.email);

  const isJumping = false;
  const isRunning = true;
  const hasItems = true;
  const isLoading = false;

  const startTime = new Date().getTime();

  const timeElapsed = new Date().getTime() - startTime;

  // Funciones

  function getBooks() {
    throw new Error('Function not implemented.');
  }

  function getBooksByUrl(book: string) {
    console.log(book);
    throw new Error('Function not implemented.');
  }

  function calculateAreaofSquare(side: number) {
    console.log(side * side);
    throw new Error('Function not implemented.');
  }

  function printJob() {
    throw new Error('Function not implemented.');
  }
})();
