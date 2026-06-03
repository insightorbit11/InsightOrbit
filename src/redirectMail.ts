export const handleEmailRedirect = (provider: string) => {
  const email = "insightorbit11@gmail.com";

  if (provider === "gmail") {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank",
    );
  } else if (provider === "outlook") {
    window.open(
      `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`,
      "_blank",
    );
  }
};
