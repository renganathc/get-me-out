import client from "./twilio_config.js";

export const makeCall = async (toPhone) => {
  try {
    const call = await client.calls.create({
      to: toPhone,
      from: process.env.TWILIO_PHONE,
      twiml: "<Response><Pause length='1'/></Response>"
    });

    return call.sid;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
