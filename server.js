
// JIRA Ticket 409
// feat: Let's assume we have a slow function called checkKitchenStock().
//  Rewrite your function block inside server.js so it assigns the result of
//  that awaited function to a variable called itemsLeft.

/////////////////////////////////////////
async function checkInventory(){
    try{
        console.log("Initializing database connection...");
        const itemsLeft = await checkKitchenStock();
        console.log(`Inventory check complete. We have ${itemsLeft} Kotas left.`);
    }catch(error){
        console.log("Something went wrong!")
    }
}