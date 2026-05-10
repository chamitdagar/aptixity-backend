const Template = require('../models/Template');

exports.getAllTemplates = async (req, res) => {
  try {
    const templates = await Template.findAll();
    res.json(templates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTemplate = async (req, res) => {
  try {
    const template = await Template.create(req.body);
    res.status(201).json(template);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTemplate = async (req, res) => {
  try {
    const template = await Template.findByPk(req.params.id);
    if (!template) return res.status(404).json({ message: "Template not found" });
    await template.update(req.body);
    res.json(template);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTemplate = async (req, res) => {
  try {
    await Template.destroy({ where: { id: req.params.id } });
    res.json({ message: "Template deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.incrementUsage = async (req, res) => {
  try {
    const template = await Template.findByPk(req.params.id);
    if (!template) return res.status(404).json({ message: "Template not found" });
    template.usageCount += 1;
    await template.save();
    res.json(template);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
