import mongoose from 'mongoose';
import { MeterSchema } from '../models/crmModel';

const Meter = mongoose.model('Meter', MeterSchema);
mongoose.set('useFindAndModify', false);

export const getMeters = (req, res) => {
    Meter.find({}, (err, Meter) => {
        if (err) {
            res.send(err);
        }
        res.json(Meter);
    });
};

export const getMeterWithID = (req, res) => {
    Meter.find({ "METER_ID": req.params.meterId }, (err, Meter) => {
        if (err) {
            res.send(err);
        }
        res.json(Meter);
    });
};

export const addNewMeter = (req, res) => {
    let newMeter = new Meter(req.body);
    newMeter.save((err, Meter) => {
        if (err) {
            res.send(err);
        }
        res.json(Meter);
    });
};

export const updateMeter = (req, res) => {
    Meter.findOneAndUpdate({ "METER_ID": req.params.meterId }, req.body, { new: true }, (err, Meter) => {
        if (err) {
            res.send(err);
        }
        res.json(Meter);
    })
};


export const deleteMeter = (req, res) => {
    Meter.deleteOne({ "METER_ID": req.params.meterId }, (err, Meter) => {
        if (err) {
            res.send(err);
        }
        res.json(Meter);
    })
}
