import mongoose from "mongoose";

const Schema = mongoose.Schema;

const slotSchema = new Schema({
  timeslotId: {
    type: String,
    unique: true,
    required: true,
  },
  timeslotName: {
    type: String,
    required: true,
  },
  timeslotDentist: {
    type: Schema.Types.ObjectId,
    ref: "Dentist",
    required: true,
  },
  timeslotClinic: {
    type: Schema.Types.ObjectId,
    ref: "Clinic",
    required: true,
  },
  timeslotPatient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: false,
  },
  timeslotStartTime: {
    type: Date,
    required: true,
  },
  timeslotEndTime: {
    type: Date,
    required: true,
  },
});

const Timeslot = mongoose.model("Timeslot", slotSchema);

export default Timeslot;