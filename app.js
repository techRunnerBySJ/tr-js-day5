// Handle errors in JavaScript
try {
    // Code that may throw an error
    throw new Error('Something went wrong!');
  } catch (error) {
    console.error(error.message); // Something went wrong!
  } finally {
    console.log('This will always be executed.');
  }
  