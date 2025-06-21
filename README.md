# EigenLayer Restaking Info API

This project provides a backend service to aggregate and expose EigenLayer restaking data through a RESTful API.

## 1. Objective
The primary goal is to create a backend service that aggregates and exposes EigenLayer restaking data. This service will provide endpoints for user restaking information, validator metadata, and reward insights, querying on-chain data or subgraphs [10].

## 2. API Endpoints

The API exposes the following information via a REST API with the specified endpoints [7]:

*   **`GET /api/restakers`**: Returns a list of restakers with their restaked amount and target validator.
    *   **User Restaking Info**: User Address, Amount Restaked, Target AVS Validator/Operator Address [6].
*   **`GET /api/validators`**: Returns a list of validators with their detailed statistics.
    *   **Validator Metadata**: Operator Address / ID, Total Delegated Stake, Slash History (timestamp, amount, reason), Validator Status [6].
*   **`GET /api/rewards/:address`**: Returns reward information for a specific wallet address.
    *   **Reward Insights**: Total Restaking Rewards Received, Breakdown Per Validator, Timestamps of Rewards (optional) [7].

## 3. Technology Stack [3]

*   **API Layer**: Node.js with Express.js
*   **Database**: MongoDB (recommended for flexibility)
*   **Data Fetching**: Node.js (with `axios` for Subgraphs/APIs, `web3.js` for on-chain)

## 4. Setup Instructions [2]

### Prerequisites
*   Node.js (LTS recommended)
*   npm (comes with Node.js) or Yarn
*   MongoDB (Community Server or Atlas)

### Installation

1.  **Clone the repository (or create the project structure as described above):**
    ```bash
    git clone <repository_url>
    cd eigenlayer-restaking-api
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add your MongoDB connection string and any RPC URLs/API keys:
    ```dotenv
    MONGO_URI="mongodb://localhost:27017/eigenlayer_restaking_db"
    ETH_RPC_URL="https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"
    # Or your preferred RPC provider (Alchemy, etc.)
    # RATED_API_KEY="YOUR_RATED_NETWORK_API_KEY" # If using Rated Network API
    ```

### Running the API

1.  **Start your MongoDB instance.**
2.  **Run the data fetching script (optional, but recommended to populate initial data):**
    ```bash
    node scripts/fetchData.js
    ```
    *Note: The `fetchData.js` script contains conceptual code for interacting with subgraphs and on-chain data. You will need to implement the actual GraphQL queries and Web3.js calls based on specific EigenLayer subgraph schemas and smart contract ABIs.*
3.  **Start the API server:**
    ```bash
    node server.js
    ```
    The API will be running on `http://localhost:5000`.

## 5. Data Sources Used [1]

*   **EigenLayer Subgraphs (Primary)**: The Graph Protocol is the main source for structured blockchain data. Specific subgraphs indexing EigenLayer restaking, operator, and reward events are queried.
*   **On-chain Data (Web3.js)**: Direct interaction with EigenLayer and Lido smart contracts using `web3.js` for real-time or specific data not available in subgraphs. Required ABIs and contract addresses are to be sourced from official EigenLayer documentation/GitHub and Etherscan.
*   **Rated Network API (Potential Supplement)**: Explored as a valuable source for detailed rewards and validator metrics (`/v1/eigenlayer/rewards/rewards`, `/v1/eigenlayer/rewards/operator`, etc.).

## 6. Assumptions Made [2, 8]

*   **Subgraph Data Completeness**: Reliance on the completeness and accuracy of available EigenLayer subgraphs. Combination of multiple subgraphs or on-chain calls might be necessary if data is missing.
*   **Rate Limits**: Awareness and handling of rate limits when querying public RPCs or third-party APIs.
*   **Data Freshness**: The `fetchData.js` script is intended to be run periodically (e.g., via cron job) to keep the database data fresh.
*   **Large Data Volumes**: Considerations for pagination in API responses and efficient database queries for large datasets.
*   **Slashing Reason**: The reason for slashing might not always be explicitly available in a human-readable format and may need to be inferred or marked as "if available."
*   **Reward Timestamps**: Granular timestamps might lead to large data volumes; aggregation (e.g., daily/weekly) or explicit "if available" notation may be required.
*   **stETH Specific Restaking**: The current API focuses on stETH, but can be generalized to include other Liquid Staking Tokens (LSTs) or native ETH restaking if needed.

---