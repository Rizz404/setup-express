import express from "express";
import { test } from "@/test/test";
const PORT = process.env.port || 5000;
const app = express();
test();
