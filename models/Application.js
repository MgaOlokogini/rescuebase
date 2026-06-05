import mongoose from "mongoose";

const QuizResponsesSchema = new mongoose.Schema({
  livingArrangement: String,
  activityLevel: Number,
  hasOtherPets: Boolean,
  workingHours: Number,
});

const ApplicationSchema = new mongoose.Schema(
  {
    applicantName: { type: String, required: true },
    applicantEmail: { type: String, required: true },
    targetAnimalId: { type: mongoose.Schema.Types.ObjectId, ref: "Animal", required: true },
    quizResponses: QuizResponsesSchema,
    aiTrustScore: { type: Number, required: true },
    riskTier: { type: String, enum: ["Green", "Yellow", "Red"], required: true },
    pipelineStage: {
      type: String,
      enum: ["Applied", "Interviewing", "Home Check", "Approved", "Rejected"],
      default: "Applied",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Application || mongoose.model("Application", ApplicationSchema);
