import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MeterSchema = new Schema({
    METER_ID: {
        type: String,
        required: 'Enter Meter Id'
    },
    ACCOUNT_ID: {
        type: String,
        required: 'Enter Account ID'
    },
    HCN: {
        type: String,
        required: 'Enter HCN'
    },
    Latitude: {
        type: String,
        required: 'Enter Latitude'
    },
    Longitude: {
        type: String,
        required: 'Enter Longitude'
    },
    comments: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
    // area: {
    //     type: String,
    //     required: 'Enter the area'
    // },
    // governorate: {
    //     type: String,
    //     required: 'Enter the governorate'
    // },
    // district: {
    //     type: String,
    //     required: 'Enter the district'
    // },
    // propertyType: {
    //     type: String,
    //     required: 'Enter the propertyType'
    // },
    // meterType: {
    //     type: String,
    //     required: 'Enter the meter type'
    // },
    // meterSerial: {
    //     type: String,
    //     required: 'Enter the meter serial number'
    // },
    // meterSize: {
    //     type: Number,
    //     required: 'Enter the meter size'
    // },
    // meterPicture: {
    //     data: Buffer,
    //     contentType: String
    // },
    // visitDate: {
    //     type: Date,
    //     required: 'Enter the date'
    // },
});