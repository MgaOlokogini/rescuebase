import mongoose from "mongoose";

const MedicalEventSchema = new mongoose.Schema({
  eventTitle: { type: String, required: true },
  loggedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ["Completed", "Pending", "Scheduled"], default: "Completed" },
  notes: String,
});

const AnimalSchema = new mongoose.Schema(
  {
    animalId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    intakeDate: { type: Date, default: Date.now },
    animalType: { type: String, required: true, enum: ["Dog", "Cat", "Livestock", "Bird", "Other"] },
    primaryBreed: { type: String, required: true },
    secondaryBreed: { type: String, default: null },
    coatColor: { type: String, required: true },
    ageInYears: { type: Number, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Unknown"] },
    sterilization: { type: String, required: true, enum: ["Fixed", "Intact", "Unknown"] },
    intakeCondition: { type: String, required: true, enum: ["Normal", "Sick", "Injured", "Aggressive", "Nursing"] },
    predictedLOS: { type: Number, default: null },
    adoptionSpeedClass: { type: Number, enum: [0, 1, 2, 3, 4], default: null },
    medicalTimeline: [MedicalEventSchema],
    status: { type: String, enum: ["Intake", "Available", "Adoption Pipeline", "Adopted", "Transferred"], default: "Intake" },
  },
  { timestamps: true }
);

export default mongoose.models.Animal || mongoose.model("Animal", AnimalSchema);
