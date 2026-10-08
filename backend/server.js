const express = require("express");
const cors = require("cors");
require("dotenv").config();

const batches = require("./data/batches");
const QRCode = require("qrcode");
const { provider } = require("./blockchain");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "MEDTRACE Backend is running!"
    });
});

app.get("/api/blockchain", async (req, res) => {
    try {
        const network = await provider.getNetwork();

        res.json({
            connected: true,
            chainId: network.chainId.toString()
        });
    } catch (error) {
        res.status(500).json({
            connected: false,
            error: error.message
        });
    }
});

app.post("/api/batches", (req, res) => {
    const {
        batchId,
        medicineName,
        manufacturer,
        quantity,
        manufacturingDate,
        expiryDate
    } = req.body;

    if (
    !batchId ||
    !medicineName ||
    !manufacturer ||
    quantity === undefined ||
    !manufacturingDate ||
    !expiryDate
) {
    return res.status(400).json({
        success: false,
        message: "All batch details are required"
    });
}

if (Number(quantity) <= 0) {
    return res.status(400).json({
        success: false,
        message: "Quantity must be greater than 0"
    });
}

const manufacturing = new Date(manufacturingDate);
const expiry = new Date(expiryDate);

if (isNaN(manufacturing.getTime()) || isNaN(expiry.getTime())) {
    return res.status(400).json({
        success: false,
        message: "Invalid manufacturing or expiry date"
    });
}

if (manufacturing >= expiry) {
    return res.status(400).json({
        success: false,
        message: "Expiry date must be after manufacturing date"
    });
}

    const existingBatch = batches.find(
        batch => batch.batchId === batchId
    );

    if (existingBatch) {
        return res.status(409).json({
            success: false,
            message: "Batch ID already exists"
        });
    }

    const newBatch = {
    batchId,
    medicineName,
    manufacturer,
    quantity,
    manufacturingDate,
    expiryDate,
    status: "ACTIVE",
    currentOwner: manufacturer,

    history: [
        {
            owner: manufacturer,
            action: "MANUFACTURED",
            timestamp: new Date().toISOString()
        }
    ]
};

    batches.push(newBatch);

    res.status(201).json({
        success: true,
        message: "Batch created successfully",
        batch: newBatch
    });
});
app.get("/api/batches", (req, res) => {
    res.json({
        success: true,
        count: batches.length,
        batches: batches
    });
});
app.get("/api/batches/:batchId", (req, res) => {
    const batch = batches.find(
        batch => batch.batchId === req.params.batchId
    );

    if (!batch) {
        return res.status(404).json({
            success: false,
            message: "Batch not found"
        });
    }

    res.json({
        success: true,
        batch: batch
    });
});

app.get("/api/verify/:batchId", (req, res) => {
    const batch = batches.find(
        batch => batch.batchId === req.params.batchId
    );

    if (!batch) {
        return res.status(404).json({
            success: false,
            verified: false,
            message: "Invalid or unregistered batch"
        });
    }

    const today = new Date();
const expiryDate = new Date(batch.expiryDate);

if (batch.status === "RECALLED") {
    return res.json({
        success: true,
        verified: false,
        status: "RECALLED",
        message: "Batch has been recalled",
        batch: batch
    });
}

if (today > expiryDate) {
    return res.json({
        success: true,
        verified: false,
        status: "EXPIRED",
        message: "Batch has expired",
        batch: batch
    });
}

    res.json({
        success: true,
        verified: true,
        message: "Batch is valid",
        batch: batch
    });
});

app.get("/api/qr/:batchId", async (req, res) => {
    const batch = batches.find(
        batch => batch.batchId === req.params.batchId
    );

    if (!batch) {
        return res.status(404).json({
            success: false,
            message: "Batch not found"
        });
    }

    try {
        const verificationURL =
            `http://localhost:5000/api/verify/${batch.batchId}`;

        const qrCode = await QRCode.toDataURL(verificationURL);

        res.json({
            success: true,
            batchId: batch.batchId,
            verificationURL: verificationURL,
            qrCode: qrCode
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "QR generation failed",
            error: error.message
        });
    }
});


app.post("/api/transfer", (req, res) => {
    const { batchId, from, to } = req.body;

    if (!batchId || !from || !to) {
        return res.status(400).json({
            success: false,
            message: "Batch ID, sender and receiver are required"
        });
    }

    const batch = batches.find(
        batch => batch.batchId === batchId
    );

    if (!batch) {
        return res.status(404).json({
            success: false,
            message: "Batch not found"
        });
    }

    if (batch.currentOwner !== from) {
        return res.status(403).json({
            success: false,
            message: "Sender is not the current owner of this batch"
        });
    }
    if (batch.status === "RECALLED") {
    return res.status(400).json({
        success: false,
        message: "Recalled batches cannot be transferred"
    });
}

const today = new Date();
const expiryDate = new Date(batch.expiryDate);

if (today > expiryDate) {
    return res.status(400).json({
        success: false,
        message: "Expired batches cannot be transferred"
    });
}

    
batch.currentOwner = to;

batch.history.push({
    from: from,
    to: to,
    action: "TRANSFERRED",
    timestamp: new Date().toISOString()
});

res.json({
    success: true,
    message: "Batch transferred successfully",
    batch: batch
 });
});

app.post("/api/receive", (req, res) => {
    const { batchId, receiver } = req.body;

    if (!batchId || !receiver) {
        return res.status(400).json({
            success: false,
            message: "Batch ID and receiver are required"
        });
    }

    const batch = batches.find(
        batch => batch.batchId === batchId
    );

    if (!batch) {
        return res.status(404).json({
            success: false,
            message: "Batch not found"
        });
    }

    if (batch.status === "RECALLED") {
        return res.status(400).json({
            success: false,
            message: "Recalled batches cannot be received"
        });
    }

    if (batch.currentOwner !== receiver) {
        return res.status(403).json({
            success: false,
            message: "Receiver is not the current owner of this batch"
        });
    }

    batch.history.push({
        owner: receiver,
        action: "RECEIVED",
        timestamp: new Date().toISOString()
    });

    res.json({
        success: true,
        message: "Batch received successfully",
        batch: batch
    });
});

app.post("/api/recall", (req, res) => {
    const { batchId } = req.body;

    if (!batchId) {
        return res.status(400).json({
            success: false,
            message: "Batch ID is required"
        });
    }

    const batch = batches.find(
        batch => batch.batchId === batchId
    );

    if (!batch) {
        return res.status(404).json({
            success: false,
            message: "Batch not found"
        });
    }

    batch.status = "RECALLED";

    batch.history.push({
        action: "RECALLED",
        timestamp: new Date().toISOString()
    });

    res.json({
        success: true,
        message: "Batch recalled successfully",
        batch: batch
    });
});

console.log("TRANSFER ROUTE LOADED");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`MEDTRACE backend running on port ${PORT}`);
});