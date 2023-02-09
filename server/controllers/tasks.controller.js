import taskModel from "../model/taskModel.js";

export const getTasks = async (req, res) => {
  try {
    taskModel.find((error, data) => {
      if (error) {
        return error;
      } else {
        res.json(data);
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    taskModel.findById(req.params.id, (error, data) => {
      if (error) {
        return error;
      } else {
        res.json(data);
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    taskModel.create(req.body, (error, data) => {
      if (error) {
        return error;
      } else {
        res.json(data);
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    taskModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return error;
        } else {
          res.json(data);
          console.log("task successfully updated!");
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    taskModel.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return error;
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
