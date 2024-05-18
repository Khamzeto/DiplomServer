const Connection = require('../models/Connection');

exports.createConnection = async (req, res) => {
  try {
    const { studentId, fullName, phoneNumber, email } = req.body;

    // Создание нового студента
    const connection = new Connection({
      studentId,
      fullName,
      phoneNumber,
      email,
    });

    // Сохранение студента в базе данных
    await connection.save();

    res.status(201).json({ message: 'Student created successfully', connection });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllConnections = async (req, res) => {
  try {
    // Получение всех записей студентов из базы данных
    const connections = await Connection.find();

    res.status(200).json({ connections });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getConnectionById = async (req, res) => {
  try {
    const userId = req.params.id;
    const connection = await Connection.find({ _id: userId });
    res.status(200).json(connection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteСonnectionsByIds = async (req, res) => {
  try {
    const { ids } = req.body;
    const deletedConnections = await Connection.deleteMany({ _id: { $in: ids } });
    if (deletedConnections.deletedCount === 0) {
      return res.status(404).json({ error: 'Connections not found' });
    }
    res
      .status(200)
      .json({ message: 'Connections deleted successfully', deletedStudents });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
