import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import en from "../../../i18n/en";

export default defineTool({
  name: "get_services",
  title: "Get dental services",
  description:
    "List all dental services offered by Brotto Dental Practice with a short description for each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const s = en.services;
    const services = [
      { key: "hygiene", name: s.hygiene, description: s.hygieneDesc },
      { key: "orthodontics", name: s.orthodontics, description: s.orthodonticsDesc },
      { key: "aesthetics", name: s.aesthetics, description: s.aestheticsDesc },
      { key: "conservative", name: s.conservative, description: s.conservativeDesc },
      { key: "implantology", name: s.implantology, description: s.implantologyDesc },
      { key: "periodontics", name: s.periodontics, description: s.periodonticsDesc },
      { key: "prosthetics", name: s.prosthetics, description: s.prostheticsDesc },
      { key: "endodontics", name: s.endodontics, description: s.endodonticsDesc },
      { key: "pedodontics", name: s.pedodontics, description: s.pedodonticsDesc },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});
