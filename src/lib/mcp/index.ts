import { defineMcp } from "@lovable.dev/mcp-js";
import getServices from "./tools/get-services";
import getTeam from "./tools/get-team";
import getClinicalCases from "./tools/get-clinical-cases";
import getContactInfo from "./tools/get-contact-info";
import getPracticeInfo from "./tools/get-practice-info";

export default defineMcp({
  name: "brotto-dental-mcp",
  title: "Brotto Dental Practice",
  version: "0.1.0",
  instructions:
    "Public information about Brotto Dental Practice in Milan. Use these tools to answer questions about services, the team, resolved clinical cases, contact information, opening hours, directions, and the practice's history and philosophy.",
  tools: [getServices, getTeam, getClinicalCases, getContactInfo, getPracticeInfo],
});
