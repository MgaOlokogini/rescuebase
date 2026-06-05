import mongoose from "mongoose";

const LedgerSchema = new mongoose.Schema(
  {
    donationType: { type: String, required: true, enum: ["Cash", "Supplies"] },
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    loggedBy: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Ledger || mongoose.model("Ledger", LedgerSchema);
