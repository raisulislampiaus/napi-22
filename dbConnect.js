


const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://nploy22:npoly1234@cluster0.n4oqmor.mongodb.net/?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB