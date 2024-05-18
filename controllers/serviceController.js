const Service = require('../models/Student');
const Student = require('../models/Student');
const Connection = require('../models/Connection');
exports.getServicesByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const services = await Service.find({ userId: userId });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Настройка места для сохранения загруженных файлов

// Предполагается, что модель студента находится в файле studentModel.js

exports.createStudent = async (req, res) => {
  try {
    const {
      avatar,
      password,
      name,
      surname,
      fathername,
      direction,
      age,
      grade,
      diploma,
      biography,
      work,
      achievements,
      searchJob,
      skills,
    } = req.body;

    // Создание нового студента
    const student = new Student({
      avatar,
      password,
      name,
      surname,
      fathername,
      direction,
      age,
      grade,
      diploma,
      biography,
      work,
      achievements,
      searchJob,
      skills,
    });

    // Сохранение студента в базе данных
    await student.save();

    res.status(201).json({ message: 'Student created successfully', student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateServiceById = async (req, res) => {
  try {
    const serviceId = req.params.serviceId;
    const updates = req.body;
    const updatedService = await Service.findByIdAndUpdate(serviceId, updates, {
      new: true,
    });

    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res
      .status(200)
      .json({ message: 'Service updated successfully', service: updatedService });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getServicesByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const services = await Service.find({ userId: userId });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteStudentsByIds = async (req, res) => {
  try {
    const { ids } = req.body;
    const deletedStudents = await Student.deleteMany({ _id: { $in: ids } });
    if (deletedStudents.deletedCount === 0) {
      return res.status(404).json({ error: 'Students not found' });
    }
    res.status(200).json({ message: 'Students deleted successfully', deletedStudents });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
