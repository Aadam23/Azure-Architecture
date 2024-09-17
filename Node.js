const { CosmosClient } = require("@azure/cosmos");
const client = new CosmosClient(process.env["COSMOS_DB_CONNECTION_STRING"]);

module.exports = async function (context, req) {
    const { feedback, userId } = req.body;
    
    const database = client.database("feedbackDB");
    const container = database.container("feedbackContainer");
    
    const feedbackData = {
        id: Date.now().toString(),
        userId: userId,
        feedback: feedback,
    };
    
    await container.items.create(feedbackData);

    context.res = {
        status: 200,
        body: { message: "Feedback submitted successfully" }
    };
};
