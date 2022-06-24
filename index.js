const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { db } = require("./configs/firebase");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/settings", async (req, res) => {
  const settingsRef = db.collection("settings");
  try {
    const snapshot = await settingsRef.get();
    const slots = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return res.status(200).json({ data: slots[0] });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.patch("/settings/:id", async (req, res) => {
  const settingsRef = db.collection("settings").doc(req.params.id);
  try {
    const result = await settingsRef.update(req.body);
    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get("/vehicles", async (req, res) => {
  //   const query = db.collection("vehicles");
  //   try {
  //     await query.onSnapshot(
  //       (querySnapshot) => {
  //         const vehicles = querySnapshot.docs.map((doc) => ({
  //           ...doc.data(),
  //           id: doc.id,
  //         }));
  //         return res.status(200).json({ data: vehicles });
  //       },
  //       (err) => {
  //         // console.log(`Encountered error: ${err}`);
  //         return res.status(400).json({ message: err.message });
  //       }
  //     );
  //   } catch (error) {
  //     return res.status(500).json({ message: error.message });
  //   }

  const vehiclesRef = db.collection("vehicles");
  try {
    const snapshot = await vehiclesRef.get();
    const slots = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return res.status(200).json({ data: slots });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post("/vehicles", async (req, res) => {
  try {
    const result = await db.collection("vehicles").add(req.body);
    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.patch("/vehicles/:id", async (req, res) => {
  const veheclesRef = db.collection("vehicles").doc(req.params.id);
  try {
    const result = await veheclesRef.update(req.body);
    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get("/slots", async (req, res) => {
  //   const query = db.collection("slots");
  //   const observer = query.onSnapshot(
  //     (querySnapshot) => {
  //       const slots = querySnapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       return res.status(200).json({ data: slots });
  //     },
  //     (err) => {
  //       return res.status(400).json({ message: err.message });
  //     }
  //   );
  const slotsRef = db.collection("slots");
  try {
    const snapshot = await slotsRef.get();
    const slots = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return res.status(200).json({ data: slots });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post("/slots", async (req, res) => {
  try {
    const result = await db.collection("slots").add(req.body);
    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.patch("/slots/:id", async (req, res) => {
  const slotRef = db.collection("slots").doc(req.params.id);
  try {
    const result = await slotRef.update(req.body);
    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(8000, () => console.log("app running on port 8000"));

module.exports = app;
