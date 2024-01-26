import express from "express";
import { createClient } from "@supabase/supabase-js";
import morgan from "morgan";
import bodyParser from "body-parser";
const app = express();

// using morgan for logs
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const supabaseUrl = "https://umxmfulboydtfhjhkuwb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVteG1mdWxib3lkdGZoamhrdXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyMzM3MTgsImV4cCI6MjAyMTgwOTcxOH0.1jTjfo-JtZL9ta72QCVTAWL1dXk_-uCMD7X0kbpk1U4";
const supabase = createClient(supabaseUrl, supabaseKey);

//Routes
app.get("/users", async (req, res) => {
  const { data, error } = await supabase.from("users").select();
  res.send(data);
});

app.post("/users", async (req, res) => {
  const { error } = await supabase.from("products").insert({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  if (error) {
    res.send(error);
  }
  res.send("created!!");
});

app.listen(3000, () => {
  console.log("running");
});
