const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArticleSchema = new Schema({
    title: String,
    body: String,
    author: String,
},
{
  timestamps:true
});

ArticleSchema.methods.toJSON = function(){
  return {
      _id: this.id,
      title: this.title,
      body: this.body,
      author: this.author,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
  };
};


mongoose.model('Articles', ArticleSchema);
