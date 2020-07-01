import model from './model';

class Controller {
  constructor() {}

  // Select

  getCrushs() {
    return model.find({});
  }

  select(req, res) {
    this.getCrushs()
      .then(crushs => res.status(200).json({ 'result': crushs }))
      .catch(error => res.status(400).json({ 'result': error }));
  }
  
  // Select One

  getCrushsByID(id) {
    return model.find(id);
  }

  selectOne(req, res) {
    const id = { _id: req.params.id };

    this.getCrushsByID(id)
      .then(crush => res.status(200).json({ 'result': crush }))
      .catch(error => res.status(400).json({ 'result': error }));
  }

  // Insert

  createCrush(data) {
    return model.create(data);
  }

  insert(req, res) {
    const crush = req.body;

    this.createCrush(crush)
      .then(crush => res.status(200).json({ 'result': crush }))
      .catch(error => res.status(400).json({ 'result': error }));
  }

  // Update

  updateCrush(id, data) {
    return model.findOneAndUpdate(id, data);
  }

  update(req, res) {
    const id = { _id: req.params.id };
    const crush = req.body;
    
    this.updateCrush(id, crush)
      .then(crush => res.status(200).json({ 'result': crush }))
      .catch(error => res.status(400).json({ 'result': error }))
  }

  // Delete 

  deleteByID(id) {
    return model.deleteOne(id);
  }

  delete(req, res) {
    const id = { _id: req.params.id };
    
    this.deleteByID(id)
      .then(crush => res.status(200).json({ 'result': crush }))
      .catch(error => res.status(400).json({ 'result': error }))
  }
  
}

export default Controller;