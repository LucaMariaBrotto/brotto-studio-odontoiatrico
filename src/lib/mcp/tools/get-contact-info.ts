import { defineTool } from "@lovable.dev/mcp-js";
import en from "../../../i18n/en";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact information",
  description:
    "Get the address, phone, email, opening hours, and public transport directions for Brotto Dental Practice in Milan.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const c = en.contact;
    const info = {
      hours: {
        days: c.days,
        note: c.byAppointment,
      },
      howToReach: {
        tram: c.tramDesc,
        bus: c.busDesc,
        metro: [c.metroMissori, c.metroDuomo, c.metroCordusio],
      },
      website: "See the site for full address, phone number and email.",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
