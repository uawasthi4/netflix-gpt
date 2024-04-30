import { GoogleGenerativeAI } from "@google/generative-ai";
import { GOOGLEAI_KEY } from "./constants";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GOOGLEAI_KEY);

export default genAI;
