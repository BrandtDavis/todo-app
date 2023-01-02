import { Schema, model, models } from 'mongoose';

const testSchema = new Schema({
    name: String,
    numItems: Number,
});


const Test = models.Test || model('Test', testSchema);

export default Test;