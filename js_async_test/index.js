// index.js

// 1. We define an 'async' function because we will be using 'await' inside it
async function getDailyAdvice() {
  const url = "https://api.adviceslip.com/advice";

  try {
    console.log("Connecting to the wisdom server...");

    // 2. Pause execution until the network request completes
    const response = await fetch(url);

    // 3. Pause execution until the incoming raw data is parsed into JSON
    const data = await response.json();

    // 4. Extract the advice string from the object we saw earlier
    const advice = data.slip.advice;

    console.log("\n--- Here is your advice ---");
    console.log()
    console.log(`"${advice}"`);
    console.log("---------------------------\n");

  } catch (error) {
    // If the network is down or the API breaks, the failure is caught here
    console.error("Could not fetch advice:", error.message);
  }
}

// 5. Kick off our async function
getDailyAdvice();
console.log("System initialized. Waiting for network response...");